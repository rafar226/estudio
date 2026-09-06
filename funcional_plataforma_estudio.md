# FUNCIONAL.md
# Prototipo navegable — Plataforma Integral para Estudio Contable / Jurídico

## 1. Objetivo del prototipo

Construir un prototipo navegable en **HTML, CSS y JavaScript vanilla**, sin backend real, que permita presentar de forma visual y comprensible la primera visión de una plataforma integral para un estudio contable/jurídico de gran escala.

El objetivo principal del prototipo es demostrar cómo la plataforma puede:

- centralizar la información de los clientes;
- transformar documentos dispersos en información estructurada;
- ofrecer un Expediente Digital Inteligente por cliente;
- reducir consultas repetitivas mediante un asistente inteligente;
- automatizar avisos, alertas y vencimientos;
- brindar gráficos, históricos, informes y proyecciones;
- mantener trazabilidad completa de cada acción;
- administrar accesos mediante roles y permisos;
- ofrecer una experiencia diferenciada para clientes, empleados, socios y asesores.

Este prototipo NO debe implementar lógica real de negocio, IA real, backend, autenticación real ni conexiones externas.

Debe funcionar únicamente como una **demo visual interactiva**.

---

# 2. Alcance técnico del prototipo

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Datos ficticios almacenados en archivos `.js` o `.json`
- Sin frameworks
- Sin backend
- Sin base de datos
- Sin autenticación real
- Sin APIs reales
- Compatible con GitHub Pages

## Requisitos generales

- Navegación funcional entre vistas.
- Diseño responsive básico.
- Menú lateral para escritorio.
- Menú adaptado a mobile.
- Modales simples.
- Tooltips cuando ayuden a comprender funciones.
- Tablas con filtros simulados.
- Gráficos mock o realizados con una librería liviana vía CDN si fuera necesario.
- Estados visuales: correcto, pendiente, advertencia, crítico.
- Datos realistas pero completamente ficticios.
- Ninguna funcionalidad debe depender de servidor.

---

# 3. Concepto general del producto

La plataforma debe transmitir tres ideas centrales:

## 3.1 Centralización

Toda la información contable, impositiva, financiera, jurídica y documental de cada cliente se concentra en un único entorno seguro.

## 3.2 Automatización proactiva

La plataforma no espera siempre a que el cliente consulte.

Debe mostrar conceptualmente que el sistema puede:

- detectar vencimientos;
- identificar documentación faltante;
- generar alertas;
- informar novedades;
- responder consultas frecuentes;
- generar informes;
- detectar situaciones relevantes.

## 3.3 Trazabilidad

Cada interacción importante queda registrada.

Ejemplos:

- quién ingresó;
- qué documento consultó;
- qué dato modificó;
- qué pregunta realizó;
- qué informe generó;
- qué notificación recibió;
- quién validó información;
- cuándo ocurrió cada evento.

---

# 4. Flujo conceptual principal

Crear una vista denominada:

## “Cómo funciona la plataforma”

Debe ser una de las primeras pantallas de la demo.

Mostrar siete cards conectadas visualmente mediante flechas o línea de progreso.

### Card 1 — Ingreso de información

Texto:

> La información ingresa desde documentos, planillas, cargas manuales e integraciones futuras.

Elementos visuales sugeridos:

- PDF
- Excel
- Word
- documentos escaneados
- datos manuales
- sistemas externos

---

### Card 2 — Procesamiento y validación

Texto:

> Los documentos se almacenan, procesan y validan antes de transformar su contenido en datos utilizables.

Mostrar conceptualmente:

1. documento original;
2. extracción convencional;
3. normalización;
4. interpretación mediante IA;
5. validación;
6. revisión humana cuando corresponda.

Mensaje destacado:

> Doble proceso de verificación para aumentar la confiabilidad del dato.

---

### Card 3 — Información segura y estructurada

Texto:

> Los datos dejan de estar dispersos y pasan a formar parte de una estructura histórica, segura, consultable y relacionada.

Mostrar conceptos:

- históricos;
- filtros;
- relaciones;
- permisos;
- seguridad;
- respaldo.

No mencionar PostgreSQL, SQL, Storage ni tecnologías específicas en esta vista comercial.

---

### Card 4 — Expediente Digital Inteligente

Texto:

