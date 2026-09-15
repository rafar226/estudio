/* Recorrido de presentación: Mapa → Presentación → Plataforma. */
(()=>{
  const next=()=>{const link=document.querySelector('#explore-platform');if(!link)return;if(link.href!==new URL('index.html',location.href).href)link.href='index.html';if(link.textContent!=='Continuar a la presentación →')link.textContent='Continuar a la presentación →';if(link.classList.contains('disabled'))link.classList.remove('disabled');if(link.getAttribute('aria-disabled')!=='false')link.setAttribute('aria-disabled','false')};
  const link=document.querySelector('#explore-platform');if(link)new MutationObserver(next).observe(link,{attributes:true,attributeFilter:['class','aria-disabled']});
  next();
})();
