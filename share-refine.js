(()=>{
  const referral=document.querySelector('.referral');
  if(!referral)return;

  const primary=document.querySelector('[data-share-referral]');
  const whatsapp=document.querySelector('[data-whatsapp-referral]');
  const copy=document.querySelector('[data-copy-referral]');
  const status=document.querySelector('.share-status');
  const stages=[...document.querySelectorAll('.referral-stage')];
  const mobile=matchMedia('(max-width:760px)');
  let feedbackTimer=0;

  const moveTo=(index)=>{
    if(!mobile.matches||!stages[index])return;
    stages[index].click();
  };

  const pulse=(complete=false)=>{
    referral.classList.add('share-active','share-feedback');
    referral.classList.toggle('share-complete',complete);
    clearTimeout(feedbackTimer);
    feedbackTimer=setTimeout(()=>{
      referral.classList.remove('share-feedback');
      if(!complete)referral.classList.remove('share-active');
    },2200);
  };

  const beginShare=()=>{
    if(!mobile.matches)return;
    moveTo(1);
    pulse(false);
  };

  primary?.addEventListener('click',beginShare);
  copy?.addEventListener('click',beginShare);
  whatsapp?.addEventListener('click',()=>{
    if(!mobile.matches)return;
    moveTo(1);
    pulse(false);
    if(status)status.textContent='WhatsApp aperto · invito pronto da inviare.';
  });

  if(primary){
    primary.setAttribute('aria-label',navigator.share?'Passa il segno: condividi l’invito':'Passa il segno: copia il link demo');
  }

  if(status){
    new MutationObserver(()=>{
      const text=status.textContent.trim().toLowerCase();
      if(!mobile.matches||!text)return;
      const completed=text.includes('copiato')||text.includes('condivisione aperta');
      if(completed){
        moveTo(2);
        pulse(true);
      }
    }).observe(status,{childList:true,characterData:true,subtree:true});
  }

  referral.addEventListener('pointerdown',event=>{
    const button=event.target.closest('.referral-share button');
    if(button&&mobile.matches)referral.classList.add('share-active');
  },{passive:true});

  window.addEventListener('resize',()=>{
    if(!mobile.matches)referral.classList.remove('share-active','share-feedback','share-complete');
  },{passive:true});
})();