> Cada cliente cuenta con un historial permanente que reúne datos, documentos, consultas, comunicaciones e indicadores.

Usar como concepto central:

**Expediente Digital Inteligente 360°**

---

### Card 5 — Inteligencia y automatización

Texto:

> La plataforma interpreta información, responde consultas, genera informes y detecta situaciones que requieren atención.

Mostrar:

- asistente inteligente;
- informes;
- alertas;
- reglas automáticas;
- detección de pendientes.

---

### Card 6 — Comunicación proactiva

Texto:

> El estudio puede anticiparse a las necesidades del cliente mediante avisos, noticias, vencimientos y notificaciones personalizadas.

Mostrar:

- push;
- email;
- notificaciones internas;
- comunicaciones segmentadas;
- programación de envíos.

---

### Card 7 — Analytics y oportunidades

Texto:

> La información histórica permite analizar evolución, generar proyecciones y detectar nuevas oportunidades de asesoramiento.

Mostrar:

- gráficos;
- comparaciones;
- proyecciones;
- tendencias;
- futura inteligencia financiera.

---

# 5. Usuarios simulados

El prototipo debe permitir cambiar de perfil mediante un selector visible.

No implementar login real.

Perfiles disponibles:

### Socio / Administrador

Puede visualizar:

- todos los clientes;
- indicadores globales;
- analytics;
- actividad general;
- notificaciones;
- trazabilidad;
- usuarios;
- permisos.

### Empleado / Contador

Puede visualizar:

- clientes asignados;
- documentos;
- pendientes;
- vencimientos;
- consultas;
- información contable autorizada.

### Cliente

Puede visualizar exclusivamente:

- su empresa;
- sus datos;
- sus documentos;
- sus indicadores;
- sus vencimientos;
- sus notificaciones;
- sus informes;
- su asistente inteligente.

### Asesor Financiero

Perfil futuro.

Puede acceder únicamente a la información financiera habilitada y oportunidades asignadas.

---

# 6. Navegación principal

El menú lateral debe contener:

1. Inicio
2. Cómo funciona
3. Clientes
4. Documentos
5. Contabilidad
6. Asistente inteligente
7. Informes
8. Analytics
9. Vencimientos
10. Comunicaciones
11. Trazabilidad
12. Usuarios y permisos
13. Administración

Algunas opciones pueden ocultarse cuando se selecciona el perfil “Cliente”.

---

# 7. Pantalla 1 — Login conceptual

## Objetivo

Dar inicio visual a la experiencia.

## Elementos

- Logo temporal.
- Nombre temporal de la plataforma.
- Campo email.
- Campo contraseña.
- Recordar sesión.
- Botón “Ingresar”.
- Opción de recuperación.
- Texto sobre acceso seguro.

No implementar autenticación.

Al presionar ingresar, abrir el dashboard.

---

# 8. Pantalla 2 — Dashboard del estudio

Perfil: Socio / Administrador.

## Objetivo

Mostrar una visión general del estudio.

## Header

- saludo;
- fecha;
- selector de período;
- búsqueda global;
- botón de notificaciones.

## KPIs principales

Cards:

- Clientes activos: 268
- Usuarios: 412
- Consultas este mes: 1.842
- Consultas resueltas automáticamente: 71%
- Documentos procesados este mes: 3.420
- Vencimientos próximos: 38
- Alertas críticas: 6

## Secciones

### Actividad reciente

Ejemplos:

- Empresa Norte S.A. consultó IVA 2025.
- Grupo Litoral cargó nuevo balance.
- Se validó declaración de ganancias de Delta S.A.
- 42 clientes recibieron una notificación programada.

### Próximos vencimientos

Tabla:

- Cliente
- obligación
- vencimiento
- estado
- responsable

### Consultas frecuentes

Gráfico o listado:

- IVA
- vencimientos
- ganancias
- documentación
- flujo de fondos

### Automatización

Indicador destacado:

> 71% de las consultas fueron resueltas sin intervención humana.

---

# 9. Pantalla 3 — Dashboard del cliente

Perfil: Cliente.

## Objetivo

Mostrar la experiencia de autoservicio.

## Encabezado

Empresa ficticia:

**Grupo Litoral S.A.**

Mostrar:

- CUIT ficticio;
- responsable del estudio;
- estado general.

