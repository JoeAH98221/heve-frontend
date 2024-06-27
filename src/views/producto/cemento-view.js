import { LitElement, html, css } from "lit";

class CementoView extends LitElement {
  static styles = css`
    .content {
      text-align: center; /* Centra el texto */
      margin: 0px auto; /* Añade un margen para separarlo del contenido superior */
      padding: 0 20px; /* Añade espacio a ambos lados del texto */
      max-width: 1000px; /* Limita el ancho máximo del contenido */
    }
    .card-items {
      display: flex;
      justify-content: center; /* Centra las tarjetas horizontalmente */
      gap: 20px; /* Espacio entre cada sl-card */
      padding: 20px;
      flex-wrap: wrap; /* Permite que las tarjetas se ajusten a varias líneas si es necesario */
    }
    .card-overview {
      max-width: 300px;
    }
    .card-overview small {
      color: var(--sl-color-neutral-500);
    }
    .card-overview [slot="footer"] {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-header {
      max-width: 300px;
    }
    .card-header [slot="header"] {
      display: flex;
      align-items: center;
      font-size: larger;
    }
    .card-header h3 {
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="content">
        Equipos para ensayos de calidad y resistencia del cemento, desde su
        estado fresco hasta su endurecimiento. Incluye análisis químicos y
        físicos para asegurar la conformidad con normas establecidas.
      </div>
      <div class="card-items">
        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 1</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 2</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 3</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 4</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 5</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 6</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 7</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>PRODUCTO 8</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>
      </div>
    `;
  }
}

customElements.define("cemento-view", CementoView);
