# Claude Code Adapter Pack

This directory packages **Intrinsic Affect for AI** for Claude Code.

It follows Claude Code's official extension surfaces:

- `CLAUDE.md` for persistent project instructions
- `.claude-plugin/plugin.json` for plugin metadata
- `skills/*/SKILL.md` for native skills
- `agents/*.md` for specialized subagents

## Included Files

- `CLAUDE.md`
  A concise project memory pack that explains the core Intrinsic Affect model to Claude Code.
- `.claude-plugin/plugin.json`
  A minimal plugin manifest for metadata and component discovery.
- `skills/intrinsic-affect-ai/SKILL.md`
  A Claude-native skill adapter for affective state handling.
- `agents/intrinsic-affect-policy.md`
  A specialized subagent focused on translating affective state into response policy.

## How To Use

### Option 1: As Project Memory

Copy `CLAUDE.md` into the root of a target project or into `./.claude/CLAUDE.md`.

Best when you want Intrinsic Affect to guide Claude broadly across the whole project.

### Option 2: As a Plugin

Install or symlink this directory as a Claude Code plugin.

Best when you want a reusable adapter with skills and agents that Claude can invoke directly.

### Option 3: As a Skill Source

Copy `skills/intrinsic-affect-ai/` into a Claude Code plugin's `skills/` directory.

Best when you only want the skill behavior without the rest of the adapter pack.

## Design Goal

This adapter is intentionally thin.

The canonical theory and state model remain in the repository root:

- [README.md](../../README.md)
- [SKILL.md](../../SKILL.md)
- [Paper-54 Bio-Emotions.md](../../Paper-54%20Bio-Emotions.md)
- [论文-54种生物情绪.md](../../%E8%AE%BA%E6%96%87-54%E7%A7%8D%E7%94%9F%E7%89%A9%E6%83%85%E7%BB%AA.md)

The Claude adapter should translate the core model into Claude-native extension surfaces, not redefine the theory.
