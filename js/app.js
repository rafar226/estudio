import { topics, questionValues } from "./data.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const topicEntries = Object.entries(topics);

const parseNumber = (value) => {
  const cleaned = String(value).trim().replace(/\s/g, "");
  if (!cleaned) return NaN;
  if (cleaned.includes(",") && cleaned.includes(".")) {
    return Number(cleaned.replace(/\./g, "").replace(",", "."));
  }
  if (cleaned.includes(",")) return Number(cleaned.replace(",", "."));
  return Number(cleaned);
};

const formatNumber = (value) => new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 6,
  useGrouping: true
}).format(Number(value.toFixed(8)));

const closeEnough = (a, b) => Number.isFinite(a) && Math.abs(a - b) <= Math.max(1e-8, Math.abs(b) * 1e-8);
const randomFrom = (items) => items[Math.floor(Math.random() * items.length)];

let stats = { solved: 0, correct: 0, bestStreak: 0, streak: 0 };
try {
  stats = { ...stats, ...JSON.parse(localStorage.getItem("matemundo-stats") || "{}") };
} catch { /* El sitio funciona aunque el almacenamiento esté bloqueado. */ }

function saveStats(wasCorrect) {
  stats.solved += 1;
  if (wasCorrect) {
    stats.correct += 1;
    stats.streak += 1;
    stats.bestStreak = Math.max(stats.bestStreak, stats.streak);
  } else {
    stats.streak = 0;
  }
  try { localStorage.setItem("matemundo-stats", JSON.stringify(stats)); } catch { /* sin almacenamiento */ }
  renderStats();
}

function renderStats() {
  $("#stat-resueltos").textContent = stats.solved;
  $("#stat-correctos").textContent = stats.correct;
  $("#stat-racha").textContent = stats.bestStreak;
}

function showView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  history.replaceState(null, "", `#${viewId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  const heading = $(`#${viewId} h1`);
  if (heading) heading.setAttribute("tabindex", "-1");
}

$$('[data-view]').forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
$$('[data-go]').forEach((button) => button.addEventListener("click", () => showView(button.dataset.go)));

function topicOptions() {
  return topicEntries.map(([key, topic]) => `<option value="${key}">${topic.emoji} ${topic.name}</option>`).join("");
}

function buildLessonTabs() {
  $("#learn-topic-tabs").innerHTML = topicEntries.map(([key, topic], index) =>
    `<button class="topic-tab ${index === 0 ? "active" : ""}" type="button" data-topic="${key}">${topic.emoji} ${topic.name}</button>`
  ).join("");
  $$(".topic-tab").forEach((button) => button.addEventListener("click", () => renderLesson(button.dataset.topic)));
}

function renderLesson(topicKey) {
  const topic = topics[topicKey];
  $$(".topic-tab").forEach((button) => button.classList.toggle("active", button.dataset.topic === topicKey));
  $("#lesson-emoji").textContent = topic.emoji;
  $("#lesson-kicker").textContent = topic.name;
  $("#lesson-title").textContent = topic.title;
  $("#unit-ladder").style.gridTemplateColumns = `repeat(${topic.units.length}, 1fr)`;
  $("#unit-ladder").innerHTML = topic.units.map((unit, index) =>
    `<div class="unit-step" style="--step:${topic.units.length - index - 1}"><strong>${unit.id}</strong><span>${unit.name}</span></div>`
  ).join("");
  $("#worked-example").innerHTML = `<strong>Ejemplo: ${topic.example}</strong><p>${topic.exampleText}</p>`;
  const directions = $$(".direction-grid > div");
  directions.forEach((item) => item.hidden = Boolean(topic.nonMetric));
  $(".tip-card").hidden = Boolean(topic.nonMetric);
}

function getUnit(topicKey, unitId) {
  return topics[topicKey].units.find((unit) => unit.id === unitId);
}

function convert(value, topicKey, fromId, toId) {
  return value * getUnit(topicKey, fromId).factor / getUnit(topicKey, toId).factor;
}

