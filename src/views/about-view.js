import { LitElement, html } from 'lit';

class AboutView extends LitElement {
  render() {
    return html`<h2>Sobre Nosotros</h2>`;
  }
}

customElements.define('about-view', AboutView);
