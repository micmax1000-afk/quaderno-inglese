/* V14 Compact — single navigation + small mobile UI helpers. */
(function(){
  function clickLegacy(tab){
    const b=document.querySelector('.tabs .tab-btn[data-tab="'+tab+'"]');
    if(b) b.click();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function sync(){
    const active=document.querySelector('.tabs .tab-btn.active');
    const current=active?active.dataset.tab:'home';
    document.querySelectorAll('.bottom-nav button').forEach(b=>{
      const target=b.dataset.tab||b.dataset.go;
      b.classList.toggle('active',target===current);
      if(target===current)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
    });
    const dot=document.getElementById('talkStatusDot'),txt=document.getElementById('talkStatusText');
    if(dot&&txt){const key=!!(window.getMobileApiKey?window.getMobileApiKey():localStorage.getItem('quaderno_gemini_key'));dot.classList.toggle('ok',key);txt.textContent=key?'Gemini pronto':'Configura Gemini';}
  }
  document.addEventListener('click',function(e){
    const b=e.target.closest('[data-go]');
    if(!b || b.id==='installBtn')return;
    const tab=b.dataset.go;
    if(!tab)return;
    e.preventDefault();
    clickLegacy(tab);
    setTimeout(sync,0);
  });
  document.addEventListener('click',function(e){
    const b=e.target.closest('.bottom-nav button[data-tab]');
    if(!b)return;
    e.preventDefault();clickLegacy(b.dataset.tab);setTimeout(sync,0);
  });
  document.querySelector('.settings-top-btn')?.addEventListener('click',function(e){e.preventDefault();clickLegacy('settings');setTimeout(sync,0);});
  document.getElementById('talkClearTop')?.addEventListener('click',()=>document.getElementById('clearConversationBtn')?.click());
  const mark=(id)=>{try{const key='quaderno_daily_session_v14_'+new Date().toISOString().slice(0,10);const x=JSON.parse(localStorage.getItem(key)||'{}');x[id]=true;localStorage.setItem(key,JSON.stringify(x));if(typeof renderDailySession==='function')renderDailySession();}catch(_) {}}
  document.addEventListener('click',e=>{if(e.target.closest('.rate-btn'))mark('review');if(e.target.closest('#oxfordKnownBtn'))mark('newwords');});
  document.getElementById('sendBtn')?.addEventListener('click',()=>mark('conversation'));
  document.getElementById('tutorSend')?.addEventListener('click',()=>mark('conversation'));
  new MutationObserver(sync).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});
  window.addEventListener('load',sync);sync();
})();
