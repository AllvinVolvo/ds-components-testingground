# Volvo Cars Component Library

A comprehensive component library built with the **Volvo Cars CSS Design System v1**. This testing ground showcases multiple reusable web components with fully responsive layouts, semantic HTML, and rich interaction states—all powered by Volvo's design tokens and utility classes.

## Overview

This project demonstrates best practices for building accessible, maintainable components using **pure HTML, CSS, and vanilla JavaScript** with the Volvo Cars design system. No framework dependencies—just web components and design system integration.

## Components

### 1. **Media Banner**
A responsive image-and-text banner with flexible layouts across all screen sizes.
- **Layouts**: Vertical (mobile) → Horizontal (tablet+)
- **Aspect Ratios**: 7 options (1:1, 4:3, 3:2, 16:9, 9:16, 21:9, 3:4)
- **Elements**: Image, title (heading-2), subtitle, body text, CTA button
- **File**: `components/media-banner.js` | **Demo**: [media-banner-detail.html](media-banner-detail.html)

### 2. **Media Card**
A flexible card component with image on top and customizable content below.
- **Aspect Ratios**: 7 options (1:1, 4:3, 3:2, 16:9, 9:16, 21:9, 3:4)
- **Variants**: Primary/Secondary backgrounds
- **Elements**: Image, title (font-20 emphasis), subtitle, body text
- **File**: `components/card.js` | **Demo**: [card-detail.html](card-detail.html)

### 3. **Text Hero**
A full-bleed typography-led hero component with optional CTA variants.
- **Layouts**: Static title/subtitle or flex layout with CTAs
- **CTA Variants**: Button, Button Group (responsive stacking)
- **Typography**: statement-1 title, statement-3 subtitle
- **Features**: Button padding refinements, responsive CTA wrapping
- **File**: `components/text-hero.js` | **Demo**: [text-hero-detail.html](text-hero-detail.html)

### 4. **Compact Media Card**
A clickable card with image, title, and arrow icon with interaction states.
- **Aspect Ratios**: 7 options (1:1, 4:3, 3:2, 16:9, 9:16, 21:9, 3:4)
- **Interaction States**: 
  - Hover: `state-primary-subtle` background
  - Pressed: `state-primary-strong` background
- **Accessibility**: Semantic `<a>` tag, aria-hidden icon
- **File**: `components/compact-media-card.js` | **Demo**: [compact-media-card-detail.html](compact-media-card-detail.html)

## Getting Started

1. **Open the project**:
   ```bash
   open index.html
   ```
   or serve from a local server (recommended for image loading)

2. **Browse components**:
   - Visit the overview page to see all components
   - Click on component cards to view detailed demos and variants
   - Use the sidebar navigation to jump between components

3. **Test responsiveness**:
   - Resize your browser or use DevTools device emulation (sm/md/lg/xl breakpoints)
   - Components adapt automatically across all screen sizes

## Features

- ✅ **Web Components**: Reusable custom elements with attributes
- ✅ **Volvo CSS Design System**: 100% integration with design tokens & utilities
- ✅ **Responsive Design**: Mobile-first approach with 4 breakpoints
- ✅ **Semantic HTML**: Proper heading hierarchy, alt text, ARIA attributes
- ✅ **Interaction States**: Hover, active/pressed states with design system colors
- ✅ **Dark Mode**: Automatic support via Volvo CSS tokens
- ✅ **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- ✅ **Accessible**: Focus states, keyboard navigation, proper semantics

## Project Structure

```
.
├── index.html                          # Overview page with all components
├── media-banner-detail.html            # Media Banner demos
├── card-detail.html                    # Media Card demos
├── text-hero-detail.html               # Text Hero demos
├── compact-media-card-detail.html      # Compact Media Card demos
├── components/
│   ├── media-banner.js                 # Media Banner component
│   ├── card.js                         # Media Card component
│   ├── text-hero.js                    # Text Hero component
│   └── compact-media-card.js           # Compact Media Card component
├── src/
│   ├── 1.jpg through 10.jpg            # Demo images
│   └── test.avif                       # Legacy image
├── styles.css                          # Structural & layout CSS
└── README.md                           # This file
```

## Design System Integration

### Volvo Cars CSS v1

The project loads the complete design system via CDN:

