const DATA = [
  {
    "date": "06/07",
    "time": "21h00",
    "stage": "8e de finale",
    "home": "Portugal",
    "away": "Espagne",
    "pick": "Espagne",
    "score": "1-2",
    "confidence": 56,
    "risk": "Élevé",
    "category": "Match piège",
    "qualification": "Espagne",
    "probabilities": [
      32,
      27,
      41
    ],
    "why": "Espagne légèrement devant, mais match très serré. À jouer seulement si tu acceptes le risque.",
    "alt": "Alternative prudente : 1-1"
  },
  {
    "date": "07/07",
    "time": "02h00",
    "stage": "8e de finale",
    "home": "États-Unis",
    "away": "Belgique",
    "pick": "États-Unis",
    "score": "2-1",
    "confidence": 59,
    "risk": "Moyen+",
    "category": "Value MPP",
    "qualification": "États-Unis",
    "probabilities": [
      43,
      25,
      32
    ],
    "why": "USA intéressant en value avec le contexte favorable. Belgique dangereuse, donc prudence.",
    "alt": "Alternative prudente : 1-1"
  },
  {
    "date": "07/07",
    "time": "18h00",
    "stage": "8e de finale",
    "home": "Argentine",
    "away": "Égypte",
    "pick": "Argentine",
    "score": "2-0",
    "confidence": 78,
    "risk": "Faible",
    "category": "Safe",
    "qualification": "Argentine",
    "probabilities": [
      69,
      19,
      12
    ],
    "why": "Le pick le plus fiable : écart de niveau, expérience, qualité offensive.",
    "alt": "Alternative agressive : 3-1"
  },
  {
    "date": "07/07",
    "time": "22h00",
    "stage": "8e de finale",
    "home": "Suisse",
    "away": "Colombie",
    "pick": "Colombie",
    "score": "1-2",
    "confidence": 54,
    "risk": "Élevé",
    "category": "Value risquée",
    "qualification": "Colombie",
    "probabilities": [
      35,
      28,
      37
    ],
    "why": "Match très équilibré. Colombie plus explosive, Suisse très solide.",
    "alt": "Alternative prudente : 1-1"
  },
  {
    "date": "09/07",
    "time": "22h00",
    "stage": "Quart de finale",
    "home": "France",
    "away": "Maroc",
    "pick": "France",
    "score": "2-1",
    "confidence": 72,
    "risk": "Moyen",
    "category": "Safe contrôlé",
    "qualification": "France",
    "probabilities": [
      58,
      24,
      18
    ],
    "why": "France plus complète, mais Maroc dangereux et en confiance. Score 2-1 plus réaliste que 2-0.",
    "alt": "Alternative safe : 1-0"
  },
  {
    "date": "10/07",
    "time": "21h00",
    "stage": "Quart de finale",
    "home": "Vainqueur Portugal/Espagne",
    "away": "Vainqueur USA/Belgique",
    "pick": "À attendre",
    "score": "—",
    "confidence": 0,
    "risk": "À attendre",
    "category": "Ne pas verrouiller",
    "qualification": "À confirmer",
    "probabilities": [
      0,
      0,
      0
    ],
    "why": "Équipes pas encore confirmées. Attendre avant de pronostiquer.",
    "alt": "Attendre"
  },
  {
    "date": "11/07",
    "time": "23h00",
    "stage": "Quart de finale",
    "home": "Norvège",
    "away": "Angleterre",
    "pick": "Angleterre",
    "score": "1-2",
    "confidence": 60,
    "risk": "Moyen+",
    "category": "Équilibré",
    "qualification": "Angleterre",
    "probabilities": [
      30,
      27,
      43
    ],
    "why": "Norvège dangereuse après avoir sorti le Brésil, mais Angleterre plus complète.",
    "alt": "Alternative remontada : 2-2"
  },
  {
    "date": "12/07",
    "time": "03h00",
    "stage": "Quart de finale",
    "home": "Vainqueur Argentine/Égypte",
    "away": "Vainqueur Suisse/Colombie",
    "pick": "Argentine probable",
    "score": "2-1",
    "confidence": 66,
    "risk": "À confirmer",
    "category": "Prévision bracket",
    "qualification": "Argentine probable",
    "probabilities": [
      52,
      25,
      23
    ],
    "why": "Si l’Argentine passe, elle sera favorite contre Suisse ou Colombie.",
    "alt": "Attendre confirmation"
  },
  {
    "date": "14/07",
    "time": "21h00",
    "stage": "Demi-finale",
    "home": "Vainqueur QF #1",
    "away": "Vainqueur QF #2",
    "pick": "À attendre",
    "score": "—",
    "confidence": 0,
    "risk": "À attendre",
    "category": "Ne pas verrouiller",
    "qualification": "À confirmer",
    "probabilities": [
      0,
      0,
      0
    ],
    "why": "Trop d’inconnues : attendre les quarts.",
    "alt": "Attendre"
  },
  {
    "date": "15/07",
    "time": "21h00",
    "stage": "Demi-finale",
    "home": "Vainqueur QF #3",
    "away": "Vainqueur QF #4",
    "pick": "À attendre",
    "score": "—",
    "confidence": 0,
    "risk": "À attendre",
    "category": "Ne pas verrouiller",
    "qualification": "À confirmer",
    "probabilities": [
      0,
      0,
      0
    ],
    "why": "Trop d’inconnues : attendre les quarts.",
    "alt": "Attendre"
  },
  {
    "date": "18/07",
    "time": "23h00",
    "stage": "Petite finale",
    "home": "Perdant demi #1",
    "away": "Perdant demi #2",
    "pick": "À attendre",
    "score": "—",
    "confidence": 0,
    "risk": "À attendre",
    "category": "Ne pas verrouiller",
    "qualification": "À confirmer",
    "probabilities": [
      0,
      0,
      0
    ],
    "why": "La motivation est variable en petite finale. À jouer après les demies.",
    "alt": "Attendre"
  },
  {
    "date": "19/07",
    "time": "21h00",
    "stage": "Finale",
    "home": "Finaliste #1",
    "away": "Finaliste #2",
    "pick": "À attendre",
    "score": "—",
    "confidence": 0,
    "risk": "À attendre",
    "category": "Ne pas verrouiller",
    "qualification": "À confirmer",
    "probabilities": [
      0,
      0,
      0
    ],
    "why": "Finale à recalculer quand les finalistes sont connus.",
    "alt": "Attendre"
  }
];

