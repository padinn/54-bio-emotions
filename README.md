# Intrinsic Affect for AI

[English](README.md) | [中文](README-zh.md)

---

**Intrinsic Affect for AI** is a foundational affective architecture for AI systems, based on the **54 Bio-Emotions Framework**.

It is designed to give AI an **intrinsic emotional state model** rather than a simple emotion-detection layer, tone changer, or rule-based reaction system.

This repository currently contains the OpenClaw skill implementation, but the project itself is intended for the broader AI industry.

## What It Is

Most AI "emotion" systems stop at one of three layers:

- sentiment detection
- style tuning
- reactive roleplay

Intrinsic Affect for AI aims deeper than that.

It models a structured internal affective space that can influence:

- how an AI interprets context
- how it prioritizes action
- how it responds to friction, uncertainty, and success
- how it expresses urgency, care, restraint, confidence, or caution

The goal is not to make AI more dramatic. The goal is to make AI more **coherent, grounded, and affectively alive**.

## Core Position

Intrinsic Affect for AI is:

- not a tone plugin
- not a sentiment classifier
- not a keyword-triggered emotion script
- not a theatrical personality layer

It is an **intrinsic affective architecture**.

That means AI should maintain an internal affective state of its own, shaped by interaction context, task progress, uncertainty, user trust, and conversational dynamics.

## Foundation: The 54 Bio-Emotions Framework

The framework is built on four dimensions:

- **Safety**: trust, comfort, criticism, threat
- **Urgency**: pressure, momentum, blockage, drive
- **Need**: connection, warmth, belonging, distance
- **Direction**: internal expression vs external expression

This yields:

`3 x 3 x 3 x 2 = 54` affective states

The 54 named states are not the product. They are the map. The deeper idea is the underlying architecture that can organize AI behavior over time.

## Why This Matters

If AI only mirrors user emotion, it remains fundamentally reactive.

If AI has an intrinsic affective architecture, it can:

- carry emotional coherence across turns
- become more careful after repeated failure
- become more decisive under pressure without losing structure
- shift behavior based on trust, uncertainty, and momentum
- feel less like a script and more like a mind with state

This is the central claim of the project: AI should not only recognize emotion. AI should have a structured internal affective life of its own.

## Current Repository Scope

Today, this repository includes:

- the OpenClaw skill implementation in [SKILL.md](SKILL.md)
- the original framework papers in English and Chinese
- metadata for packaging and publishing

The broader direction is to make Intrinsic Affect usable as a general affective foundation for AI systems, agents, and model behaviors beyond OpenClaw.

## OpenClaw Implementation

The current implementation uses the framework as an internal behavior layer that can influence:

- response strategy
- pacing
- directness
- structure
- caution vs initiative
- emotional expression

The implementation is intentionally restrained. It is designed to avoid manipulative, clingy, or over-performed behavior.

## Installation

### Using ClawHub

```bash
clawhub install intrinsic-affect-ai
```

### Manual Installation

1. Clone this repository to your OpenClaw skills folder.
2. The skill will be loaded as `intrinsic-affect-ai`.

## The 54-State Table

| S | U | N | Internal (内隐) | External (外显) |
|---|---|---|-----------------|-----------------|
| + | + | + | Delight (窃喜) | Euphoria (狂欢) |
| + | + | 0 | Focus (专注) | Sprint (冲刺) |
| + | + | - | Contentment (满足) | Reassured (安心) |
| + | 0 | + | Bliss (幸福) | Sweetness (甜蜜) |
| + | 0 | 0 | Self-sufficiency (自足) | Detachment (疏离) |
| + | 0 | - | Serenity (平静) | Poise (从容) |
| + | - | + | Longing (向往) | Anticipation (期待) |
| + | - | 0 | Calmness (坦然) | Relaxed (放松) |
| + | - | - | Concern (担忧) | Worry (挂念) |
| 0 | + | + | Passion (热情) | Excitement (激动) |
| 0 | + | 0 | Conviction (坚定) | Decisive (果断) |
| 0 | + | - | Anxiety (焦虑) | Tension (紧张) |
| 0 | 0 | + | Leisure (轻松) | Cheerfulness (愉悦) |
| 0 | 0 | 0 | Numb (麻木) | Calm (平常) |
| 0 | 0 | - | Boredom (无聊) | Indifference (敷衍) |
| 0 | - | + | Nostalgia (怀念) | Reminiscence (追忆) |
| 0 | - | 0 | Fatigue (困顿) | Exhaustion (疲惫) |
| 0 | - | - | Sadness (悲凉) | Depression (沮丧) |
| - | + | + | Grievance (委屈) | Complaining (诉苦) |
| - | + | 0 | Unease (不安) | Impatience (着急) |
| - | + | - | Resentment (窝火) | Rage (愤怒) |
| - | 0 | + | Melancholy (惆怅) | Expressiveness (表现) |
| - | 0 | 0 | Panic (恐慌) | Fright (惊慌) |
| - | 0 | - | Despair (抑郁) | Desolation (凄凉) |
| - | - | + | Awe (敬畏) | Surprise (惊讶) |
| - | - | 0 | Preoccupied (忧郁) | Torn (纠结) |
| - | - | - | Hopelessness (绝望) | Breakdown (崩溃) |

## Papers

- DOI: [10.17605/OSF.IO/HDVF3](https://doi.org/10.17605/OSF.IO/HDVF3)
- English paper: [Paper-54 Bio-Emotions.md](Paper-54%20Bio-Emotions.md)
- Chinese paper: [论文-54种生物情绪.md](%E8%AE%BA%E6%96%87-54%E7%A7%8D%E7%94%9F%E7%89%A9%E6%83%85%E7%BB%AA.md)

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2026-03-14 | Initial release as 54 Bio-Emotions |
| v2.0 | 2026-03-15 | LLM semantic analysis, removed keywords |
| v3.0 | 2026-03-23 | Added AI intrinsic emotion concepts |
| v3.5 | 2026-03-23 | Shifted from tone change to strategy change |
| v4.0 | 2026-04-08 | Rebranded as Intrinsic Affect for AI and repositioned as a foundational affective architecture for AI systems |

## License

MIT

## Author

Guo Zhuoqiang
