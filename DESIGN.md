# Soft Celebration — Style Reference
> Nurtured Joy — a calming, welcoming space that evokes feelings of preparation, warmth, and quiet celebration, bathed in soft sage and warm cream light.

**Theme:** light

Soft Celebration feels like a peaceful Sunday morning in a sunlit nursery — breathable, quiet, and intentional. The design prioritizes clarity and a friction-less experience, wrapping functional elegance in an organic, tactile aesthetic. The visual language relies heavily on the interplay between the editorial timelessness of Noto Serif for headlines and the utilitarian precision of Inter for body text. Surfaces are soft and low-contrast, utilizing a warm cream canvas rather than stark white to reduce eye strain. Depth is achieved not through heavy shadows, but through tonal layers and delicate, light-sage outlines. The design avoids sharp corners, opting for medium-rounded shapes that feel safe, approachable, and human.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Primary Sage | `#6b8e6d` | `--color-primary-sage` | Primary brand anchor — used for primary actions, selected states, and key brand moments. Conveys growth and calm. |
| Sage Dark | `#426446` | `--color-sage-dark` | High-contrast text on light backgrounds, strong accents. |
| Sage Tint | `#c6ecc6` | `--color-sage-tint` | Subtle backgrounds for active states, chips, or elevated cards. |
| Warm Cream | `#fdfbf7` | `--color-warm-cream` | Base canvas and surface background. A softer, premium alternative to pure white. |
| Pure White | `#ffffff` | `--color-pure-white` | Elevated card surfaces and text on dark backgrounds. |
| Gentle Terracotta | `#cd7f62` | `--color-gentle-terracotta` | High-conversion accent — used sparingly for "RSVP" or "Register Now" to draw the eye without breaking the peaceful aesthetic. |
| Terracotta Dark | `#8c4a31` | `--color-terracotta-dark` | Text or icons requiring higher contrast within the warm spectrum. |
| Deep Charcoal | `#2d302e` | `--color-deep-charcoal` | Primary body text and headings. Ensures WCAG 2.1 AA contrast against cream backgrounds. |
| Soft Outline | `#e2e8e2` | `--color-soft-outline` | 1px solid borders for cards and inputs, defining boundaries without relying on shadows. |
| Muted Grey | `#5e5e5c` | `--color-muted-grey` | Secondary text, inactive states, and subtle UI elements. |

## Tokens — Typography

### Noto Serif — Editorial headlines and titles. Conveys the importance and timelessness of the life event, adding a premium, traditional touch. · `--font-noto-serif`
- **Substitute:** Merriweather or Lora
- **Weights:** 500, 600
- **Sizes:** 24px, 32px, 40px
- **Line height:** 1.20–1.40
- **Letter spacing:** normal
- **Role:** Editorial headlines and titles. Conveys the importance and timelessness of the life event, adding a premium, traditional touch.

### Inter — Functional body text, navigation, and UI elements. Ensures maximum legibility on mobile devices and provides a crisp, modern counterpoint to the serif. · `--font-inter`
- **Substitute:** Roboto or Helvetica Neue
- **Weights:** 400, 600
- **Sizes:** 12px, 16px, 18px
- **Line height:** 1.00–1.60
- **Letter spacing:** normal (0.05em for caps)
- **Role:** Functional body text, navigation, and UI elements. Ensures maximum legibility on mobile devices and provides a crisp, modern counterpoint to the serif.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| label-caps | 12px | 1.2 | 0.05em | `--text-label-caps` |
| body-md | 16px | 1.6 | normal | `--text-body-md` |
| button-text| 16px | 1.0 | normal | `--text-button` |
| body-lg | 18px | 1.6 | normal | `--text-body-lg` |
| heading-md | 24px | 1.4 | normal | `--text-heading-md` |
| heading-lg | 32px | 1.3 | normal | `--text-heading-lg` |
| heading-xl | 40px | 1.2 | normal | `--text-heading-xl` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable, breathable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| unit | 4px | `--spacing-unit` |
| stack-sm | 8px | `--spacing-stack-sm` |
| gutter | 16px | `--spacing-gutter` |
| container-margin| 20px | `--spacing-container-margin` |
| stack-md | 24px | `--spacing-stack-md` |
| stack-lg | 48px | `--spacing-stack-lg` |

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| sm | 4px (0.25rem) | `--radius-sm` |
| default | 8px (0.5rem) | `--radius-default` |
| md | 12px (0.75rem) | `--radius-md` |
| lg | 16px (1rem) | `--radius-lg` |
| xl | 24px (1.5rem) | `--radius-xl` |
| full | 9999px | `--radius-full` |