function cls(m) {
  if (m.pick === "À attendre") return "wait";
  if (m.confidence >= 72 || m.risk === "Faible") return "safe";
  if (m.confidence >= 56 || m.risk.includes("Moyen")) return "mid";
  return "danger";
}

function finalPick(m) {
  const mode = document.getElementById("mode").value;
  if (m.pick === "À attendre") return "À attendre";
  if (mode === "safe" && m.confidence < 60) return "À éviter";
  if (mode === "comeback" && m.confidence < 65) return m.pick + " / value";
  return m.pick;
}

function line(m) {
  return `${m.date} ${m.time} — ${m.home} - ${m.away} : ${finalPick(m)} | Score MPP : ${m.score} | Qualif : ${m.qualification} | Confiance : ${m.confidence}% | Risque : ${m.risk}`;
}

function render() {
  const q = document.getElementById("search").value.toLowerCase();
  const f = document.getElementById("filter").value;
  const mode = document.getElementById("mode").value;

  document.getElementById("strategyText").innerText =
    mode === "safe"
      ? "Mode safe : on retire les matchs trop incertains et on privilégie les favoris fiables."
      : mode === "comeback"
      ? "Mode remontada : on garde les bases solides mais on accepte des value picks pour se différencier."
      : "Mode équilibré : sécuriser les gros favoris et prendre 1 value calculée.";

  const list = DATA.filter(m => {
    const text = `${m.home} ${m.away} ${m.stage} ${m.pick} ${m.why}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (f === "play" && (m.pick === "À attendre" || m.confidence < 50)) return false;
    if (f === "safe" && m.confidence < 70) return false;
    if (f === "wait" && m.pick !== "À attendre") return false;
    return true;
  });

  document.getElementById("cards").innerHTML = list.map((m, i) => `
    <article class="card">
      <section>
        <div class="phase">${m.stage}</div>
        <div class="date">${m.date} · ${m.time}</div>
        <div class="match">${m.home}<br>${m.away}</div>
        <p>${m.why}</p>
      </section>
      <section>
        <div class="phase">Prono MPP</div>
        <div class="pick">${finalPick(m)}</div>
        <div class="score">Score : ${m.score}</div>
        <p>
          <span class="tag ${cls(m)}">${m.confidence ? m.confidence + "% confiance" : "À attendre"}</span>
          <span class="tag ${cls(m)}">${m.risk}</span>
          <span class="tag mid">${m.category}</span>
        </p>
        <p><b>Qualification probable :</b> ${m.qualification}</p>
        <p><b>Alternative :</b> ${m.alt}</p>
        ${m.confidence ? `<div class="date">Probabilités : 1 / N / 2</div>
          <div>${m.probabilities[0]}%</div><div class="prob"><span style="width:${m.probabilities[0]}%"></span></div>
          <div>${m.probabilities[1]}%</div><div class="prob"><span style="width:${m.probabilities[1]}%"></span></div>
          <div>${m.probabilities[2]}%</div><div class="prob"><span style="width:${m.probabilities[2]}%"></span></div>` : ""}
        <div class="copy" onclick="copyOne(${DATA.indexOf(m)})">Copier ce prono</div>
      </section>
    </article>
  `).join("");

  const playable = DATA.filter(m => m.pick !== "À attendre" && m.confidence >= 50);
  const safe = DATA.filter(m => m.confidence >= 70);
  const top = playable.slice().sort((a,b) => b.confidence - a.confidence);

  document.getElementById("kpiMatches").innerText = DATA.length;
  document.getElementById("kpiPlayable").innerText = playable.length;
  document.getElementById("kpiSafe").innerText = safe.length;
  document.getElementById("topPick").innerText = top[0]?.pick || "—";
  document.getElementById("topPickSub").innerText = top[0] ? `${top[0].home} - ${top[0].away} · ${top[0].score} · ${top[0].confidence}%` : "Aucun pick";

  document.getElementById("topRows").innerHTML = top.slice(0,5).map(m =>
    `<tr><td>${m.home}-${m.away}</td><td><b>${finalPick(m)}</b></td><td>${m.score}</td><td>${m.confidence}%</td></tr>`
  ).join("");
}

function copyOne(i) {
  navigator.clipboard.writeText(line(DATA[i])).then(() => alert("Prono copié ✅"));
}

function copyAll() {
  const txt = DATA.filter(m => m.pick !== "À attendre" && m.confidence >= 50).map(line).join("\n");
  navigator.clipboard.writeText(txt).then(() => alert("Tous les pronos MPP sont copiés ✅"));
}

render();
