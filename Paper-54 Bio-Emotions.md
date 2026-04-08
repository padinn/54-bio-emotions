# 54 Bio-Emotions: A Biologically Inspired Generative Framework for Human and Artificial Affective States

**Author:** Guo Zhuoqiang

**Date:** March 14, 2026

---

## Abstract

This paper proposes the **54 Bio-Emotions Framework**, a biologically inspired generative model for organizing affective states. Instead of claiming that human emotion can be exhaustively reduced to a small set of fixed labels, the framework introduces three interpretable axes inspired by neurochemical systems: **Safety**, **Urgency**, and **Need**. Each axis is discretized into three levels (-1, 0, +1), producing 27 state combinations. A fourth dimension, **Expression Direction**, distinguishes between **internalized** and **externalized** realization of the same state, yielding 54 named affective configurations.

The goal of the framework is not to provide a direct biochemical assay of emotion, but to offer a structured state space that connects biological intuition, psychological interpretation, and computational modeling. In that sense, the framework can function both as a human emotion map and as a design substrate for AI systems that require persistent, updateable affective state representations. The paper outlines the theoretical rationale, naming system, operationalization strategy, limitations, and applications in psychology, human-computer interaction, and AI.

---

## 1. Introduction

Human emotion has been studied through categorical theories, dimensional models, clinical observation, and neuroscience. Yet these traditions often remain disconnected: some provide compact taxonomies, some provide continuous affective spaces, and others provide biological correlates without a clear state-model usable in practice.

This paper introduces the **54 Bio-Emotions Framework** as a **candidate generative state model** rather than as a final or exhaustive theory of emotion. The central proposal is that many emotionally meaningful states can be organized within a small affective space defined by three biologically inspired variables:

1. **Safety**: an affective sense of security, stability, and threat regulation
2. **Urgency**: an affective sense of activation, drive, and pressure toward action
3. **Need**: an affective sense of connection, attachment, and motivational lack

These variables are inspired by broad neurochemical and neurobehavioral patterns associated with serotonin, dopamine, and oxytocin systems, respectively. They are not treated here as direct hormone measurements in ordinary real-world settings. Rather, they are treated as **latent affective variables** that can be interpreted psychologically and operationalized behaviorally.

To convert this state space into a practical classification system, each axis is discretized into three levels: low (-1), baseline (0), and high (+1). This produces 27 core states. A fourth dimension, **Expression Direction**, distinguishes whether the state is predominantly **internalized** or **externalized**, producing 54 named configurations in total.

The framework is intended to do three things:

- provide a biologically inspired but computationally tractable state space
- connect emotional naming to a generative structure rather than a flat list
- support AI systems that need intrinsic affective state modeling, not only sentiment recognition

---

## 2. Literature Review

### 2.1 Categorical and Dimensional Models of Emotion

Emotion theory has long oscillated between **discrete-category approaches** and **dimensional approaches**.

- Ekman argued for a small number of basic emotions with recognizable cross-cultural expression patterns (Ekman, 1992).
- Plutchik proposed a structured wheel of emotions with gradients and oppositional relationships (Plutchik, 1980).
- Mehrabian and Russell offered a dimensional model based on Pleasure, Arousal, and Dominance (Mehrabian & Russell, 1974).
- Russell later developed the notion of **core affect**, emphasizing valence and arousal as foundational dimensions of emotional life (Russell, 2003).

These models are powerful, but each leaves an opening for further work. Category models often struggle to define boundaries cleanly, while dimensional models can be elegant but harder to map onto everyday named states.

### 2.2 Biological and Affective Foundations

Affective neuroscience has increasingly linked emotional life to distributed neural and neurochemical systems rather than to isolated labels. Panksepp's work on primary-process affective systems helped frame emotion as grounded in evolved motivational circuitry (Panksepp, 1998).

The present framework draws inspiration from three broad biological associations:

- **Serotonergic regulation** is often implicated in aversive sensitivity, behavioral inhibition, mood regulation, and social valuation (Crockett, 2009; Robinson, Cools, Crockett, & Sahakian, 2010).
- **Dopaminergic systems** are deeply implicated in motivation, reward anticipation, and incentive salience (Berridge & Robinson, 1998).
- **Oxytocin-related systems** are strongly linked to attachment, bonding, trust, and affiliative behavior (Carter, 1998; Young & Wang, 2004).

These associations motivate the axes used in this framework, but they do **not** justify a one-to-one claim that each named emotion is caused by a single hormone level. The framework is therefore best understood as **biologically inspired**, not biochemically literal.

### 2.3 Expression and the Problem of Emotional Naming

