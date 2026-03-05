/**
 * Media Card Web Component
 * Reusable across any framework or static HTML
 * 
 * @typedef {Object} MediaCardProps
 * @property {string} image - Image source URL
 * @property {string} [ratio='1/1'] - Aspect ratio (4:3, 3:2, 1:1, 4:5, 2:3, 9:16, 16:9)
 * @property {string} title - Card title (20px emphasis)
 * @property {string} [subtitle] - Card subtitle (16px standard)
 * @property {string} [body] - Card body text (12px standard)
 * @property {string} [buttonText='Learn More'] - Button text
 * @property {'primary'|'secondary'} [variant='secondary'] - Background color variant
 * @property {string} [link] - Optional link for clickable cards
 * 
 * Usage:
 * <media-card 
 *   image="./src/1.jpg"
 *   ratio="1/1"
 *   title="Card Title"
 *   subtitle="Subtitle text"
 *   body="Body text"
 *   button-text="CTA"
 *   variant="secondary"
 *   link="./card-detail.html">
 * </media-card>
 */

class MediaCard extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Called when element is inserted into DOM
   * @returns {void}
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Renders the card component
   * @returns {void}
   */
  render() {
    const image = this.getAttribute('image') || './src/placeholder.jpg';
    const ratio = this.getAttribute('ratio') || '1/1';
    const title = this.getAttribute('title') || 'Card Title';
    const subtitle = this.getAttribute('subtitle') || '';
    const body = this.getAttribute('body') || '';
    const buttonText = this.getAttribute('button-text') || 'Learn More';
    const variant = this.getAttribute('variant') || 'secondary';
    const link = this.getAttribute('link');

    const aspectClass = this.getAspectClass(ratio);
    const variantClass = `media-card--${variant}`;

    const cardHTML = `
      <div class="media-card ${variantClass}">
        <div class="media-card__image-wrapper ${aspectClass}">
          <img src="${image}" alt="${title}" class="media-card__image">
        </div>
        <div class="media-card__content">
          <h3 class="media-card__title font-20 font-medium text-primary">${title}</h3>
          ${subtitle ? `<p class="media-card__subtitle font-16 text-primary">${subtitle}</p>` : ''}
          ${body ? `<p class="media-card__body font-12 text-secondary">${body}</p>` : ''}
          <button class="button-text">${buttonText}</button>
        </div>
      </div>
    `;

    // Wrap in link if provided
    if (link) {
      this.innerHTML = `
        <a href="${link}" class="media-card-link">
          ${cardHTML}
        </a>
      `;
    } else {
      this.innerHTML = cardHTML;
    }
  }

  /**
   * Maps ratio strings to aspect ratio classes
   * @param {string} ratio - Aspect ratio
   * @returns {string} Aspect class name
   */
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
    return ratioMap[ratio] || 'aspect-1/1';
  }
}

customElements.define('media-card', MediaCard);