function createQuestion(topicKey = randomFrom(Object.keys(topics))) {
  const topic = topics[topicKey];
  let fromIndex = Math.floor(Math.random() * topic.units.length);
  let toIndex = Math.floor(Math.random() * topic.units.length);
  while (toIndex === fromIndex) toIndex = Math.floor(Math.random() * topic.units.length);
  const from = topic.units[fromIndex];
  const to = topic.units[toIndex];
  const value = randomFrom(questionValues);
  const answer = convert(value, topicKey, from.id, to.id);
  const distance = Math.abs(fromIndex - toIndex);
  const direction = to.factor < from.factor ? "más pequeña" : "más grande";
  const operation = answer >= value ? "multiplicar" : "dividir";
  const multiplier = answer >= value ? answer / value : value / answer;
  const hint = topic.nonMetric
    ? `Recordá cuántos ${to.name}s hay en un ${from.name}. En este caso necesitás ${operation}.`
    : `La unidad de destino es ${direction}. Hay ${distance} salto${distance === 1 ? "" : "s"}: tenés que ${operation} por ${formatNumber(multiplier)}.`;
  return { topicKey, topic, from, to, value, answer, hint, distance };
}

// Práctica
let practiceQuestion;
let practiceLocked = false;
let practiceSession = { correct: 0, total: 0 };

function renderPracticeQuestion() {
  const selected = $("#practice-topic").value;
  practiceQuestion = createQuestion(selected === "mixed" ? undefined : selected);
  practiceLocked = false;
  $("#practice-pill").textContent = `${practiceQuestion.topic.emoji} ${practiceQuestion.topic.name}`;
  $("#practice-level").textContent = `Nivel: ${practiceQuestion.distance <= 1 ? "inicial" : practiceQuestion.distance <= 3 ? "intermedio" : "desafío"}`;
  $("#practice-question").innerHTML = `${formatNumber(practiceQuestion.value)} ${practiceQuestion.from.id} = <mark>?</mark> ${practiceQuestion.to.id}`;
  $("#practice-unit").textContent = practiceQuestion.to.id;
  $("#practice-answer").value = "";
  $("#practice-answer").disabled = false;
  $("#hint-box").hidden = true;
  $("#practice-feedback").hidden = true;
  $("#next-practice").hidden = true;
  $("#practice-form button[type='submit']").disabled = false;
  renderMeasureHelp();
  $("#practice-answer").focus();
}

function renderMeasureHelp() {
  const { topic, from, to } = practiceQuestion;
  $("#measure-help-topic").textContent = `${topic.emoji} ${topic.name}: de la unidad más grande a la más pequeña.`;
  $("#measure-help-flow").innerHTML = topic.units.map((unit, index) => {
    const classes = ["help-unit", unit.id === from.id ? "from" : "", unit.id === to.id ? "to" : ""].filter(Boolean).join(" ");
    const unitBlock = `<div class="${classes}"><strong>${unit.id}</strong><small>${unit.name}</small></div>`;
    return index < topic.units.length - 1 ? `${unitBlock}<span class="help-arrow" aria-hidden="true">›</span>` : unitBlock;
  }).join("");
  $("#measure-help-note").innerHTML = topic.nonMetric
    ? `<strong>Recordá:</strong> el tiempo no avanza de 10 en 10. 1 día = 24 h, 1 h = 60 min y 1 min = 60 s.`
    : `<strong>Regla rápida:</strong> hacia la derecha multiplicamos por 10 en cada salto; hacia la izquierda dividimos por 10.`;
}

