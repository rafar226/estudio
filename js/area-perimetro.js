const $ = (selector) => document.querySelector(selector);
const randomFrom = (items) => items[Math.floor(Math.random() * items.length)];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
const formatNumber = (value) => new Intl.NumberFormat("es-AR", { maximumFractionDigits: 2 }).format(value);

const conceptQuestions = [
  { text: "¿Qué mide el perímetro?", options: ["El contorno de una figura", "La parte de adentro", "La cantidad de vértices", "La altura solamente"], answer: "El contorno de una figura", explanation: "El perímetro se obtiene recorriendo y sumando todos los lados." },
  { text: "¿Qué mide el área?", options: ["La superficie interior", "Solo el lado más largo", "El contorno", "La cantidad de lados"], answer: "La superficie interior", explanation: "El área indica cuánto espacio ocupa la parte de adentro de una figura." },
  { text: "¿Qué deberías calcular para cercar un jardín?", options: ["El perímetro", "El área", "La cantidad de vértices", "La diagonal"], answer: "El perímetro", explanation: "La cerca rodea el borde del jardín, por eso necesitamos el perímetro." },
  { text: "¿Qué deberías calcular para cubrir un piso con baldosas?", options: ["El área", "El perímetro", "Solo la base", "La cantidad de esquinas"], answer: "El área", explanation: "Las baldosas cubren toda la superficie, así que necesitamos el área." },
  { text: "¿Cuál es una unidad correcta para expresar un área?", options: ["cm²", "cm", "litros", "kilogramos"], answer: "cm²", explanation: "El área se expresa en unidades cuadradas, como cm² o m²." },
  { text: "¿Cuál es una unidad correcta para expresar un perímetro?", options: ["metros", "metros cuadrados", "litros", "grados"], answer: "metros", explanation: "El perímetro es una longitud y usa unidades simples como cm o m." },
  { text: "¿Cómo se calcula el perímetro de un cuadrado?", options: ["4 × lado", "lado × lado", "base × altura", "lado ÷ 4"], answer: "4 × lado", explanation: "Como los cuatro lados son iguales, multiplicamos la medida de un lado por 4." },
  { text: "¿Cómo se calcula el área de un rectángulo?", options: ["base × altura", "2 × base", "base + altura", "4 × lado"], answer: "base × altura", explanation: "Multiplicar base por altura cuenta los cuadrados que cubren el rectángulo." },
  { text: "¿Cómo se calcula el área de un triángulo?", options: ["(base × altura) ÷ 2", "base × altura", "3 × lado", "base + altura"], answer: "(base × altura) ÷ 2", explanation: "Un triángulo ocupa la mitad de un rectángulo con la misma base y altura." },
  { text: "Dos figuras pueden tener el mismo perímetro y distinta área. ¿Es posible?", options: ["Sí", "No", "Solo si son triángulos", "Solo si tienen distinto color"], answer: "Sí", explanation: "La forma puede cambiar el espacio interior aunque el contorno total mida lo mismo." },
  { text: "Para calcular el perímetro de un triángulo debemos...", options: ["Sumar sus tres lados", "Multiplicar base por altura", "Contar sus vértices", "Dividir la base por 2"], answer: "Sumar sus tres lados", explanation: "El perímetro siempre es la suma de todos los lados de la figura." },
  { text: "En la expresión 12 m², el número ² nos recuerda que...", options: ["Estamos midiendo una superficie", "Hay que multiplicar por 2", "Estamos midiendo litros", "La figura tiene dos lados"], answer: "Estamos midiendo una superficie", explanation: "Las unidades al cuadrado se usan para medir áreas o superficies." }
];

const squareFigure = (side) => `<div class="mini-problem square-problem"><span class="side-bottom">${side} cm</span><span class="side-left">${side} cm</span></div>`;
const rectangleFigure = (base, height) => `<div class="mini-problem rectangle-problem"><span class="side-bottom">${base} cm</span><span class="side-left">${height} cm</span></div>`;
const triangleFigure = (base, height, sides = []) => `<div class="mini-problem triangle-problem"><span class="triangle-body"></span><span class="side-bottom">${base} cm</span>${height ? `<span class="triangle-height">${height} cm</span>` : ""}${sides.length ? `<span class="triangle-sides">${sides[0]} cm · ${sides[1]} cm · ${sides[2]} cm</span>` : ""}</div>`;