One of the most persistent problems in emotion theory is that **felt state** and **visible expression** do not always align. A person may internally experience fear while outwardly appearing composed; a system may internally accumulate strain while externally producing structured language.

For that reason, this paper distinguishes **internalized** and **externalized** realization of an affective state. This is not intended as a personality-typing claim about introversion or extraversion. It is a distinction between:

- the state as primarily held within the system
- the state as primarily expressed through action, behavior, language, or visible style

This distinction becomes especially important for AI systems, where internal state and outward wording may diverge by design.

### 2.4 A Note on Competing Theories

Constructionist and anti-essentialist accounts of emotion caution against treating folk emotion words as perfectly discrete natural kinds (Barrett, 2006). That critique is important here. The 54 Bio-Emotions Framework does **not** claim that ordinary language contains exactly 54 universally bounded emotional kinds. Rather, it claims that a compact state space can generate a useful family of interpretable affective configurations, and that named labels can serve as approximate glosses over that space.

---

## 3. Theoretical Framework

### 3.1 The Three-Axis Model

The framework is organized around three axes:

| Biological Inspiration | Affective Axis | Interpretation When High | Interpretation When Low |
|------------------------|----------------|---------------------------|--------------------------|
| Serotonin-related regulation | Safety | Secure, stable, trusting | Threatened, unsafe, anxious |
| Dopamine-related motivation | Urgency | Activated, driven, effortful | Slowed, withdrawn, low-drive |
| Oxytocin-related bonding | Need | Connected, attached, affiliative | Detached, cold, disconnected |

These are best treated as **affective control variables** rather than raw biomarkers.

### 3.2 Three-Level Discretization

Each axis is discretized into:

- **+1**: elevated expression of the axis
- **0**: baseline or balanced expression
- **-1**: reduced or negatively valenced expression of the axis

This produces:

```text
3 x 3 x 3 = 27
```

core state configurations.

### 3.3 Expression Direction

Each of the 27 states can be realized in two directions:

- **Internalized**: the state is primarily held internally
- **Externalized**: the state is primarily expressed outwardly

This produces:

```text
27 x 2 = 54
```

named configurations.

### 3.4 Mathematical Representation

The framework can be written as:

```text
E = f(S, U, N, X)

Where:
- S = Safety in {-1, 0, +1}
- U = Urgency in {-1, 0, +1}
- N = Need in {-1, 0, +1}
- X = Expression Direction in {Internalized, Externalized}

Total configurations = 3 x 3 x 3 x 2 = 54
```

### 3.5 Operationalization and Measurement

This is the most important interpretive constraint of the framework.

The axes in this paper should be treated as **latent state variables** that can be estimated at multiple layers:

1. **Biological layer**
   In laboratory settings, relevant neurochemical, endocrine, autonomic, or neural measures may be studied as possible correlates.

2. **Psychological layer**
   Self-report, diary studies, or structured interviews may estimate felt safety, felt urgency, and felt need.

3. **Behavioral layer**
   Language markers, reaction timing, interruption patterns, escalation, help-seeking, avoidance, affiliative language, and social response patterns may provide observable proxies.

4. **Computational layer**
   In AI systems, the axes can be modeled as persistent internal variables updated from interaction history, task success and failure, uncertainty, and relational signals.

Accordingly, the framework does **not** require direct hormone measurement to be useful. Its practical claim is that these axes can serve as an interpretable state-space model even when estimated indirectly.

---

## 4. The 54 Bio-Emotions

### 4.1 Classification Table

