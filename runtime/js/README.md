# JavaScript Conformance Validator

This directory contains a dependency-free Node.js validator for the Intrinsic Affect reference vectors.

## Included

- `validate-conformance.mjs`
  Runs the official conformance vectors against the reference update logic and reports pass/fail.

## Usage

From the repository root:

```bash
node runtime/js/validate-conformance.mjs
```

## Purpose

This validator exists to make the conformance vectors executable rather than purely documentary.

It provides a simple answer to:

**Does this implementation behave closely enough to the reference model to be considered compatible?**
