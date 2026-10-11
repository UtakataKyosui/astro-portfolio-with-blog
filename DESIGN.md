# DESIGN.md — Personal Knowledge Website

> Version: 0.1 · Status: Design direction (proposed tokens, subject to visual review)
> Target: Google Stitch, designers, and coding agents
> Source of truth for product scope: `docs/REQUIREMENTS.md`; interactions: `docs/UX.md`.

## 1. Product and design intent

**Concept:** 「アイデアは、日常に転がっている。」 / *Ideas are everywhere.*

A personal website for a frontend engineer who notices everyday inconveniences, questions assumptions, experiments with technology, and shares what emerges. This is **not** a conventional résumé site, SaaS dashboard, nor a visual clone of Obsidian. It is a navigable constellation of **ideas, works, writing, experiments, and the person behind them**.

**Visitor takeaway:** “Small experiences and questions connect to things this person builds and writes.”

**Audience:** People with or without a software engineering background. Use approachable Japanese in primary copy, short English category labels as secondary cues. Explain what something solves before listing its tech stack.

**Personality:** Curious, thoughtful, playful, precise, exploratory, human. Sophisticated without being sterile. Express personality through connections and interactions rather than decorative excess.

**Primary visual metaphor:** A constellation / knowledge graph: nodes represent concepts and content; edges represent meaningful relationships. Connections are an organizing principle across the site, not merely a hero background effect.

### Design principles

1. **Connections have meaning.** Avoid arbitrary decorative edges. A line means a real relationship.
2. **Explore, then read.** Graph for discovery; readable text and ordinary navigation for comprehension.
3. **Ideas, not ego, at the center.** Start from an everyday question rather than a large portrait or self-promotional hero.
4. **Calm canvas, lively details.** A focused graphic language with restrained motion.
5. **Accessible by default.** Graph interaction is optional; all important content is available without it.
6. **Build the smallest meaningful experience.** MVP shows a fixed graph with selection, highlights, and a detail panel. No infinite canvas.

## 2. Information architecture

### MVP routes

- `/`: Header, Hero, Knowledge Graph, Philosophy, Featured Works, Writing links (if available), About, Footer.
- `/works`: Accessible list of works (real works added after selection; use honest empty state meanwhile).

### Future routes (design for future consistency, do not implement in MVP)

- `/blog`, `/blog/[slug]`: Articles.
- `/lab`: Experiments and unfinished ideas.
- `/works/[slug]`: Detailed project stories.

### Narrative order on Home

`Question from daily life → Connections between ideas → Making / thinking → Works and articles → Person`.

Use the actual Japanese hero heading **「アイデアは、日常に転がっている。」** and supporting copy such as:

> 暮らしの中の小さな不便や疑問から、技術で何ができるかを考える。作って、試して、また考える。

Avoid generic copy such as “innovative solutions”, “passionate developer”, “cutting-edge technology”.

## 3. Art direction

### Direction

**Editorial constellation / quiet digital laboratory.** Combine a strong editorial typographic rhythm with a lightweight technical graph. The visual language should feel like a well-kept notebook that happens to be interactive.

- Large expressive Japanese headings, but readable, quiet body copy.
- Dark, low-glare backdrop; faint dots / grid only where they help establish spatial context.
- Thin threads/edges, small glows reserved for active selections.
- Content panels should resemble notes or index cards, not analytics dashboard widgets.
- Generous whitespace and clear separation between graph exploration and long-form reading.
- No stock photos of people coding, abstract 3D blobs, crypto/network clichés, or generic AI gradients.

### Suggested design tokens (starting hypotheses)

These are **proposed** values, not requirements of an existing brand. Stitch may explore variants, but generated screens must remain consistent with the chosen system.

| Token | Dark default | Purpose |
|---|---|---|
| `background` | `#0B1018` | Main canvas; muted navy-charcoal rather than pure black |
| `surface` | `#121B28` | Cards and detail panels |
| `surface-raised` | `#192536` | Hovered/active containers |
| `text-primary` | `#EDF3FC` | Headings and main content |
| `text-secondary` | `#B1C0D2` | Supporting labels and copy |
| `border` | `#34465E` | Subtle dividers and card outlines |
| `accent` | `#A5BFFB` | Selected nodes, links, focus/primary action |
| `accent-muted` | `#6B91D3` | Secondary highlights, connections |
| `edge-muted` | `#52657D` | Inactive graph edges; low-opacity usage |

**Semantic usage:** Accent means current context or a genuine interactive affordance, not an all-purpose fill. Node categories may be distinguishable by icons, shapes, labels and controlled color hints; never rely on color alone.

