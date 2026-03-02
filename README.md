# Media Banner Component

A responsive media banner component built with pure HTML and CSS. The component showcases different layouts across multiple breakpoints with a flexible, maintainable structure.

## Features

- **Fully Responsive**: Adapts to different screen sizes with optimized layouts
- **4 Breakpoints**: 
  - **sm**: 375px (Mobile)
  - **md**: 768px (Tablet)
  - **lg**: 1280px (Desktop)
  - **xl**: 1920px (Large Desktop)

- **Two Layout Types**:
  - **Vertical Layout** (Mobile/sm): Image on top, content below
  - **Horizontal Layout** (Tablet & Desktop/md, lg, xl): 50/50 split with image left or right

- **Component Elements**:
  - Image in 4:3 aspect ratio
  - Title
  - Subtitle
  - Body text
  - Call-to-action button

- **Spacing**:
  - 28px page margins
  - 24px gutter for spacing between components

## File Structure

```
.
├── index.html      # Main HTML file with component examples
├── styles.css      # Responsive styles with breakpoints
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in a web browser
2. Resize the browser window or use browser developer tools to test different breakpoints
3. The component automatically switches between vertical and horizontal layouts

## Component Classes

### Main Container
- `.media-banner` - Main component wrapper
- `.media-banner--vertical` - Vertical layout variant
- `.media-banner--horizontal` - Horizontal layout variant
- `.media-banner--image-left` - Image on the left (horizontal only)
- `.media-banner--image-right` - Image on the right (horizontal only)

### Child Elements
- `.media-banner__image-wrapper` - Image container with aspect ratio
- `.media-banner__image` - Image element
- `.media-banner__content` - Content wrapper
- `.media-banner__title` - Main title
- `.media-banner__subtitle` - Subtitle/tagline
- `.media-banner__body` - Body text
- `.media-banner__button` - Call-to-action button

## Customization

Edit the CSS custom properties in `styles.css` to customize colors and spacing:

```css
:root {
    --page-margin: 28px;
    --gutter: 24px;
    --color-primary: #4A90E2;
    --color-secondary: #333;
    --color-text: #555;
    --color-border: #ddd;
}
```

## Browser Support

Works in all modern browsers that support:
- CSS Flexbox
- CSS Custom Properties (Variables)
- CSS Media Queries
- CSS padding-bottom aspect ratio trick

## License

Open source - feel free to use and modify for your projects.
