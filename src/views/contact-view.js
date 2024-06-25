import { LitElement, html } from 'lit';

class ContactView extends LitElement {
  render() {
    return html`<h2>Contacto</h2>`;
  }
}

customElements.define('contact-view', ContactView);
