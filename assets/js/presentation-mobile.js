/* La experiencia móvil forma parte explícita del roadmap de producto. */
(()=>{
  const addMobile=()=>{
    const last=document.querySelector('[data-stage="7"] p');
    if(last)last.textContent='Un nuevo activo comercial con plataforma web y aplicación móvil para Android y Apple.';
    if(typeof stages!=='undefined'){
      stages[7][2]='Multi-tenancy, parametrización, onboarding, operación SaaS y aplicación móvil para Android y Apple.';
      stages[7][3]='Un nuevo activo comercial, disponible en web y móvil.';
    }
  };
  addMobile();
})();
