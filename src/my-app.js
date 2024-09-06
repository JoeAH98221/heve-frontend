import { LitElement, html, css } from 'lit';
import { initRouter } from './utilities/router.js';
import './views/home-view.js'; // Importa las vistas correctamente
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
      position: fixed;
      width: 98%;
      top: 0;
      background: white;
      z-index: 1000;
    }
    .logo img {
      max-height: 80px;
    }
    main {
      margin-top: 100px;
    }
  `;

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector('main');
    initRouter(outlet);
  }

  render() {
    return html`
      <header>
        <div class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Logo">
        </div>
        <sl-button-group label="Alignment">
          <sl-button size="large" href="/home">INICIO</sl-button>
          <sl-button size="large" href="/about">NOSOTROS</sl-button>
          <sl-button size="large" href="/services">SERVICIOS</sl-button>
          <sl-button size="large" href="/products">PRODUCTOS</sl-button>
          <sl-button size="large" href="/contact">CONTACTO</sl-button>
        </sl-button-group>
      </header>
      <main></main>
    `;
  }
}

customElements.define('my-app', MyApp);
