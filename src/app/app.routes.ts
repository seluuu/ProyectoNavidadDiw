import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Inicio · I Rally Classic Motor',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'catalogo',
    title: 'Catálogo de vehículos · I Rally Classic Motor',
    loadComponent: () =>
      import('./pages/catalog/catalog.component').then((m) => m.CatalogComponent),
  },
  {
    path: 'catalogo/:id',
    title: 'Ficha del vehículo · I Rally Classic Motor',
    loadComponent: () =>
      import('./pages/catalog-detail/catalog-detail.component').then(
        (m) => m.CatalogDetailComponent,
      ),
  },
  {
    path: 'itinerario',
    title: 'Itinerario y programa · I Rally Classic Motor',
    loadComponent: () =>
      import('./pages/itinerary/itinerary.component').then((m) => m.ItineraryComponent),
  },
  {
    path: 'inscripcion',
    title: 'Inscripción · I Rally Classic Motor',
    loadComponent: () =>
      import('./pages/registration/registration.component').then((m) => m.RegistrationComponent),
  },
  {
    path: 'guia-estilo',
    title: 'Guía de estilo · I Rally Classic Motor',
    loadComponent: () =>
      import('./pages/style-guide/style-guide.component').then((m) => m.StyleGuideComponent),
  },
  {
    path: '**',
    title: 'Página no encontrada · I Rally Classic Motor',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
