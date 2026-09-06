# ETAPAS_PROYECTO.md

## Objetivo

Agregar al prototipo existente una nueva vista denominada **Etapas del proyecto**, destinada a mostrar de manera clara, visual y dinámica cómo se propone construir e implementar progresivamente la plataforma.

Esta vista NO reemplaza ni modifica el recorrido funcional actual. Debe integrarse al prototipo ya desarrollado y servir principalmente para la presentación al cliente.

> La plataforma se construye por etapas, con entregables concretos y validaciones progresivas, hasta llegar a una solución empresarial completa.

## Antes de desarrollar

Codex debe primero inspeccionar el repositorio actual:

- estructura del proyecto;
- navegación y rutas;
- estilos;
- tipografías;
- colores;
- cards;
- botones;
- sidebar/header;
- responsive;
- componentes reutilizables.

**No rediseñar la aplicación ni eliminar funcionalidades existentes.** La nueva sección debe sentirse como parte natural del prototipo actual.

## Navegación

Agregar una opción: **Etapas del proyecto**.

Usar la solución de routing que mejor se adapte al código actual y siga siendo compatible con GitHub Pages (`etapas.html`, `/#etapas`, `/etapas` u otra equivalente).

## Concepto visual

Mostrar un recorrido:

**Relevamiento → Núcleo → Datos → Portal → IA → Automatización → Inteligencia → Producción**

Utilizar cards conectadas, timeline, stepper o una combinación. Cada etapa debe tener una vista resumida y poder expandirse para mostrar el detalle.

En estado cerrado mostrar solamente:

- número;
- nombre;
- descripción de una línea;
- tags principales;
- “Ver detalle”.

No saturar las cards.

# Bloques del proyecto

## A — Fundamentos
Etapas 0 y 1.

**Concepto:** definir correctamente el sistema y construir una base sólida y segura.

## B — Core Operativo
Etapas 2 y 3.

**Concepto:** centralizar la información y comenzar a transformar la operación diaria del estudio.

## C — Inteligencia y Automatización
Etapas 4, 5 y 6.

**Concepto:** utilizar la información acumulada para automatizar consultas, anticiparse a necesidades y generar conocimiento.

## D — Producción Empresarial
Etapa 7.

**Concepto:** consolidar la solución para su utilización empresarial a escala.

---

# ETAPA 0 — Relevamiento y arquitectura

**Descripción:** Comprender en profundidad cómo trabaja el estudio y definir la estructura sobre la cual se construirá la plataforma.

**Tags:** Procesos · Datos · Documentos · Arquitectura · Seguridad

### Incluye

- reuniones con responsables de las distintas áreas;
- relevamiento de procesos actuales;
- consultas frecuentes de clientes;
- análisis inicial del repositorio documental;
- inventario de tipos de documentos;
- análisis de carpetas y datos existentes;
- identificación de sistemas actuales;
- estructura de organizaciones, empresas, personas y grupos económicos;
- reglas de negocio;
- definición inicial de roles y permisos;
- necesidades de seguridad;
- arquitectura técnica;
- modelo inicial de datos;
- estrategia de procesamiento documental;
- estrategia de migración histórica;
- prioridades funcionales;
- casos reales para pruebas.

### Resultado

**Arquitectura aprobada + modelo funcional + plan detallado de implementación.**

---

# ETAPA 1 — Núcleo seguro de la plataforma

**Descripción:** Construcción de la infraestructura lógica, seguridad, usuarios y permisos que soportarán toda la plataforma.

**Tags:** Usuarios · Permisos · Seguridad · Datos · Trazabilidad

### Incluye

- autenticación;
- organizaciones y clientes;
- colaboradores;
- usuarios y sesiones;
- roles;
- permisos por sección/módulo;
- permisos por cliente;
- asignaciones;
- estructura principal de datos;
- almacenamiento seguro;
- segregación de información entre organizaciones;
- ambientes de desarrollo, pruebas y producción;
- backups;
- registro de accesos;
- logs técnicos;
- primera capa de trazabilidad.

### Resultado

**Base empresarial segura sobre la cual pueden comenzar a operar clientes y colaboradores.**

---

# ETAPA 2 — Expediente Digital Inteligente y documentos

**Descripción:** Centralización de la información histórica y documental de cada cliente.

**Tags:** Expediente · Documentos · Históricos · Validación · Búsqueda

### Incluye

- Expediente Digital Inteligente 360°;
- carga individual y múltiple de documentos;
- categorías;
- períodos;
- versiones;
- metadatos;
- almacenamiento de originales;
- procesamiento documental;
- extracción de información;
- normalización;
- validación automática;
- validación asistida por IA;
- revisión humana cuando corresponda;
- asociación dato-documento;
- buscador;
- filtros;
- históricos;
- trazabilidad del procesamiento;
- inicio de migración controlada del repositorio actual.

### Resultado

