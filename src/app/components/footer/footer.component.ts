import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bg-dark text-white text-center text-lg-start mt-auto">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4">
            <h5 class="text-uppercase">Sobre Nosotros</h5>
            <p>
              Comodidad y estilo en cada prenda. ¡Visítanos y descubre nuestra
              colección!
            </p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="text-uppercase">Enlaces Útiles</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white text-decoration-none"
                  >Servicios</a
                >
              </li>
              <li>
                <a href="#!" class="text-white text-decoration-none"
                  >Contacto</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="text-uppercase">Redes Sociales</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a
                  href="https://www.instagram.com/llevamea.paris/"
                  class="text-white text-decoration-none"
                  >Instagram</a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/llevamea.parisrdls"
                  class="text-white text-decoration-none"
                  >Facebook</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2025 Desarrollado por Nahuel
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent { }
