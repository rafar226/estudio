# Memoria del proyecto — Plataforma Dahlgren y Asociados

Última actualización: 06/09/2026

## Propósito

Prototipo navegable, visual y demostrativo para validar el flujo y las secciones de una futura plataforma integral para el estudio Dahlgren y Asociados. No incluye backend, autenticación, IA, procesamiento documental, permisos ni integraciones reales.

La maqueta utiliza HTML, CSS y JavaScript vanilla y es compatible con GitHub Pages.

## Identidad y enfoque

- Estudio: **Dahlgren y Asociados**.
- Idioma: español.
- Estilo: corporativo, sobrio, seguro y claro; evitar estética informal o excesivamente futurista.
- La experiencia inicial utiliza el perfil **Cliente**.
- La información y los datos son ficticios.

## Estructura actual

- `index.html`: aplicación de una sola página.
- `assets/css/styles.css`: estilos responsive.
- `assets/js/app.js`: vistas, estado, navegación y datos simulados.
- `funcional_plataforma_estudio.md`: alcance funcional original.
- `ETAPAS_PROYECTO.md`: alcance de la ruta de implementación.
- `ACTUALIZACION_GOBIERNO_DATOS_ANALISIS_IA.md`: alcance de gobierno de datos y análisis inteligente.

La aplicación usa navegación por hash, compatible con GitHub Pages. Ejemplos:

- `index.html#etapas`
- `index.html#mobile`

No usar rutas como `/index.html/etapas`.

## Funcionalidades ya representadas

### Experiencia principal

- Login conceptual.
- Selector de perfiles: Cliente, Socio/Administrador, Empleado/Contador y Asesor Financiero.
- Dashboard diferenciado para cliente y estudio.
- Flujo “Cómo funciona la plataforma”.
- Clientes, documentos, contabilidad, asistente, informes, analytics, vencimientos, novedades, comunicaciones, trazabilidad, logs, colaboradores, roles/permisos y administración.

### Documentos

- Carga simulada por lote: permite elegir cliente y múltiples archivos.
- Procesamiento visual y confirmación del cliente asociado.
- Estados, validación y detalle documental mock.

### Gobierno y accesos

- Colaboradores: alta conceptual con nombre, email/usuario, contraseña inicial y rol.
- Asignación de clientes por colaborador.
- Matriz de permisos por rol y área.
- Configuración conceptual de lo que cada cliente puede visualizar.
- Logs de consultas/búsquedas sensibles con usuario, perfil, cliente, término/recurso, contexto, IP simulada y resultado de autorización.

### Comunicaciones

- Novedades consultables por clientes y publicables por perfiles internos.
- Notificaciones push/mobile/web programables o automatizadas.
- Emails con templates predefinidos y programación conceptual.

### Gobierno del dato y análisis inteligente

- Señal de confiabilidad en información contable: fuente, actualización y validación.
- Administración > Gobierno del dato: indicadores, calidad demostrativa por área, políticas y pendientes de revisión.
- Análisis Inteligente exclusivo para perfiles internos:
  - tablero global de análisis;
  - flujo de IA gobernada;
  - ejecución simulada;
  - hallazgos, fuentes, recomendaciones y acciones mock.
- Diferenciación conceptual:
  - Asistente: reactivo, responde preguntas.
  - Análisis Inteligente: proactivo, detecta y recomienda.

### Etapas del proyecto

- Ruta `#etapas`.
- Ocho etapas (0 a 7), agrupadas en Fundamentos, Core Operativo, Inteligencia y Automatización, y Producción Empresarial.
- Bloques colapsables y etapas expandibles.
- Objetivo, alcance y habilitador de cada bloque.
- Capacidades transversales, incluyendo Gobernanza de datos.
- Hitos progresivos y cierre estratégico.
- No incorpora precios, fechas definitivas, costos ni detalles técnicos internos.

### Vista mobile

- Ruta `#mobile`.
- Galería horizontal de pantallas de teléfono como referencia de validación.
- Muestra Inicio del Cliente, Asistente, Documentos y Novedades/Alertas.
- No intenta todavía implementar un flujo mobile completo.

### Mejoras de operación y experiencia (06/09/2026)

- Nueva sección interna **Automatizaciones** con reglas simuladas de vencimientos, documentación pendiente, procesamiento de documentos y alertas críticas. Las reglas pueden activarse/desactivarse visualmente.
- Se retiró “Cómo funciona la plataforma” de la navegación principal; la maqueta debe entenderse mediante su uso y las rutas de presentación.
- Documentos incorpora **Carga masiva desde Drive** como flujo demostrativo, sin conexión real a Google Drive.
- Asistente Inteligente conserva su diseño y ahora suma un compositor visual para escribir consultas.
- Analytics incorpora contexto, período, etiquetas mensuales, indicador y leyenda en el gráfico de facturación administrada.

## Criterios funcionales acordados

### Evolución de propuesta visual (07/09/2026)

