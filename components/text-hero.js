/**
 * Text Hero Web Component
 * Full-bleed hero section with title and subtitle
 * 
 * Usage:
 * <text-hero 
 *   title="Hero Title"
 *   subtitle="Hero Subtitle">
 * </text-hero>
 */

class TextHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const ctaType = (this.getAttribute('cta-type') || '').toLowerCase();
    const ctaPrimaryText = this.getAttribute('cta-primary-text') || 'Explore';
    const ctaSecondaryText = this.getAttribute('cta-secondary-text') || 'Learn More';

    const hasCta = ctaType === 'button' || ctaType === 'button-group';

    const ctaMarkup = ctaType === 'button-group'
      ? `
        <div class="button-group justify-start">
          <button class="button-outlined px-24 py-12">${ctaSecondaryText}</button>
          <button class="button-filled px-24 py-12">${ctaPrimaryText}</button>
        </div>
      `
      : ctaType === 'button'
        ? `<button class="button-filled px-24 py-12">${ctaPrimaryText}</button>`
        : '';

    this.innerHTML = `
      <div class="aspect-21/9 bg-background-secondary flex-col justify-between items-start py-48 px-24">
        ${hasCta
          ? `
            <div class="flex-col items-start">
              <h1 class="statement-1 text-primary m-0">${title}</h1>
              <p class="statement-3 text-secondary m-0 mt-48">${subtitle}</p>
            </div>
            ${ctaMarkup}
          `
          : `
            <h1 class="statement-1 text-primary m-0">${title}</h1>
            <p class="statement-3 text-secondary m-0">${subtitle}</p>
          `
        }
      </div>
    `;
  }
}

customElements.define('text-hero', TextHero);