## Resumen 360°

Cards:

- Situación fiscal: Al día
- IVA próximo vencimiento: 05/10/2026
- IVA estimado: $8.420.000
- Documentación pendiente: 2
- Informes disponibles: 5
- Alertas: 1

## Gráficos

- Facturación últimos 12 meses.
- IVA últimos 12 meses.
- Gastos vs ingresos.
- Evolución de liquidez.

## Acciones rápidas

- Preguntar al asistente
- Ver documentos
- Descargar último informe
- Ver vencimientos
- Subir documentación

## Noticias / avisos

Ejemplo:

> Recordatorio: aboná antes del día 5 para mantener el beneficio correspondiente.

---

# 10. Pantalla 4 — Listado de clientes

Perfil: Estudio.

## Tabla principal

Columnas:

- Cliente
- CUIT
- Tipo
- Actividad
- Responsable
- Estado fiscal
- Pendientes
- Última actividad
- Acción

## Filtros

- Buscar por nombre/CUIT.
- Tipo de cliente.
- Responsable.
- Actividad.
- Estado.
- Con alertas.
- Con documentación pendiente.

## Acción

Al seleccionar cliente:

Abrir Expediente Digital Inteligente.

---

# 11. Pantalla 5 — Expediente Digital Inteligente 360°

Esta es una de las vistas más importantes del prototipo.

## Header del cliente

Mostrar:

- nombre;
- CUIT;
- actividad;
- responsables;
- estado;
- tags;
- última actualización.

## Tabs

### Resumen

- indicadores principales;
- próximos vencimientos;
- alertas;
- documentos recientes;
- últimas consultas;
- gráficos destacados.

### Contable

- balances;
- estados contables;
- facturación;
- gastos;
- resultados históricos.

### Impositivo

- IVA;
- ganancias;
- IIBB;
- obligaciones;
- pagos;
- declaraciones;
- deuda.

### Financiero

- liquidez;
- cuentas;
- flujo de fondos;
- endeudamiento;
- indicadores.

### Jurídico

Mock básico:

- sociedades;
- actas;
- contratos;
- poderes;
- expedientes.

### Laboral

Mock básico:

- empleados;
- cargas;
- liquidaciones;
- documentación.

### Documentos

Listado de archivos relacionados.

### Informes

Informes generados.

### Actividad

Timeline completo del cliente.

---

# 12. Pantalla 6 — Gestión documental

## Objetivo

Mostrar que los documentos dejan de ser archivos aislados.

## Tabla

Columnas:

- Documento
- Cliente
- Categoría
- Período
- Fecha
- Estado de procesamiento
- Validación
- Versión
- Acción

## Estados

- Cargado
- Procesando
- Validado
- Requiere revisión
- Rechazado

## Filtros

- Cliente.
- Categoría.
- Fecha.
- Período.
- Estado.
- Tipo de archivo.

## Botón

“Subir documento”

Abrir modal.

Campos:

- archivo;
- cliente;
- categoría;
- período;
- observaciones.

## Vista detalle de documento

Mostrar:

- archivo original;
- metadatos;
- datos extraídos;
- estado;
- nivel de confianza;
- validación automática;
- validación humana;
- versiones.

Ejemplo:

**IVA determinado:** $8.420.000  
**Origen:** DDJJ IVA septiembre 2026  
**Confianza:** 98%  
**Estado:** Validado

Agregar acción:

“Ver origen del dato”.

---

# 13. Pantalla 7 — Flujo de procesamiento documental

Puede abrirse desde Gestión documental.

Representar visualmente:

Documento recibido  
↓  
Original resguardado  
↓  
Extracción convencional  
↓  
Datos preliminares  
↓  
Interpretación / segunda validación  
↓  
Reglas de consistencia  
↓  
Resultado

Resultado posible:

- Validado automáticamente.
- Requiere revisión humana.

Agregar panel:

## Trazabilidad del procesamiento

Ejemplo:

18:42 — Archivo recibido  
18:42 — Original almacenado  
18:43 — Extracción completada  
18:43 — Validación completada  
18:44 — Dato aprobado

---

# 14. Pantalla 8 — Información contable / impositiva

## Objetivo

Mostrar datos estructurados y no solamente documentos.

## Selector

Cliente + período.