- La plataforma sigue siendo una **maqueta comercial**: todos los datos, acciones, integraciones y resultados son simulados; no se debe presentar ningún flujo como backend operativo.
- Se incorporó la visión del archivo `funcional_nueva_vision_estudio.md` como guía de evolución sin eliminar los módulos anteriores.
- Se añadieron mockups navegables para: Atención requerida, Cliente 360°, IVA inteligente, conciliación bancaria, cierre mensual, sueldos, renta financiera, firmas y aprobaciones, Email Bot, Auditor IA, métricas de automatización/ROI y Agenda.
- Gestión documental ahora presenta el flujo de procesamiento inteligente y deriva inconsistencias a la bandeja de excepciones.
- La IA se presenta como capa transversal que procesa, controla, recomienda y asiste; las decisiones sensibles mantienen revisión humana.
- Se eliminó el acceso independiente de “Asistente inteligente” del sidebar. Ahora existe un acceso destacado en el header: **Mensajes y asistencia**.
- En perfiles internos, Mensajes y asistencia muestra la bandeja de conversaciones de clientes, asistencia IA y casos derivados.
- En perfil **Cliente**, Mensajes y asistencia muestra exclusivamente la conversación y el contexto de su propia empresa; nunca debe exponer otros clientes, conversaciones ni opciones internas.
- “Etapas del proyecto” y “Vista mobile” quedaron dentro de “Vista de propuesta” en el header, para mantenerlas como material de presentación y no como módulos operativos.
- La vista de firmas conserva únicamente el workflow visual de revisión, aprobación, firma y trazabilidad; se retiraron aclaraciones técnicas que distraían de la propuesta.

### Ajustes visuales recientes

- Evolución de facturación: valores mensuales, meses, variación y acumulado.
- Gestión documental: se retiró la columna “Validación”.
- Agenda reemplaza la entrada aislada de vencimientos e integra tareas, riesgos, próximos hitos y preparación.
- Sueldos: las tarjetas KPI usan correctamente sus estados visuales, sin mostrar clases técnicas como texto.

- La IA debe mostrarse como capacidad basada en datos confiables, permisos, contexto y trazabilidad.
- Las acciones sensibles requieren revisión/control humano: la IA recomienda, no ejecuta automáticamente.
- Roles globales no bastan para conceder acceso: se combinan `rol + cliente asignado + área/dato habilitado`.
- Los clientes ven sólo información habilitada por el estudio.
- Gobierno del dato debe aparecer transversalmente, no sólo como módulo aislado.

## Próximos pasos sugeridos

## Alternativa 2 — Arquitectura por áreas (09/09/2026)

Se creó una segunda maqueta independiente para presentar una alternativa de navegación y organización al cliente:

- Entrada: `index2.html`.
- Recursos exclusivos: `assets2/`.
- La maqueta original (`index.html` y `assets/`) no debe modificarse al trabajar esta alternativa.
- `index2.html` referencia únicamente `assets2/css/styles.css`, `assets2/js/app.js`, `assets2/js/client-messaging.js` y `assets2/js/navigation-refinements.js`.

### Decisiones de UX vigentes

- No se utiliza el Hub de Áreas como paso obligatorio: permanece disponible como **Mapa de áreas** dentro de “Vista de propuesta”.
- Los espacios de trabajo se abren directamente desde el sidebar mediante siete accesos visuales: Agente Fiscal, Agente Laboral, Agente Contable, Agente Auditor, Agente Financiero, Agente Documental y Agente de Atención.
- Cada agente tiene workspace propio con navegación contextual, métricas y agente IA especializado de demostración.
- El sidebar interno se agrupa en:
  - accesos principales: Inicio, Clientes y Atención requerida;
  - Agentes del estudio;
  - Operación;
  - Dirección;
  - Gobierno y seguridad.
- Operación, Dirección y Gobierno y seguridad arrancan plegados.
- Se retiraron los puntos/badges decorativos del sidebar y de los agentes para una presentación más limpia.
- El header presenta “Avisos” como acción clara y el avatar se fuerza como círculo.
- La navegación lateral preserva el scroll de la página y del sidebar, y actualiza el hash sin el salto visual habitual.

### Estado técnico

- `assets2/js/app.js` contiene las vistas y la capa de áreas.
- `assets2/js/navigation-refinements.js` contiene los refinamientos de navegación, scroll, grupos plegables y acción de avisos; mantenerlos en esta capa evita alterar la maqueta original.
- Se validó la sintaxis de ambos scripts con `node --check`.
- Próximo foco acordado: revisar los detalles visuales restantes y luego definir qué funcionalidad/mockup final agregar en cada sección.

1. Revisar visualmente el recorrido completo y consolidar textos/datos mock según feedback del cliente.
2. Refinar el Expediente Digital Inteligente como vista unificada, si se requiere mayor profundidad de presentación.
3. Definir el nivel de detalle final para mobile antes de implementar interacciones específicas.
4. Si se avanza hacia producto real, transformar estas vistas en historias de usuario, modelo de permisos, modelo de datos y plan técnico; no reutilizar la lógica mock como lógica productiva.

## Verificación técnica realizada

- `node --check assets/js/app.js` pasó correctamente tras las últimas modificaciones.
- El archivo funcional original ya se encuentra almacenado en UTF-8; los caracteres alterados vistos en consola correspondieron a la interpretación de salida de la terminal.
