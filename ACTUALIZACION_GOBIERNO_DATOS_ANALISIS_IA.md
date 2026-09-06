# ACTUALIZACION_GOBIERNO_DATOS_ANALISIS_IA.md

## Objetivo
Actualizar el prototipo existente incorporando:
1. **Gobierno y confiabilidad de la información** como capa transversal.
2. **Análisis Inteligente** como función protagonista que analiza integralmente la información disponible de cada cliente.

Antes de modificar, inspeccionar el repo y reutilizar navegación, estilos, componentes, cards, tablas, modales y responsive actuales. **No rediseñar ni eliminar funcionalidades existentes.**

## Principio central
> La inteligencia de la plataforma se construye sobre información segura, estructurada, validada y trazable.

Flujo conceptual:
**Información → Validación → Gobierno del dato → Análisis → Recomendación → Revisión/Acción → Trazabilidad**

# 1. Gobierno del dato

No tratarlo solamente como un módulo. Debe verse transversalmente en documentos, datos contables/impositivos/financieros, informes, asistente, análisis inteligente, permisos y logs.

Para datos relevantes permitir conocer:
- origen;
- documento/sistema fuente;
- período;
- fecha de actualización;
- quién lo cargó;
- método de incorporación/extracción;
- estado de validación;
- quién lo validó;
- nivel de confianza cuando corresponda;
- modificaciones e historial.

## Seis pilares
### Origen
Sabemos de dónde proviene cada dato.

### Calidad
Estados posibles: Pendiente · Procesando · Validación automática · Requiere revisión · Validado · Observado.

### Responsabilidad
Cada carga, modificación o aprobación queda asociada a un responsable.

### Seguridad
Cada usuario accede únicamente a información autorizada según organización, rol, cliente y permisos.

### Trazabilidad
Se conserva el historial del dato y las acciones realizadas sobre él.

### IA gobernada
La IA opera sobre fuentes autorizadas, respetando permisos, niveles de confianza y trazabilidad.

## Componente “Confiabilidad”
Ejemplo visual:

**IVA determinado — $8.420.000**
- Fuente: DDJJ IVA — Agosto 2026
- Actualización: 03/09/2026
- Origen: extracción documental
- Validación automática: completada
- Revisión profesional: aprobada
- Confianza: 98%

Acciones: **Ver fuente** · **Ver trazabilidad**

No mostrar porcentajes de confianza indiscriminadamente.

## Detalle/origen del dato
Al abrir “Ver fuente”, mostrar:
- valor;
- cliente;
- período;
- documento fuente;
- página/sección simulada;
- método de incorporación;
- fecha;
- validaciones;
- responsable;
- estado;
- última modificación;
- acceso a historial completo.

# 2. Administración — Gobierno del dato

Agregar subsección **Gobierno del dato**.

Dashboard mock:
- Datos validados
- Pendientes de revisión
- Inconsistencias detectadas
- Documentos sin procesar
- Datos con baja confianza
- Revisiones realizadas

Panel conceptual de calidad:
- Fiscal — 96%
- Contable — 94%
- Financiera — 88%
- Jurídica — 91%
- Laboral — 85%

Aclarar que son indicadores demostrativos de completitud/validación.

Tabla “Pendientes de revisión”:
Cliente · Dato/documento · Área · Motivo · Confianza · Fecha · Responsable · Acción.

Motivos mock:
- diferencia entre fuentes;
- documento incompleto;
- extracción con baja confianza;
- dato desactualizado;
- requiere validación profesional.

## Políticas
Cards conceptuales:
- Datos críticos
- Fuentes autorizadas
- Validación
- Retención
- Acceso
- Uso por IA

No implementar reglas reales.

# 3. IA gobernada

Representar visualmente:

**Usuario → Identidad + permisos → Consulta/análisis → Fuentes autorizadas → Datos/documentos confiables → IA → Respuesta/recomendación + fuentes → Trazabilidad**

Mensaje:
> La IA no obtiene acceso indiscriminado a la información. Cada proceso respeta permisos y fuentes habilitadas para el usuario y cliente analizado.

# 4. Nueva función — Análisis Inteligente

Agregar **Análisis Inteligente** como funcionalidad destacada.

Concepto:
> Analizar integralmente la información disponible de un cliente para actualizar su situación, detectar cambios, identificar alertas y proponer acciones.