## Tabs sugeridas

- IVA
- Ganancias
- IIBB
- Facturación
- Gastos
- Balances
- Deudas
- Presentaciones

## Ejemplo IVA

Tabla:

| Período | Débito fiscal | Crédito fiscal | Saldo | Estado | Fuente |
| --- | --- | --- | --- | --- | --- |

Permitir click en “Fuente” para abrir documento relacionado.

Mostrar gráfico de evolución.

---

# 15. Pantalla 9 — Asistente Inteligente

Vista central del prototipo.

No implementar IA real.

Crear respuestas mock predefinidas.

## Diseño

Chat moderno, profesional y sobrio.

## Preguntas sugeridas

- ¿Cuánto debo de IVA en 2025?
- ¿Cuándo vence mi próxima obligación?
- ¿Cuánto pagué de ganancias el año pasado?
- ¿Tengo documentación pendiente?
- ¿Cómo evolucionó mi facturación?
- ¿Cuál es mi último saldo registrado en Banco Nación?

## Ejemplo de conversación

Usuario:

> ¿Cuánto debo de IVA 2025? ¿Tengo saldo en mi cuenta de Banco Nación?

Respuesta simulada:

> Según la información disponible, el saldo pendiente de IVA correspondiente a 2025 es de $12.480.000.
>
> El último saldo registrado de la cuenta Banco Nación es de $18.760.000, actualizado al 31/08/2026.
>
> El saldo disponible cubriría aproximadamente el 100% de la obligación informada.

Mostrar debajo:

### Fuentes utilizadas

- Declaraciones IVA 2025
- Estado impositivo consolidado
- Extracto Banco Nación — Agosto 2026

Agregar botones:

- Ver fuentes
- Generar informe
- Consultar período anterior

## Concepto a representar

El asistente combina:

- datos estructurados;
- documentación;
- contexto histórico;
- permisos del usuario.

No mostrar tecnología específica al usuario final.

---

# 16. Pantalla 10 — Informes

## Objetivo

Mostrar generación automática.

## Formulario

- Cliente.
- Período.
- Tipo de informe.
- Nivel de detalle.

Tipos:

- Ejecutivo.
- Contable.
- Impositivo.
- Financiero.
- Patrimonial.
- Comparativo.

Botón:

“Generar informe”

No generar realmente.

Mostrar vista previa mock.

## Informe ejemplo

**Informe Ejecutivo — Grupo Litoral S.A.**

Secciones:

- resumen ejecutivo;
- facturación;
- carga impositiva;
- liquidez;
- indicadores;
- evolución;
- alertas;
- observaciones.

Botones:

- Descargar PDF
- Exportar Excel
- Compartir
- Guardar en expediente

---

# 17. Pantalla 11 — Analytics

## Objetivo

Mostrar explotación histórica de los datos.

## Vista estudio

Filtros:

- período;
- actividad;
- responsable;
- tipo de cliente;
- rango de facturación.

Gráficos sugeridos:

- clientes por actividad;
- evolución de facturación administrada;
- carga impositiva promedio;
- consultas por temática;
- documentos procesados;
- consultas automatizadas;
- clientes con mayor crecimiento;
- clientes con mayor cantidad de alertas.

## Vista cliente

- facturación;
- gastos;
- impuestos;
- liquidez;
- deuda;
- rentabilidad;
- evolución histórica.

Agregar botón:

“Crear comparación”.

---

# 18. Pantalla 12 — Proyecciones

Puede ser una subsección de Analytics.

## Proyección automática

Cards:

- IVA estimado próximo período.
- Flujo de caja proyectado.
- Facturación esperada.
- Gastos proyectados.

## Simulador

Inputs mock:

- variación esperada de ventas;
- variación de gastos;
- nuevas contrataciones;
- inversión prevista.

Mostrar:

> Escenario proyectado

con gráficos y números ficticios.

Aclarar visualmente:

“Proyección basada en información histórica. Sujeta a revisión profesional.”

---

# 19. Pantalla 13 — Vencimientos

## Vista calendario

Mostrar eventos contables/impositivos.

## Vista tabla

- Cliente
- Obligación
- Fecha
- Importe
- Estado
- Responsable
- Acción

Estados:

- Próximo
- Pendiente
- Completado
- Vencido

## Automatización visual

