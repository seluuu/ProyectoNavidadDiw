/** Enlace de navegación principal compartido entre cabecera y pie de página. */
export interface NavItem {
  readonly label: string;
  readonly route: string;
  readonly isExact: boolean;
}

/** Las cinco secciones oficiales exigidas en la navegación principal. */
export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', route: '/', isExact: true },
  { label: 'Catálogo', route: '/catalogo', isExact: false },
  { label: 'Itinerario', route: '/itinerario', isExact: false },
  { label: 'Inscripción', route: '/inscripcion', isExact: false },
  { label: 'Guía de estilo', route: '/guia-estilo', isExact: false },
];
