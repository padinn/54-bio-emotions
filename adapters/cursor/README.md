# Cursor Adapter Pack

This directory packages **Intrinsic Affect for AI** for Cursor.

It follows Cursor's official instruction surfaces:

- `.cursor/rules/*.mdc` for project rules
- `AGENTS.md` for simple project-wide agent instructions
- `CLAUDE.md` for Claude-compatible instructions that Cursor CLI also reads

## Included Files

- `.cursor/rules/intrinsic-affect-ai.mdc`
  A Cursor project rule in MDC format for on-demand affective guidance.
- `AGENTS.md`
  A simple project-wide instruction layer for persistent affective behavior.
- `CLAUDE.md`
  A Claude-compatible instruction file that Cursor CLI can also read alongside rules.

## How To Use

### Option 1: Full Adapter

Copy all three into a target project root:

- `.cursor/rules/intrinsic-affect-ai.mdc`
- `AGENTS.md`
- `CLAUDE.md`

This gives Cursor a durable baseline plus a reusable rule that Agent can include when relevant.

### Option 2: Rules-Only

Copy only:

- `.cursor/rules/intrinsic-affect-ai.mdc`

Best when you want Intrinsic Affect as a structured Cursor rule without adding root markdown instruction files.

### Option 3: AGENTS-Only

Copy only:

- `AGENTS.md`

Best when you want a very lightweight, always-on project instruction layer.

## Design Goal

This adapter is intentionally thin. The canonical theory, state model, and update logic remain in the repository root:

- [README.md](../../README.md)
- [SKILL.md](../../SKILL.md)
- [Paper-54 Bio-Emotions.md](../../Paper-54%20Bio-Emotions.md)
- [Paper-54 Bio-Emotions-zh.md](../../Paper-54%20Bio-Emotions-zh.md)
- [Paper-54 Bio-Emotions-ja.md](../../Paper-54%20Bio-Emotions-ja.md)