Ejemplo:

> Si faltan 5 días para el vencimiento y continúa pendiente → enviar notificación al cliente.

---

# 20. Pantalla 14 — Centro de Comunicaciones y Notificaciones

Una de las vistas principales del prototipo.

## Listado

Columnas:

- Título
- Tipo
- Audiencia
- Canal
- Programación
- Estado
- Enviados
- Aperturas

## Tipos

- Aviso.
- Vencimiento.
- Noticia.
- Información general.
- Alerta.
- Comunicación personalizada.

## Botón

“Nueva comunicación”

Abrir editor.

### Paso 1 — Mensaje

- título;
- contenido;
- tipo;
- prioridad.

### Paso 2 — Destinatarios

Opciones:

- todos;
- clientes seleccionados;
- actividad;
- tipo fiscal;
- responsable;
- grupo;
- condición específica.

Ejemplo:

> Clientes con vencimiento de IVA dentro de los próximos 5 días.

### Paso 3 — Canales

Checkbox:

- Push.
- Email.
- Plataforma.

### Paso 4 — Programación

- Enviar ahora.
- Programar fecha.
- Programar fecha y hora.

### Paso 5 — Confirmación

Resumen final.

Ejemplo de mensaje:

> Estás próximo al vencimiento. Realizá el pago antes del día 5 para mantener el beneficio correspondiente.

---

# 21. Pantalla 15 — Trazabilidad

Vista clave.

## Objetivo

Demostrar que toda acción relevante queda registrada.

## Timeline / tabla

Columnas:

- Fecha/hora
- Usuario
- Perfil
- Cliente
- Acción
- Recurso
- Resultado

Ejemplos:

- Cliente consultó “IVA 2025”.
- Usuario descargó Balance 2025.
- Contador modificó dato impositivo.
- Sistema envió notificación.
- Cliente abrió notificación.
- Documento fue validado.
- Informe ejecutivo fue generado.

## Filtros

- Usuario.
- Cliente.
- Fecha.
- Tipo de acción.
- Área.
- Resultado.

## Detalle

Al abrir evento mostrar:

- fecha;
- usuario;
- IP simulada;
- acción;
- dato anterior;
- dato posterior;
- fuente;
- motivo;
- recurso relacionado.

---

# 22. Pantalla 16 — Usuarios, roles y permisos

## Listado de usuarios

- Nombre
- Organización
- Perfil
- Estado
- Último acceso

## Roles simulados

- Socio
- Administrador
- Responsable de área
- Contador
- Asistente
- Jurídico
- Finanzas
- Cliente administrador
- Usuario del cliente

## Editor de permisos

Matriz visual.

Filas:

- Clientes
- Contabilidad
- Documentos
- Jurídico
- Finanzas
- Informes
- Analytics
- Trazabilidad
- Administración

Columnas:

- Ver
- Crear
- Modificar
- Eliminar
- Aprobar
- Descargar

Agregar posibilidad mock de permiso por cliente.

Ejemplo:

> Puede acceder a Grupo Litoral S.A. pero no a Delta S.A.

---

# 23. Pantalla 17 — Historial permanente del cliente

Puede formar parte de “Actividad” dentro del expediente.

Mostrar una línea temporal cronológica.

Ejemplo:

### Septiembre 2026

05/09  
Cliente consultó IVA.

04/09  
Se envió recordatorio de vencimiento.

03/09  
Se generó informe mensual.

02/09  
Se cargó declaración de IVA.

01/09  
Empleado actualizó información fiscal.

El concepto visual debe transmitir:

> El cliente construye una memoria digital permanente dentro del estudio.

---

# 24. Pantalla 18 — Centro de Alertas

Puede integrarse al Dashboard pero conviene tener una vista demo.

## Tipos

- Fiscal.
- Documental.
- Operativa.
- Financiera.
- Jurídica.
- Sistema.

## Ejemplos

- Facturación cayó 23%.
- IVA aumentó 31% respecto al promedio.
- Falta documentación para presentación.
- Cliente tiene vencimiento en 3 días.
- Flujo de caja proyectado negativo.
- Documento requiere revisión.

Mostrar severidad:

- Informativa.
- Atención.
- Importante.
- Crítica.

---

# 25. Buscador global

Agregar buscador en header.