Simular análisis conjunto de:
- datos estructurados;
- documentos;
- históricos;
- información contable;
- información impositiva;
- información financiera;
- vencimientos;
- notificaciones;
- consultas;
- actividad reciente;
- alertas;
- informes anteriores.

# 5. Acceso desde Expediente Digital Inteligente

Agregar botón destacado:
## Ejecutar análisis inteligente

Al pulsarlo:
1. abrir modal/panel;
2. mostrar procesamiento simulado;
3. presentar resultado actualizado.

Secuencia visual breve:
- ✓ Datos contables
- ✓ Información impositiva
- ✓ Documentación
- ✓ Históricos
- ✓ Vencimientos
- ✓ Situación financiera
- ✓ Consultas recientes
- ✓ Informes anteriores
- ✓ Alertas y novedades

Final: **Análisis completado**.

# 6. Resultado del análisis

Encabezado ejemplo:
## Análisis Inteligente — Grupo Litoral S.A.

- Último análisis: 05/09/2026 — 18:42
- Información analizada: 1.284 datos
- Documentos considerados: 437
- Histórico disponible: 36 meses

Destacar: **3 situaciones requieren atención**

## Resumen actualizado
Cards:
- Situación fiscal
- Situación contable
- Situación financiera
- Estado documental
- Próximos vencimientos
- Nivel general de información

## Cambios detectados
Ejemplos:
- IVA: aumento del 27% respecto del promedio de seis meses.
- Facturación: crecimiento del 12%.
- Liquidez: reducción del 8% en 30 días.
- Documentación: 14 nuevos documentos.

Cada hallazgo: importancia · fecha · explicación · fuente · Ver detalle.

## Alertas
Severidad: Informativa · Atención · Importante · Crítica.

Ejemplos:
- IVA aumentó significativamente.
- Faltan 2 comprobantes.
- Saldo registrado sería suficiente para obligaciones próximas.

## Indicadores actualizados
Reutilizar gráficos existentes:
- facturación;
- gastos;
- carga impositiva;
- liquidez;
- deuda;
- vencimientos;
- documentación;
- históricos.

# 7. Informes relacionados

Estados:
- Actualizado
- Requiere actualización
- Nuevo informe sugerido

Ejemplo:
**Informe Ejecutivo — Agosto 2026 — Requiere actualización**
Motivo: se incorporó nueva información fiscal/financiera.

Acciones: **Regenerar** · **Ver informe actual**

# 8. Recomendaciones inteligentes

Sección:
## Acciones recomendadas

Ejemplos:
### Revisar variación de IVA
Acciones: Ver análisis · Asignar colaborador · Marcar revisado.

### Solicitar documentación pendiente
Acciones: Ver documentos · Crear notificación.

### Actualizar informe ejecutivo
Acción: Regenerar informe.

### Recordar próximo vencimiento
Acciones: Crear notificación · Programar aviso.

Estados:
**Sugerido → Revisado → Aprobado → Ejecutado**

La IA no debe ejecutar automáticamente acciones sensibles en esta demo.

# 9. Explicabilidad

Cada recomendación debe permitir consultar:
- ¿Por qué se recomienda?
- ¿Qué información se utilizó?
- ¿Qué confianza tiene?
- ¿Qué acción se propone?

Esto debe diferenciar el sistema de una IA que recomienda sin justificar el origen.

# 10. Fuentes utilizadas

Botón: **Ver fuentes utilizadas**

Agrupar:
### Datos estructurados
IVA · facturación · gastos · liquidez · vencimientos.

### Documentos
DDJJ IVA · balance · extractos · documentación contable.

### Históricos
Últimos 36 meses.

### Actividad
Consultas, documentos incorporados y movimientos relevantes.

Mostrar fecha, período, validación y confiabilidad cuando corresponda.

# 11. Notificaciones sugeridas

El análisis puede proponer comunicaciones.

Ejemplo:
**Documentación pendiente**
“Para completar el cierre del período necesitamos dos comprobantes pendientes.”

Acciones mock: Editar · Programar · Enviar · Descartar.

# 12. Integración con Logs/Trazabilidad

Cada análisis genera evento mock:

05/09/2026 — 18:42  
Usuario: María López  
Acción: Ejecutó Análisis Inteligente  
Cliente: Grupo Litoral S.A.  
Resultado: 3 hallazgos / 4 recomendaciones

Registrar conceptualmente también recomendaciones revisadas, informes regenerados, notificaciones creadas, alertas descartadas y acciones aprobadas.

