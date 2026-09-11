/* AI Native refinement layer — September 2026
   Keeps the prototype architecture intact and adds an AI-first, work-by-exception UX. */
(() => {
  const AREA_META = {
    impositivo: {
      name: 'Impositivo', system: 'Account · IVA', automation: '72%', pending: '8',
      prompt: 'Ej.: Prepará los clientes que ya tienen toda la documentación de IVA',
      suggestions: ['¿Qué clientes necesitan revisión humana?', 'Preparar IVA listo para procesar', 'Mostrar diferencias fuera de rango'],
      attention: [
        ['Delta Servicios S.R.L.', 'Faltan 12 comprobantes', 'IVA · vence en 48 h', 'critical'],
        ['Estancias del Sur S.A.', 'Diferencia de percepciones', '$184.500 fuera del patrón', 'warning'],
        ['Norte Agroindustrial S.A.', 'Borrador listo', 'Sólo requiere aprobación', 'ready']
      ],
      actions: ['Preparar períodos completos', 'Solicitar faltantes automáticamente', 'Revisar excepciones']
    },
    previsional: {
      name: 'Previsional y Laboral', system: 'Account · Sueldos', automation: '64%', pending: '5',
      prompt: 'Ej.: Prepará las liquidaciones que no tienen novedades extraordinarias',
      suggestions: ['Liquidaciones que necesitan revisión', 'Empleados con cambios este mes', 'Preparar liquidaciones sin novedades'],
      attention: [
        ['Norte Agroindustrial S.A.', 'Variación salarial atípica', '+24% vs. promedio', 'critical'],
        ['Delta Servicios S.R.L.', '2 novedades incompletas', 'Falta validar ausencias', 'warning'],
        ['81 liquidaciones', 'Controles superados', 'Listas para aprobar', 'ready']
      ],
      actions: ['Procesar novedades', 'Preparar liquidaciones', 'Emitir recibos aprobados']
    },
    societario: {
      name: 'Societario', system: 'Workflow propio', automation: '51%', pending: '6',
      prompt: 'Ej.: Mostrame únicamente los trámites societarios que requieren intervención',
      suggestions: ['Trámites demorados', 'Autoridades próximas a vencer', 'Preparar documentos listos para firma'],
      attention: [
        ['Litoral S.A.', 'Renovación de autoridades', 'Vence dentro de 20 días', 'warning'],
        ['Delta Servicios S.R.L.', 'Reforma lista para firma', 'Documentación completa', 'ready'],
        ['3 libros societarios', 'Actualización pendiente', 'Sin urgencia inmediata', 'info']
      ],
      actions: ['Preparar trámites completos', 'Solicitar firmas', 'Revisar excepciones']
    },
    auditoria: {
      name: 'Auditoría', system: 'Auditor IA', automation: '79%', pending: '4',
      prompt: 'Ej.: Explicame los hallazgos de mayor riesgo y proponé próximos pasos',
      suggestions: ['Mostrar riesgos altos', 'Ejecutar controles automáticos', 'Hallazgos sin resolver'],
      attention: [
        ['Estancias del Sur S.A.', 'Posible factura duplicada', 'CAE y monto coincidentes', 'critical'],
        ['Norte Agroindustrial S.A.', 'Variación fuera de patrón', 'Revisión recomendada', 'warning'],
        ['1.244 controles', 'Sin observaciones', 'No requieren intervención', 'ready']
      ],
      actions: ['Ejecutar controles', 'Investigar hallazgos', 'Preparar informe']
    },
    contencioso: {
      name: 'Contencioso Tributario', system: 'Workflow + documentos', automation: '43%', pending: '7',
      prompt: 'Ej.: Priorizá los expedientes según plazo, riesgo e información faltante',
      suggestions: ['Plazos en 72 horas', 'Expedientes bloqueados', 'Preparar borradores posibles'],
      attention: [
        ['Expediente 2418/26', 'Plazo procesal próximo', 'Vence en 48 horas', 'critical'],
        ['Fiscalización Delta', 'Falta documentación', 'Solicitud automática enviada', 'warning'],
        ['4 actuaciones', 'Documentación completa', 'Listas para revisión', 'ready']
      ],
      actions: ['Priorizar expedientes', 'Solicitar documentación', 'Preparar borradores']
    },
    financiero: {
      name: 'Financiero', system: 'Datos + modelos', automation: '58%', pending: '6',
      prompt: 'Ej.: Detectá desvíos de caja y explicame cuáles requieren una decisión',
      suggestions: ['Desvíos relevantes', 'Proyección 30 días', 'Clientes con margen a revisar'],
      attention: [
        ['Caja proyectada', 'Desvío contra presupuesto', '-8,4% para octubre', 'warning'],
        ['4 clientes', 'Margen por debajo del objetivo', 'Revisión sugerida', 'warning'],
        ['Conciliaciones', 'Sin diferencias críticas', 'Actualizadas hoy', 'ready']
      ],
      actions: ['Actualizar proyección', 'Analizar rentabilidad', 'Revisar desvíos']
    },
    documental: {
      name: 'Documental', system: 'IA documental', automation: '87%', pending: '14',
      prompt: 'Ej.: Procesá lo recibido hoy y mostrame sólo lo que no pudiste clasificar con seguridad',
      suggestions: ['Procesar documentos nuevos', 'Archivos con baja confianza', 'Solicitar documentación faltante'],
      attention: [
        ['3 archivos', 'Confianza baja de clasificación', 'Requieren confirmación humana', 'warning'],
        ['2 documentos', 'Posibles duplicados', 'Bloqueados automáticamente', 'warning'],
        ['41 documentos', 'Clasificados automáticamente', 'Sin intervención', 'ready']
      ],
      actions: ['Procesar bandeja', 'Resolver dudas de clasificación', 'Solicitar faltantes']
    },
    atencion: {
      name: 'Atención al Cliente', system: 'Agente de atención', automation: '68%', pending: '9',
      prompt: 'Ej.: Respondé las consultas que tengan información suficiente y escalame sólo las dudosas',
      suggestions: ['Casos para revisión humana', 'Responder consultas simples', 'Motivos más repetidos'],
      attention: [
        ['2 conversaciones', 'Criterio profesional necesario', 'Escaladas al responsable', 'critical'],
        ['3 solicitudes', 'Cliente aún no respondió', 'Seguimiento automático activo', 'warning'],
        ['18 consultas', 'Respuesta automática posible', 'Fuentes verificadas', 'ready']
      ],
      actions: ['Resolver consultas simples', 'Revisar escaladas', 'Automatizar motivo frecuente']
    },
    administracion: {
      name: 'Administración', system: 'SIFER · transición', automation: '39%', pending: '6',
      prompt: 'Ej.: Conciliá cobranzas, asociá pagos a clientes y mostrame sólo las dudas',
      suggestions: ['Pagos sin imputar', 'Clientes con deuda vencida', 'Conciliar movimientos automáticamente'],
      attention: [
        ['4 cobros', 'Sin imputación definitiva', 'IA propone cliente y concepto', 'warning'],
        ['3 cuentas', 'Saldo vencido', 'Recordatorio sugerido', 'warning'],
        ['26 movimientos', 'Conciliados automáticamente', 'Sin intervención', 'ready']
      ],
      actions: ['Conciliar movimientos', 'Imputar cobranzas sugeridas', 'Revisar deuda vencida']
    },
    contabilidad: {
      name: 'Contabilidad', system: 'Excel · transición', automation: '34%', pending: '11',
      prompt: 'Ej.: Importá el balance, detectá inconsistencias y prepará los asientos que tengan alta confianza',
      suggestions: ['Importar balance de Excel', 'Sugerir asientos', 'Mostrar diferencias para revisar'],
      attention: [
        ['Grupo Litoral S.A.', 'Balance importado', '2 diferencias por revisar', 'warning'],
        ['Delta Servicios S.R.L.', 'Asientos sugeridos', 'Confianza promedio 96%', 'ready'],
        ['3 cierres', 'Documentación incompleta', 'Solicitudes enviadas', 'warning']
      ],
      actions: ['Importar y normalizar', 'Preparar asientos sugeridos', 'Revisar diferencias']
    }
  };

  if (typeof areaCatalog !== 'undefined') {
    if (areaCatalog.administracion) {
      areaCatalog.administracion.name = 'Administración';
      areaCatalog.administracion.lead = 'Operación interna';
      areaCatalog.administracion.clients = '268 clientes';
      areaCatalog.administracion.pending = '6 pendientes';
      areaCatalog.administracion.alerts = '2 alertas';
      areaCatalog.administracion.description = 'Cuentas de clientes, ingresos, gastos, cobranzas y operación interna con transición progresiva desde SIFER.';
    }
    areaCatalog.contabilidad = {
      name: 'Contabilidad', icon: 'Σ', lead: 'Equipo contable', clients: '268 clientes',
      pending: '11 cierres', alerts: '2 alertas', tone: 'contable',
      description: 'Contabilidad, asientos, conciliaciones y cierres con migración progresiva desde Excel.',
      tabs: [['resumen','Resumen'],['importacion','Importación'],['asientos','Asientos'],['conciliacion_contable','Conciliación'],['cierre_contable','Cierres'],['informes_contables','Informes'],['documentos','Documentación'],['automatizaciones','Automatizaciones']]
    };
  }

  if (typeof areaSummaries !== 'undefined') {
    areaSummaries.contabilidad = ['Operación contable','Importaciones, asientos, conciliaciones y cierres con revisión por excepción','Cierres a revisar','11','Dos diferencias materiales'];
    areaSummaries.administracion = ['Operación administrativa','Cobranzas, pagos, cuentas y movimientos internos','Movimientos a revisar','6','Dos imputaciones requieren criterio'];
  }

  if (typeof sectionModels !== 'undefined') {
    sectionModels.importacion = ['Importación inteligente','Lectura, normalización y validación de planillas actuales',['Archivos procesados','18','Este mes','Con diferencias','2','Revisión requerida','Normalizados','89%','Sin intervención'],['Importar balance de septiembre','Confirmar dos columnas detectadas','Aprobar estructura normalizada']];
    sectionModels.asientos = ['Asientos sugeridos','Propuestas automáticas con fuente, explicación y nivel de confianza',['Sugeridos','42','Período actual','Alta confianza','36','Listos para revisar','Con observación','6','Requieren criterio'],['Revisar asientos de alta confianza','Resolver cuenta no identificada','Aprobar lote preparado']];
    sectionModels.conciliacion_contable = ['Conciliación contable','Cruces automáticos y diferencias priorizadas',['Partidas conciliadas','384','Período actual','Diferencias','7','Priorizadas','Auto conciliadas','91%','Sin intervención'],['Revisar diferencia material','Aceptar coincidencias sugeridas','Cerrar conciliación bancaria']];
    sectionModels.cierre_contable = ['Cierre contable','Estado del cierre, bloqueos y evidencia',['Cierres activos','11','Cartera actual','Bloqueados','3','Falta documentación','Listos','5','Sólo aprobación'],['Resolver bloqueos','Preparar cierres completos','Emitir informes aprobados']];
    sectionModels.informes_contables = ['Informes contables','Resultados, balances y explicaciones generadas desde datos trazables',['Informes listos','8','Período actual','Para revisar','2','Control profesional','Emitidos','21','Este trimestre'],['Revisar balance preparado','Generar comparativo','Emitir informe aprobado']];
  }

  function esc(value) {
    return String(value || '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function commandCenter(meta, areaId, global = false) {
    const suggestions = meta.suggestions || [];
    return `<section class="ai-command-center ${global ? 'global-command' : ''}" data-ai-native>
      <div class="ai-command-heading">
        <span class="ai-spark">✦</span>
        <div>
          <div class="eyebrow">${global ? 'Agente operativo del estudio' : 'Agente de ' + esc(meta.name)}</div>
          <h2>${global ? '¿Qué querés resolver hoy?' : 'Pedí el resultado. La plataforma organiza los pasos.'}</h2>
          <p>${global ? 'Consultá, prepará o ejecutá procesos desde un único lugar.' : 'Consultá información o pedí una acción. El sistema prioriza excepciones y deja trazabilidad.'}</p>
        </div>
        <span class="ai-mode"><i></i> IA activa</span>
      </div>
      <div class="ai-command-input">
        <input data-ai-input aria-label="Instrucción para el agente" placeholder="${esc(meta.prompt)}">
        <button class="ai-voice" type="button" data-ai-voice aria-label="Usar voz" title="Usar voz">⌁</button>
        <button class="primary" type="button" data-ai-run>${global ? 'Resolver con IA' : 'Pedir al agente'}</button>
      </div>
      <div class="ai-suggestion-row">${suggestions.map(s => `<button type="button" data-ai-suggestion="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    </section>`;
  }

  function exceptionPanel(meta) {
    return `<section class="ai-ops-grid" data-ai-native>
      <article class="ai-attention-card">
        <div class="ai-section-head"><div><div class="eyebrow">Trabajo por excepción</div><h3>Necesita intervención</h3></div><span class="attention-count">${esc(meta.pending)}</span></div>
        <div class="ai-attention-list">${meta.attention.map(([title,desc,detail,kind]) => `<button type="button" class="ai-attention-item ${kind}" data-toast="Detalle preparado: ${esc(title)}"><span class="attention-dot"></span><span><b>${esc(title)}</b><strong>${esc(desc)}</strong><small>${esc(detail)}</small></span><em>→</em></button>`).join('')}</div>
      </article>
      <aside class="ai-automation-card">
        <div class="eyebrow">Operación automática</div>
        <div class="automation-score"><b>${esc(meta.automation)}</b><span>sin intervención</span></div>
        <div class="automation-track"><i style="width:${parseInt(meta.automation,10) || 0}%"></i></div>
        <p>El equipo interviene cuando una regla, dato o decisión sale de parámetros.</p>
        <div class="legacy-bridge"><span>Sistema actual</span><b>${esc(meta.system)}</b><small>Integración progresiva · invisible para la operación diaria</small></div>
      </aside>
    </section>`;
  }

  function actionStrip(meta) {
    return `<section class="ai-action-strip" data-ai-native><div><div class="eyebrow">Acciones contextuales</div><b>Menos navegación, más resultado</b></div><div>${meta.actions.map(a => `<button type="button" data-toast="Acción preparada: ${esc(a)}">${esc(a)}</button>`).join('')}</div></section>`;
  }

  const originalDashboard = typeof dashboard === 'function' ? dashboard : null;
  if (originalDashboard) {
    dashboard = function () {
      if (state.profile === 'Cliente') return originalDashboard();
      const meta = {
        name: 'Estudio', pending: '12', automation: '71%', system: 'Account · SIFER · Excel',
        prompt: 'Ej.: Mostrame todo lo que necesita una decisión humana hoy',
        suggestions: ['¿Qué necesita atención hoy?', 'Preparar todo lo que pueda resolverse automáticamente', '¿Qué cambió desde ayer?'],
        actions: ['Procesar casos listos', 'Revisar excepciones', 'Ver capacidad automatizada'],
        attention: [
          ['Impositivo', '2 períodos bloqueados', 'Documentación faltante', 'critical'],
          ['Previsional y Laboral', '3 liquidaciones para revisar', 'Una variación atípica', 'warning'],
          ['Atención al Cliente', '2 consultas escaladas', 'Necesitan criterio profesional', 'warning'],
          ['Documental', '41 archivos procesados', 'Sólo 3 requieren revisión', 'ready']
        ]
      };
      return `${header('Centro operativo','Buen día, Rafael','La plataforma prioriza lo que necesita criterio humano y automatiza el resto.')}
        ${commandCenter(meta,'global',true)}
        ${exceptionPanel(meta)}
        <section class="ai-home-status">
          <button type="button" data-go="areas/impositivo"><span>Impositivo</span><b>72%</b><small>automatizado</small></button>
          <button type="button" data-go="areas/previsional"><span>Laboral</span><b>64%</b><small>automatizado</small></button>
          <button type="button" data-go="areas/documental"><span>Documental</span><b>87%</b><small>automatizado</small></button>
          <button type="button" data-go="areas/administracion"><span>Administración</span><b>39%</b><small>automatizado</small></button>
          <button type="button" data-go="areas/contabilidad"><span>Contabilidad</span><b>34%</b><small>automatizado</small></button>
        </section>
        ${actionStrip(meta)}`;
    };
  }

  function removeOldAreaSearch(content) {
    const old = content.querySelector('.area-ai-search');
    if (old) old.remove();
  }

  function currentAreaId() {
    if (!state.page || !state.page.startsWith('areas/')) return null;
    return state.page.split('/')[1] || null;
  }

  function enhanceArea() {
    const areaId = currentAreaId();
    if (!areaId || areaId === 'areas') return;
    const meta = AREA_META[areaId];
    if (!meta) return;
    const content = document.querySelector('.content');
    const head = content?.querySelector('.page-head');
    if (!content || !head || content.querySelector('[data-ai-native]')) return;
    removeOldAreaSearch(content);
    head.insertAdjacentHTML('afterend', commandCenter(meta, areaId) + exceptionPanel(meta) + actionStrip(meta));

    content.querySelectorAll('.section-view-kpis').forEach(el => el.classList.add('ai-secondary-metrics'));
    if (areaId !== 'administracion') content.querySelectorAll('.integration-card').forEach(el => el.classList.add('ai-legacy-detail'));
  }

  function simplifySidebar() {
    if (state.profile === 'Cliente') return;
    document.querySelectorAll('.sidebar .side-group-items [data-go="administracion"]').forEach(el => el.remove());
  }

  function navigate(route) {
    state.page = route;
    history.pushState(null, '', `#${route}`);
    app();
  }

  function wireAI() {
    document.querySelectorAll('[data-ai-suggestion]').forEach(btn => {
      btn.onclick = () => {
        const center = btn.closest('.ai-command-center');
        const input = center?.querySelector('[data-ai-input]');
        if (input) input.value = btn.dataset.aiSuggestion || btn.textContent.trim();
        input?.focus();
      };
    });
    document.querySelectorAll('[data-ai-run]').forEach(btn => {
      btn.onclick = () => {
        const center = btn.closest('.ai-command-center');
        const input = center?.querySelector('[data-ai-input]');
        const text = input?.value?.trim() || 'Consulta preparada';
        if (typeof toast === 'function') toast(`Agente IA: ${text}`);
      };
    });
    document.querySelectorAll('[data-ai-voice]').forEach(btn => {
      btn.onclick = () => {
        btn.classList.toggle('listening');
        if (typeof toast === 'function') toast(btn.classList.contains('listening') ? 'Escuchando en modo demostración…' : 'Entrada por voz detenida');
      };
    });
    document.querySelectorAll('[data-ai-native] [data-go]').forEach(btn => {
      btn.onclick = () => navigate(btn.dataset.go);
    });
    document.querySelectorAll('[data-ai-native] [data-toast]').forEach(btn => {
      btn.onclick = () => typeof toast === 'function' && toast(btn.dataset.toast);
    });
  }

  function enhance() {
    document.body.classList.toggle('ai-native-area', Boolean(currentAreaId()));
    simplifySidebar();
    enhanceArea();
    wireAI();
  }

  const originalApp = app;
  app = function () {
    originalApp();
    requestAnimationFrame(enhance);
  };

  /* Re-render once so newly registered areas appear in the existing sidebar. */
  if (state.page !== 'login') app();
})();