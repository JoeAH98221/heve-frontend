import { Router } from '@vaadin/router';

export function initRouter(outlet) {
  const router = new Router(outlet);
  router.setRoutes([
    { path: '/', component: 'home-view' },
    { path: '/about', component: 'about-view' },
    { path: '/services', component: 'services-view' },
    { path: '/products', component: 'products-view' },
    { path: '/contact', component: 'contact-view' },
    { path: '(.*)', component: 'not-found-view' }, // Para manejar rutas no encontradas
  ]);
}
