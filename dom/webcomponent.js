class WebComponentButton extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('click', () => {
      console.log('WebComponentButton');
    })
  }

  connectedCallback() {
    this.style.border = 'solid 1px #333';
    this.style.padding = '10px 20px';
  }
}

window.customElements.define(
  'app-button',
  WebComponentButton
)