let DATA=[];let META={};let view='dashboard';
async function syncData(manual=false){
 try{
  const res=await fetch('data.json?v='+Date.now(),{cache:'no-store'});
  const payload=await res.json();
  DATA=payload.matches||[]; META=payload.meta||{};
  localStorage.setItem('predikt_cache',JSON.stringify(payload));
  updateSyncUI('Connecté', new Date().toLocaleTimeString('fr-FR'));
  render();
  if(manual) alert('Synchronisation terminée ✅');
 }catch(e){
  const cached=localStorage.getItem('predikt_cache');
  if(cached){const payload=JSON.parse(cached);DATA=payload.matches||[];META=payload.meta||{};updateSyncUI('Cache local', new Date().toLocaleTimeString('fr-FR'));render();}
  else{updateSyncUI('Erreur sync', '—');}
 }}
function updateSyncUI(status,time){
 ['syncStatus','syncFileStatus'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerText=status});
 ['lastSync','syncTime'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerText='Dernière mise à jour : '+(META.last_updated||time)});
}
function rec(m){return m.pick!=='À attendre'&&m.conf>=54}
function cls(m){if(m.pick==='À attendre'||m.conf===0)return'wait';if(m.conf>=72||m.risk==='Faible')return'safe';if(m.conf>=58||m.risk.includes('Moyen'))return'mid';return'danger'}
function display(m){const mode=document.getElementById('mode').value;if(m.pick==='À attendre')return'À attendre';if(mode==='safe'&&m.conf<60)return'À éviter';if(mode==='comeback'&&m.conf<65)return m.pick+' / value';return m.pick}
function line(m){return `${m.date} ${m.time} — ${m.match} : ${display(m)} | Score MPP : ${m.score} | Action : ${m.action} | Alternative : ${m.alt} | Qualif : ${m.qualif} | Confiance : ${m.conf}% | Fiabilité : ${m.rel}/10 | Risque : ${m.risk}`}
function setView(v){view=v;document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));document.getElementById(v).classList.add('active');document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.view===v));document.getElementById('pageTitle').innerText={dashboard:'Centre de décision',picks:'Recommandations IA',matches:'Match Center',sync:'Synchronisation'}[v];render()}
function prime(top){const m=top[0];if(!m)return'';return`<span class="eyebrow">PREDIKT Score</span><div class="orb" style="--v:${m.conf}"><b>${m.rel}</b></div><div class="prime-name">${m.pick}</div><p>${m.match} · ${m.score} · ${m.conf}%</p><button onclick="copyOne('${m.id}')">Copier ce pick</button>`}
function render(){
 if(!DATA.length)return;
 const recommended=DATA.filter(rec),avoid=DATA.filter(m=>m.pick==='À attendre'||m.conf<54),safe=DATA.filter(m=>m.conf>=70),top=recommended.slice().sort((a,b)=>b.conf-a.conf);
 document.getElementById('pageSubtitle').innerText=`${DATA.length} matchs suivis · ${recommended.length} picks exploitables · ${avoid.length} alertes · Sync V8 active.`;
 document.getElementById('prime').innerHTML=prime(top);
 ['k1','k2','k3','k4'].forEach((id,i)=>document.getElementById(id).innerText=[DATA.length,recommended.length,safe.length,avoid.length][i]);
 document.getElementById('actionCards').innerHTML=top.slice(0,4).map(m=>`<div class="action-card"><b>${display(m)} · ${m.score}</b><span>${m.match} · ${m.action}</span></div>`).join('');
 document.getElementById('top5').innerHTML=top.slice(0,5).map((m,i)=>`<div class="rowitem"><b>${i+1}. ${display(m)} · ${m.score}</b><span>${m.match} · ${m.conf}% · ${m.action}</span><em class="badge ${cls(m)}">${m.type}</em></div>`).join('');
 document.getElementById('alerts').innerHTML=avoid.slice(0,5).map(m=>`<div class="rowitem"><b>${m.match}</b><span>${m.risk} · ${m.action}</span><em class="badge ${cls(m)}">${m.type}</em></div>`).join('');
 const q=(document.getElementById('searchPicks')?.value||'').toLowerCase(); const list=DATA.filter(m=>!q||`${m.match} ${m.pick} ${m.action} ${m.type}`.toLowerCase().includes(q));
 document.getElementById('decisionTable').innerHTML=`<div class="table-head"><span>Match</span><span>Pick</span><span>Score</span><span>Conf.</span><span>Action</span><span>Risque</span></div>`+list.map(m=>`<div class="table-row"><div class="cell-main"><b>${m.match}</b><span>${m.date} · ${m.time} · ${m.stage}</span></div><b>${display(m)}</b><b>${m.score}</b><span>${m.conf||'—'}%</span><span class="pill ${cls(m)}">${m.action}</span><span class="pill ${cls(m)}">${m.risk}</span></div>`).join('');
 document.getElementById('matchRows').innerHTML=DATA.map(m=>`<article class="match-detail"><div><span class="eyebrow">${m.stage} · ${m.date} · ${m.time}</span><h2>${m.match}</h2><div class="score">${display(m)} · ${m.score}</div><p>${m.why}</p><div class="signals">${m.signals.map(s=>`<span class="signal">${s}</span>`).join('')}</div><button onclick="copyOne('${m.id}')">Copier ce prono</button></div><div><span class="eyebrow">Probabilités</span><div class="prob"><span>1</span><div class="bar"><span style="width:${m.p[0]}%"></span></div><span>${m.p[0]}%</span></div><div class="prob"><span>N</span><div class="bar"><span style="width:${m.p[1]}%"></span></div><span>${m.p[1]}%</span></div><div class="prob"><span>2</span><div class="bar"><span style="width:${m.p[2]}%"></span></div><span>${m.p[2]}%</span></div><p><b>Fiabilité :</b> ${m.rel}/10</p><p><b>Alternative :</b> ${m.alt}</p></div></article>`).join('');
}
function copyOne(id){const m=DATA.find(x=>x.id===id);navigator.clipboard.writeText(line(m)).then(()=>alert('Prono copié ✅'))}
function copyAll(){navigator.clipboard.writeText(DATA.filter(rec).map(line).join('\n')).then(()=>alert('Pronos copiés ✅'))}
syncData(false); setInterval(()=>syncData(false),300000);