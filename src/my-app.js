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
      position: fixed; /* Fija el header */
      width: 98%; /* Asegura que el header ocupe todo el ancho */
      top: 0; /* Posiciona el header en la parte superior */
      background: white; /* Fondo blanco para el header */
      z-index: 1000; /* Asegura que el header esté por encima de otros elementos */
    }
    .logo img {
      max-height: 80px;
    }
    main {
      margin-top: 100px; /* Añade margen superior para evitar que el contenido se superponga con el header */
    }
  `;

  static properties = {
    page: { type: String },
  };

  constructor() {
    super();
    this.page = this._getPageFromUrl();
    window.onpopstate = () => {
      this.page = this._getPageFromUrl();
    };
  }

  render() {
    return html`
      <header>
        <div class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Logo">
        </div>
        <sl-button-group label="Alignment">
          <sl-button size="large" href="#" @click=${() => this._navigate('home')}>INICIO</sl-button>
          <sl-button size="large" href="#" @click=${() => this._navigate('about')}>NOSOTROS</sl-button>
          <sl-button size="large" href="#" @click=${() => this._navigate('services')}>SERVICIOS</sl-button>
          <sl-button size="large" href="#" @click=${() => this._navigate('products')}>PRODUCTOS</sl-button>
          <sl-button size="large" href="#" @click=${() => this._navigate('contact')}>CONTACTO</sl-button>
        </sl-button-group>
      </header>
      <main>
        ${this._renderPage()}
      </main>
    `;
  }

  _getPageFromUrl() {
    const path = window.location.pathname;
    return path === '/' ? 'home' : path.slice(1);
  }

  _navigate(page) {
    this.page = page;
    window.history.pushState({}, '', `/${page}`);
  }

  _renderPage() {
    switch (this.page) {
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
