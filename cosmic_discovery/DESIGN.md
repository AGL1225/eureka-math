---
name: Cosmic Discovery
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2eb'
  on-surface-variant: '#ccc3d7'
  inverse-surface: '#e1e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d3bbff'
  primary: '#d3bbff'
  on-primary: '#3f008d'
  primary-container: '#6d28d9'
  on-primary-container: '#dac5ff'
  inverse-primary: '#7331df'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#eec200'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d3bbff'
  on-primary-fixed: '#250059'
  on-primary-fixed-variant: '#5b00c5'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#10131a'
  on-background: '#e1e2eb'
  surface-variant: '#32353c'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 30px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  touch-target-min: 48px
---

## Brand & Style
This design system captures the wonder of interstellar exploration, blending high-tech "starship" interfaces with the magical allure of deep space. It targets young learners, transforming mathematical challenges into cosmic missions.

The visual style is **Futuristic Glassmorphism** mixed with **Vibrant Neon**. It utilizes deep, layered backgrounds to create a sense of infinite depth, while UI elements appear as translucent "HUD" (Heads-Up Display) panels floating within a nebula. The emotional goal is to make education feel like a high-stakes adventure—mysterious yet safe, technical yet approachable.

## Colors
The palette is rooted in the "Deep Space" base, using high-contrast neon accents to guide the eye and signal interactivity.

- **Primary (Cosmic Purple):** Used for main actions, hero elements, and progress indicators. It represents the "magical" side of the cosmos.
- **Secondary (Electric Cyan):** Used for technical details, HUD outlines, and data visualization. It provides a "high-tech" sci-fi feel.
- **Tertiary (Star Gold):** Specifically reserved for achievements, rewards, and "Eureka" moments. It provides maximum contrast against the dark base.
- **Neutral (Midnight Navy):** The foundation of all views. Not a flat black, but a deep blue that feels vast and atmospheric.

## Typography
The typography strategy balances "Scientific Precision" with "Friendly Accessibility."

**Space Grotesk** is used for headlines and labels. Its geometric, technical quirks reinforce the sci-fi theme. Large headlines should utilize a subtle "Neon Glow" text-shadow using the Secondary or Tertiary colors to simulate glowing ship monitors.

**Nunito Sans** is used for all instructional text and body copy. Its rounded terminals make long-form reading (like math word problems) less intimidating for children while maintaining a modern aesthetic.

## Layout & Spacing
The layout follows a **Fluid HUD** model. Content is organized into floating modules rather than rigid full-width sections.

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile. 
- **Rhythm:** An 8px base unit ensures consistent scaling.
- **Safe Zones:** High-margin layouts (64px+) on desktop simulate the view from a cockpit window, centering the focus on the "mission" at hand.
- **Interactivity:** Since the target audience is kids, all interactive elements must respect a 48px minimum touch target, with generous 16px gutters to prevent accidental taps.

## Elevation & Depth
In this design system, depth is not achieved through traditional shadows, but through **Tonal Layering and Translucency**.

1.  **Level 0 (Deep Space):** The background layer. Dark navy gradients with an animated starfield or nebula texture.
2.  **Level 1 (The Glass HUD):** Semi-transparent surfaces (#FFFFFF at 5-10% opacity) with a `backdrop-filter: blur(12px)`. These panels house the main content.
3.  **Level 2 (Active Elements):** Elements that are interactive feature a 1px solid border in Electric Cyan or Cosmic Purple with a subtle outer glow (`box-shadow`) of the same color.
4.  **Level 3 (Pop-outs):** Modals and alerts use a thicker 2px border and a more intense background blur to appear "closer" to the user.

## Shapes
The shape language is **Technical-Organic**. 

Containers use `rounded-lg` (16px) to maintain a friendly feel, avoiding the harshness of sharp military sci-fi. 

Interactive elements like buttons and chips should lean towards `rounded-xl` (24px) or full pill-shapes. This "bubble" aesthetic makes the UI feel approachable and tactile, like high-end astronaut equipment. Avoid sharp 90-degree angles entirely to keep the environment welcoming for children.

## Components
Consistent component styling is vital for the "Space Mission" feel:

- **Buttons:** Primary buttons use a solid Cosmic Purple gradient with a white inner glow at the top. Secondary buttons are "Ghost" style with an Electric Cyan border and a neon glow on hover.
- **Input Fields:** Dark, translucent backgrounds with bottom-only borders that "light up" in Cyan when focused. Use large, readable font sizes for numeric entry.
- **Cards (Mission Modules):** Glassmorphic panels with a "corner-accent" detail (a small L-shaped bracket in the corners) to mimic a scanner interface.
- **Progress Bars:** Designed as "Fuel Gauges" or "Energy Cells." Use a gradient from Purple to Cyan, with a Star Gold "spark" at the leading edge of the progress.
- **Chips:** Small, pill-shaped tags used for math categories (e.g., "Geometry," "Addition"). Use low-opacity Cyan backgrounds with high-opacity Cyan text.
- **Navigation:** A floating bottom bar or side rail with "Orbital" icons—simple line icons encased in circular glows.