### Layout

- **Mobile Grid:** 4-column grid with 20px outer margins.
- **Desktop Grid:** 12-column grid, max container width 1140px.
- **Section Gap:** 48px (stack-lg) to maintain a minimalist, breathable feel.

## Components

### Primary Sage Button
**Role:** Standard primary actions.
Background Primary Sage (`#6b8e6d`), text Pure White (`#ffffff`), border-radius 8px. Text in Inter 600, 16px.

### Terracotta Conversion Button
**Role:** Primary "Call to Action" on a page (e.g., "Send Invites", "RSVP").
Background Gentle Terracotta (`#cd7f62`), text Pure White (`#ffffff`), border-radius 8px. Used sparingly to draw the eye.

### Secondary Outline Button
**Role:** Secondary actions.
Background transparent, border 1px solid Primary Sage (`#6b8e6d`), text Primary Sage. Border-radius 8px.

### Content Card
**Role:** Primary content vessel.
Background Pure White (`#ffffff`), padding 16px, border 1px solid Soft Outline (`#e2e8e2`). Border-radius 16px. No shadows. Relies on the Cream canvas background for contrast.

### Input Field
**Role:** Form entry.
Background Warm Cream (`#fdfbf7`), border 1px solid Soft Outline (`#e2e8e2`). On focus, border thickens to 2px Primary Sage. Labels sit above the field in Inter, 12px, ALL CAPS (label-caps). Border-radius 8px.

### Filter Chip / Category Tag
**Role:** Guest categories or registry filters.
Border-radius 100px (pill). Unselected: Sage Tint (`#c6ecc6`) background with Sage Dark text. Selected: Solid Primary Sage background with Pure White text.

## Do's and Don'ts

### Do
- Use Warm Cream (`#fdfbf7`) as the primary canvas to reduce eye strain and provide a softer, premium aesthetic.
- Define depth and elevation through tonal layers and 1px Soft Outline (`#e2e8e2`) borders, rather than drop shadows.
- Employ Noto Serif for all headings to establish an editorial, timeless feel appropriate for a life event.
- Use Inter with generous line-heights (1.6) for body text to ensure maximum legibility, especially for mobile users.
- Reserve Gentle Terracotta strictly for high-conversion actions (e.g., RSVP) to make them pop without overwhelming the calming palette.
- Maintain ample whitespace (48px between major blocks) to reduce cognitive load and enhance the minimalist feel.

### Don't
- Do not use heavy drop shadows on cards or buttons; this breaks the soft, tactile design philosophy. Use subtle, diffused ambient shadows (e.g., 4% opacity Charcoal) ONLY for active modal states or floating action buttons if absolutely necessary.
- Avoid sharp corners (0px radius) on interactive elements and containers; always use a minimum of 4px, standardizing on 8px for buttons and inputs, to keep the UI welcoming.
- Do not overuse the Terracotta accent color; its power lies in its scarcity.
- Never set body text in Noto Serif; reserve it exclusively for headings to maintain a clear typographic hierarchy.
- Do not use stark, pure white (`#ffffff`) as the main page background; always use Warm Cream.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Warm Cream Canvas | `#fdfbf7` | Base page background — soft and inviting |
| 1 | Pure White | `#ffffff` | Elevated card surfaces — creates subtle contrast against the cream canvas |
| 2 | Sage Tint | `#c6ecc6` | Background for subtle highlights, chips, or secondary active states |

## Elevation

- **Standard Elements:** Flat with 1px solid Soft Outline (`#e2e8e2`).
- **Active / Floating States:** `rgba(45, 48, 46, 0.04) 0px 4px 12px` (Deep Charcoal at 4% opacity) — used extremely sparingly.