**Contrast:** Verify text and interactive affordances against WCAG 2.2 AA. Check ratios in implementation; hex values alone are not proof of compliance.

**Light theme:** Optional after MVP. If explored in Stitch, use an off-white paper-like canvas, ink-dark typography and the same accent semantics. Do not make light mode a blocker for the first release.

### Typography

- Japanese primary UI: `Noto Sans JP` or a similar legible Japanese sans-serif.
- English labels and utility copy: `Inter` or compatible system sans-serif.
- Optional mono accent for node IDs / metadata only: `JetBrains Mono` or a system monospace.
- Use fluid typography: Hero approximately `clamp(2.5rem, 6vw, 5rem)`; section headings `clamp(1.75rem, 3vw, 2.75rem)`; body `1rem–1.125rem` with line-height `1.7–1.9` for Japanese.
- Use restrained weight differences; avoid all-uppercase long English text. Provide proper Japanese line-break behavior.

### Spacing and geometry

- 8px base spacing rhythm; allow 4px increments for fine alignment.
- Desktop content max-width ~1120–1200px; readable prose width ~640–760px.
- Card radius ~12–16px, buttons ~10–12px, pill labels fully rounded.
- Use subtle borders over heavy drop shadows; active nodes may use a restrained halo.
- Minimum comfortable touch targets ~44×44 CSS pixels.

## 4. Screens and components

### Screen A: Home / Desktop (primary Stitch generation target)

**Viewport reference:** 1440×900, desktop-first, responsive.

1. **Header:** Quiet brand/wordmark left; Home and Works links right; discreet GitHub external link. Standard links remain independently usable.
2. **Hero:** Main Japanese statement as the dominant focal point. Small English eyebrow “Ideas are everywhere.” and one concise explanatory paragraph. No loud CTA button required.
3. **Knowledge Graph:** Main interactive signature section. Desktop graph visualization occupies around 60–65% width; selected-node detail panel occupies the remainder. Edges are thin. The graph should feel intentionally composed, not chaotic.
4. **Philosophy:** A short text-led section about everyday inconvenience → idea → building/testing, with restrained typographic detail.
5. **Featured Works:** Up to three real projects once chosen. Each card prioritizes **problem / spark / result**, with technology as supporting metadata. Until then, use an honest empty state, not invented project names.
6. **Writing:** Optional outbound links to existing articles, where actual content exists. Do not fabricate dates or thumbnails.
7. **About & footer:** Short frontend-engineer bio, stack in plain text, GitHub link and normal footer.

**Hierarchy:** The headline and knowledge graph share visual prominence; the rest is editorial and quiet. Avoid surrounding every section with a boxed card.

### Screen B: Home / Mobile

**Viewport reference:** 390×844.

- Single-column flow; header should not obscure content.
- Graph scales to the available width or uses an intentional simplified layout; no horizontal page overflow.
- Detail panel appears below the graph and reflects the selected node.
- Provide an adjacent list or tab-like buttons for node selection; do not require tapping tiny SVG circles.
- Tighten vertical rhythm without compressing line height.
- No hover-only information. Maintain visible reading order and accessible labels.

### Screen C: Works index

- Intro paragraph that explains works are born from real problems or curiosities.
- Spacious responsive list/cards; each project uses fields such as “きっかけ”, “つくったもの”, “得られたこと”.
- Show external repository/live links where genuinely available.
- No false work history, fake metrics, placeholder success stories or fabricated screenshots.

### Future: Blog article page

- Primarily editorial, optimized for Japanese reading: title, date, summary, body, related ideas/works.
- Connections may appear as small “Related nodes” modules; do not force a graph into the reading column.
- Maintain content-agnostic layouts so a future CMS swap does not force a visual redesign.

## 5. Knowledge Graph component spec

### Meaningful node types

- `idea`: everyday friction or question, conceptual center.
- `work`: implemented project.
- `post`: written explanation/article.
- `experiment`: open-ended trial.
- `about`: context about the maker (navigation node).

For the initial empty-content state, top-level categories such as `Ideas / Works / Writing / Lab / About` may be displayed. Do not imply nonexistent real projects or articles.

### Selection and feedback

