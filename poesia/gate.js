/* Poesia del giorno: un elemento con data-from="AAAA-MM-GG" resta nascosto fino a quel giorno (ora di Roma). */
(function(){
  var t;
  try{t=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Rome',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}
  catch(e){var d=new Date();t=d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
  /* ?anteprima nell'indirizzo mostra subito anche le poesie dei giorni seguenti (link riservato a Giuseppe) */
  var pre=/[?&]anteprima\b/.test(location.search);
  document.querySelectorAll('[data-from]').forEach(function(el){
    if(pre||el.getAttribute('data-from')<=t){el.removeAttribute('hidden');return}
    if(el.tagName==='LI'){el.remove();return}
    el.innerHTML='<div class="wrap"><a class="back" href="./">← Tutte le poesie</a><p class="eyebrow">Poesia del giorno</p><p class="note">Questa poesia sarà online il '+(el.getAttribute('data-label')||'')+'.</p></div>';
    el.hidden=false;
  });
})();
