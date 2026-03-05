class CompactMediaCard extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['image', 'aspect-ratio', 'title', 'href'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const image = this.getAttribute('image') || '';
    const aspectRatio = this.getAttribute('aspect-ratio') || '4-3';
    const title = this.getAttribute('title') || 'Card Title';
    const href = this.getAttribute('href') || '#';

    // Aspect ratio classes map
    const aspectMap = {
      '1-1': 'aspect-1/1',
      '4-3': 'aspect-4/3',
      '3-4': 'aspect-3/4',
      '16-9': 'aspect-16/9',
      '9-16': 'aspect-9/16',
      '21-9': 'aspect-21/9',
      '3-2': 'aspect-3/2'
    };

    const aspectClass = aspectMap[aspectRatio] || 'aspect-4/3';

    this.innerHTML = `
      <a 
        href="${href}" 
        class="flex flex-col bg-background-secondary hover:bg-background-primary active:bg-background-primary transition-colors no-underline"
        style="display: flex; text-decoration: none;"
      >
        <div class="${aspectClass} w-full overflow-hidden">
          <img 
            src="${image}" 
            alt="${title}"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex items-center justify-between px-24 py-16 gap-16">
          <span class="font-16 font-medium text-primary">${title}</span>
          <svg 
            class="flex-shrink-0" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </a>
    `;
  }
}

customElements.define('compact-media-card', CompactMediaCard);