$("#practice-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (practiceLocked) return;
  const answer = parseNumber($("#practice-answer").value);
  if (!Number.isFinite(answer)) {
    $("#practice-feedback").className = "feedback incorrect";
    $("#practice-feedback").textContent = "Escribí un número. Podés usar coma o punto para los decimales.";
    $("#practice-feedback").hidden = false;
    return;
  }
  practiceLocked = true;
  const correct = closeEnough(answer, practiceQuestion.answer);
  practiceSession.total += 1;
  if (correct) practiceSession.correct += 1;
  saveStats(correct);
  $("#practice-correct").textContent = practiceSession.correct;
  $("#practice-total").textContent = practiceSession.total;
  const feedback = $("#practice-feedback");
  feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
  feedback.innerHTML = correct
    ? `<strong>¡Muy bien!</strong> ${formatNumber(practiceQuestion.value)} ${practiceQuestion.from.id} equivale a ${formatNumber(practiceQuestion.answer)} ${practiceQuestion.to.id}.`
    : `<strong>Casi.</strong> La respuesta correcta es ${formatNumber(practiceQuestion.answer)} ${practiceQuestion.to.id}. ${practiceQuestion.hint}`;
  feedback.hidden = false;
  $("#practice-answer").disabled = true;
  $("#practice-form button[type='submit']").disabled = true;
  $("#next-practice").hidden = false;
  $("#next-practice").focus();
});

$("#hint-button").addEventListener("click", () => {
  $("#hint-box").innerHTML = `<strong>Pista:</strong> ${practiceQuestion.hint}`;
  $("#hint-box").hidden = false;
});
$("#next-practice").addEventListener("click", renderPracticeQuestion);
$("#practice-topic").addEventListener("change", renderPracticeQuestion);

const measureHelpDialog = $("#measure-help-dialog");
$("#measure-help-button").addEventListener("click", () => measureHelpDialog.showModal());
$("#close-measure-help").addEventListener("click", () => measureHelpDialog.close());
measureHelpDialog.addEventListener("click", (event) => {
  if (event.target === measureHelpDialog) measureHelpDialog.close();
});

// Conversor
function fillUnitSelects(topicKey, preferredFrom, preferredTo) {
  const topic = topics[topicKey];
  const html = topic.units.map((unit) => `<option value="${unit.id}">${unit.name} (${unit.id})</option>`).join("");
  $("#from-unit").innerHTML = html;
  $("#to-unit").innerHTML = html;
  $("#from-unit").value = preferredFrom || topic.units[Math.min(3, topic.units.length - 1)].id;
  $("#to-unit").value = preferredTo || topic.units[0].id;
  if ($("#from-unit").value === $("#to-unit").value) $("#to-unit").value = topic.units.at(-1).id;
  updateConversion();
}

function updateConversion() {
  const topicKey = $("#converter-topic").value;
  const value = parseNumber($("#from-value").value);
  const from = $("#from-unit").value;
  const to = $("#to-unit").value;
  if (!Number.isFinite(value)) {
    $("#to-value").textContent = "—";
    $("#conversion-explanation").textContent = "Escribí un número válido para convertir.";
    return;
  }
  const result = convert(value, topicKey, from, to);
  const ratio = getUnit(topicKey, from).factor / getUnit(topicKey, to).factor;
  $("#to-value").textContent = formatNumber(result);
  $("#conversion-explanation").innerHTML = `<strong>${formatNumber(value)} ${from} = ${formatNumber(result)} ${to}</strong><br>Para pasar de ${from} a ${to}, ${ratio >= 1 ? "multiplicamos" : "dividimos"} por ${formatNumber(ratio >= 1 ? ratio : 1 / ratio)}.`;
}

$("#converter-topic").addEventListener("change", (event) => fillUnitSelects(event.target.value));
$("#from-value").addEventListener("input", updateConversion);
$("#from-unit").addEventListener("change", updateConversion);
$("#to-unit").addEventListener("change", updateConversion);
$("#swap-units").addEventListener("click", () => {
  const from = $("#from-unit").value;
  $("#from-unit").value = $("#to-unit").value;
  $("#to-unit").value = from;
  updateConversion();
});

// Examen
let examCount = 10;
let examQuestions = [];
let examIndex = 0;
let examAnswers = [];