- On load, **Ideas** is selected; its brief description is visible.
- Selecting another node visibly changes selection state, related node/edge emphasis and details panel content.
- Unrelated edges recede, but should not fully disappear.
- The panel includes an explicit navigational link when a real destination exists.
- `hover` and `focus-visible` may preview affordances, but click/tap/keyboard select is the stable state.
- Selected information is expressed with text and shape/state, not only hue.
- Motion: 150–250ms emphasis transitions, gentle ease; avoid constant orbital motion or force physics in MVP.
- Respect `prefers-reduced-motion: reduce`; transitions can be disabled without losing any information.
- Visually rendered SVG can be `aria-hidden` when mirrored by semantic buttons/list. Do not create duplicate confusing tab stops.

### Explicit non-goals in MVP

- Dragging nodes; free panning/zooming; simulated physics; animated moving background; CMS editing; graph-as-only-navigation; dozens of dense nodes; hover-dependent navigation.

## 6. Responsive / accessibility / performance

- **Breakpoints (guidelines):** mobile < 640px; tablet 640–1023px; desktop ≥ 1024px. Content-driven adjustments are encouraged.
- **Keyboard:** Reach every meaningful action with keyboard, show a clear `:focus-visible` indicator, use native buttons and links.
- **Screen reader:** Provide coherent headings, link text, selected state and text equivalent of connections where relevant.
- **Reduced motion:** Full information parity without animation.
- **No-JS fallback:** Static hero, sections and navigation remain usable even if graph interactivity is unavailable.
- **Performance:** Prefer CSS/SVG and a small React island. Avoid massive particle engines, unnecessary canvas libraries or background videos.
- **Reading first:** Maintain comfortable contrast and text sizes; preserve native scrolling and browser navigation.

## 7. Content writing and imagery

- Primary language: Japanese. Short English UI labels can accompany Japanese descriptions.
- Voice: Observant, unpretentious, curious. Avoid hard-sell marketing language and exaggerated self-praise.
- Write from lived questions: what felt inconvenient, what idea followed, what was tested.
- Technical terms belong in details, not as an entry requirement for understanding the hero.
- Prefer abstract line work and UI-derived diagrams over decorative illustrations and generic stock photography.

## 8. Stitch generation workflow

Use this file as the **project-level design-system and art-direction context**. Generate screens individually, then refine them. When a Stitch project-level design system has been applied, do not repeat token values in every screen generation prompt.

**First screen generation prompt (layout/content only):**

> Design a responsive personal website homepage for a Japanese frontend engineer. The concept is 「アイデアは、日常に転がっている。」 (“Ideas are everywhere”). It is an editorial, exploratory portfolio built around a meaningful knowledge graph connecting Ideas, Works, Writing, Lab, and About. Desktop layout: understated navigation; bold Japanese hero statement and short descriptive paragraph; a central network graph with a selected-node details panel at its right; short Philosophy section; Featured Works cards prioritizing problems and outcomes; optional Writing links; compact About and footer. The graph should have fixed intentional node positions, selected-node highlighting, meaningful visible connections, and an explicit link from details to a destination. Avoid fictional projects or generic dashboard widgets. Keep non-graph content easy to read and provide standard navigation independent of the graph. PLATFORM: Responsive Web, desktop-first.

**Second prompt:**

> Adapt the approved homepage to a 390px-wide mobile screen. Preserve the same content hierarchy. Fit the graph within the viewport, provide large labeled node-selection controls, and place the details panel below the graph. No hover-only information and no horizontal overflow.

**Third prompt:**

> Design the Works listing page using the same design system and navigation. Present projects as editorial cards with the origin problem, resulting creation and related ideas/articles. Since projects are not chosen yet, show a clear intentional empty state instead of inventing projects.

### Review checklist for Stitch outputs

- [ ] The site looks like an exploratory personal knowledge space, **not** a SaaS dashboard.
- [ ] The hero heading is the agreed Japanese phrase, with no mistranslation.
- [ ] The graph and detail panel have a legible visual relationship.
- [ ] Edges appear purposeful rather than randomly decorative.
- [ ] Normal navigation and text reading remain first-class.
- [ ] Mobile interaction is achievable without precise tapping.
- [ ] Visual tokens and components stay consistent across screens.
- [ ] No fictional achievements, projects, screenshots or blog entries.
- [ ] Interaction and accessibility states are documented for engineering handoff.

## 9. Implementation handoff

Stitch creates design candidates, **not** the final functional graph, a content API or accessibility guarantees. The app remains Astro + React island + Tailwind. Keep design tokens centralized and translate approved screens into components. Implement keyboard, semantic state, responsive behavior and reduced-motion controls in code; verify them independently.

If an output contradicts product requirements, prefer `docs/REQUIREMENTS.md` and `docs/UX.md` for behavior. For visual system decisions, use this file until a revision is approved.
