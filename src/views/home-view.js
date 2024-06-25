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
  `;

  render() {
    return html`
      <div class="carousel-container">
        <sl-carousel navigation autoplay loop>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
              src="/public/testing_1.jpg"
            />
          </sl-carousel-item>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
              src="/public/testing_2.png"
            />
          </sl-carousel-item>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
              src="/public/testing_3.png"
            />
          </sl-carousel-item>
          <sl-carousel-item>
            <img
              class="carousel-img"
              alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
              src="/public/testing_4.jpg"
            />
          </sl-carousel-item>
        </sl-carousel>
      </div>
      <div>
        <h1 align='center'>ALGUNOS DE NUESTROS PRODUCTOS</h1>
      </div>
      <div class="card-items">
        <sl-card class="card-overview">
          <img
            slot="image"
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          />

          <strong>Mittens</strong><br />
          This kitten is as cute as he is playful. Bring him home today!<br />
          <small>6 weeks old</small>

          <div slot="footer">
            <sl-button variant="primary" pill>More Info</sl-button>
          </div>
        </sl-card>
        <sl-card class="card-overview">
          <img
            slot="image"
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          />

          <strong>Mittens</strong><br />
          This kitten is as cute as he is playful. Bring him home today!<br />
          <small>6 weeks old</small>

          <div slot="footer">
            <sl-button variant="primary" pill>More Info</sl-button>
          </div>
        </sl-card>
        <sl-card class="card-overview">
          <img
            slot="image"
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          />

          <strong>Mittens</strong><br />
          This kitten is as cute as he is playful. Bring him home today!<br />
          <small>6 weeks old</small>

          <div slot="footer">
            <sl-button variant="primary" pill>More Info</sl-button>
          </div>
        </sl-card>
      </div>
      <div class="card-items">
        <sl-card class="card-overview">
          <img
            slot="image"
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          />

          <strong>Mittens</strong><br />
          This kitten is as cute as he is playful. Bring him home today!<br />
          <small>6 weeks old</small>

          <div slot="footer">
            <sl-button variant="primary" pill>More Info</sl-button>
          </div>
        </sl-card>
        <sl-card class="card-overview">
          <img
            slot="image"
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          />

          <strong>Mittens</strong><br />
          This kitten is as cute as he is playful. Bring him home today!<br />
          <small>6 weeks old</small>

          <div slot="footer">
            <sl-button variant="primary" pill>More Info</sl-button>
          </div>
        </sl-card>
        <sl-card class="card-overview">
          <img
            slot="image"
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
          />

          <strong>Mittens</strong><br />
          This kitten is as cute as he is playful. Bring him home today!<br />
          <small>6 weeks old</small>

          <div slot="footer">
            <sl-button variant="primary" pill>More Info</sl-button>
          </div>
        </sl-card>
      </div>
    `;
  }
}

customElements.define("home-view", HomeView);