**Cada cliente comienza a contar con una historia digital centralizada, estructurada y trazable.**

---

# ETAPA 3 — Portal del cliente y operación interna

**Descripción:** Primera experiencia operativa para clientes y colaboradores del estudio.

**Tags:** Dashboard · Clientes · Colaboradores · Vencimientos · Autoservicio

### Portal del cliente

- dashboard personalizado;
- información disponible;
- documentos;
- vencimientos;
- estados y pendientes;
- novedades y noticias;
- notificaciones;
- informes disponibles;
- carga de documentación.

### Operación interna

- dashboard del estudio;
- cartera de clientes;
- clientes asignados;
- responsables;
- colaboradores;
- tareas y pendientes;
- vencimientos;
- información contable/impositiva;
- accesos según permisos;
- seguimiento de actividad.

### Resultado

**Primera versión operativa donde clientes y empleados pueden comenzar a utilizar la plataforma en tareas reales.**

> El cliente comienza a resolver necesidades sin depender exclusivamente de WhatsApp, email o llamadas.

---

# ETAPA 4 — Asistente inteligente

**Descripción:** Incorporación de un asistente capaz de interpretar la información completa disponible de cada cliente.

**Tags:** IA · Consultas · Documentos · Datos · Fuentes

### Incluye

- asistente conversacional;
- interpretación de datos estructurados;
- interpretación de documentación;
- contexto histórico;
- búsqueda semántica;
- combinación de múltiples fuentes;
- respuestas contextualizadas;
- aplicación de permisos;
- visualización de fuentes;
- fecha de actualización de la información;
- historial de conversaciones;
- registro de búsquedas y consultas;
- trazabilidad de respuestas;
- derivación a un colaborador cuando no sea posible resolver automáticamente.

### Ejemplo

> ¿Cuánto debo de IVA 2025 y cuánto saldo tengo registrado en Banco Nación?

La respuesta simulada debe combinar información fiscal, financiera y documentos relacionados, mostrando las fuentes utilizadas.

### Resultado

**El sistema comienza a resolver automáticamente una parte importante de las consultas que actualmente requieren intervención humana.**

Preparar visualmente un indicador de **Consultas resueltas automáticamente**, sin establecer todavía un porcentaje contractual.

---

# ETAPA 5 — Comunicación y automatización proactiva

**Descripción:** La plataforma comienza a anticiparse a situaciones y comunicarse proactivamente con los clientes.

**Tags:** Notificaciones · Novedades · Alertas · Reglas · Automatización

### Incluye

- centro de comunicaciones;
- notificaciones;
- novedades;
- noticias;
- comunicaciones individuales;
- comunicaciones masivas;
- segmentación;
- programación;
- plataforma;
- email;
- push cuando corresponda;
- seguimiento de envío y apertura;
- reglas automáticas;
- alertas;
- vencimientos;
- documentación pendiente;
- derivaciones;
- registro completo de comunicaciones.

### Ejemplo de automatización

**SI** faltan 5 días para un vencimiento  
**Y** la obligación continúa pendiente  
**ENTONCES** enviar una notificación al cliente.

### Resultado

**El estudio comienza a anticiparse a las necesidades del cliente en lugar de trabajar únicamente de manera reactiva.**

---

# ETAPA 6 — Inteligencia, informes y proyecciones

**Descripción:** Transformar el histórico acumulado en información útil para análisis y toma de decisiones.

**Tags:** Analytics · Informes · KPIs · Proyecciones · Oportunidades

### Informes

- ejecutivos;
- contables;
- impositivos;
- financieros;
- comparativos;
- generación automática;
- exportación;
- almacenamiento dentro del expediente.

### Analytics

- indicadores;
- históricos;
- gráficos;
- comparaciones;
- filtros avanzados;
- analytics por cliente;
- analytics global del estudio;
- evolución de consultas;
- evolución de automatización;
- comportamiento de usuarios.

### Proyecciones

- facturación;
- gastos;
- impuestos;
- liquidez;
- flujo de fondos;
- escenarios simulados.

### Inteligencia futura

Preparar conceptualmente para:

- detección de patrones;
- necesidades frecuentes;
- oportunidades de nuevos servicios;
- segmentación;
- oportunidades financieras;
- futura asistencia al asesoramiento económico/financiero.

### Resultado

**La información deja de utilizarse solamente para operar y comienza a generar conocimiento para clientes y para el estudio.**

---

# ETAPA 7 — Mobile, migración final y estabilización

**Descripción:** Consolidación de la plataforma para su utilización empresarial a escala.

**Tags:** Mobile · QA · Migración · Performance · Producción

### Incluye

- experiencia mobile;
- optimización responsive;
- funciones específicas de dispositivos cuando corresponda;
- notificaciones push;
- QA integral;
- pruebas funcionales;
- pruebas de permisos;
- pruebas de segregación de información;
- performance;
- revisión de seguridad;
- monitoreo;
- estabilización;
- corrección de incidencias;
- migración progresiva de clientes restantes;
- migración documental acordada;
- capacitación;
- acompañamiento inicial;
- puesta en producción definitiva.

