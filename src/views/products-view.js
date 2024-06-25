import { LitElement, html, css } from 'lit';

class ProductsView extends LitElement {
  static styles = css`
    .header-container {
      width: 100%;
      overflow: hidden; /* Para asegurar que no haya desbordamiento */
    }
    .header-container img {
      width: 100%; /* Asegura que la imagen llene el contenedor */
      height: auto; /* Mantiene la proporción de la imagen */
    }
  `;

  render() {
    return html`
      <div class="header-container">
        <img src="https://thumbs.dreamstime.com/b/inscription-software-testing-virtual-display-business-modern-technology-internet-networking-concept-172967597.jpg" alt="Encabezado de Productos" />
      </div>
    `;
  }
}

customElements.define('products-view', ProductsView);