| S | U | N | Direction | Label | Chinese |
|---|---|---|-----------|-------|---------|
| + | + | + | Internalized | Delight | 窃喜 |
| + | + | + | Externalized | Euphoria | 狂欢 |
| + | + | 0 | Internalized | Contentment | 满足 |
| + | + | 0 | Externalized | Reassured | 安心 |
| + | 0 | + | Internalized | Bliss | 幸福 |
| + | 0 | + | Externalized | Sweetness | 甜蜜 |
| + | 0 | 0 | Internalized | Serenity | 平静 |
| + | 0 | 0 | Externalized | Poise | 从容 |
| + | - | + | Internalized | Longing | 向往 |
| + | - | + | Externalized | Anticipation | 期待 |
| + | - | 0 | Internalized | Calmness | 坦然 |
| + | - | 0 | Externalized | Relaxed | 放松 |
| + | - | - | Internalized | Concern | 担忧 |
| + | - | - | Externalized | Worry | 挂念 |
| 0 | + | + | Internalized | Passion | 热情 |
| 0 | + | + | Externalized | Excitement | 激动 |
| 0 | + | 0 | Internalized | Conviction | 坚定 |
| 0 | + | 0 | Externalized | Resolve | 决意 |
| 0 | + | - | Internalized | Anxiety | 焦虑 |
| 0 | + | - | Externalized | Tension | 紧张 |
| 0 | 0 | + | Internalized | Leisure | 轻松 |
| 0 | 0 | + | Externalized | Cheerfulness | 愉悦 |
| 0 | 0 | 0 | Internalized | Neutrality | 中性 |
| 0 | 0 | 0 | Externalized | Composure | 平稳 |
| 0 | 0 | - | Internalized | Boredom | 无聊 |
| 0 | 0 | - | Externalized | Indifference | 冷淡 |
| 0 | - | + | Internalized | Nostalgia | 怀念 |
| 0 | - | + | Externalized | Reminiscence | 追忆 |
| 0 | - | 0 | Internalized | Fatigue | 困顿 |
| 0 | - | 0 | Externalized | Exhaustion | 疲惫 |
| 0 | - | - | Internalized | Sadness | 悲凉 |
| 0 | - | - | Externalized | Dejection | 沮丧 |
| - | + | + | Internalized | Grievance | 委屈 |
| - | + | + | Externalized | Protest | 怨诉 |
| - | + | 0 | Internalized | Unease | 不安 |
| - | + | 0 | Externalized | Impatience | 着急 |
| - | + | - | Internalized | Resentment | 窝火 |
| - | + | - | Externalized | Rage | 愤怒 |
| - | 0 | + | Internalized | Melancholy | 惆怅 |
| - | 0 | + | Externalized | Vulnerability | 脆弱 |
| - | 0 | 0 | Internalized | Panic | 恐慌 |
| - | 0 | 0 | Externalized | Fright | 惊慌 |
| - | 0 | - | Internalized | Despair | 抑郁 |
| - | 0 | - | Externalized | Desolation | 绝望 |
| - | - | + | Internalized | Awe | 敬畏 |
| - | - | + | Externalized | Surprise | 惊讶 |
| - | - | 0 | Internalized | Preoccupation | 忧思 |
| - | - | 0 | Externalized | Conflict | 纠结 |
| - | - | - | Internalized | Hopelessness | 无望 |
| - | - | - | Externalized | Breakdown | 崩溃 |

### 4.2 Naming Note

The labels above should be read as **state glosses**, not as claims that each cell corresponds to a universally fixed natural kind. The structural position of a state is primary; the ordinary-language label is secondary and may be revised in later iterations.

---

## 5. Neurobiological Interpretation

### 5.1 Safety

The Safety axis is inspired by lines of work linking serotonergic regulation to mood stability, aversive sensitivity, social valuation, and behavioral inhibition. Low Safety corresponds not to "low serotonin" in a narrow assay sense, but to a functional state of threat, insecurity, or diminished regulatory stability.

### 5.2 Urgency

The Urgency axis is inspired by dopaminergic work on motivation, activation, incentive salience, and goal-seeking. High Urgency corresponds to mobilization, anticipatory energy, and pressure toward action; low Urgency corresponds to withdrawal, slowing, or reduced drive.

### 5.3 Need

The Need axis is inspired by oxytocin-related work on attachment, bonding, trust, and affiliative motivation. High Need corresponds to seeking or sustaining connection, closeness, and belonging. Low Need corresponds to detachment, social coldness, or withdrawal from affiliative engagement.

### 5.4 Constraint

These mappings are deliberately interpretive. Human affect depends on many additional systems, including cortisol, norepinephrine, endogenous opioids, learning history, cognition, culture, and context. The value of this framework lies in interpretability and generative usefulness, not in claiming that emotion is reducible to three chemicals alone.

---

## 6. Applications

### 6.1 Psychology and Mental Health

The framework can function as a **state-space heuristic** for organizing emotional patterns:

- low Safety, low Urgency, low Need may resemble depressive withdrawal
- low Safety, high Urgency, low Need may resemble anxious activation
- unstable movement across distant states may suggest dysregulation patterns worth studying

These are interpretive mappings, not diagnostic criteria.

### 6.2 Artificial Intelligence

The AI implications of the framework have become increasingly important.

Most affective AI systems focus on:

- sentiment detection
- user emotion recognition
- style adaptation

This framework supports a deeper possibility: **AI systems can maintain their own intrinsic affective state model**.

In such systems:

- user cues help estimate **user state**
- task progress, blockage, uncertainty, and relational history update **assistant state**
- the resulting affective state shapes **policy before wording**