```html
<!-- Fonts -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/font-face.8324f4d8.css">

<!-- Design Tokens -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/tokens.bf5afda4.css">

<!-- Base Styles -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles.1d8be33a.css">

<!-- Responsive Utilities -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles_md.8c1b3d58.css" media="(min-width: 30rem)">
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles_xl.cd367963.css" media="(min-width: 100rem)">

<!-- Hover States -->
<link rel="stylesheet" href="https://www.volvocars.com/static/shared/pkg/css/v1/styles_hover.47ab975c.css" media="(hover: hover)">
```

### Typography Classes

- **Headings**: `heading-1`, `heading-2`, `heading-3`
- **Font Sizes**: `font-12`, `font-14`, `font-16`, `font-20`, `font-24`
- **Weights**: `font-medium` (emphasis)
- **Statements**: `statement-1`, `statement-2`, `statement-3`

### Color Classes

- **Text**: `text-primary`, `text-secondary`, `text-accent-blue`
- **Background**: `bg-background-primary`, `bg-background-secondary`
- **State Overlays**: Used for hover/pressed states

### Layout Utilities

- **Flexbox**: `flex`, `flex-col`, `flex-row`, `justify-between`, `items-start`, `items-center`
- **Spacing**: `px-24`, `py-16`, `mb-64`, `gap-16`, etc. (4px-based units)
- **Sizing**: `w-full`, `flex-shrink-0`
- **Aspect Ratios**: `aspect-1/1`, `aspect-4/3`, `aspect-16/9`, `aspect-21/9`, etc.

## Component Examples

### Media Banner
```javascript
<media-banner
  image="./src/1.jpg"
  title="Responsive Banner"
  subtitle="With flexible layouts"
  body="Content adapts from vertical to horizontal layout"
  button-text="Learn More"
  ratio="4:3"
  variant="primary">
</media-banner>
```

### Media Card
```javascript
<media-card
  image="./src/4.jpg"
  title="Media Card"
  subtitle="Flexible container"
  body="Image on top with customizable content below"
  button-text="View"
  link="card-detail.html"
  ratio="4:3"
  variant="primary">
</media-card>
```

### Text Hero
```javascript
<text-hero 
  title="Safety Is Our Priority"
  subtitle="Advanced protection systems"
  cta-type="button-group"
  cta-primary-text="Build Yours"
  cta-secondary-text="Compare">
</text-hero>
```

### Compact Media Card
```javascript
<compact-media-card
  image="./src/1.jpg"
  aspect-ratio="4-3"
  title="Clickable Card"
  href="https://example.com">
</compact-media-card>
```

## Responsive Breakpoints

- **sm** (0px-29.9rem): Mobile - single column, vertical stacking
- **md** (30rem-63.9rem): Tablet - 2-column layouts begin
- **lg** (64rem-99.9rem): Desktop - full-width content
- **xl** (100rem+): Large desktop - constrained layout with max-width

## Key Implementation Details

### Text Hero Button Group Behavior
Button groups in the Text Hero component use `width: 100%` and `justify-start` with `flex-wrap: wrap`, allowing buttons to:
- Stack horizontally across full hero width
- Automatically wrap to next line when space is insufficient
- Maintain responsive behavior on all screen sizes

### Compact Media Card Interaction States
Uses custom CSS classes with Volvo design tokens:
```css
.compact-media-card__link:hover {
    background-color: var(--v-color-state-primary-subtle);
}

.compact-media-card__link:active {
    background-color: var(--v-color-state-primary-strong);
}
```

### Page Navigation & Sidebar
- Persistent sidebar navigation using localStorage state
- Hamburger menu toggle on mobile (md breakpoint)
- Active link highlighting on current page

## Browser Support

Works in all modern browsers supporting:
- CSS Flexbox & Grid
- CSS Custom Properties (Variables)
- CSS Media Queries
- CSS Aspect Ratio
- Web Components (Custom Elements)
- ES6 JavaScript (classes, arrow functions)

## Notes for Developers

- **No Build Process**: Components are plain JavaScript web components—no compilation needed
- **Design Tokens First**: Always prefer Volvo CSS tokens and utilities over custom CSS
- **Semantic HTML**: Use proper heading hierarchy and ARIA attributes
- **Accessibility**: Test keyboard navigation and screen reader compatibility
- **Responsive Testing**: Use browser DevTools to test across all breakpoints

## Future Enhancements

Potential additions for expanding the component library:
- Form components (inputs, buttons, validation)
- Modal/Dialog components
- Navigation components (tabs, breadcrumbs)
- Data visualization (tables, charts)
- Tooltip and popover components

## License

Open source - feel free to use and modify for your projects.
