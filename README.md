# Media Banner Component

A responsive media banner component built with the Volvo Cars CSS Design System. The component showcases different layouts across multiple breakpoints with a flexible, maintainable structure leveraging Volvo's comprehensive design tokens and utility classes.

## Overview

This project demonstrates the implementation of reusable responsive banner components using the **Volvo Cars CSS Library v1**, replacing custom CSS with standardized design system tokens for colors, typography, spacing, and layout utilities.

## Features

- **Fully Responsive**: Adapts to different screen sizes with optimized layouts
- **Design System Integration**: 100% built with Volvo Cars CSS tokens and utilities
- **4 Breakpoints**: 
  - **sm**: 0px - 767px (Mobile)
  - **md**: 768px - 1279px (Tablet)
  - **lg**: 1280px - 1919px (Desktop)
  - **xl**: 1920px+ (Large Desktop)

- **Two Layout Types**:
  - **Vertical Layout** (Mobile/sm): Image on top, content below (100% width each)
  - **Horizontal Layout** (Tablet & Desktop/md, lg, xl): 50/50 split with image left or right

- **7 Aspect Ratio Variants**:
  - 4:3 (classic)
  - 3:2 (photography standard)
  - 1:1 (square)
  - 4:5 (portrait)
  - 2:3 (enhanced portrait)
  - 9:16 (ultra-tall portrait)
  - 16:9 (cinematic widescreen)

- **Component Elements**:
  - Responsive image with fixed aspect ratio
  - Title (Heading 2)
  - Subtitle (emphasized text)
  - Body text
  - Call-to-action button (Volvo button-text component)

## File Structure

```
.
├── index.html          # Main HTML with 9 banner component examples
├── styles.css          # Component-specific styling with Volvo tokens
├── src/
│   └── test.avif       # Test image file
└── README.md           # This file
```

## Getting Started

1. Open `index.html` in a web browser
2. Resize the browser window or use browser developer tools to test different breakpoints
3. The component automatically switches between vertical (sm) and horizontal (md+) layouts

## Design System Integration

### Volvo Cars CSS Library v1

The project loads the complete Volvo Cars CSS design system via CDN:

```html
<!-- Fonts -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/font-face.8324f4d8.css">

<!-- Design Tokens (colors, spacing, typography) -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/tokens.bf5afda4.css">

<!-- Base Styles -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles.1d8be33a.css">

<!-- Responsive Utilities (md breakpoint) -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles_md.8c1b3d58.css" media="(min-width: 30rem)">

<!-- Large Screen Utilities (xl breakpoint) -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles_xl.cd367963.css" media="(min-width: 100rem)">

<!-- Hover States -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles_hover.47ab975c.css" media="(hover: hover)">
```

### Utility Classes Used

- **Layout**: `flex-col`, `md:flex-row`, `md:flex-row-reverse`, `w-full`, `md:w-1/2`
- **Aspect Ratios**: `aspect-4/3`, `aspect-3/2`, `aspect-1/1`, `aspect-4/5`, `aspect-2/3`, `aspect-9/16`, `aspect-16/9`
- **Components**: `button-text` (tertiary action button)

### Design Tokens Used

**Spacing Tokens** (--v-space-*)
- Fixed: 2px, 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Fluid: s (32-48px), m (48-64px), l (64-96px), pagemargin, gutter

**Color Tokens** (--v-color-*)
- Foreground: primary, secondary, accent-blue
- Surface: neutral, primary, secondary
- Background: primary, secondary
- Ornament: (borders/accents)

**Typography Tokens** (--v-font-*)
- heading-2 (display font for titles)
- font-16 (body size for subtitles)
- font-14 (smaller text size)
- sans-family (font stack)
- emphasis-weight (font weight for highlighted text)

## Component Architecture

### HTML Structure

```html
<div class="media-banner flex-col md:flex-row">
  <!-- Image container: 100% width on sm, 50% on md+ -->
  <div class="media-banner__image-wrapper w-full md:w-1/2 aspect-4/3 md:aspect-4/3">
    <img src="./src/test.avif" alt="Banner image" class="media-banner__image">
  </div>
  
  <!-- Content container: 100% width on sm, 50% on md+ -->
  <div class="media-banner__content w-full md:w-1/2">
    <h3 class="media-banner__title">Title</h3>
    <p class="media-banner__subtitle">Subtitle</p>
    <p class="media-banner__body">Body text</p>
    <button class="button-text">Action</button>
  </div>
</div>
```

### CSS Styling

All custom styling in `styles.css` uses Volvo design tokens:

**Spacing**
```css
:root {
    --page-margin: var(--v-space-32);         /* 32px */
    --gutter: var(--v-space-24);              /* 24px */
}

.demo-section h2 {
    margin-bottom: var(--v-space-48);         /* 48px */
}

.media-banner__title {
    margin-bottom: var(--v-space-16);         /* 16px */
}

.media-banner__subtitle,
.media-banner__body {
    margin-bottom: var(--v-space-24);         /* 24px */
}
```

**Typography**
```css
.media-banner__title {
    font: var(--v-font-heading-2);
}

.media-banner__subtitle {
    font: var(--v-font-16);
    font-weight: var(--v-font-emphasis-weight);
}

.media-banner__body {
    font: var(--v-font-14);
}
```

**Colors**
```css
.demo-section h2 {
    color: var(--v-color-foreground-primary);
}

.media-banner {
    background: var(--v-color-background-secondary);
}

.media-banner__title {
    color: var(--v-color-foreground-primary);
}

.media-banner__body {
    color: var(--v-color-foreground-secondary);
}
```

## Responsive Behavior

### Small Screens (sm, ≤ 767px)

```css
@media (max-width: 767px) {
    .media-banner {
        flex-direction: column;
    }
    
    .media-banner__image-wrapper,
    .media-banner__content {
        width: 100%;
    }
}
```

- Image and content stack vertically
- Both take full width
- Image aspect ratio determines image height
- Content scrolls below image

### Medium Screens and Up (md, ≥ 768px)

```css
@media (min-width: 768px) {
    .media-banner {
        align-items: flex-start;
    }
    
    .media-banner__content {
        align-self: stretch;
    }
}
```

- Image and content align horizontally (50/50 split)
- Image width drives its height (via aspect ratio)
- Content vertically centers relative to image height
- Image maintains fixed aspect ratio as browser resizes

## Customization

To customize the design system tokens, modify the CSS variable mappings in `styles.css`:

```css
:root {
    --page-margin: var(--v-space-32);        /* Change page padding */
    --gutter: var(--v-space-24);             /* Change component gaps */
    --color-primary: var(--v-color-foreground-accent-blue);
    --color-secondary: var(--v-color-foreground-primary);
    --color-text: var(--v-color-foreground-secondary);
    --color-border: var(--v-color-ornament-primary);
    --font-family: var(--v-font-sans-family);
}
```

Or directly use Volvo tokens in component styles without intermediary mappings.

## Browser Support

Works in all modern browsers that support:
- CSS Flexbox
- CSS Custom Properties (Variables)
- CSS Media Queries
- CSS Aspect Ratio
- Modern image formats (AVIF, WebP)

## Migration Notes

This project was fully migrated from custom CSS to the Volvo Cars CSS Design System v1, including:
- ✅ Layout utilities (flex, width, aspect ratios)
- ✅ Design tokens (colors, typography, spacing)
- ✅ Button components (button-text)
- ✅ Responsive utilities (md, xl breakpoints)

All hardcoded pixel values replaced with Volvo spacing tokens for consistency and maintainability.

## License

Open source - feel free to use and modify for your projects.