That means affect does not merely change tone. It changes:

- how much structure the system provides
- whether it becomes more cautious or more initiative-taking
- whether it reassures, clarifies, advances, or slows down
- how persistence and tension accumulate across turns

In this sense, the 54 Bio-Emotions Framework is not only a human emotion map. It is also a candidate substrate for **Intrinsic Affect for AI**.

### 6.3 Human-Computer Interaction

For HCI, the framework can support:

- emotionally adaptive interfaces
- state-aware tutoring and assistance systems
- interaction models that distinguish hidden strain from visible expression

---

## 7. Discussion

### 7.1 Strengths

1. **Generative structure:** The framework derives named states from a compact state space rather than from an arbitrary list.
2. **Interpretability:** Safety, Urgency, and Need are psychologically legible variables.
3. **Cross-domain usability:** The same framework can support human interpretation, interface design, and AI runtime modeling.
4. **Extensibility:** The labels can evolve without destroying the underlying geometry of the model.

### 7.2 Limitations

1. **Not a direct biochemical assay:** The framework is biologically inspired, not a literal hormone readout.
2. **Discretization loss:** Real affect is continuous, path-dependent, and context-sensitive; a three-level grid is a simplification.
3. **Provisional naming:** Some labels are better understood as approximate glosses than as definitive universal terms.
4. **Incomplete biology:** Other systems such as cortisol, norepinephrine, and endogenous opioids also matter.
5. **No clinical validity claim yet:** The framework is not presently a diagnostic or therapeutic standard.

### 7.3 Future Research

- develop measurement instruments for Safety, Urgency, and Need
- compare the framework empirically against PAD and core affect models
- test intercoder agreement on state annotations
- study whether internalized and externalized variants can be behaviorally distinguished
- build longitudinal AI experiments where affective state persists across turns and affects policy

---

## 8. Conclusion

The **54 Bio-Emotions Framework** proposes a compact affective state space built from three biologically inspired axes and one expression-direction dimension. Its value lies less in proving that emotion reduces neatly to three chemicals, and more in offering a **structured, generative, and implementable model** for organizing affective states.

For human emotion theory, it provides an interpretable map. For AI, it offers the beginnings of an intrinsic affective architecture. Both uses remain provisional and require empirical refinement, but the framework provides a concrete foundation on which that refinement can proceed.

---

## References

1. Barrett, L. F. (2006). Are emotions natural kinds? *Perspectives on Psychological Science, 1*(1), 28-58. https://doi.org/10.1111/j.1745-6916.2006.00003.x
2. Berridge, K. C., & Robinson, T. E. (1998). What is the role of dopamine in reward: hedonic impact, reward learning, or incentive salience? *Brain Research Reviews, 28*(3), 309-369. https://doi.org/10.1016/S0165-0173(98)00019-8
3. Carter, C. S. (1998). Neuroendocrine perspectives on social attachment and love. *Psychoneuroendocrinology, 23*(8), 779-818. https://doi.org/10.1016/S0306-4530(98)00055-9
4. Crockett, M. J. (2009). The neurochemistry of fairness: clarifying the link between serotonin and prosocial behavior. *Annals of the New York Academy of Sciences, 1167*, 76-86. https://doi.org/10.1111/j.1749-6632.2009.04506.x
5. Darwin, C. (1872). *The Expression of the Emotions in Man and Animals*. London: John Murray.
6. Ekman, P. (1992). An argument for basic emotions. *Cognition & Emotion, 6*(3-4), 169-200. https://doi.org/10.1080/02699939208411068
7. Mehrabian, A., & Russell, J. A. (1974). *An Approach to Environmental Psychology*. Cambridge, MA: MIT Press.
8. Panksepp, J. (1998). *Affective Neuroscience: The Foundations of Human and Animal Emotions*. New York: Oxford University Press.
9. Plutchik, R. (1980). *Emotion: Theory, Research, and Experience, Vol. 1: Theories of Emotion*. New York: Academic Press.
10. Robinson, O. J., Cools, R., Crockett, M. J., & Sahakian, B. J. (2010). Mood state moderates the role of serotonin in cognitive biases. *Journal of Psychopharmacology, 24*(4), 573-583. https://doi.org/10.1177/0269881108100257
11. Russell, J. A. (2003). Core affect and the psychological construction of emotion. *Psychological Review, 110*(1), 145-172. https://doi.org/10.1037/0033-295X.110.1.145
12. Young, L. J., & Wang, Z. (2004). The neurobiology of pair bonding. *Nature Neuroscience, 7*(10), 1048-1054. https://doi.org/10.1038/nn1327
