/* Enlace comercial, separado de la navegación operativa de la plataforma. */
(() => {
  const addLink=()=>document.querySelectorAll('.profile-dropdown').forEach(menu=>{
    if(menu.querySelector('[data-budget-link]'))return;
    const link=document.createElement('a');
    link.href='presupuesto.html'; link.dataset.budgetLink=''; link.textContent='Propuesta de inversión';
    const original=[...menu.querySelectorAll('a')].find(item=>item.href.includes('maqueta-original'));
    const presentation=document.createElement('a');
    presentation.href='index.html'; presentation.dataset.presentationLink=''; presentation.textContent='Presentación estratégica';
    if(original){menu.insertBefore(presentation,original);menu.insertBefore(link,original)}else{menu.append(presentation,link)};
  });
  new MutationObserver(addLink).observe(document.body,{childList:true,subtree:true});
  addLink();
})();