function makeAreaQuestion() {
  const shape = randomFrom(["square", "rectangle", "triangle"]);
  if (shape === "square") {
    const side = randomInt(2, 12);
    return { category: "area", type: "number", figure: squareFigure(side), text: `¿Cuál es el área de este cuadrado?`, context: "Multiplicá lado × lado.", answer: side * side, unit: "cm²", explanation: `${side} × ${side} = ${side * side} cm².` };
  }
  if (shape === "rectangle") {
    const base = randomInt(3, 12);
    let height = randomInt(2, 9);
    if (height === base) height = height === 9 ? 8 : height + 1;
    return { category: "area", type: "number", figure: rectangleFigure(base, height), text: `¿Cuál es el área de este rectángulo?`, context: "Multiplicá base × altura.", answer: base * height, unit: "cm²", explanation: `${base} × ${height} = ${base * height} cm².` };
  }
  const base = randomFrom([4, 6, 8, 10, 12]);
  const height = randomInt(2, 9);
  const answer = base * height / 2;
  return { category: "area", type: "number", figure: triangleFigure(base, height), text: "¿Cuál es el área de este triángulo?", context: "Multiplicá base × altura y dividí el resultado por 2.", answer, unit: "cm²", explanation: `(${base} × ${height}) ÷ 2 = ${formatNumber(answer)} cm².` };
}

function makePerimeterQuestion() {
  const shape = randomFrom(["square", "rectangle", "triangle"]);
  if (shape === "square") {
    const side = randomInt(2, 15);
    return { category: "perimeter", type: "number", figure: squareFigure(side), text: "¿Cuál es el perímetro de este cuadrado?", context: "Sumá sus cuatro lados o multiplicá el lado por 4.", answer: side * 4, unit: "cm", explanation: `${side} × 4 = ${side * 4} cm.` };
  }
  if (shape === "rectangle") {
    const base = randomInt(4, 14);
    let height = randomInt(2, 9);
    if (height === base) height += 1;
    const answer = 2 * (base + height);
    return { category: "perimeter", type: "number", figure: rectangleFigure(base, height), text: "¿Cuál es el perímetro de este rectángulo?", context: "Sumá dos veces la base y dos veces la altura.", answer, unit: "cm", explanation: `2 × (${base} + ${height}) = ${answer} cm.` };
  }
  const sides = randomFrom([[3, 4, 5], [5, 5, 6], [5, 6, 7], [6, 7, 8], [7, 8, 9], [8, 8, 10]]);
  const answer = sides.reduce((total, side) => total + side, 0);
  return { category: "perimeter", type: "number", figure: triangleFigure(sides[2], 0, sides), text: "¿Cuál es el perímetro de este triángulo?", context: "Sumá las medidas de sus tres lados.", answer, unit: "cm", explanation: `${sides.join(" + ")} = ${answer} cm.` };
}

let conceptQueue = [];
function makeConceptQuestion() {
  if (!conceptQueue.length) conceptQueue = shuffle(conceptQuestions);
  const question = conceptQueue.pop();
  return { ...question, category: "concept", type: "choice", figure: `<div class="concept-question-icon">?</div>`, context: "Elegí la opción correcta." };
}

function makeQuestion(category) {
  if (category === "area") return makeAreaQuestion();
  if (category === "perimeter") return makePerimeterQuestion();
  return makeConceptQuestion();
}

let round = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;

function startRound() {
  const selected = $("#area-practice-type").value;
  conceptQueue = shuffle(conceptQuestions);
  const pattern = selected === "mixed"
    ? shuffle(["area", "perimeter", "concept", "area", "perimeter", "concept", "area", "perimeter", "concept", randomFrom(["area", "perimeter"])])
    : Array(10).fill(selected);
  round = pattern.map(makeQuestion);
  currentIndex = 0;
  correctCount = 0;
  $("#area-quiz").hidden = false;
  $("#area-result").hidden = true;
  renderQuestion();
}

