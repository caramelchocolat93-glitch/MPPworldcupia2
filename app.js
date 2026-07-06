const DATA = [
  {
    "id": "por-esp",
    "date": "06/07",
    "time": "21h00",
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
    "category": "Match piège",
    "strategy": "À jouer seulement si tu veux te différencier.",
    "qualification": "Espagne",
    "probabilities": {
      "home": 32,
      "draw": 27,
      "away": 41
    },
    "signals": [
      "Espagne plus stable collectivement",
      "Portugal très dangereux en transition",
      "Risque de nul élevé",
      "Très faible marge"
    ],
    "why": "L’Espagne ressort légèrement devant, mais l’écart est faible. Pour MPP, ce n’est pas un pick safe : c’est un choix de différenciation."
  },
  {
    "id": "usa-bel",
    "date": "07/07",
    "time": "02h00",
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
    "category": "Value MPP",
    "strategy": "Bon pick remontada, pas idéal si tu veux sécuriser.",
    "qualification": "États-Unis",
    "probabilities": {
      "home": 43,
      "draw": 25,
      "away": 32
    },
    "signals": [
      "Contexte favorable USA",
      "Belgique talentueuse mais irrégulière",
      "Match ouvert",
      "Potentiel value"
    ],
    "why": "Les États-Unis ont un profil intéressant pour se différencier. La Belgique reste très dangereuse, donc ce choix doit être assumé comme value."
  },
  {
    "id": "arg-egy",
    "date": "07/07",
    "time": "18h00",
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
    "category": "Safe",
    "strategy": "Pick à verrouiller en priorité.",
    "qualification": "Argentine",
    "probabilities": {
      "home": 69,
      "draw": 19,
      "away": 12
    },
    "signals": [
      "Écart de niveau net",
      "Expérience des matchs à élimination",
      "Plafond offensif supérieur",
      "Égypte sortie aux tirs au but"
    ],
    "why": "C’est le pick le plus propre du tableau actuel. L’Argentine a l’avantage en expérience, qualité individuelle et capacité à contrôler le match."
  },
  {
    "id": "sui-col",
    "date": "07/07",
    "time": "22h00",
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
    "category": "Value risquée",
    "strategy": "À éviter en mode safe. Jouable uniquement en remontada.",
    "qualification": "Colombie",
    "probabilities": {
      "home": 35,
      "draw": 28,
      "away": 37
    },
    "signals": [
      "Match très équilibré",
      "Suisse très organisée",
      "Colombie plus explosive",
      "Risque prolongation"
    ],
    "why": "La Colombie a plus de tranchant offensif, mais la Suisse est difficile à casser. Très fort risque de match serré."
  },
  {
    "id": "fra-mar",
    "date": "09/07",
    "time": "22h00",
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
    "category": "Safe contrôlé",
    "strategy": "Bon pick principal, score à ne pas surcharger.",
    "qualification": "France",
    "probabilities": {
      "home": 58,
      "draw": 24,
      "away": 18
    },
    "signals": [
      "France plus complète",
      "Maroc en confiance",
      "Transitions marocaines dangereuses",
      "Match potentiellement fermé"
    ],
    "why": "La France reste favorite, mais le Maroc peut rendre le match compliqué. Le 2-1 est plus réaliste qu’un score trop large."
  },
  {
    "id": "qf-unknown-1",
    "date": "10/07",
    "time": "21h00",
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
    "category": "Ne pas verrouiller",
    "strategy": "Attendre les qualifiés.",
    "qualification": "À confirmer",
    "probabilities": {
      "home": 0,
      "draw": 0,
      "away": 0
    },
    "signals": [
      "Qualifiés inconnus",
      "Styles très différents selon les vainqueurs",
      "À recalculer"
    ],
    "why": "Ne verrouille pas ce match avant de connaître les équipes qualifiées."
  },
  {
    "id": "nor-eng",
    "date": "11/07",
    "time": "23h00",
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
    "category": "Équilibré",
    "strategy": "Pick jouable, mais pas safe à 100%.",
    "qualification": "Angleterre",
    "probabilities": {
      "home": 30,
      "draw": 27,
      "away": 43
    },
    "signals": [
      "Norvège euphorique",
      "Angleterre plus complète",
      "Haaland danger majeur",
      "Risque prolongation"
    ],
    "why": "La Norvège est dangereuse, mais l’Angleterre a plus de contrôle collectif. Prévoir un match serré."
  },
  {
    "id": "qf-unknown-2",
    "date": "12/07",
    "time": "03h00",
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
    "category": "Prévision bracket",
    "strategy": "À jouer seulement si l’Argentine se qualifie.",
    "qualification": "Argentine probable",
    "probabilities": {
      "home": 52,
      "draw": 25,
      "away": 23
    },
    "signals": [
      "Scénario dépendant des qualifiés",
      "Argentine favorite si qualifiée",
      "Risque à recalculer"
    ],
    "why": "Si l’Argentine passe, elle sera favorite. Mais ce match doit être recalculé dès que l’affiche est officielle."
  }
];

