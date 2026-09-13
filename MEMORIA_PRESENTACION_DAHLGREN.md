# Memoria — Presentación estratégica Dahlgren

Última actualización: 12/09/2026

## Estado actual

- La marca se denomina **Dahlgren**. No utilizar “Dahlgren y Asociados” en material nuevo.
- `index.html` ahora es un micrositio ejecutivo interactivo basado en `funcional_presentacion_roadmap.md`.
- Incluye hero, siete pilares con detalle, transformación del trabajo, transición de sistemas, roadmap de ocho etapas, AI Native y acceso a la plataforma.
- `index2.html` permanece como la maqueta funcional principal y permite volver a la presentación.
- La anterior maqueta de `index.html` se preservó en `maqueta-original.html`.

## Recursos agregados

- `assets/css/presentation.css`: estructura visual de la presentación.
- `assets/css/presentation-refinements.css`: identidad, legibilidad en sala y responsive.
- `assets/js/presentation.js`: contenido interactivo, pilares, sistemas y roadmap.
- `assets/js/header-menu.js`: comportamiento del menú hamburguesa.

## Identidad visual vigente

- Paleta: azul noche `#081537`, azul de marca `#30486d`, blanco y neutros.
- Tipografía: Montserrat, priorizando lectura a distancia.
- Evitar micro-labels, exceso de colores y tipografías decorativas.
- Logo vigente: `logo-bg-blue.png`, transparente y con tinta azul de marca.
- Header blanco.

## Responsive del header

- Más de 1200 px: navegación completa visible.
- Hasta 1200 px: menú hamburguesa y panel vertical con Visión, Transición, Roadmap, AI Native y Plataforma.
- Hasta 760 px: logo, hamburguesa y panel desplegable. No volver a utilizar navegación horizontal cortada.

## Verificación realizada

- `node --check assets/js/presentation.js` correcto.
- `node --check assets/js/header-menu.js` correcto.
- `git diff --check` correcto.
