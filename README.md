# MateMundo

Aplicación web educativa de matemática para primaria. Incluye medidas y conversiones, figuras geométricas, ángulos, ejercicios con pistas y desafíos aleatorios.

## Abrir en tu computadora

Serví la carpeta con cualquier servidor local, por ejemplo desde VS Code con **Live Server** o con `python -m http.server 8000`, y abrí `http://localhost:8000`. En GitHub Pages funciona directamente, sin configuración adicional.

## Publicar en GitHub Pages

1. Subí todos los archivos a un repositorio de GitHub.
2. Entrá en **Settings → Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**.
4. Seleccioná la rama `main`, carpeta `/ (root)`, y guardá.

No necesita instalación, base de datos ni proceso de compilación.

## Agregar contenidos

Los tipos de medidas están definidos en `js/data.js`. Al agregar otro bloque al objeto `topics`, aparecerá automáticamente en las lecciones, la práctica, el conversor y los exámenes.

La interfaz está separada así:

- `index.html`: estructura y textos.
- `geometria.html`: módulo independiente de figuras y ángulos.
- `css/styles.css`: diseño adaptable.
- `js/data.js`: temas, unidades y factores.
- `js/app.js`: navegación, ejercicios, conversor, examen y progreso local.
- `js/geometria.js`: preguntas y comportamiento del módulo de geometría.
