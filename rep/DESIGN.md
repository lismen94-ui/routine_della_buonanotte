---
name: Nocturne Whispers
colors:
  surface: '#101224'
  surface-dim: '#101224'
  surface-bright: '#36384c'
  surface-container-lowest: '#0b0d1e'
  surface-container-low: '#181a2c'
  surface-container: '#1c1e31'
  surface-container-high: '#27293c'
  surface-container-highest: '#323347'
  on-surface: '#e0e0fa'
  on-surface-variant: '#c6c5d4'
  inverse-surface: '#e0e0fa'
  inverse-on-surface: '#2d2f42'
  outline: '#8f8f9e'
  outline-variant: '#454652'
  surface-tint: '#bbc3ff'
  primary: '#bbc3ff'
  on-primary: '#0e2288'
  primary-container: '#3949ab'
  on-primary-container: '#bbc3ff'
  inverse-primary: '#4555b7'
  secondary: '#ebc23e'
  on-secondary: '#3c2f00'
  secondary-container: '#b69200'
  on-secondary-container: '#3a2d00'
  tertiary: '#b9c3ff'
  on-tertiary: '#1d2b6a'
  tertiary-container: '#414e8f'
  on-tertiary-container: '#b9c3ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee0ff'
  primary-fixed-dim: '#bbc3ff'
  on-primary-fixed: '#000e5e'
  on-primary-fixed-variant: '#2c3c9e'
  secondary-fixed: '#ffe087'
  secondary-fixed-dim: '#ebc23e'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dee1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#021355'
  on-tertiary-fixed-variant: '#354282'
  background: '#101224'
  on-background: '#e0e0fa'
  surface-variant: '#323347'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Literata
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 1.625rem
    fontWeight: '500'
    lineHeight: 2.125rem
    letterSpacing: 0em
  headline-md:
    fontFamily: Literata
    fontSize: 1.375rem
    fontWeight: '500'
    lineHeight: 1.875rem
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.625rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.45rem
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1.25rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

The design system establishes an enchanting, comforting bedtime experience designed to gently transition children and their caregivers from active daytime stimulation into quiet, restful evening slumber. Inspired by heirloom illustrated storybooks, the visual tone blends deep twilight atmospheres with tactile, reassuring elegance.

The identity operates across two intertwined user modalities: the functional, calming clarity required by parents orchestrating bedtime hygiene, and the magical, comforting storytelling environment experienced by children. Drawing inspiration from modern editorial softness and ambient luminous depth, the system relies on deep, velvety indigo layers illuminated by warm, moonlit glows. The atmosphere is deeply calming, free of abrupt contrasts or harsh artificial lighting, instilling a soothing sense of calm and ritual.

## Colors

The palette is tuned specifically for low-light evening environments to mitigate eye strain and prompt natural melatonin rhythms.

- **Primary (`#3949AB`)**: The twilight indigo anchor. Used for primary narrative actions, core focus states, and foundational brand expressions.
- **Secondary (`#FFD54F`)**: The starlight accent. A warm, glowing celestial yellow reminiscent of nightlights and celestial bodies, reserved for completion moments, stars, streaks, and delightful rewards.
- **Tertiary (`#7986CB`)**: A soft hydrangea mist indigo used for supplementary controls, ambient surface borders, and inactive progress paths.
- **Neutral (`#121426`)**: A deep nocturnal slate forming the foundation of dark mode surfaces. Layered tints built upon this shade create rich, atmospheric depth without stark black voids.

Contrast is maintained through luminous, soft on-surface tones (`#E8EAF6` and `#C5CAE9`), avoiding pure `#FFFFFF` to protect night-adjusted vision.

## Typography

The typographic hierarchy pairs literary warmth with functional legibility:

- **Literata** anchors the narrative experience. Its organic, bookish serifs evoke bedtime tales, storybooks, and gentle rituals, lending warmth and wonder to titles and ritual milestones.
- **Plus Jakarta Sans** serves functional UI elements, routine task descriptions, and administrative settings. Its rounded apertures and balanced proportions offer effortless legibility on handheld screens under dim bedroom lighting.

Optical hierarchy strictly limits display sizes to narrative checkpoints and bedtime chapter transitions. Large titles naturally adjust on compact screens via mobile-specific tokens to prevent disruptive text wrapping during sleepy interactions.

