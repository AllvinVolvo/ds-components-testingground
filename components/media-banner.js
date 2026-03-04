/**
 * Media Banner Web Component
 * Reusable across any framework or static HTML
 * 
 * Usage:
 * <media-banner 
 *   image="./src/1.jpg"
 *   ratio="4:3"
 *   title="Title"
 *   subtitle="Subtitle"
 *   body="Body text"
 *   variant="left"
 *   background="primary"
 *   button-text="Learn More">
 * </media-banner>
 */

class MediaBanner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const image = this.getAttribute('image') || './src/placeholder.jpg';
    const ratio = this.getAttribute('ratio') || '4:3';
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const body = this.getAttribute('body') || '';
    const variant = this.getAttribute('variant') || 'left';
    const background = this.getAttribute('background') || 'primary';
    const buttonText = this.getAttribute('button-text') || 'Learn More';

    // Determine layout direction
    const flexDirection = variant === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row';

    // Determine background color
    const backgroundClass = background === 'secondary' 
      ? 'bg-background-secondary' 
      : 'bg-background-primary';

    // Map ratio to aspect class
    const aspectClass = this.getAspectClass(ratio);

    this.innerHTML = `
      <div class="media-banner flex-col ${flexDirection} ${backgroundClass}">
        <div class="media-banner__image-wrapper w-full lg:w-1/2 ${aspectClass} lg:${aspectClass}">
          <img src="${image}" alt="Banner image" class="media-banner__image">
        </div>
        <div class="media-banner__content w-full lg:w-1/2">
          <h3 class="media-banner__title">${title}</h3>
          <p class="media-banner__subtitle">${subtitle}</p>
          <p class="media-banner__body">${body}</p>
          <button class="button-text">${buttonText}</button>
        </div>
      </div>
    `;
  }

  getAspectClass(ratio) {
    const ratioMap = {
      '4:3': 'aspect-4/3',
      '3:2': 'aspect-3/2',
      '1:1': 'aspect-1/1',
      '4:5': 'aspect-4/5',
      '2:3': 'aspect-2/3',
      '9:16': 'aspect-9/16',
      '16:9': 'aspect-16/9',
    };
    return ratioMap[ratio] || 'aspect-4/3';
  }
}

customElements.define('media-banner', MediaBanner);