Simular resultados agrupados:

## Clientes

Grupo Litoral S.A.

## Documentos

Balance 2025

## Datos

IVA septiembre 2026

## Informes

Informe ejecutivo agosto 2026

## Consultas

“¿Cuánto debo de IVA?”

La intención visual es mostrar que la plataforma permite encontrar información sin navegar carpetas.

---

# 26. Seguridad — representación visual

No desarrollar seguridad real.

Crear una sección dentro de Administración llamada “Seguridad”.

Mostrar cards:

- Autenticación multifactor.
- Accesos por roles.
- Protección de documentos.
- Trazabilidad.
- Backups.
- Monitoreo.
- Sesiones activas.
- Políticas de acceso.

Agregar una tabla de “Sesiones recientes” simulada.

El mensaje principal debe ser:

> La información se protege por usuario, organización, rol y tipo de dato.

---

# 27. Automatizaciones

Crear vista opcional “Automatizaciones”.

## Ejemplos de reglas

### Regla 1

SI:

Vencimiento de IVA dentro de 5 días

Y:

Estado = pendiente

ENTONCES:

Enviar push + email al cliente.

### Regla 2

SI:

Se carga documento requerido

ENTONCES:

Notificar al contador responsable.

### Regla 3

SI:

Un dato presenta inconsistencia

ENTONCES:

Crear alerta y solicitar revisión.

### Regla 4

SI:

Cliente realiza consulta que no puede resolverse automáticamente

ENTONCES:

Derivar al responsable.

Mostrar toggle activo/inactivo.

---

# 28. Datos mock

Crear al menos 6 clientes ficticios.

Ejemplos:

1. Grupo Litoral S.A.
2. Norte Agroindustrial S.A.
3. Delta Servicios S.R.L.
4. Constructora Paraná S.A.
5. Inversiones del Nordeste S.A.
6. Estancias del Sur S.A.

No utilizar información real de clientes del estudio.

Crear datos ficticios suficientes para:

- tablas;
- gráficos;
- consultas;
- documentos;
- vencimientos;
- actividad;
- alertas;
- informes.

---

# 29. Diseño visual

## Estilo

Profesional, moderno, corporativo y sobrio.

Evitar:

- apariencia de startup informal;
- exceso de degradados;
- colores muy saturados;
- exceso de animaciones;
- componentes infantiles;
- interfaces demasiado futuristas.

Buscar:

- sensación de seguridad;
- claridad;
- orden;
- confianza;
- información de alto valor.

## Layout

Desktop:

- sidebar izquierda;
- header superior;
- contenido principal.

Mobile:

- bottom navigation o menú hamburguesa;
- cards adaptables;
- tablas convertidas en cards cuando sea necesario.

## Tipografía

Utilizar una fuente web profesional y legible.

Ejemplos:

- Inter
- Manrope
- Source Sans 3

## Iconografía

Usar una librería consistente vía CDN.

---

# 30. Interacciones mock importantes

Aunque no exista backend, deben funcionar visualmente:

- cambiar perfil;
- cambiar cliente;
- navegar entre módulos;
- abrir documentos;
- ver detalle;
- abrir modales;
- aplicar filtros básicos;
- seleccionar tabs;
- crear una notificación ficticia;
- simular generación de informe;
- enviar preguntas predefinidas al chat;
- ver fuentes utilizadas;
- abrir evento de trazabilidad;
- activar/desactivar automatizaciones.

---

# 31. Recorrido recomendado para presentación

Preparar el prototipo para poder presentar este flujo:

## Paso 1

Abrir “Cómo funciona la plataforma”.

Explicar:

Ingreso → Procesamiento → Estructuración → Expediente → Automatización → Comunicación → Inteligencia.

## Paso 2

Ingresar como Socio.

Mostrar Dashboard general.

## Paso 3

Abrir Clientes.

Seleccionar Grupo Litoral S.A.

## Paso 4

Mostrar Expediente Digital Inteligente 360°.

## Paso 5

Abrir un documento.

Mostrar procesamiento, validación y origen del dato.

## Paso 6

Abrir Asistente Inteligente.

Realizar consulta:

> ¿Cuánto debo de IVA 2025? ¿Tengo saldo en Banco Nación?

Mostrar respuesta y fuentes.

## Paso 7