# 13. Historial de análisis

Dentro del expediente agregar **Historial de análisis**.

Tabla:
Fecha · Ejecutado por · Información analizada · Hallazgos · Recomendaciones · Estado · Acción.

Permitir abrir análisis anteriores.

# 14. Vista global de Análisis Inteligente

Agregar al menú interno **Análisis Inteligente** para perfiles del estudio.

Dashboard:
- Clientes analizados
- Análisis recientes
- Hallazgos importantes
- Recomendaciones pendientes
- Informes para actualizar
- Alertas detectadas

Tabla:
Cliente · Último análisis · Estado · Hallazgos · Prioridad · Responsable · Acción.

Filtros: cliente · responsable · prioridad · fecha · área · recomendaciones pendientes.

# 15. Análisis manual y futuro automático

En demo destacar **Ejecutar análisis inteligente**.

Preparar conceptualmente para:
- análisis manual;
- programado;
- disparado por nueva documentación;
- por cierre de período;
- por cambios relevantes.

No implementar lógica real.

# 16. Diferencia con Asistente Inteligente

No reemplazar el asistente existente.

### Asistente Inteligente
**Reactivo:** Pregunta → fuentes → respuesta.

### Análisis Inteligente
**Proactivo:** Información → análisis → hallazgos → recomendaciones → acciones.

Explicar esta diferencia brevemente en UI cuando corresponda.

# 17. Flujo general actualizado

Considerar integrar:

**Ingreso de información → Procesamiento y validación → Gobierno del dato → Expediente Digital Inteligente → Asistente + Análisis Inteligente → Automatización y comunicación → Analytics, informes y proyecciones**

Respetar el diseño actual; no forzar el cambio si empeora la vista.

# 18. Actualizar “Etapas del proyecto”

Si ya existe esa vista, agregar **Gobernanza de datos** como elemento transversal junto a Seguridad, Trazabilidad, QA, UX/UI, Arquitectura de datos y Automatización.

Texto:
> Garantiza origen, calidad, validación, permisos y trazabilidad de la información utilizada por la plataforma y sus procesos de IA.

En la etapa de Inteligencia incluir explícitamente **Análisis Inteligente**.

No crear una etapa exclusiva para Gobierno del Dato.

# 19. Mensajes conceptuales

Usar moderadamente:
- “La IA es tan confiable como la información sobre la que trabaja.”
- “Cada dato relevante conserva su origen y trazabilidad.”
- “La IA trabaja únicamente sobre información y fuentes autorizadas.”
- “Antes de automatizar decisiones, aseguramos la calidad de la información.”
- “De información histórica a conocimiento accionable.”
- “El sistema no solamente responde: también analiza, detecta y recomienda.”

Frase estratégica opcional:
> El verdadero activo que construye la plataforma no es solamente el software: es una base histórica, estructurada, confiable y trazable del conocimiento del estudio y sus clientes.

# 20. Fuera de alcance del prototipo

No implementar IA, análisis, SQL, procesamiento documental, scoring, reglas, notificaciones ni regeneración de informes reales. Todo sigue siendo demostrativo y compatible con GitHub Pages.

# 21. Criterios de aceptación

1. Se conserva el diseño existente.
2. Gobierno del dato aparece transversalmente.
3. Existe vista demostrativa en Administración.
4. Datos/documentos relevantes muestran origen y trazabilidad.
5. Se representa IA gobernada.
6. Expediente posee “Ejecutar análisis inteligente”.
7. Existe procesamiento visual simulado.
8. Resultado muestra resumen, cambios, alertas e indicadores.
9. Existen recomendaciones accionables.
10. Recomendaciones muestran motivo y fuentes.
11. Existe historial de análisis.
12. Existe vista global para usuarios internos.
13. Acciones se reflejan en Logs/Trazabilidad.
14. Se diferencia Asistente vs Análisis Inteligente.
15. Etapas incorpora Gobernanza de Datos transversalmente.
16. Funciona en GitHub Pages.
17. No rompe funcionalidades existentes.

# Principio final

**Los datos son la base de toda la plataforma.**

La IA debe mostrarse como una capacidad construida sobre:

**Datos confiables + permisos + contexto + trazabilidad**

Y Análisis Inteligente debe representar:

**Comprender → Detectar → Recomendar → Actuar**

Mantener control humano y trazabilidad visibles en acciones sensibles.
