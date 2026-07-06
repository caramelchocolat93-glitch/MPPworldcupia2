const DATA = [
  {
    "id": "arg-egy",
    "date": "07/07",
    "time": "18:00",
    "stage": "8e de finale",
    "home": "Argentine",
    "away": "Égypte",
    "homeFlag": "🇦🇷",
    "awayFlag": "🇪🇬",
    "pick": "Argentine",
    "score": "2-0",
    "altScore": "3-1",
    "confidence": 78,
    "reliability": 8.4,
    "risk": "Faible",
    "category": "Hot Pick",
    "qualification": "Argentine",
    "probabilities": {
      "home": 69,
      "draw": 19,
      "away": 12
    },
    "momentum": "En hausse",
    "mpp": "À verrouiller",
    "tag": "SAFE",
    "why": "L’Argentine possède l’avantage le plus net du tableau actuel : expérience, qualité individuelle et capacité à contrôler le tempo.",
    "signals": [
      "Écart de niveau net",
      "Expérience élimination",
      "Plafond offensif supérieur",
      "Pick le plus fiable"
    ]
  },
  {
    "id": "fra-mar",
    "date": "09/07",
    "time": "22:00",
    "stage": "Quart de finale",
    "home": "France",
    "away": "Maroc",
    "homeFlag": "🇫🇷",
    "awayFlag": "🇲🇦",
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
    "momentum": "Stable",
    "mpp": "Très jouable",
    "tag": "CORE",
    "why": "La France reste favorite, mais le Maroc peut fermer le match et frapper en transition. Le 2-1 est plus crédible qu’un score large.",
    "signals": [
      "France plus complète",
      "Maroc en confiance",
      "Transitions dangereuses",
      "Score serré probable"
    ]
  },
  {
    "id": "nor-eng",
    "date": "11/07",
    "time": "23:00",
    "stage": "Quart de finale",
    "home": "Norvège",
    "away": "Angleterre",
    "homeFlag": "🇳🇴",
    "awayFlag": "🏴",
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
    "momentum": "Volatil",
    "mpp": "Jouable mais risqué",
    "tag": "BALANCED",
    "why": "La Norvège arrive avec une dynamique forte, mais l’Angleterre reste plus complète sur l’ensemble du terrain.",
    "signals": [
      "Norvège euphorique",
      "Angleterre plus complète",
      "Haaland danger",
      "Risque prolongation"
    ]
  },
  {
    "id": "usa-bel",
    "date": "07/07",
    "time": "02:00",
    "stage": "8e de finale",
    "home": "États-Unis",
    "away": "Belgique",
    "homeFlag": "🇺🇸",
    "awayFlag": "🇧🇪",
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
    "momentum": "En hausse",
    "mpp": "Différenciation",
    "tag": "VALUE",
    "why": "Les États-Unis offrent un levier de différenciation intéressant. La Belgique garde une vraie menace offensive.",
    "signals": [
      "Contexte favorable USA",
      "Belgique irrégulière",
      "Match ouvert",
      "Potentiel value"
    ]
  },
  {
    "id": "por-esp",
    "date": "06/07",
    "time": "21:00",
    "stage": "8e de finale",
    "home": "Portugal",
    "away": "Espagne",
    "homeFlag": "🇵🇹",
    "awayFlag": "🇪🇸",
    "pick": "Espagne",
    "score": "1-2",
    "altScore": "1-1",
    "confidence": 56,
    "reliability": 5.8,
    "risk": "Élevé",
    "category": "Trap",
    "qualification": "Espagne",
    "probabilities": {
      "home": 32,
      "draw": 27,
      "away": 41
    },
    "momentum": "Incertain",
    "mpp": "Match piège",
    "tag": "TRAP",
    "why": "L’Espagne ressort légèrement devant, mais l’écart est trop faible pour parler de pick solide.",
    "signals": [
      "Espagne plus stable",
      "Portugal en transition",
      "Risque nul élevé",
      "Faible marge"
    ]
  },
  {
    "id": "sui-col",
    "date": "07/07",
    "time": "22:00",
    "stage": "8e de finale",
    "home": "Suisse",
    "away": "Colombie",
    "homeFlag": "🇨🇭",
    "awayFlag": "🇨🇴",
    "pick": "Colombie",
    "score": "1-2",
    "altScore": "1-1",
    "confidence": 54,
    "reliability": 5.2,
    "risk": "Élevé",
    "category": "Trap",
    "qualification": "Colombie",
    "probabilities": {
      "home": 35,
      "draw": 28,
      "away": 37
    },
    "momentum": "Incertain",
    "mpp": "À éviter en safe",
    "tag": "TRAP",
    "why": "La Colombie a plus de tranchant, mais la Suisse est très difficile à éliminer. Gros risque de prolongation.",
    "signals": [
      "Match très équilibré",
      "Suisse organisée",
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
    "homeFlag": "⏳",
    "awayFlag": "⏳",
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
    "momentum": "À confirmer",
    "mpp": "Ne pas verrouiller",
    "tag": "WAIT",
    "why": "Les équipes ne sont pas encore confirmées. À recalculer après les huitièmes.",
    "signals": [
      "Qualifiés inconnus",
      "Styles différents",
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
    "homeFlag": "⏳",
    "awayFlag": "⏳",
    "pick": "Argentine probable",
    "score": "2-1",
    "altScore": "2-0",
    "confidence": 66,
    "reliability": 6.8,
    "risk": "À confirmer",
    "category": "Bracket",
    "qualification": "Argentine probable",
    "probabilities": {
      "home": 52,
      "draw": 25,
      "away": 23
    },
    "momentum": "À confirmer",
    "mpp": "Sous condition",
    "tag": "BRACKET",
    "why": "Si l’Argentine passe, elle sera favorite. Ce match devra être recalculé dès l’affiche officielle.",
    "signals": [
      "Dépend des qualifiés",
      "Argentine favorite si qualifiée",
      "Risque à recalculer"
    ]
  }
];
let currentFilter = "all";

function isRecommended(m) {
  return m.pick !== "À attendre" && m.confidence >= 54;
}

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
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.filter === f));
  render();
}