$$('[data-count]').forEach((button) => button.addEventListener("click", () => {
  examCount = Number(button.dataset.count);
  $$('[data-count]').forEach((item) => item.classList.toggle("selected", item === button));
}));

function startExam() {
  examQuestions = Array.from({ length: examCount }, (_, index) => createQuestion(Object.keys(topics)[index % topicEntries.length]));
  examQuestions.sort(() => Math.random() - 0.5);
  examAnswers = [];
  examIndex = 0;
  $("#exam-setup").hidden = true;
  $("#exam-result").hidden = true;
  $("#exam-running").hidden = false;
  $("#exam-total").textContent = examCount;
  renderExamQuestion();
}

function renderExamQuestion() {
  const question = examQuestions[examIndex];
  $("#exam-current").textContent = examIndex + 1;
  $("#exam-topic-label").textContent = `${question.topic.emoji} ${question.topic.name}`;
  $("#exam-progress-bar").style.width = `${((examIndex + 1) / examCount) * 100}%`;
  $("#exam-question").innerHTML = `${formatNumber(question.value)} ${question.from.id} = <mark>?</mark> ${question.to.id}`;
  $("#exam-unit").textContent = question.to.id;
  $("#exam-answer").value = "";
  $("#exam-answer").focus();
}

$("#exam-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = parseNumber($("#exam-answer").value);
  if (!Number.isFinite(answer)) {
    $("#exam-answer").setCustomValidity("Escribí un número válido");
    $("#exam-answer").reportValidity();
    $("#exam-answer").setCustomValidity("");
    return;
  }
  const question = examQuestions[examIndex];
  const correct = closeEnough(answer, question.answer);
  examAnswers.push({ ...question, userAnswer: answer, correct });
  saveStats(correct);
  examIndex += 1;
  if (examIndex < examCount) renderExamQuestion(); else finishExam();
});

function finishExam() {
  const correctCount = examAnswers.filter((answer) => answer.correct).length;
  const percent = Math.round(correctCount / examCount * 100);
  $("#exam-running").hidden = true;
  $("#exam-result").hidden = false;
  $("#result-percent").textContent = `${percent}%`;
  $(".result-ring").style.setProperty("--score", `${percent}%`);
  $("#result-title").textContent = percent >= 80 ? "¡Excelente trabajo!" : percent >= 60 ? "¡Vas muy bien!" : "¡Cada intento enseña!";
  $("#result-summary").textContent = `Respondiste correctamente ${correctCount} de ${examCount} preguntas.`;
  $("#review-list").innerHTML = examAnswers.map((item) => `
    <div class="review-item ${item.correct ? "correct" : "incorrect"}">
      <span aria-hidden="true">${item.correct ? "✓" : "✕"}</span>
      <div><p>${formatNumber(item.value)} ${item.from.id} = <strong>${formatNumber(item.answer)} ${item.to.id}</strong></p>${item.correct ? "" : `<small>Tu respuesta: ${formatNumber(item.userAnswer)} ${item.to.id}</small>`}</div>
    </div>`).join("");
}

$("#start-exam").addEventListener("click", startExam);
$("#retry-exam").addEventListener("click", () => {
  $("#exam-result").hidden = true;
  $("#exam-setup").hidden = false;
});
$("#back-to-practice").addEventListener("click", () => showView("practicar"));

function initialize() {
  renderStats();
  buildLessonTabs();
  renderLesson("length");
  $("#practice-topic").innerHTML = `<option value="mixed">🎲 Mezcla de todos</option>${topicOptions()}`;
  $("#practice-topic").value = "length";
  $("#converter-topic").innerHTML = topicOptions();
  $("#converter-topic").value = "length";
  fillUnitSelects("length", "m", "km");
  renderPracticeQuestion();
  const initialView = location.hash.slice(1);
  if (["inicio", "aprender", "practicar", "convertir", "examen"].includes(initialView)) showView(initialView);
}

initialize();
