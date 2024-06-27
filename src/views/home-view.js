import { LitElement, html, css } from "lit";

class HomeView extends LitElement {
  static styles = css`
    .carousel-container {
      max-width: 600px; /* Ajusta el ancho del carrusel */
      margin: 0 auto; /* Centra el carrusel horizontalmente */
    }
    .carousel-img {
      width: 100%; /* Puedes ajustar el tamaño según tus necesidades */
      height: auto; /* Mantiene la proporción de la imagen */
      max-height: 250px;
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
      <div class="carousel-container">
        <sl-carousel navigation autoplay loop>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
              src="https://adrianalonso.es/wp-content/uploads/2017/06/testing.jpg"
            />
          </sl-carousel-item>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
              src="https://adictosaltrabajo.com/wp-content/uploads/2019/12/testing-en-un-mundo-agile.png"
            />
          </sl-carousel-item>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
              src="https://media.telefonicatech.com/telefonicatech/uploads/2021/1/7261_testing.jpg"
            />
          </sl-carousel-item>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
              src="https://www.fitaacademy.in/includes/assets/img/blog/software-testing.jpg"
            />
          </sl-carousel-item>
        </sl-carousel>
      </div>

      <div>
        <h1 align="center">ALGUNOS DE NUESTROS PRODUCTOS</h1>
      </div>

      <div class="card-items">
        <sl-card class="card-header">
          <div slot="header"><b>CONCRETO</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Equipos y servicios especializados para el ensayo y verificación
              de la calidad del concreto, incluyendo pruebas de resistencia,
              durabilidad y consistencia, asegurando que cumpla con los
              estándares nacionales e internacionales.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>SUELOS</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Instrumentación y tecnología para la caracterización y análisis de
              suelos. Incluye pruebas de compactación, permeabilidad, y
              resistencia para garantizar la calidad y estabilidad en proyectos
              de construcción.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>CEMENTO</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Equipos para ensayos de calidad y resistencia del cemento, desde
              su estado fresco hasta su endurecimiento. Incluye análisis
              químicos y físicos para asegurar la conformidad con normas
              establecidas.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>
      </div>

      <div class="card-items">
        <sl-card class="card-header">
          <div slot="header"><b>ASFALTOS</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Soluciones para el ensayo y control de calidad de mezclas
              asfálticas. Incluye pruebas de viscosidad, densidad, y resistencia
              para asegurar la durabilidad y desempeño en pavimentación.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>AGREGADOS</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Equipos para la evaluación de propiedades físicas y mecánicas de
              agregados utilizados en la construcción. Incluye análisis
              granulométricos, resistencia al desgaste y ensayos de limpieza.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>

        <sl-card class="card-header">
          <div slot="header"><b>GENERALES</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Instrumentos y servicios de laboratorio para pruebas diversas que
              no encajan específicamente en las otras categorías, pero que son
              esenciales para asegurar la calidad en diversos materiales de
              construcción.
            </div>
            <div slot="footer">
              <sl-button variant="primary" pill>More Info</sl-button>
            </div>
          </sl-card>
        </sl-card>
      </div>

      <div class="card-items">
        <sl-card class="card-header">
          <div slot="header"><b>ACEROS</b></div>
          <sl-card class="card-overview">
            <img
              slot="image"
              src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            />
            <div style="text-align: justify;">
              Equipos y tecnología para la prueba de calidad y resistencia de
              aceros utilizados en la construcción. Incluye ensayos de tracción,
              flexión, y análisis de composición química para garantizar el
              cumplimiento con normas y especificaciones.
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

customElements.define("home-view", HomeView);