function cssClass(m) {
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

function isRecommended(m) {
  return m.pick !== "À attendre" && m.confidence >= 54;
}

function render() {
  const q = document.getElementById("search").value.toLowerCase();
  const filter = document.getElementById("filter").value;
  const mode = document.getElementById("mode").value;

  document.getElementById("strategyText").innerText =
    mode === "safe"
      ? "Mode Safe : on coupe les matchs trop instables. Objectif : protéger ton classement."
      : mode === "comeback"
      ? "Mode Remontada : on garde les bases solides et on ajoute des value picks calculés pour se différencier."
      : "Mode Équilibré : on joue les favoris propres, puis 1 ou 2 value picks si le potentiel MPP est intéressant.";

  const list = DATA.filter(m => {
    const text = `${m.home} ${m.away} ${m.stage} ${m.pick} ${m.category} ${m.why}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (filter === "recommended" && !isRecommended(m)) return false;
    if (filter === "safe" && m.confidence < 70) return false;
    if (filter === "value" && !m.category.toLowerCase().includes("value")) return false;
    if (filter === "avoid" && m.confidence >= 54 && m.pick !== "À attendre") return false;
    return true;
  });

  document.getElementById("cards").innerHTML = list.map((m, index) => `
    <article class="match-card">
      <section>
        <div class="stage">${m.stage}</div>
        <div class="date">${m.date} · ${m.time}</div>
        <div class="teams">${m.homeFlag} ${m.home}<br>${m.awayFlag} ${m.away}</div>
        <p>${m.why}</p>
        <div class="signals">${m.signals.map(s => `<span class="signal">${s}</span>`).join("")}</div>
      </section>
      <section>
        <div class="stage">Prono MPP</div>
        <div class="pick">${displayPick(m)}</div>
        <div class="score">Score : ${m.score}</div>
        <span class="tag ${cssClass(m)}">${m.confidence ? m.confidence + "% confiance" : "À attendre"}</span>
        <span class="tag ${cssClass(m)}">${m.risk}</span>
        <span class="tag mid">Fiabilité ${m.reliability}/10</span>
        <p><b>Qualification probable :</b> ${m.qualification}</p>
        <p><b>Alternative :</b> ${m.altScore}</p>
        ${m.confidence ? `
          <div class="probs">
            <div class="prob-row"><span>1</span><div class="bar"><span style="width:${m.probabilities.home}%"></span></div><span>${m.probabilities.home}%</span></div>
            <div class="prob-row"><span>N</span><div class="bar"><span style="width:${m.probabilities.draw}%"></span></div><span>${m.probabilities.draw}%</span></div>
            <div class="prob-row"><span>2</span><div class="bar"><span style="width:${m.probabilities.away}%"></span></div><span>${m.probabilities.away}%</span></div>
          </div>` : ""}
        <div class="copy" onclick="copyOne('${m.id}')">Copier ce prono</div>
      </section>
    </article>
  `).join("");

  const recommended = DATA.filter(isRecommended);
  const safe = DATA.filter(m => m.confidence >= 70);
  const avoid = DATA.filter(m => m.pick === "À attendre" || m.confidence < 54);
  const top = recommended.slice().sort((a,b) => b.confidence - a.confidence);

  document.getElementById("kpiAnalyzed").innerText = DATA.length;
  document.getElementById("kpiRecommended").innerText = recommended.length;
  document.getElementById("kpiSafe").innerText = safe.length;
  document.getElementById("kpiAvoid").innerText = avoid.length;

  document.getElementById("heroPick").innerText = top[0]?.pick || "—";
  document.getElementById("heroMeta").innerText = top[0] ? `${top[0].home} - ${top[0].away} · ${top[0].score} · ${top[0].confidence}%` : "Aucun pick";

  document.getElementById("topList").innerHTML = top.slice(0,5).map(m => `
    <div class="mini-row">
      <b>${displayPick(m)} · ${m.score}</b>
      <span>${m.home} - ${m.away} · ${m.confidence}% · ${m.category}</span>
    </div>
  `).join("");

  document.getElementById("avoidList").innerHTML = avoid.map(m => `
    <div class="mini-row">
      <b>${m.home} - ${m.away}</b>
      <span>${m.category} · ${m.risk}</span>
    </div>
  `).join("");
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
