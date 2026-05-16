---
name: Kinetic Learning Aesthetic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3f4852'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6f7883'
  outline-variant: '#bec7d4'
  surface-tint: '#00629d'
  primary: '#00629d'
  on-primary: '#ffffff'
  primary-container: '#00a3ff'
  on-primary-container: '#00375a'
  inverse-primary: '#98cbff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#795900'
  on-tertiary: '#ffffff'
  tertiary-container: '#c69400'
  on-tertiary-container: '#443100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
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
  container-max: 1280px
---

## Brand & Style

The design system is built to evoke a sense of "intellectual play." It targets a younger demographic and educators who value high-fidelity, polished digital environments. The visual language centers on **Neumorphism-lite**—a modern evolution of soft UI that emphasizes tactile volume, soft-touch surfaces, and 3D-depth without the cluttered complexity of traditional skuomorphism.

The emotional response should be one of "effortless discovery." By using a "Soft-UI" approach, we create an interface that feels physically safe and inviting. The aesthetic is bright and airy, utilizing white space not just as a gap, but as a canvas for vibrant, high-quality 3D assets and energetic interactions.

## Colors

The palette is anchored by **Vibrant Sky Blue** to represent clarity and intelligence. **Soft Mint Green** is used for success states and secondary actions, offering a calming contrast to the energy of the blue. **Sunny Yellow** serves as the "spark" color—reserved for highlights, achievements, and attention-grabbing callouts.

The background is a **Crisp White**, but interactive surfaces use a very subtle off-white or light-gray tint to allow for the "light" and "shadow" of the Neumorphic effects to remain visible. Primary actions use high-saturation gradients to mimic 3D volume.

## Typography

This design system exclusively uses **Space Grotesk** to maintain a modern, technical, yet friendly feel. To ensure high readability on light backgrounds, we utilize slightly heavier weights for body text (Medium/400 and Semi-bold/600) and tight letter-spacing for headlines to emphasize the geometric nature of the letterforms.

Hierarchy is established through significant scale shifts. Display styles are reserved for gamified moments and splash screens, while body text is given generous line-height to prevent eye fatigue during long learning sessions.

## Layout & Spacing

The system follows a **Fluid Grid** model based on an 8px base unit. 

- **Desktop:** 12-column grid with 24px gutters and 64px side margins. 
- **Tablet:** 8-column grid with 20px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Content is housed in "Soft-UI" containers that use generous internal padding (typically 32px) to maintain the airy, friendly aesthetic. Layouts should prioritize vertical rhythm, ensuring that 3D elements have enough "breathing room" to appear as if they are floating above the UI plane.

## Elevation & Depth

Depth in this design system is achieved through **Soft-UI Volume** rather than traditional elevation. Instead of sharp dropshadows, we use:

1.  **Dual Ambient Shadows:** Elements have a light shadow (white) on the top-left and a soft, tinted dark shadow (10-15% opacity of the primary color or neutral-slate) on the bottom-right.
2.  **Inner Glows:** To create a "pressed" look for inactive or secondary states, we use inner shadows that make the element look inset into the background.
3.  **3D High-Fidelity Assets:** Illustrations and icons should feature 3D modeling with soft rim lighting, mimicking the "Siahn" style. These assets should cast a very soft, blurred contact shadow on the surface below them.
4.  **Glassmorphism Overlays:** Modals and flyouts use a high-blur backdrop (20px+) with a 1px semi-transparent white border to simulate high-quality frosted glass.

## Shapes

The shape language is defined by **consistent roundness**. Standard components use a 12px (0.75rem) corner radius to feel soft and approachable. 

Larger containers and cards utilize a 24px (1.5rem) radius to emphasize the "squishy" tactile feel of the platform. Avoid sharp 90-degree angles entirely. Even 3D elements should have softened edges to maintain the friendly, high-quality "toy-like" aesthetic.

## Components

### Buttons
Primary buttons are high-volume, 3D-styled elements. They feature a slight gradient (top-to-bottom) and a thick bottom border (3-4px) in a darker shade of the primary color to simulate physical depth. On hover, the button should "sink" slightly.

### Cards
Cards use a subtle white-to-light-gray gradient and the "Dual Ambient Shadow" technique. They should appear to be "puffed" out of the background. Borders are unnecessary; depth is defined by the soft shadow contrast.

### Input Fields
Inputs use the "Inset" Neumorphic style. The field should look like it is carved into the interface. The focus state transitions the inner shadow to a soft outer glow in Vibrant Sky Blue.

### Chips & Badges
Chips are pill-shaped and utilize the Soft Mint Green or Sunny Yellow palettes. They are flat but feature a 1px "highlight" border on the top edge to give them a slight 3D "sticker" appearance.

### Progress Bars
Progress tracks are inset (concave), while the progress fill is a vibrant, rounded, 3D "capsule" that looks like it is sliding within the track. Use the Primary Sky Blue for active progress.