function renderQuestion() {
  const question = round[currentIndex];
  answered = false;
  $("#area-current").textContent = currentIndex + 1;
  $("#area-correct").textContent = correctCount;
  $("#area-progress-bar").style.width = `${((currentIndex + 1) / round.length) * 100}%`;
  $("#area-question-kind").textContent = question.category === "area" ? "▦ Área" : question.category === "perimeter" ? "□ Perímetro" : "💡 Concepto";
  $("#area-question-kind").className = `problem-badge ${question.category}`;
  $("#area-problem-figure").innerHTML = question.figure;
  $("#area-question-text").textContent = question.text;
  $("#area-question-context").textContent = question.context;
  $("#area-feedback").hidden = true;
  $("#area-next").hidden = true;
  renderAnswerZone(question);
}

function renderAnswerZone(question) {
  const zone = $("#area-answer-zone");
  zone.innerHTML = "";
  if (question.type === "choice") {
    const choices = document.createElement("div");
    choices.className = "choice-grid";
    shuffle(question.options).forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = option;
      button.addEventListener("click", () => checkChoice(button, option));
      choices.appendChild(button);
    });
    zone.appendChild(choices);
    return;
  }

  const form = document.createElement("form");
  form.className = "area-number-form";
  form.innerHTML = `<label class="sr-only" for="area-number-answer">Tu respuesta</label><div class="answer-row"><input id="area-number-answer" type="text" inputmode="decimal" autocomplete="off" placeholder="Escribí el resultado"><span class="answer-unit">${question.unit}</span></div><button class="button primary" type="submit">Comprobar</button>`;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#area-number-answer");
    const value = Number(input.value.trim().replace(",", "."));
    if (!Number.isFinite(value) || input.value.trim() === "") {
      input.setCustomValidity("Escribí un número válido"); input.reportValidity(); input.setCustomValidity(""); return;
    }
    checkNumber(value, input, form.querySelector("button"));
  });
  zone.appendChild(form);
  $("#area-number-answer").focus();
}

function showFeedback(isCorrect) {
  const question = round[currentIndex];
  if (isCorrect) correctCount += 1;
  $("#area-correct").textContent = correctCount;
  const feedback = $("#area-feedback");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.innerHTML = `<strong>${isCorrect ? "¡Muy bien!" : "Casi."}</strong> ${question.explanation}`;
  feedback.hidden = false;
  $("#area-next").textContent = currentIndex === round.length - 1 ? "Ver resultado →" : "Siguiente ejercicio →";
  $("#area-next").hidden = false;
  $("#area-next").focus();
}

function checkChoice(button, answer) {
  if (answered) return;
  answered = true;
  const question = round[currentIndex];
  const correct = answer === question.answer;
  [...$("#area-answer-zone").querySelectorAll(".choice-button")].forEach((choice) => {
    choice.disabled = true;
    if (choice.textContent === question.answer) choice.classList.add("correct");
  });
  if (!correct) button.classList.add("incorrect");
  showFeedback(correct);
}

function checkNumber(value, input, submitButton) {
  if (answered) return;
  answered = true;
  const question = round[currentIndex];
  const correct = Math.abs(value - question.answer) < 1e-8;
  input.disabled = true;
  submitButton.disabled = true;
  input.classList.add(correct ? "number-correct" : "number-incorrect");
  showFeedback(correct);
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < round.length) renderQuestion(); else finishRound();
}

function finishRound() {
  const percent = Math.round(correctCount / round.length * 100);
  $("#area-quiz").hidden = true;
  $("#area-result").hidden = false;
  $("#area-result-title").textContent = percent >= 80 ? "¡Dominás las medidas de las figuras!" : percent >= 60 ? "¡Vas por muy buen camino!" : "¡Cada ejercicio suma!";
  $("#area-result-text").textContent = `Respondiste correctamente ${correctCount} de ${round.length} ejercicios (${percent}%).`;
  try {
    const best = Number(localStorage.getItem("matemundo-area-best") || 0);
    localStorage.setItem("matemundo-area-best", String(Math.max(best, percent)));
  } catch { /* La actividad funciona aunque el almacenamiento esté bloqueado. */ }
}

$("#area-next").addEventListener("click", nextQuestion);
$("#restart-area").addEventListener("click", startRound);
$("#area-again").addEventListener("click", startRound);
$("#area-practice-type").addEventListener("change", startRound);

startRound();
