---
name: Mathematical Odyssey
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is built on the concept of "Cognitive Evolution," where the user's interface matures alongside their mathematical proficiency. The brand personality is encouraging, adventurous, and intellectually stimulating, shifting from a playful tactile companion for younger learners to a sophisticated analytical toolset for older students.

This design system employs a **Hybrid Gamified** style. It merges the soft, "squishy" physical metaphors of tactile design for lower grades with the precise, data-rich aesthetics of modern strategy simulators for higher grades. The goal is to evoke a sense of high-stakes adventure where math is the "magic system" or "engine" that allows students to unlock and build new worlds. 

- **Empire of Senses (Grades 1-3):** Tactile/Skeuomorphic and vibrant. Focuses on physical delight, bouncy transitions, and high-contrast organic shapes to reduce cognitive load and build emotional connection.
- **Builder of Order (Grades 4-6):** Corporate/Modern meets "Tycoon" sandbox. Clean, grid-aligned elements with subtle blueprint textures and technical accents to foster a sense of construction and logic.
- **System Architect (Grades 7-8):** Sleek/Minimalist with Dark-mode elements. High-density information, glassmorphism, and precise lines that treat the user like a high-level strategist or engineer.

## Colors

The core palette of the design system revolves around **Royal Blue**, signaling trust and academic authority. This is balanced by **Success Emerald** for positive feedback loops and **Warning Amber** for critical thinking moments and errors.

Each grade-tier utilizes a specific accent to define its "World":
- **Empire:** Uses soft pinks and warm violets to create a welcoming, high-energy environment.
- **Builder:** Uses teals and slates to mimic architectural drafts and natural materials.
- **Architect:** Uses deep indigos and neons against darker surfaces to emphasize focus and high-tech analysis.

While the default mode is light to ensure maximum legibility for reading math problems, the "System Architect" tier introduces dark-surface containers to differentiate complex workspace areas.

## Typography

The design system exclusively utilizes **Quicksand** to maintain a friendly, accessible, and legible experience across all ages. The rounded terminals of the typeface reduce "math anxiety" by appearing less sharp and intimidating than traditional serifs.

- **Hierarchy:** We use generous scaling for younger grades (Display LG) to keep focus on single tasks. As students progress to "System Architect," the system shifts toward higher density with more use of Body MD and Label Caps for complex data visualization.
- **Readability:** For mathematical equations, weights are kept at 500 (Medium) or 600 (Semi-Bold) to ensure symbols like minus signs and fractions remain distinct and accessible.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing philosophy is rooted in an 8px base unit to ensure rhythmic consistency.

- **Empire Layout:** Focuses on "Single-Tasking." Massive 64px (XL) vertical padding between sections creates a breathing room that prevents overstimulation.
- **Builder Layout:** Introduces sidebars and "Toolboxes." Uses a fixed 240px side-rail for tools, with a fluid central stage for the math workspace.
- **Architect Layout:** High-density dashboarding. Gutters are reduced to 16px to maximize screen real estate for charts, graphs, and multi-step equations.

## Elevation & Depth

Visual hierarchy in the design system is communicated through a tiered approach to depth:

1.  **Empire (Physical Depth):** Uses 3D-styled shadows with a 4px vertical offset and high-saturation color tinting (e.g., a blue button casts a soft blue shadow). Elements feel "pressable" and physical.
2.  **Builder (Layered Depth):** Uses tonal surfaces. Components are differentiated by background color shifts (light gray vs. white) and crisp 1px borders that mimic blueprints. Shadows are minimal and neutral.
3.  **Architect (Glassmorphic Depth):** Utilizes background blurs (12px to 20px) and semi-transparent "frosted" containers. This creates a sense of high-tech sophistication, where tools appear to float over the data-rich background.

## Shapes

The shape language of the design system evolves from "Circular" to "Structured."

- **Primary (Grades 1-3):** Uses **Pill-shaped (3)** buttons and containers. Every corner is maxed out to ensure the UI feels soft, safe, and toy-like.
- **Intermediate (Grades 4-6):** Shifts to **Rounded (2)**. This introduces a bit more structure, allowing for better alignment in grid-heavy "Tycoon" style layouts while remaining friendly.
- **Advanced (Grades 7-8):** Moves toward **Soft (1)** for specific utility components (like input fields and data cards) to maximize internal space for complex text, though primary CTA buttons remain Rounded to maintain brand DNA.

## Components

- **Buttons:** 
  - *Empire:* Large, 3D-effect (bottom-border "shadow"), high-bounce haptics.
  - *Builder:* Flat, high-contrast borders, subtle hover "lift."
  - *Architect:* Subtle gradients, glassmorphic backgrounds, precise 1px outlines.
- **Input Fields:** Always includes a "Unit Label" (e.g., cm, %, x=) to provide context. Inputs in the "Builder" tier use a monospaced-style Quicksand for a technical feel.
- **Cards:** 
  - *Empire:* Soft, "puffy" white cards with colored shadows.
  - *Architect:* Dark-mode cards with 20% opacity and blurred backgrounds.
- **Progress Bars (The "XP" Bar):** Visualized as a glowing energy tube for younger kids and a precise, segmented data-line for older students.
- **Specialized Components:** 
  - *The Mathematical Sandbox:* A draggable workspace for manipulating geometric shapes or algebraic tiles.
  - *Achievement Badges:* Skeuomorphic gold/silver/bronze for younger users; minimal geometric icons for older users.