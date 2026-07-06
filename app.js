const DATA = [
  {
    "id": "arg-egy",
    "date": "07/07",
    "time": "18:00",
    "stage": "8e de finale",
    "home": "Argentine",
    "away": "Égypte",
    "pick": "Argentine",
    "score": "2-0",
    "altScore": "3-1",
    "confidence": 78,
    "reliability": 8.4,
    "risk": "Faible",
    "category": "Prime Pick",
    "qualification": "Argentine",
    "probabilities": {
      "home": 69,
      "draw": 19,
      "away": 12
    },
    "market": "Safe",
    "trend": "↑",
    "why": "Avantage net en expérience, contrôle du tempo et qualité offensive. C’est le pick le plus propre du tableau actuel.",
    "signals": [
      "Écart de niveau net",
      "Expérience élimination",
      "Contrôle du tempo",
      "Pick prioritaire"
    ]
  },
  {
    "id": "fra-mar",
    "date": "09/07",
    "time": "22:00",
    "stage": "Quart de finale",
    "home": "France",
    "away": "Maroc",
    "pick": "France",
    "score": "2-1",
    "altScore": "1-0",
    "confidence": 72,
    "reliability": 7.6,
    "risk": "Moyen",
    "category": "Core Pick",
    "qualification": "France",
    "probabilities": {
      "home": 58,
      "draw": 24,
      "away": 18
    },
    "market": "Core",
    "trend": "→",
    "why": "France favorite, mais Maroc dangereux en bloc bas et transition. Le score serré est plus intelligent pour MPP.",
    "signals": [
      "Profondeur France",
      "Maroc en confiance",
      "Transitions dangereuses",
      "Score serré"
    ]
  },
  {
    "id": "nor-eng",
    "date": "11/07",
    "time": "23:00",
    "stage": "Quart de finale",
    "home": "Norvège",
    "away": "Angleterre",
    "pick": "Angleterre",
    "score": "1-2",
    "altScore": "2-2",
    "confidence": 60,
    "reliability": 6.4,
    "risk": "Moyen+",
    "category": "Balanced",
    "qualification": "Angleterre",
    "probabilities": {
      "home": 30,
      "draw": 27,
      "away": 43
    },
    "market": "Balanced",
    "trend": "↯",
    "why": "Norvège très dangereuse, mais Angleterre plus complète collectivement. Pick jouable, pas verrouillé.",
    "signals": [
      "Haaland danger",
      "Angleterre complète",
      "Risque prolongation",
      "Match volatil"
    ]
  },
  {
    "id": "usa-bel",
    "date": "07/07",
    "time": "02:00",
    "stage": "8e de finale",
    "home": "États-Unis",
    "away": "Belgique",
    "pick": "États-Unis",
    "score": "2-1",
    "altScore": "1-1",
    "confidence": 59,
    "reliability": 6.1,
    "risk": "Moyen+",
    "category": "Value",
    "qualification": "États-Unis",
    "probabilities": {
      "home": 43,
      "draw": 25,
      "away": 32
    },
    "market": "Value",
    "trend": "↑",
    "why": "Value pick intéressant si tu dois te différencier. La Belgique reste dangereuse, donc ce n’est pas safe.",
    "signals": [
      "Contexte USA",
      "Belgique irrégulière",
      "Match ouvert",
      "Potentiel différenciant"
    ]
  },
  {
    "id": "por-esp",
    "date": "06/07",
    "time": "21:00",
    "stage": "8e de finale",
    "home": "Portugal",
    "away": "Espagne",
    "pick": "Espagne",
    "score": "1-2",
    "altScore": "1-1",
    "confidence": 56,
    "reliability": 5.8,
    "risk": "Élevé",
    "category": "Trap Game",
    "qualification": "Espagne",
    "probabilities": {
      "home": 32,
      "draw": 27,
      "away": 41
    },
    "market": "Trap",
    "trend": "↯",
    "why": "Espagne légèrement devant, mais marge très faible. Beaucoup d’incertitude : mauvais match à surconfiancer.",
    "signals": [
      "Marge faible",
      "Risque de nul",
      "Portugal dangereux",
      "Match piège"
    ]
  },
  {
    "id": "sui-col",
    "date": "07/07",
    "time": "22:00",
    "stage": "8e de finale",
    "home": "Suisse",
    "away": "Colombie",
    "pick": "Colombie",
    "score": "1-2",
    "altScore": "1-1",
    "confidence": 54,
    "reliability": 5.2,
    "risk": "Élevé",
    "category": "High Variance",
    "qualification": "Colombie",
    "probabilities": {
      "home": 35,
      "draw": 28,
      "away": 37
    },
    "market": "Trap",
    "trend": "↯",
    "why": "Match très équilibré. Colombie plus explosive, Suisse plus structurée. À éviter en mode safe.",
    "signals": [
      "Équilibre élevé",
      "Suisse structurée",
      "Colombie explosive",
      "Risque prolongation"
    ]
  },
  {
    "id": "qf-1",
    "date": "10/07",
    "time": "21:00",
    "stage": "Quart de finale",
    "home": "Vainqueur Portugal/Espagne",
    "away": "Vainqueur USA/Belgique",
    "pick": "À attendre",
    "score": "—",
    "altScore": "—",
    "confidence": 0,
    "reliability": 0,
    "risk": "À attendre",
    "category": "Pending",
    "qualification": "À confirmer",
    "probabilities": {
      "home": 0,
      "draw": 0,
      "away": 0
    },
    "market": "Wait",
    "trend": "—",
    "why": "Les qualifiés ne sont pas connus. Ne verrouille pas ce match.",
    "signals": [
      "Qualifiés inconnus",
      "Styles variables",
      "À recalculer"
    ]
  },
  {
    "id": "qf-2",
    "date": "12/07",
    "time": "03:00",
    "stage": "Quart de finale",
    "home": "Vainqueur Argentine/Égypte",
    "away": "Vainqueur Suisse/Colombie",
    "pick": "Argentine probable",
    "score": "2-1",
    "altScore": "2-0",
    "confidence": 66,
    "reliability": 6.8,
    "risk": "À confirmer",
    "category": "Bracket Edge",
    "qualification": "Argentine probable",
    "probabilities": {
      "home": 52,
      "draw": 25,
      "away": 23
    },
    "market": "Conditional",
    "trend": "→",
    "why": "Si l’Argentine passe, elle sera favorite. À recalculer dès que l’affiche est officielle.",
    "signals": [
      "Scénario dépendant",
      "Argentine favorite",
      "À confirmer"
    ]
  }
];
let currentFilter = "all";

