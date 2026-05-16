---
name: Celestial Calculus
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#b76dff'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Quicksand
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 48px
---

## Brand & Style

The design system bridges the gap between playful educational tools and sophisticated mobile RPGs. Targeting the 9–14 age demographic, the visual language evolves from primary-colored "junior" aesthetics to a more mysterious, "Advanced" atmosphere. 

The style is **Tactile Modernism**. It utilizes soft, depth-heavy surfaces reminiscent of high-end mobile games, combined with glassmorphic overlays that suggest high-tech mathematical interfaces. The emotional response is one of curiosity and "earned" maturity—the UI feels like a powerful artifact that rewards the player's progressing intelligence. 

Key visual hallmarks include:
- Soft, dimensional shadows that make components feel "pressable."
- Glowing accents tied to elemental attributes.
- High-clarity layouts that reduce cognitive load during complex problem-solving.

## Colors

The palette shifts away from flat primary colors toward a sophisticated "Deep Sea and Space" foundation. The base environment uses `neutral_color_hex` (Deep Slate) to provide a high-contrast backdrop for the vibrant elemental colors.

Each mathematical discipline or level grade is categorized by an elemental token:
- **Primary/Action:** Indigo is used for standard progression and global navigation.
- **Success/Secondary:** Teal represents positive feedback and "solved" states.
- **Elemental Tokens:** These should be used as glows, progress bar fills, and badge backgrounds. They are calibrated to remain legible against the dark background while maintaining high saturation to appeal to the younger audience's sense of energy.

## Typography

This design system exclusively uses **Quicksand** to maintain the "Junior Explorer" lineage. Its rounded terminals keep the experience friendly and accessible, preventing the "Advanced Math" content from feeling intimidating or overly academic.

- **Display Levels:** Reserved for level-up announcements, math scores, and monumental game moments.
- **Headline Levels:** Used for quest titles and section headers.
- **Body Levels:** Optimized for mathematical word problems. Use `body-lg` for the primary problem text to ensure readability on mobile devices.
- **Label Levels:** All-caps usage for labels is encouraged to provide a "tactical" feel to the game stats.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a heavy emphasis on "Safe Zones" for handheld mobile play. Everything is built on an 8px rhythmic scale.

- **Handheld Ergonomics:** All primary interactive elements (buttons, math inputs) should be placed within the bottom two-thirds of the screen to accommodate thumb-reach.
- **Component Padding:** Internal padding for cards and dialogs should use `md` (24px) to ensure the UI feels airy and premium.
- **Stacking:** Use `sm` for grouping related inputs (e.g., a math variable and its slider) and `lg` for separating distinct conceptual blocks (e.g., the problem description and the workspace).

## Elevation & Depth

Visual hierarchy is achieved through **Layered Luminance**. Instead of traditional black shadows, this design system uses:

1.  **Inner Glows:** Interactive elements like buttons have a subtle 1px inner top border (lighter tint of the surface color) to simulate a 3D edge.
2.  **Colored Outer Glows:** Used sparingly to indicate active elemental states (e.g., a "Fire" math card will have a soft red outer blur).
3.  **Backdrop Blurs:** Modals and HUD overlays use a 12px blur with a 40% opacity fill of the background color, creating a "glass" effect that keeps the player grounded in the game world.
4.  **Floating Cards:** The "Math Workspace" sits on the highest elevation, using a diffused 20px shadow with a slight color tint of the primary indigo to appear lifted.

## Shapes

The shape language is consistently **Rounded**. 

- **Containers:** Standard cards and dialogs use a 1rem (`rounded-lg`) corner radius.
- **Interactive Elements:** Buttons, input fields, and chips utilize a full "Pill" shape (3rem) to emphasize their touch-friendliness.
- **Progress Bars:** Should always have rounded caps to maintain the soft RPG aesthetic.
- **Selection States:** Use a thick (3px) rounded stroke around active cards, rather than changing the background color, to maintain clear visual feedback.

## Components

### Buttons
Primary buttons are high-contrast with a slight vertical gradient (top-down, light to dark). "Action" buttons for submitting answers should use the `secondary_color_hex` (Teal) to signal progress.

### Elemental Chips
Small, pill-shaped badges that denote the "type" of the current math problem. They consist of a 10% opacity background of the elemental color and a 100% opacity text color, paired with a small icon.

### Cards
Problem cards use the glassmorphic style. The background should be a dark semi-transparent navy. On mobile, cards should take up the full width minus the `margin-mobile`.

### Input Fields
Large, centered text inputs for numeric answers. Use `display-md` for the input text. The active state should trigger a glow effect corresponding to the current level's elemental theme.

### Health & Mana Bars (Progress)
The "Life Bar" tracks attempts remaining, while the "Mana Bar" tracks progress toward solving the equation. These are thick, horizontal bars with rounded ends and animated fills.

### Quest Lists
Lists of math challenges should be presented as vertical stacks of cards with chevron indicators, using `body-md` for challenge descriptions and `label-sm` for difficulty indicators.