## Imagery

Imagery should focus on warm, natural lighting, candid moments, and soft textures (e.g., linen, wood, flora). Avoid harsh, highly saturated, or overly staged stock photography. Images should ideally have slightly rounded corners (16px to 24px) to blend with the soft UI shapes.

## Layout

The layout is fluid and mobile-first, designed for easy, frictionless consumption on the go. The UI centers around a 4-column mobile grid with generous 20px outer margins. On larger screens, it expands to a 12-column grid capped at 1140px wide. Vertical spacing is ample, utilizing 48px gaps between major sections to let the content breathe. The overall flow should feel unhurried and structured, guiding the user gently from the editorial hero section down to the practical RSVP and registry details.

## Agent Prompt Guide

**Quick Color Reference**
- text (primary heading): #2d302e
- text (body): #2d302e
- background (canvas): #fdfbf7
- border (structural): #e2e8e2
- primary action: #6b8e6d
- conversion action: #cd7f62

**Example Component Prompts**

1. **Hero Section**: Warm Cream (`#fdfbf7`) background. Centered Noto Serif headline at 40px, color Deep Charcoal (`#2d302e`), line-height 1.2. Below it, body text at 18px Inter color Deep Charcoal. Primary Sage (`#6b8e6d`) button with Pure White text, 8px border-radius.
2. **Content Card**: Pure White (`#ffffff`) background, border 1px solid Soft Outline (`#e2e8e2`), border-radius 16px, padding 16px. No box shadow. Inside: Noto Serif heading at 24px.
3. **RSVP Section**: Prominent section with a Gentle Terracotta (`#cd7f62`) Call to Action button (Pure White text, 8px radius) to draw attention against the Warm Cream canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary-sage: #6b8e6d;
  --color-sage-dark: #426446;
  --color-sage-tint: #c6ecc6;
  --color-warm-cream: #fdfbf7;
  --color-pure-white: #ffffff;
  --color-gentle-terracotta: #cd7f62;
  --color-terracotta-dark: #8c4a31;
  --color-deep-charcoal: #2d302e;
  --color-soft-outline: #e2e8e2;
  --color-muted-grey: #5e5e5c;

  /* Typography — Font Families */
  --font-noto-serif: 'Noto Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-label-caps: 12px;
  --leading-label-caps: 1.2;
  --tracking-label-caps: 0.05em;
  --text-body-md: 16px;
  --leading-body-md: 1.6;
  --text-button: 16px;
  --leading-button: 1.0;
  --text-body-lg: 18px;
  --leading-body-lg: 1.6;
  --text-heading-md: 24px;
  --leading-heading-md: 1.4;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.3;
  --text-heading-xl: 40px;
  --leading-heading-xl: 1.2;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-stack-sm: 8px;
  --spacing-gutter: 16px;
  --spacing-container-margin: 20px;
  --spacing-stack-md: 24px;
  --spacing-stack-lg: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-default: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Surfaces */
  --surface-warm-cream: #fdfbf7;
  --surface-pure-white: #ffffff;
  --surface-sage-tint: #c6ecc6;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-primary-sage: #6b8e6d;
  --color-sage-dark: #426446;
  --color-sage-tint: #c6ecc6;
  --color-warm-cream: #fdfbf7;
  --color-pure-white: #ffffff;
  --color-gentle-terracotta: #cd7f62;
  --color-terracotta-dark: #8c4a31;
  --color-deep-charcoal: #2d302e;
  --color-soft-outline: #e2e8e2;
  --color-muted-grey: #5e5e5c;

  /* Typography */
  --font-noto-serif: 'Noto Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-label-caps: 12px;
  --text-body-md: 16px;
  --text-button: 16px;
  --text-body-lg: 18px;
  --text-heading-md: 24px;
  --text-heading-lg: 32px;
  --text-heading-xl: 40px;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-stack-sm: 8px;
  --spacing-gutter: 16px;
  --spacing-container-margin: 20px;
  --spacing-stack-md: 24px;
  --spacing-stack-lg: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-default: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```