function renderTop(top) {
  const m = top[0];
  if (!m) return "";
  return `
    <div class="top-inner">
      <div>
        <span class="caption">Hot pick</span>
        <p>${m.stage} · ${m.date} · ${m.time}</p>
      </div>
      <div class="team-big">
        <div class="flag-big">${m.homeFlag}</div>
        <b>${m.pick}</b>
        <p>${m.home} - ${m.away}</p>
      </div>
      <div class="confidence-ring" style="--value:${m.confidence}">
        <span>${m.reliability}/10</span>
      </div>
    </div>
  `;
}

function render() {
  const q = document.getElementById("search").value.toLowerCase();
  const mode = document.getElementById("mode").value;

  const recommended = DATA.filter(isRecommended);
  const avoid = DATA.filter(m => m.pick === "À attendre" || m.confidence < 54);
  const value = DATA.filter(m => ["Value", "Trap"].some(x => m.category.includes(x)));
  const safe = DATA.filter(m => m.confidence >= 70);
  const top = recommended.slice().sort((a,b) => b.confidence - a.confidence);

  const strategyTitle = mode === "safe" ? "Mode safe" : mode === "comeback" ? "Mode remontada" : "Mode équilibré";
  const strategyText =
    mode === "safe"
      ? "Priorité aux picks fiables. On coupe les matchs à marge faible."
      : mode === "comeback"
      ? "On garde les bases solides et on ajoute des value picks pour gagner des places."
      : "On sécurise les meilleurs favoris, puis on tente une différence calculée.";

  document.getElementById("strategyTitle").innerText = strategyTitle;
  document.getElementById("strategyText").innerText = strategyText;
  document.getElementById("safeMini").innerText = safe.length;
  document.getElementById("valueMini").innerText = value.length;
  document.getElementById("heroSentence").innerText = `${DATA.length} matchs suivis. ${recommended.length} pronostics recommandés. ${avoid.length} matchs à éviter.`;
  document.getElementById("kpiMatches").innerText = DATA.length;
  document.getElementById("kpiRecommended").innerText = recommended.length;
  document.getElementById("kpiAvoid").innerText = avoid.length;
  document.getElementById("topPick").innerHTML = renderTop(top);

  const label = currentFilter === "all" ? "Tous" : currentFilter === "recommended" ? "Picks" : currentFilter === "value" ? "Value" : "Pièges";
  document.getElementById("filterLabel").innerText = label;

  const list = DATA.filter(m => {
    const text = `${m.home} ${m.away} ${m.pick} ${m.category} ${m.why}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (currentFilter === "recommended" && !isRecommended(m)) return false;
    if (currentFilter === "value" && !value.includes(m)) return false;
    if (currentFilter === "trap" && !(m.category === "Trap" || m.pick === "À attendre" || m.confidence < 55)) return false;
    return true;
  });

  document.getElementById("matchList").innerHTML = list.map(m => `
    <article class="match-row" id="row-${m.id}">
      <div class="match-summary" onclick="toggleRow('${m.id}')">
        <div class="team">${m.homeFlag} ${m.home}</div>
        <div class="time">${m.time}</div>
        <div class="team">${m.awayFlag} ${m.away}</div>
        <div class="pick-pill ${cls(m)}">${displayPick(m)} · ${m.score}</div>
        <div class="chev">⌄</div>
      </div>
      <div class="match-detail">
        <div class="detail-card">
          <span class="caption">${m.stage} · ${m.date}</span>
          <h2>${displayPick(m)}</h2>
          <div class="score">${m.score}</div>
          <p>${m.why}</p>
          <div class="signals">${m.signals.map(s => `<span class="signal">${s}</span>`).join("")}</div>
          <button class="copy" onclick="copyOne('${m.id}')">Copier ce prono</button>
        </div>
        <div class="detail-card">
          <span class="caption">Probabilités 1 / N / 2</span>
          <div class="prob-row"><span>1</span><div class="bar"><span style="width:${m.probabilities.home}%"></span></div><span>${m.probabilities.home}%</span></div>
          <div class="prob-row"><span>N</span><div class="bar"><span style="width:${m.probabilities.draw}%"></span></div><span>${m.probabilities.draw}%</span></div>
          <div class="prob-row"><span>2</span><div class="bar"><span style="width:${m.probabilities.away}%"></span></div><span>${m.probabilities.away}%</span></div>
          <p><b>Fiabilité :</b> ${m.reliability}/10</p>
          <p><b>Alternative :</b> ${m.altScore}</p>
          <p><b>Qualification :</b> ${m.qualification}</p>
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("ranking").innerHTML = top.slice(0,5).map((m,i) => `
    <div class="rank-item">
      <b>${i+1}. ${displayPick(m)} · ${m.score}</b>
      <span>${m.home} - ${m.away} · ${m.confidence}% · ${m.reliability}/10</span>
      <em class="badge ${cls(m)}">${m.tag}</em>
    </div>
  `).join("");

  document.getElementById("insights").innerHTML = [
    ...avoid.slice(0,3).map(m => `<div class="insight-item"><b>⚠️ Éviter : ${m.home} - ${m.away}</b><span>${m.risk} · ${m.mpp}</span></div>`),
    ...value.slice(0,2).map(m => `<div class="insight-item"><b>◇ Value : ${m.pick}</b><span>${m.home} - ${m.away} · ${m.confidence}%</span></div>`)
  ].join("");
}

function toggleRow(id) {
  document.getElementById("row-" + id).classList.toggle("open");
}

function copyOne(id) {
  const m = DATA.find(x => x.id === id);
  navigator.clipboard.writeText(line(m)).then(() => alert("Prono copié ✅"));
}

function copyAll() {
  const txt = DATA.filter(isRecommended).map(line).join("\n");
  navigator.clipboard.writeText(txt).then(() => alert("Tous les pronos recommandés sont copiés ✅"));
}

render();
