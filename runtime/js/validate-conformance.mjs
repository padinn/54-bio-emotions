import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, "../..")
const vectorsPath = path.join(rootDir, "references", "conformance-vectors.json")

const DEFAULT_COEFFICIENTS = {
  axisDecay: 0.72,
  confidenceDecay: 0.78,
  frictionDecay: 0.82,
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function normalizeAxis(value) {
  return clamp((value + 1) / 2, 0, 1)
}

function blendAxis(previous, delta, decay) {
  return clamp(decay * previous + (1 - decay) * delta, -1, 1)
}

function blendScalar01(previous, signal, decay) {
  return clamp(decay * previous + (1 - decay) * signal, 0, 1)
}

function blendAssistantState(input, coefficients = DEFAULT_COEFFICIENTS) {
  const { user_state, assistant_state, task_signal, epistemic_signal, relational_signal } = input
  const { axisDecay, confidenceDecay, frictionDecay } = coefficients

  const safetyDelta =
    0.3 * user_state.safety +
    0.2 * task_signal.progress -
    0.35 * task_signal.blockage +
    0.25 * epistemic_signal.certainty +
    0.2 * relational_signal.trust

  const urgencyDelta =
    0.35 * user_state.urgency +
    0.3 * task_signal.blockage -
    0.15 * task_signal.progress +
    0.1 * epistemic_signal.ambiguity +
    0.1 * relational_signal.hostility

  const needDelta =
    0.35 * user_state.need +
    0.2 * relational_signal.warmth +
    0.15 * relational_signal.collaboration -
    0.1 * relational_signal.hostility

  const directionDelta =
    0.4 * user_state.direction +
    0.2 * relational_signal.warmth +
    0.15 * relational_signal.hostility

  const confidenceSignal =
    0.3 * epistemic_signal.certainty +
    0.2 * epistemic_signal.evidence +
    0.2 * task_signal.progress +
    0.15 * relational_signal.collaboration +
    0.15 * normalizeAxis(relational_signal.trust) -
    0.2 * task_signal.blockage -
    0.15 * epistemic_signal.ambiguity

  const frictionSignal =
    0.35 * task_signal.blockage +
    0.2 * task_signal.failure +
    0.15 * epistemic_signal.ambiguity +
    0.15 * relational_signal.hostility -
    0.15 * task_signal.progress -
    0.1 * task_signal.success

  return {
    safety: blendAxis(assistant_state.safety, safetyDelta, axisDecay),
    urgency: blendAxis(assistant_state.urgency, urgencyDelta, axisDecay),
    need: blendAxis(assistant_state.need, needDelta, axisDecay),
    direction: blendAxis(assistant_state.direction, directionDelta, axisDecay),
    confidence: blendScalar01(assistant_state.confidence, confidenceSignal, confidenceDecay),
    friction: blendScalar01(assistant_state.friction, frictionSignal, frictionDecay),
  }
}

function derivePolicyState(assistantState) {
  const safety = normalizeAxis(assistantState.safety)
  const urgency = normalizeAxis(assistantState.urgency)
  const need = normalizeAxis(assistantState.need)
  const direction = normalizeAxis(assistantState.direction)
  const confidence = assistantState.confidence
  const friction = assistantState.friction

  return {
    directness: clamp(
      0.4 * urgency + 0.25 * confidence + 0.15 * direction + 0.1 * (1 - need) + 0.1 * (1 - friction),
      0,
      1
    ),
    structure: clamp(
      0.3 * friction + 0.25 * (1 - safety) + 0.2 * urgency + 0.25 * (1 - confidence),
      0,
      1
    ),
    reassurance: clamp(
      0.35 * need + 0.3 * (1 - safety) + 0.2 * (1 - friction) + 0.15 * (1 - urgency),
      0,
      1
    ),
    caution: clamp(
      0.35 * (1 - safety) + 0.3 * friction + 0.2 * (1 - confidence) + 0.15 * urgency,
      0,
      1
    ),
    initiative: clamp(
      0.35 * confidence + 0.3 * urgency + 0.2 * safety + 0.15 * (1 - friction),
      0,
      1
    ),
  }
}

function updateIntrinsicAffect(input) {
  const assistantState = blendAssistantState(input)
  const policyState = derivePolicyState(assistantState)
  return { assistantState, policyState }
}

function compareObjects(actual, expected, tolerance, prefix = "") {
  const mismatches = []

  for (const [key, expectedValue] of Object.entries(expected)) {
    const pathLabel = prefix ? `${prefix}.${key}` : key
    const actualValue = actual[key]

    if (typeof expectedValue === "number") {
      const delta = Math.abs(actualValue - expectedValue)
      if (delta > tolerance) {
        mismatches.push(
          `${pathLabel}: expected ${expectedValue.toFixed(4)}, got ${actualValue.toFixed(4)} (delta ${delta.toFixed(6)})`
        )
      }
      continue
    }

    mismatches.push(...compareObjects(actualValue, expectedValue, tolerance, pathLabel))
  }

  return mismatches
}

function main() {
  const raw = fs.readFileSync(vectorsPath, "utf8")
  const vectors = JSON.parse(raw)
  const tolerance = vectors.tolerance ?? 0.0001
  let failed = 0

  console.log(`Intrinsic Affect conformance validator`)
  console.log(`Vectors: ${path.relative(rootDir, vectorsPath)}`)
  console.log(`Cases: ${vectors.cases.length}`)
  console.log(`Tolerance: ${tolerance}`)

  for (const testCase of vectors.cases) {
    const result = updateIntrinsicAffect(testCase.input)
    const mismatches = [
      ...compareObjects(result.assistantState, testCase.expected.assistant_state, tolerance, "assistant_state"),
      ...compareObjects(result.policyState, testCase.expected.policy_state, tolerance, "policy_state"),
    ]

    if (mismatches.length === 0) {
      console.log(`PASS ${testCase.id}`)
      continue
    }

    failed += 1
    console.log(`FAIL ${testCase.id}`)
    for (const mismatch of mismatches) {
      console.log(`  - ${mismatch}`)
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} case(s) failed.`)
    process.exit(1)
  }

  console.log(`\nAll conformance vectors passed.`)
}

main()
