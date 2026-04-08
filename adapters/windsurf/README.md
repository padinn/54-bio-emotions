# Windsurf Adapter Pack

This directory packages **Intrinsic Affect for AI** for Windsurf Cascade.

It follows Windsurf's official customization surfaces:

- `.windsurf/skills/<name>/SKILL.md`
- `.windsurf/rules/*.md`
- `AGENTS.md`

Windsurf treats these as complementary:

- **Skills** for complex, multi-step behavior with supporting files
- **Rules** for behavioral guidance with controllable activation
- **AGENTS.md** for location-scoped, always-on or directory-scoped instructions

## Included Files

- `.windsurf/skills/intrinsic-affect-ai/SKILL.md`
  The native Windsurf skill definition.
- `.windsurf/rules/intrinsic-affect-ai.md`
  A model-decision rule that lets Cascade load the full affective behavior guidance on demand.
- `AGENTS.md`
  A root-level always-on instruction layer for durable affective behavior constraints.

## How To Use

### Option 1: Full Adapter

Copy this adapter into a target repository root and keep all three layers:

- `AGENTS.md`
- `.windsurf/rules/intrinsic-affect-ai.md`
- `.windsurf/skills/intrinsic-affect-ai/SKILL.md`

This gives Windsurf a durable baseline plus a richer skill it can invoke when needed.

### Option 2: Skill-Only

Copy only:

- `.windsurf/skills/intrinsic-affect-ai/`

Best when you want a lightweight, dynamically invoked skill.

### Option 3: Rule + AGENTS Only

Copy:

- `AGENTS.md`
- `.windsurf/rules/intrinsic-affect-ai.md`

Best when you want affective behavior to act more like a persistent operating layer than an invoked workflow.

## Design Goal

This adapter is intentionally thin. The canonical theory, state model, and update logic remain in the repository root:

- [README.md](../../README.md)
- [SKILL.md](../../SKILL.md)
- [Paper-54 Bio-Emotions.md](../../Paper-54%20Bio-Emotions.md)
- [Paper-54 Bio-Emotions-zh.md](../../Paper-54%20Bio-Emotions-zh.md)
- [Paper-54 Bio-Emotions-ja.md](../../Paper-54%20Bio-Emotions-ja.md)