### Resultado

**Plataforma empresarial consolidada para operación web y mobile.**

---

# Dependencias y trabajo en paralelo

Representar una secuencia lógica entre las etapas, pero NO dar a entender que son bloques completamente aislados.

Algunas tareas pueden superponerse:

- UX/UI puede avanzar mientras se desarrolla el núcleo;
- QA debe comenzar antes de la etapa final;
- seguridad es transversal;
- migración puede ejecutarse progresivamente;
- mobile puede comenzar antes de finalizar todos los módulos web;
- analytics puede desarrollarse parcialmente mientras se acumulan datos.

La visualización debe permitir comprender tanto el orden lógico como el trabajo paralelo.

# Elementos transversales

Agregar una sección **“Presentes durante todo el proyecto”** con pequeñas cards:

### Seguridad
Protección de información, permisos, segregación, auditoría y monitoreo.

### Trazabilidad
Registro del origen y evolución de datos, documentos, consultas y acciones.

### QA
Validación funcional continua.

### UX/UI
Experiencia consistente para clientes y colaboradores.

### Arquitectura de datos
Diseño preparado para crecimiento, históricos, consultas y analytics.

### Automatización
Búsqueda continua de procesos que puedan reducir intervención manual.

# Entregas progresivas

Agregar una sección destacada:

## No es necesario esperar al final para comenzar a utilizar la plataforma

### Hito 1 — Base operativa
Usuarios · Clientes · Permisos · Documentos · Expediente · Trazabilidad

### Hito 2 — Autoservicio e inteligencia
Portal · Asistente · Vencimientos · Comunicaciones · Automatizaciones

### Hito 3 — Plataforma empresarial completa
Analytics · Informes · Proyecciones · Mobile · Migración ampliada · Estabilización

No asociar fechas concretas todavía.

# Estados futuros

Preparar la interfaz para soportar:

- Pendiente
- Planificada
- En desarrollo
- En validación
- Finalizada

Por ahora pueden mostrarse todas como **Planificada** o directamente ocultarse los estados.

# Datos que se incorporarán posteriormente

Preparar las cards para agregar más adelante:

- duración estimada;
- inicio;
- finalización;
- equipo involucrado;
- inversión;
- porcentaje de avance;
- responsables;
- entregables aprobados.

**No mostrar estos datos todavía.**

# No incluir todavía

- precios;
- presupuesto;
- salarios;
- costos internos;
- horas;
- nombres de desarrolladores;
- proveedores tecnológicos;
- infraestructura específica;
- contratos;
- mantenimiento;
- propiedad intelectual;
- fechas definitivas.

# Responsive

### Desktop
Preferentemente timeline horizontal o cards conectadas.

### Mobile
Timeline vertical y etapas expandibles.

Elegir la interacción que mejor respete el diseño existente.

# Encabezado sugerido

## Etapas de implementación

> Una implementación progresiva permite construir una base sólida, validar cada componente y comenzar a generar valor antes de completar la totalidad de la plataforma.

Mostrar debajo:

**Fundamentos → Core Operativo → Inteligencia y Automatización → Producción Empresarial**

# Cierre sugerido

## Una plataforma que evoluciona junto al estudio

> Cada etapa amplía las capacidades de la anterior. La información centralizada y trazable permite avanzar progresivamente desde la gestión operativa hacia la automatización, la inteligencia y el análisis estratégico.

Destacar:

**Centralizar → Automatizar → Anticipar**

# Criterios de aceptación

La vista está terminada cuando:

1. Está integrada al prototipo actual.
2. Funciona en GitHub Pages.
3. Mantiene el diseño visual existente.
4. Las ocho etapas pueden recorrerse fácilmente.
5. Las cards tienen versión resumida y detalle.
6. Se visualizan los cuatro bloques conceptuales.
7. Se muestran los elementos transversales.
8. Se muestran los tres hitos progresivos.
9. Es responsive.
10. No contiene precios ni fechas definitivas.
11. No rompe ninguna sección existente.
12. Puede utilizarse directamente durante una presentación.

# Principio final para Codex

Esta sección tiene una finalidad principalmente **comercial, explicativa y estratégica**.

No debe parecer un tablero técnico de gestión de proyectos.

El cliente debe comprender rápidamente:

1. por dónde comienza el proyecto;
2. por qué existe un orden;
3. qué obtiene en cada etapa;
4. cuándo comienza a recibir valor;
5. cómo se llega desde la centralización hasta la automatización y la inteligencia.

Priorizar claridad y recorrido visual sobre cantidad de información.

**No modificar el prototipo existente más allá de lo necesario para incorporar esta nueva sección.**
