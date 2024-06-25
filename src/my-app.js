import { LitElement, html, css } from 'lit';
import './views/home-view.js';
import './views/about-view.js';
import './views/services-view.js';
import './views/products-view.js';
import './views/contact-view.js';

class MyApp extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
    .logo img {
      max-height: 80px;
    }
  `;

  static properties = {
    page: { type: String },
  };

  constructor() {
    super();
    this.page = 'home';
  }

  render() {
    return html`
    <header>
        <div class="logo">
            <img src="/public/logo.png" alt="Logo">
        </div>
        
        <sl-button-group label="Alignment">
          <sl-button size="large" href="#" @click=${() => this.page = 'home'}>INICIO</sl-button>
          <sl-button size="large" href="#" @click=${() => this.page = 'about'}>NOSOTROS</sl-button>
          <sl-button size="large" href="#" @click=${() => this.page = 'services'}>SERVICIOS</sl-button>
          <sl-button size="large" href="#" @click=${() => this.page = 'products'}>PRODUCTOS</sl-button>
          <sl-button size="large" href="#" @click=${() => this.page = 'contact'}>CONTACTO</sl-button>
        </sl-button-group>
      </header>
      <main>
        ${this._renderPage()}
      </main>
    `;
  }

  _renderPage() {
    switch(this.page) {
      case 'home':
        return html`<home-view></home-view>`;
      case 'about':
        return html`<about-view></about-view>`;
      case 'services':
        return html`<services-view></services-view>`;
      case 'products':
        return html`<products-view></products-view>`;
      case 'contact':
        return html`<contact-view></contact-view>`;
      default:
        return html`<p>Página no encontrada</p>`;
    }
  }
}

customElements.define('my-app', MyApp);
