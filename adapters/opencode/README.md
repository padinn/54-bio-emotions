# OpenCode Adapter Pack

This directory packages **Intrinsic Affect for AI** for OpenCode.

It follows OpenCode's official skill system:

- `.opencode/skills/<name>/SKILL.md`
- `.claude/skills/<name>/SKILL.md`
- `.agents/skills/<name>/SKILL.md`

OpenCode can discover all three layouts, so this adapter is designed to be portable across OpenCode-native, Claude-compatible, and agent-compatible locations.

## Included Files

- `.opencode/skills/intrinsic-affect-ai/SKILL.md`
  The native OpenCode skill definition.
- `.claude/skills/intrinsic-affect-ai/SKILL.md`
  A Claude-compatible mirror for mixed environments.
- `.agents/skills/intrinsic-affect-ai/SKILL.md`
  An agent-compatible mirror for toolchains that reuse the `.agents` layout.

## How To Use

### Option 1: Native OpenCode Install

Copy `.opencode/skills/intrinsic-affect-ai/` into the root of a project using OpenCode.

### Option 2: Global Install

Copy the skill to:

- `~/.config/opencode/skills/intrinsic-affect-ai/`

### Option 3: Shared Multi-Agent Layout

If you want one repository to work across OpenCode and other agent systems, use the `.claude/skills/` or `.agents/skills/` mirrors.

## Design Goal

This adapter is intentionally thin. It should mirror the canonical Intrinsic Affect model from the repository root rather than fork it.

Canonical references:

- [README.md](../../README.md)
- [SKILL.md](../../SKILL.md)
- [Paper-54 Bio-Emotions.md](../../Paper-54%20Bio-Emotions.md)
- [论文-54种生物情绪.md](../../%E8%AE%BA%E6%96%87-54%E7%A7%8D%E7%94%9F%E7%89%A9%E6%83%85%E7%BB%AA.md)
