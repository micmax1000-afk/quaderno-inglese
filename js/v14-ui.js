/* V14 Compact navigation layer. Existing V13 logic remains the source of truth. */
(function(){
  function clickLegacy(tab){
    var b=document.querySelector('.tabs .tab-btn[data-tab="'+tab+'"]');
    if(b) b.click();
  }
  function sync(){
    var active=document.querySelector('.tabs .tab-btn.active');
    var current=active?active.dataset.tab:'home';
    document.querySelectorAll('.bottom-nav button[data-tab]').forEach(function(b){
      b.classList.toggle('active',b.dataset.tab===current);
      b.setAttribute('aria-current',b.dataset.tab===current?'page':'false');
    });
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest('.bottom-nav button[data-tab]');
    if(!b)return;
    e.preventDefault(); clickLegacy(b.dataset.tab); setTimeout(sync,0);
  });
  document.querySelectorAll('.settings-top-btn').forEach(function(b){b.addEventListener('click',function(){clickLegacy('settings');setTimeout(sync,0);});});
  new MutationObserver(sync).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});
  window.addEventListener('load',sync);
  sync();
})();
