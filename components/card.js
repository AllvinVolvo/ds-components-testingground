/**
 * Card Web Component
 * Reusable across any framework or static HTML
 * 
 * Usage:
 * <design-card 
 *   image="./src/1.jpg"
 *   title="Card Title"
 *   text="Card description text"
 *   link="./card-detail.html">
 * </design-card>
 */

class DesignCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const image = this.getAttribute('image') || './src/placeholder.jpg';
    const title = this.getAttribute('title') || 'Card';
    const text = this.getAttribute('text') || '';
    const link = this.getAttribute('link') || '#';
    const ratio = this.getAttribute('ratio') || '1/1';

    // If link is provided, wrap in anchor, otherwise use div
    const wrapper = link ? 'a' : 'div';
    const linkAttr = link ? `href="${link}" class="component-card component-card--link"` : 'class="component-card"';

    this.innerHTML = `
      <${wrapper} ${linkAttr}>
        <div class="component-card__image-wrapper aspect-${ratio}">
          <img src="${image}" alt="${title}" class="component-card__image">
        </div>
        <h3 class="component-card__title">${title}</h3>
        ${text ? `<p class="component-card__text">${text}</p>` : ''}
      </${wrapper}>
    `;
  }
}

customElements.define('design-card', DesignCard);
