/* Ajustes de presentación de la propuesta cerrada. */
(()=>{
  const refine=()=>{
    const app=document.querySelector('#budget-app'); if(!app)return;
    const setText=(node,value)=>{if(node&&node.textContent!==value)node.textContent=value};
    const eyebrow=app.querySelector('.hero .eyebrow');setText(eyebrow,'PLATAFORMA DAHLGREN · PROPUESTA DE INVERSIÓN');
    const intro=app.querySelector('.hero p');setText(intro,'Plataforma Dahlgren puede desarrollarse de manera gradual con un responsable técnico único o acelerar su evolución mediante un equipo ampliado.');
    const summary=app.querySelector('.summary-main');if(summary){const label=summary.querySelector('.eyebrow');setText(label,'RESUMEN DE INVERSIÓN MENSUAL');const note=summary.querySelector('p');setText(note,'Equipo profesional asignado al desarrollo y evolución de la Plataforma Dahlgren.')}
    app.querySelectorAll('.tag').forEach(tag=>tag.remove());
    const intense=app.querySelector('[data-scenario="intensiva"]');if(intense)intense.remove();
    const scenarios=app.querySelector('.scenario-grid');if(scenarios)scenarios.classList.add('two-scenarios');
    const policy=app.querySelector('.disclosure');if(policy&&!policy.dataset.finalPolicy){policy.innerHTML='<b>Política de transparencia.</b> No se agrega margen oculto sobre consumos de terceros. Se presentarán facturas o reportes de consumo; cuando sea posible, los servicios estarán a nombre de Dahlgren o en cuentas con titularidad y acceso definidos.<br><br>Con una cartera estimada de 250 a 300 clientes, superar USD 1.000 mensuales se considera un escenario excepcional y requeriría revisar el consumo, la arquitectura y las integraciones activas.';policy.dataset.finalPolicy='true'}
    app.querySelectorAll('.accordions details').forEach(detail=>{if(detail.querySelector('summary')?.textContent==='Arquitectura de referencia'){const list=detail.querySelector('ul');if(list&&!list.textContent.includes('Aplicación móvil'))list.insertAdjacentHTML('beforeend','<li>Aplicación móvil nativa para Android y Apple (iOS)</li>')}});
    const closing=[...app.querySelectorAll('.footnote')].find(item=>item.textContent.includes('Esta es una maqueta comercial')||item.textContent.includes('Los honorarios corresponden'));setText(closing,'La infraestructura se factura por separado según consumo real. Los honorarios corresponden a la modalidad elegida y las condiciones comerciales acordadas.');
  };
  new MutationObserver(refine).observe(document.querySelector('#budget-app'),{childList:true,subtree:true});
  refine();
})();
