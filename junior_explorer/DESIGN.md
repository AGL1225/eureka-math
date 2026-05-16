---
name: Junior Explorer
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#404752'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#707883'
  outline-variant: '#c0c7d4'
  surface-tint: '#0061a3'
  primary: '#0061a3'
  on-primary: '#ffffff'
  primary-container: '#47a7ff'
  on-primary-container: '#003b65'
  inverse-primary: '#9dcaff'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fdcf45'
  on-secondary-container: '#715800'
  tertiary: '#006d41'
  on-tertiary: '#ffffff'
  tertiary-container: '#41b77b'
  on-tertiary-container: '#004226'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9dcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497c'
  secondary-fixed: '#ffe08e'
  secondary-fixed-dim: '#eec138'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#86f9b7'
  tertiary-fixed-dim: '#69dc9c'
  on-tertiary-fixed: '#002110'
  on-tertiary-fixed-variant: '#005230'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  body-lg:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  label-bold:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-tablet: 40px
  touch-target-min: 56px
---

## Brand & Style

This design system is built on the philosophy of "Kinetic Learning"—where every digital interaction feels like playing with physical blocks. The brand personality is optimistic, curious, and endlessly encouraging, specifically tailored for children aged 6–9. 

The aesthetic identity is a blend of **Tactile Minimalism** and **Playful Skeuomorphism**. We avoid the sterile "flat" look of adult software in favor of "squishy" UI elements that respond to touch with depth and character. The interface behaves like a friendly companion, utilizing high-contrast visual cues and exuberant motion to guide the user without the need for dense instructional text.

## Colors

The palette is anchored in "Action Primaries"—colors that aren't just decorative but functional. 
- **Primary (Sky Blue):** Used for main navigation and core actions.
- **Secondary (Sunny Yellow):** Reserved for rewards, highlights, and "Eureka" moments.
- **Tertiary (Friendly Green):** The "Go" color, used for confirmations and success states.
- **Quaternary (Warm Orange):** Used for interactive play elements and creative tools.

The background uses a "Paper White" (#FFFFFF) and "Cloud Gray" (#F7F9FC) to ensure the vibrant components remain the focus of the child's attention. Avoid pure black; use a deep "Charcoal Blue" (#2D3436) for text to maintain a soft, approachable contrast.

## Typography

We use **Quicksand** exclusively for its rounded terminals and open counters, which mirror the handwriting shapes children are learning in school. 

Typography must be oversized to account for developing motor skills and lower reading speeds. Headlines are always "Chunky" (Bold/700) to provide clear hierarchy. Body text never drops below 18px to ensure maximum legibility on mobile devices. Line heights are generous to prevent the "wall of text" effect that can be intimidating for young readers.

## Layout & Spacing

This design system follows a **Safe-Zone Fluid Grid**. Because children often use "fat-finger" taps or hold tablets by the edges, we employ aggressive margins (20px on mobile, 40px on tablet).

The spacing rhythm is based on an 8px scale, but the most critical rule is the **Touch Target Minimum**. Every interactive element must be at least 56x56px. Layouts should favor vertical stacking for simplicity, but when using grids (e.g., for card collections), use a 2-column layout on mobile to keep items large and tappable. Avoid complex nested navigations; keep the "Z-pattern" of information flow obvious and linear.

## Elevation & Depth

To create the "Squishy" feel, we use **Dynamic Shadows** instead of flat Tonal Layers. 

1.  **Resting State:** Elements feature a soft, downward-cast shadow with a 10% opacity of the element’s own color (e.g., a blue button has a soft blue shadow). This makes them look like they are floating slightly above the "Cloud Gray" surface.
2.  **Pressed State:** On-tap, the shadow disappears, and the element shifts 4px downward on the Y-axis. This provides immediate, physical feedback that the button has been "pushed into" the screen.
3.  **Active/Floating State:** High-priority items (like a "Start" button) use a double-stack shadow to appear more prominent and "bouncy."

Avoid blurs that are too "frosted" or professional (Glassmorphism); we want the UI to feel like solid, matte plastic or rubber.

## Shapes

The shape language is strictly **Pill-Shaped and Ultra-Rounded**. There are no sharp corners in the design system, as sharp corners feel "pointy" and "unfriendly" to children.

- **Buttons & Chips:** Use `rounded-full` (32px or higher) to create friendly, oblong shapes.
- **Cards & Containers:** Use a minimum radius of 24px (`rounded-xl`).
- **Input Fields:** Use 16px radius to distinguish them slightly from buttons while maintaining the soft aesthetic.
- **Icons:** Must feature rounded caps and corners, with a consistent 3pt stroke weight to match the "boldness" of the typography.

## Components

### Buttons
Buttons are "Plump." They use a thick bottom-border (4px) in a slightly darker shade of the button's color to simulate a 3D side-view. On press, this border "collapses," giving a satisfying tactile click.

### Cards
Cards are used for lesson modules or creative prompts. They should have a white background with a 2px "Soft Gray" stroke. They don't use shadows unless they are "Picked Up" (dragged).

### Progress Bars
Forget thin lines. Progress bars are thick (16px height), pill-shaped, and use a contrasting "Pulse" color (Sunny Yellow) to show completion. They should "jiggle" or grow slightly when progress is made.

### Inputs & Selection
Checkboxes and Radios are replaced by "Big Toggles." Instead of a small tick-box, the entire card or button should be a toggle that changes color (from Gray to Green) and grows 5% in scale when selected.

### Feedback Toasts
Feedback is delivered via "Character Bubbles." Instead of a standard system alert, use a rounded pop-up that appears to come from a corner of the screen, featuring a small illustrative mascot.