function isRecommended(m) { return m.pick !== "À attendre" && m.confidence >= 54; }
function cls(m) {
  if (m.pick === "À attendre" || m.confidence === 0) return "wait";
  if (m.confidence >= 72 || m.risk === "Faible") return "safe";
  if (m.confidence >= 58 || m.risk.includes("Moyen")) return "mid";
  return "danger";
}
function displayPick(m) {
  const mode = document.getElementById("mode").value;
  if (m.pick === "À attendre") return "À attendre";
  if (mode === "safe" && m.confidence < 60) return "À éviter";
  if (mode === "comeback" && m.confidence < 65) return m.pick + " / value";
  return m.pick;
}
function line(m) {
  return `${m.date} ${m.time} — ${m.home} - ${m.away} : ${displayPick(m)} | Score MPP : ${m.score} | Alternative : ${m.altScore} | Qualif : ${m.qualification} | Confiance : ${m.confidence}% | Fiabilité : ${m.reliability}/10 | Risque : ${m.risk}`;
}
function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll(".filter").forEach(t => t.classList.toggle("active", t.dataset.filter === f));
  render();
}
function renderPrime(top) {
  const m = top[0];
  if (!m) return "";
  return `<div class="prime-inner">
    <div><span class="overline">Prime recommendation</span><p>${m.stage} · ${m.date} · ${m.time}</p></div>
    <div class="prime-team">
      <div class="orb" style="--v:${m.confidence}"><b>${m.reliability}</b></div>
      <div class="prime-name">${m.pick}</div>
      <p>${m.home} vs ${m.away}</p>
    </div>
    <div class="prime-bottom">
      <div><span>Score MPP</span><b>${m.score}</b></div>
      <div><span>Confidence</span><b>${m.confidence}%</b></div>
    </div>
  </div>`;
}
function render() {
  const q = document.getElementById("search").value.toLowerCase();
  const mode = document.getElementById("mode").value;
  const recommended = DATA.filter(isRecommended);
  const avoid = DATA.filter(m => m.pick === "À attendre" || m.confidence < 54);
  const safe = DATA.filter(m => m.confidence >= 70);
  const value = DATA.filter(m => ["Value","Trap","High Variance"].some(x => m.category.includes(x)));
  const top = recommended.slice().sort((a,b) => b.confidence - a.confidence);

  document.getElementById("strategyTitle").innerText = mode === "safe" ? "Safe mode" : mode === "comeback" ? "Remontada mode" : "Balanced mode";
  document.getElementById("strategyText").innerText =
    mode === "safe" ? "On conserve les picks à forte fiabilité et on neutralise les matchs à variance élevée." :
    mode === "comeback" ? "On garde les bases solides et on ajoute des value picks pour maximiser les écarts MPP." :
    "On sécurise les favoris propres puis on utilise une différence calculée si le potentiel est intéressant.";
  document.getElementById("safeCount").innerText = safe.length;
  document.getElementById("valueCount").innerText = value.length;
  document.getElementById("heroText").innerText = `${DATA.length} matchs suivis. ${recommended.length} recommandations. ${avoid.length} alertes risque.`;
  document.getElementById("m1").innerText = DATA.length;
  document.getElementById("m2").innerText = recommended.length;
  document.getElementById("m3").innerText = safe.length;
  document.getElementById("m4").innerText = avoid.length;
  document.getElementById("primeCard").innerHTML = renderPrime(top);

  const list = DATA.filter(m => {
    const text = `${m.home} ${m.away} ${m.pick} ${m.category} ${m.why}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (currentFilter === "recommended" && !isRecommended(m)) return false;
    if (currentFilter === "value" && !value.includes(m)) return false;
    if (currentFilter === "risk" && !(m.confidence < 58 || m.pick === "À attendre")) return false;
    return true;
  });

  document.getElementById("matchBoard").innerHTML = list.map(m => `<article class="match-row" id="row-${m.id}">
    <div class="match-summary" onclick="toggleRow('${m.id}')">
      <div class="team">${m.home}</div><div class="time">${m.time}</div><div class="team">${m.away}</div>
      <div class="pick-pill ${cls(m)}">${displayPick(m)} · ${m.score}</div><div class="chev">⌄</div>
    </div>
    <div class="match-detail">
      <div class="detail-card">
        <span class="overline">${m.stage} · ${m.date}</span><h2>${displayPick(m)}</h2><div class="score">${m.score}</div>
        <p>${m.why}</p><div class="signals">${m.signals.map(s => `<span class="signal">${s}</span>`).join("")}</div>
        <button class="copy" onclick="copyOne('${m.id}')">Copy MPP pick</button>
      </div>
      <div class="detail-card">
        <span class="overline">Probability matrix</span>
        <div class="prob-row"><span>1</span><div class="bar"><span style="width:${m.probabilities.home}%"></span></div><span>${m.probabilities.home}%</span></div>
        <div class="prob-row"><span>N</span><div class="bar"><span style="width:${m.probabilities.draw}%"></span></div><span>${m.probabilities.draw}%</span></div>
        <div class="prob-row"><span>2</span><div class="bar"><span style="width:${m.probabilities.away}%"></span></div><span>${m.probabilities.away}%</span></div>
        <p><b>Reliability:</b> ${m.reliability}/10</p><p><b>Alternative:</b> ${m.altScore}</p><p><b>Qualification:</b> ${m.qualification}</p>
      </div>
    </div>
  </article>`).join("");

  document.getElementById("topList").innerHTML = top.slice(0,5).map((m,i) => `<div class="rank-item"><b>${i+1}. ${displayPick(m)} · ${m.score}</b><span>${m.home} - ${m.away} · ${m.confidence}% · ${m.reliability}/10</span><em class="badge ${cls(m)}">${m.market}</em></div>`).join("");
  document.getElementById("alerts").innerHTML = [
    ...avoid.slice(0,3).map(m => `<div class="insight-item"><b>Risk: ${m.home} - ${m.away}</b><span>${m.risk} · ${m.mpp}</span></div>`),
    ...value.slice(0,2).map(m => `<div class="insight-item"><b>Angle: ${m.pick}</b><span>${m.category} · ${m.confidence}%</span></div>`)
  ].join("");
}
function toggleRow(id) { document.getElementById("row-" + id).classList.toggle("open"); }
function copyOne(id) { const m = DATA.find(x => x.id === id); navigator.clipboard.writeText(line(m)).then(() => alert("Prono copié ✅")); }
function copyAll() { const txt = DATA.filter(isRecommended).map(line).join("\n"); navigator.clipboard.writeText(txt).then(() => alert("Tous les pronos recommandés sont copiés ✅")); }
render();
