---
name: Soft Celebration
colors:
  surface: '#f8faf6'
  surface-dim: '#d9dad7'
  surface-bright: '#f8faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f1'
  surface-container: '#edeeeb'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e1e3e0'
  on-surface: '#191c1a'
  on-surface-variant: '#424841'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#f0f1ee'
  outline: '#727971'
  outline-variant: '#c2c8bf'
  surface-tint: '#456648'
  primary: '#426446'
  on-primary: '#ffffff'
  primary-container: '#5a7d5d'
  on-primary-container: '#f7fff2'
  inverse-primary: '#abd0ab'
  secondary: '#5e5e5c'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdc'
  on-secondary-container: '#636360'
  tertiary: '#8c4a31'
  on-tertiary: '#ffffff'
  tertiary-container: '#a96247'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6ecc6'
  primary-fixed-dim: '#abd0ab'
  on-primary-fixed: '#01210a'
  on-primary-fixed-variant: '#2d4e32'
  secondary-fixed: '#e4e2de'
  secondary-fixed-dim: '#c8c6c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#72361e'
  background: '#f8faf6'
  on-background: '#191c1a'
  surface-variant: '#e1e3e0'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button-text:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system centers on the concept of "Nurtured Joy." It is designed to evoke feelings of calm, preparation, and warmth, tailored specifically for expectant parents and their loved ones. The target audience values intentionality and high-quality aesthetics but requires a friction-less mobile experience to manage event details on the go.

The style is **Minimalist** with a organic, tactile edge. It prioritizes clarity and breathability, using ample whitespace to reduce cognitive load. By combining the timelessness of editorial serif typography with the functional precision of a modern sans-serif, the system balances the emotional significance of a baby shower with the practical needs of a high-conversion digital platform.

## Colors

The palette is rooted in nature and warmth. The **Soft Sage Green** serves as the primary brand anchor, used for primary actions and key brand moments. The **Warm Cream** acts as the foundation for all surfaces, providing a softer, more premium alternative to pure white that reduces eye strain. 

The **Gentle Terracotta** is used sparingly as an accent color for high-conversion elements like "Register Now" or "RSVP" to draw the eye without breaking the peaceful aesthetic. For accessibility, the **Deep Neutral** (Charcoal) ensures all text surpasses WCAG 2.1 AA contrast requirements against the cream background.

- **Primary (Sage):** #6B8E6D (Growth, Calm)
- **Secondary (Cream):** #FDFBF7 (Softness, Light)
- **Tertiary (Terracotta):** #CD7F62 (Warmth, Energy)
- **Neutral (Charcoal):** #2D302E (Clarity, Contrast)

## Typography

This design system utilizes a high-contrast typographic pairing to establish hierarchy. **Noto Serif** provides an editorial, premium feel for headlines, reflecting the importance of the life event. **Inter** is utilized for all functional text, ensuring maximum legibility on mobile devices across various screen sizes.

Body text is set with generous line heights (1.6) to improve readability for users who may be multi-tasking. Label styles use subtle letter spacing and increased weight to differentiate them from body copy without requiring larger sizes.

## Layout & Spacing

The system employs a **Fluid Grid** model optimized for mobile-first consumption. On mobile devices, a 4-column grid with 20px outer margins is the standard. As the viewport expands to tablet and desktop, the system scales to a 12-column grid with a maximum container width of 1140px.

Vertical rhythm is maintained using a 4px base unit. Component spacing follows a "Stack" pattern:
- **Small (8px):** Internal component padding (e.g., label to input).
- **Medium (24px):** Standard spacing between related elements in a card or section.
- **Large (48px):** Clear separation between major content blocks to maintain the minimalist feel.

## Elevation & Depth

To maintain a soft and approachable feel, this design system avoids heavy shadows. Depth is communicated primarily through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** The base background is the Warm Cream. Cards and containers use a pure white background or a very subtle Sage tint to indicate elevation.
- **Borders:** Instead of shadows, use 1px solid strokes in a lightened version of the Sage color (#E2E8E2) to define boundaries.
- **Active States:** Subtle, diffused ambient shadows (4% opacity Charcoal) are reserved only for floating action buttons or active modal states to provide a tactile "pressed" or "lifted" feel.

## Shapes

The shape language is defined by a "Medium Rounded" philosophy. Sharp corners are avoided to ensure the UI feels safe and welcoming.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Section containers and large imagery containers use 1rem (16px) to 1.5rem (24px) radius to emphasize the "Soft" brand pillar.
- **Icons:** Use rounded caps and joins to match the curvature of the UI components.

## Components

### Buttons
Primary buttons use the Sage Green background with white text. Secondary buttons use a Sage outline with Sage text. The "Conversion" button (Terracotta) is reserved for the primary "Call to Action" on any given page (e.g., "Send Invites").

### Input Fields
Inputs are styled with a Cream-white background and a 1px Sage-tinted border. On focus, the border thickens to 2px in Primary Sage. Labels always sit above the field for accessibility.

### Cards
Cards are the primary content vessel. They use a white background, 16px padding, and a 1px light-sage border. Do not use shadows; rely on the border and the Cream background contrast to define the card area.

### Chips & Tags
Used for guest categories or registry filters. Chips should have a 100px (pill) radius and use a light Sage wash with dark text for the "unselected" state, and solid Sage for the "selected" state.

### Additional Elements
- **Progress Steppers:** Use a soft Sage line with Noto Serif numbering for the multi-step invitation or registry process.
- **Date Pickers:** Should emphasize touch-targets for mobile users, using the Terracotta accent for the "selected" date.