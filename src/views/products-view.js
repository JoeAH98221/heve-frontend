import { LitElement, html, css } from "lit";

class ProductsView extends LitElement {
  static styles = css`
    .header-container {
      width: 100%;
      overflow: hidden; /* Para asegurar que no haya desbordamiento */
    }
    .header-container img {
      width: 100%; /* Asegura que la imagen llene el contenedor */
      height: 350px; /* Mantiene la proporción de la imagen */
    }
    .content {
      text-align: center; /* Centra el texto */
      margin: 100px auto; /* Añade un margen para separarlo del contenido superior */
      padding: 0 20px; /* Añade espacio a ambos lados del texto */
      max-width: 1000px; /* Limita el ancho máximo del contenido */
    }
    sl-tab-group::part(nav) {
      display: flex;
      justify-content: center; /* Centra los elementos dentro del nav */
      flex-wrap: wrap; /* Permite que los tabs se envuelvan si es necesario */
    }
    sl-tab::part(base) {
      margin: 0 10px; /* Añade margen a cada tab para espaciarlo */
    }
  `;

  render() {
    return html`
      <div class="header-container">
        <img
          src="https://st.depositphotos.com/49078592/55273/i/1600/depositphotos_552735934-stock-photo-text-showing-inspiration-product-test.jpg"
          alt="Encabezado de Productos"
        />
      </div>

      <div class="content">
        <p>
          Contamos con más de <b>(INGRESE AÑOS)</b> años en el mercado
          comercializando equipo para la verificación de calidad en los
          materiales de construcción, siempre en cumplimiento de normas
          nacionales e internacionales, con el fin de brindar seguridad,
          confianza y tranquilidad a nuestros clientes en sus proyectos de
          infraestructura y macroestructura. <br /><br />
          Aquí encontrarás los equipos necesarios para pruebas de calidad en:
        </p>
      </div>

      <div class="content">
        <sl-tab-group>
          <sl-tab slot="nav" panel="concreto">CONCRETO</sl-tab>
          <sl-tab slot="nav" panel="suelos">SUELOS</sl-tab>
          <sl-tab slot="nav" panel="cemento">CEMENTO</sl-tab>
          <sl-tab slot="nav" panel="asfalto">ASFALTO</sl-tab>
          <sl-tab slot="nav" panel="agregados">AGREGADOS</sl-tab>
          <sl-tab slot="nav" panel="generales">GENERALES</sl-tab>
          <sl-tab slot="nav" panel="acero">ACERO</sl-tab>

          <sl-tab-panel name="concreto">
            <concreto-view></concreto-view>
          </sl-tab-panel>

          <sl-tab-panel name="suelos">
            <suelos-view></suelos-view>
          </sl-tab-panel>

          <sl-tab-panel name="cemento">
            <cemento-view></cemento-view>
          </sl-tab-panel>

          <sl-tab-panel name="asfalto">
            <asfalto-view></asfalto-view>
          </sl-tab-panel>

          <sl-tab-panel name="agregados">
            <agregados-view></agregados-view>
          </sl-tab-panel>

          <sl-tab-panel name="generales">
            <generales-view></generales-view>
          </sl-tab-panel>

          <sl-tab-panel name="acero">
            <cemento-view></cemento-view>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
    `;
  }
}

customElements.define("products-view", ProductsView);