Mostrar Analytics e históricos.

## Paso 8

Generar informe ejecutivo ficticio.

## Paso 9

Abrir Centro de Comunicaciones.

Crear aviso de vencimiento.

## Paso 10

Mostrar Trazabilidad.

Demostrar que consulta, documento, informe y notificación quedaron registrados.

## Paso 11

Cambiar al perfil Cliente.

Mostrar cómo cambia el dashboard y qué información puede visualizar.

---

# 32. Mensajes conceptuales importantes

Incluir de manera distribuida en la interfaz, sin abusar:

### Expediente Digital Inteligente

> Toda la historia del cliente en un único lugar.

### Trazabilidad

> Cada dato, consulta y acción conserva su origen e historial.

### Automatización

> La plataforma se anticipa para reducir tareas repetitivas y consultas manuales.

### Información

> De documentos dispersos a información estructurada y utilizable.

### Inteligencia

> Consultas, informes y análisis construidos a partir de información real del cliente.

### Seguridad

> Cada usuario accede exclusivamente a la información que le corresponde.

---

# 33. Fuera de alcance del prototipo

NO implementar:

- backend;
- base SQL real;
- Firebase;
- AWS;
- autenticación;
- permisos reales;
- IA real;
- RAG real;
- procesamiento real de PDFs;
- OCR real;
- push real;
- emails reales;
- integraciones ARCA;
- integraciones bancarias;
- pagos;
- firma digital;
- conexión a Google Drive;
- sincronización;
- aplicación nativa;
- publicación en App Store / Play Store.

Todo debe ser exclusivamente demostrativo.

---

# 34. Estructura sugerida del proyecto

```text
/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── app.js
│   │   ├── router.js
│   │   ├── mock-data.js
│   │   ├── charts.js
│   │   └── components.js
│   └── img/
├── views/
│   ├── login.html
│   ├── flow.html
│   ├── dashboard.html
│   ├── clients.html
│   ├── client-detail.html
│   ├── documents.html
│   ├── accounting.html
│   ├── assistant.html
│   ├── reports.html
│   ├── analytics.html
│   ├── deadlines.html
│   ├── communications.html
│   ├── audit.html
│   ├── users.html
│   └── administration.html
└── data/
    └── mock-data.json
```

Codex puede modificar esta estructura si encuentra una alternativa más simple para que la navegación funcione correctamente en GitHub Pages.

---

# 35. Criterios de aceptación del prototipo

El prototipo se considera satisfactorio cuando:

1. Puede publicarse en GitHub Pages.
2. No requiere backend.
3. Se puede recorrer sin errores.
4. Tiene apariencia profesional.
5. Permite demostrar el flujo conceptual completo.
6. Incluye una experiencia de cliente y una experiencia del estudio.
7. Permite visualizar un Expediente Digital Inteligente.
8. Permite simular una consulta al asistente.
9. Permite visualizar la trazabilidad de acciones.
10. Permite simular creación de notificaciones.
11. Permite visualizar datos, históricos y gráficos.
12. Comunica claramente el objetivo de automatización y reducción de tareas manuales.

---

# 36. Prioridad de desarrollo del prototipo

## Prioridad 1 — Obligatoria

- Login conceptual.
- Cómo funciona.
- Dashboard estudio.
- Dashboard cliente.
- Clientes.
- Expediente Digital Inteligente.
- Documentos.
- Asistente.
- Analytics.
- Comunicaciones.
- Trazabilidad.

## Prioridad 2 — Importante

- Informes.
- Vencimientos.
- Usuarios/permisos.
- Procesamiento documental.
- Alertas.

## Prioridad 3 — Complementaria

- Proyecciones.
- Automatizaciones.
- Jurídico.
- Laboral.
- Seguridad.
- Administración avanzada.

---

# 37. Principio final para Codex

Este proyecto NO busca representar una aplicación terminada.

Debe sentirse como una **primera visión navegable de un producto empresarial de gran escala**.

Priorizar:

1. claridad;
2. experiencia visual;
3. recorrido;
4. conceptos;
5. facilidad para presentar.

Evitar invertir tiempo excesivo en lógica ficticia que no aporte al recorrido comercial.

El prototipo debe permitir que una persona del estudio pueda imaginar claramente cómo sería trabajar con la plataforma terminada.