## Layout & Spacing

The layout model is built around a relaxed, touch-friendly rhythmic grid structured for one-handed night-time mobile operation:

- **Mobile Viewports (< 600px)**: 4-column fluid layout with `1.25rem` outer canvas padding and `1rem` gutters. Touch targets maintain a minimum dimension of `48px` with generous vertical spacing to prevent accidental taps in the dark.
- **Tablet / Expanded Viewports (600px - 1024px)**: 8-column layout with `2rem` margins, enabling split views that separate child storytelling cards from parental setup routines.
- **Desktop / Companion Dashboard (> 1024px)**: 12-column layout centered at a maximum content width of `1120px` with `2.5rem` margins.

Vertical rhythm adheres strictly to the `space-*` scale. Spacing between routine steps is intentionally generous (`space-lg` to `space-xl`) to preserve a tranquil, unhurried pace.

## Elevation & Depth

Visual depth eschews harsh drop shadows, relying instead on ambient, luminous layering that evokes moonlight filtering through twilight:

- **Tonal Stepping**: Depth is primarily communicated through stacked tonal surfaces. The canvas starts at deep nocturnal slate (`#121426`), rising to elevated ritual containers (`#1C2038`), and floating interactive tiles (`#262C4D`).
- **Moonlit Glow (Ambient Shadows)**: Floating cards and active routine elements project soft, tinted indigo halos (`box-shadow: 0 8px 32px -4px rgba(57, 73, 171, 0.28)`).
- **Celestial Focus**: Active or completed task cards incorporate a soft starlight perimeter glow (`0 0 16px rgba(255, 213, 79, 0.2)`), signaling progress with gentle, magical warmth rather than stark contrast.
- **Translucent Overlays**: Sheets and bottom drawers use subtle frosted backgrounds (`backdrop-filter: blur(16px)` with `rgba(18, 20, 38, 0.85)`) framed by hairline borders tinted at 12% opacity.

## Shapes

The shape system adopts a rounded design philosophy (Level 2), reinforcing safety, comfort, and approachability:

- **Standard Elements (0.5rem / 8px)**: Used for internal tags, inputs, and minor list controls.
- **Cards & Story Containers (`rounded-lg`, 1rem / 16px)**: Applied to routine cards, sleeping story books, and dialogue containers.
- **Featured Bedtime Modules (`rounded-xl`, 1.5rem / 24px)**: Applied to primary ritual overview cards and bedtime summary modules.
- **Interactive Controls (Pill / Fully Rounded)**: Routine completion toggles, audio playback pills, and primary CTAs use continuous circular radii (`9999px`) to emphasize touch friendliness and warmth.

## Components

### Buttons
- **Primary Action (Bedtime CTA)**: High-contrast pill button featuring primary twilight indigo (`#3949AB`) with crisp white-indigo text (`#E8EAF6`). Subtle indigo glow on active state.
- **Magical Action (Reward / Finish Routine)**: Starlight gold button (`#FFD54F`) with deep nocturnal text (`#121426`), reserved for completing steps or initiating the final sleep story.
- **Subtle / Secondary**: Translucent container (`rgba(255, 255, 255, 0.08)`) with refined Literata or Plus Jakarta typography, dissolving visual clutter.

### Routine Cards & Task Items
- **Inactive / Upcoming**: Tonal surface (`#1C2038`) with soft hairline border (`rgba(255, 255, 255, 0.06)`).
- **Active Step**: Elevated container (`#262C4D`) with a delicate indigo aura, displaying an illustrated routine icon alongside Literata headline typography.
- **Completed**: Tonal surface with secondary starlight gold check indicators and dimmed, relaxed typography indicating peaceful accomplishment.

### Checkboxes & Star Markers
- Custom celestial checkboxes: Circular indicators that transition into glowing stars (`#FFD54F`) when tapped, accompanied by gentle micro-interactions.

### Audio & Story Player Pill
- Floating bottom bar with ambient blur (`backdrop-filter: blur(20px)`), containing a playback toggle, chapter title in Literata, and a subtle glowing progress bar tracking lullabies or audiobooks.

### Chips & Routine Badges
- Soft pills with subtle tint fills (`rgba(121, 134, 203, 0.15)`) and delicate borders for categorizing steps (e.g., "Hygiene", "Storytime", "Lights Out").