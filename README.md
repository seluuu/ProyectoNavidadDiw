# I Rally & Concentración Histórica Classic Motor

Plataforma web oficial del **I Rally & Concentración Histórica Classic Motor** para la Asociación *Classic Motor Club* (DAW · DIW · Trabajo de Evaluación I · curso 2026/2027).

## Descripción

Aplicación frontend desarrollada en Angular con arquitectura basada en **Standalone Components**, estado reactivo con **Signals** y maquetación propia mediante **SCSS modular (BEM)** sin frameworks CSS externos, siguiendo criterios de diseño *mobile-first* (`375px`, `768px`, `1440px`) y accesibilidad WCAG AA.

### Secciones de la aplicación

- **Inicio (`/`)**: presentación del evento, vehículos destacados y punto de encuentro.
- **Catálogo interactivo (`/catalogo` y `/catalogo/:id`)**: listado filtrable en tiempo real con señales y ficha técnica de cada vehículo.
- **Itinerario y programa (`/itinerario`)**: cronograma de la jornada y recorrido por etapas.
- **Inscripción (`/inscripcion`)**: formulario reactivo para participantes y vehículos con validación de campos.
- **Guía de estilo (`/guia-estilo`)**: documentación viva de tokens cromáticos, tipografía, botones y componentes base.

## Stack tecnológico

- **Angular** `^22.2.0` (Standalone Components, Router, Signals, `HttpClient`)
- **TypeScript** `~6.0.2` (modo estricto `"strict": true`)
- **SCSS** modular con `@use` y metodología BEM
- **Vitest** `^5.0.0` para pruebas unitarias
- **Gestor de paquetes:** `npm` (`11.19.0`)

## Requisitos previos

- Node.js (`v24.x` recomendada)
- npm (`11.x`)

## Puesta en marcha y scripts

Instalar dependencias:

```bash
npm install
```

Scripts disponibles en `package.json`:

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo (`ng serve`) en `http://localhost:4200/`. |
| `npm run build` | Compila la aplicación en `dist/classic-motor-rally/`. |
| `npm run watch` | Compila en modo desarrollo observando cambios (`ng build --watch --configuration development`). |
| `npm test` | Ejecuta la batería de pruebas unitarias con Vitest (`ng test`). |

## Estructura principal

```text
ProyectoNavidadDiw/
├── angular.json
├── package.json
├── tsconfig.json
├── public/                 # Recursos estáticos servidos tal cual
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.scss
    └── app/
        ├── app.config.ts
        ├── app.routes.ts
        └── app.component.{ts,html,scss}
```

## Despliegue

- **URL de producción:** _(pendiente)_
