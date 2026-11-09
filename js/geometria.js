const $ = (selector) => document.querySelector(selector);

const shapes = [
  { name: "triángulo", sides: 3, vertices: 3, visual: "△" },
  { name: "cuadrado", sides: 4, vertices: 4, visual: "□" },
  { name: "rectángulo", sides: 4, vertices: 4, visual: "▭" },
  { name: "rombo", sides: 4, vertices: 4, visual: "◇" },
  { name: "trapecio", sides: 4, vertices: 4, visual: "⏢" }
];

const numberOptions = ["2", "3", "4", "5"];

const shapeQuestions = shapes.flatMap((shape) => [
  {
    category: "shapes",
    visual: shape.visual,
    text: `¿Cuántos lados tiene un ${shape.name}?`,
    options: numberOptions,
    answer: String(shape.sides),
    explanation: `El ${shape.name} tiene ${shape.sides} lados.`
  },
  {
    category: "shapes",
    visual: shape.visual,
    text: `¿Cuántos vértices tiene un ${shape.name}?`,
    options: numberOptions,
    answer: String(shape.vertices),
    explanation: `El ${shape.name} tiene ${shape.vertices} vértices, donde se encuentran sus lados.`
  }
]);

shapeQuestions.push(
  {
    category: "shapes", visual: "△", text: "¿Cuál es la única de estas figuras que tiene 3 lados?",
    options: ["Triángulo", "Cuadrado", "Rombo", "Trapecio"], answer: "Triángulo",
    explanation: "El triángulo se reconoce porque siempre tiene 3 lados y 3 vértices."
  },
  {
    category: "shapes", visual: "□", text: "¿Qué figura tiene 4 lados iguales y 4 ángulos rectos?",
    options: ["Cuadrado", "Rectángulo", "Trapecio", "Triángulo"], answer: "Cuadrado",
    explanation: "El cuadrado combina cuatro lados iguales con cuatro ángulos de 90°."
  },
  {
    category: "shapes", visual: "▭", text: "¿Qué figura tiene lados opuestos iguales y 4 ángulos rectos?",
    options: ["Rectángulo", "Rombo", "Triángulo", "Trapecio"], answer: "Rectángulo",
    explanation: "En el rectángulo, cada lado es igual a su opuesto y todos los ángulos miden 90°."
  },
  {
    category: "shapes", visual: "◇", text: "¿Qué figura tiene 4 lados iguales, pero sus ángulos no tienen que ser rectos?",
    options: ["Rombo", "Rectángulo", "Trapecio", "Triángulo"], answer: "Rombo",
    explanation: "El rombo tiene cuatro lados iguales y sus ángulos opuestos son iguales."
  },
  {
    category: "shapes", visual: "⏢", text: "¿Qué figura tiene un par de lados paralelos?",
    options: ["Trapecio", "Triángulo", "Círculo", "Pentágono"], answer: "Trapecio",
    explanation: "El trapecio tiene un par de lados paralelos, que nunca se cruzan."
  },
  {
    category: "shapes", visual: "□", text: "¿Cuál es una diferencia entre un cuadrado y un rectángulo?",
    options: ["El cuadrado tiene sus 4 lados iguales", "El rectángulo no tiene vértices", "El cuadrado tiene 3 lados", "El rectángulo no tiene ángulos"],
    answer: "El cuadrado tiene sus 4 lados iguales",
    explanation: "Ambos tienen cuatro ángulos rectos, pero el cuadrado además tiene sus cuatro lados iguales."
  },
  {
    category: "shapes", visual: "•", text: "¿Qué es un vértice?",
    options: ["El punto donde se encuentran dos lados", "La parte interior de una figura", "Una línea curva", "La medida de un lado"],
    answer: "El punto donde se encuentran dos lados",
    explanation: "Un vértice es el punto o esquina donde se encuentran dos lados."
  },
  {
    category: "shapes", visual: "↔", text: "¿Qué significa que dos lados son paralelos?",
    options: ["Nunca se cruzan aunque se extiendan", "Siempre tienen distinta longitud", "Forman un triángulo", "Son líneas curvas"],
    answer: "Nunca se cruzan aunque se extiendan",
    explanation: "Las líneas paralelas mantienen siempre la misma distancia y no se cruzan."
  }
);

const angleQuestions = [
  {
    category: "angles", visual: "45°", text: "¿Qué tipo de ángulo mide 45°?",
    options: ["Agudo", "Recto", "Obtuso", "Llano"], answer: "Agudo",
    explanation: "45° es menor que 90°, por eso es un ángulo agudo."
  },
  {
    category: "angles", visual: "90°", text: "¿Cómo se llama un ángulo que mide exactamente 90°?",
    options: ["Recto", "Agudo", "Obtuso", "Llano"], answer: "Recto",
    explanation: "Un ángulo de exactamente 90° es recto, como la esquina de una hoja."
  },
  {
    category: "angles", visual: "120°", text: "¿Qué tipo de ángulo mide 120°?",
    options: ["Obtuso", "Agudo", "Recto", "Llano"], answer: "Obtuso",
    explanation: "120° es mayor que 90° y menor que 180°, por eso es obtuso."
  },
  {
    category: "angles", visual: "180°", text: "¿Cómo se llama el ángulo que forma una línea recta?",
    options: ["Llano", "Recto", "Agudo", "Obtuso"], answer: "Llano",
    explanation: "El ángulo llano mide 180° y sus lados forman una línea recta."
  },
  {
    category: "angles", visual: "∠", text: "Un ángulo menor que 90° es...",
    options: ["Agudo", "Obtuso", "Llano", "Recto"], answer: "Agudo",
    explanation: "Todos los ángulos que miden menos de 90° son agudos."
  },
  {
    category: "angles", visual: "∠", text: "Un ángulo mayor que 90° pero menor que 180° es...",
    options: ["Obtuso", "Agudo", "Recto", "Llano"], answer: "Obtuso",
    explanation: "Ese intervalo corresponde a los ángulos obtusos."
  },
  {
    category: "angles", visual: "□", text: "¿Qué tipo de ángulos tiene un cuadrado?",
    options: ["4 ángulos rectos", "4 ángulos agudos", "2 ángulos llanos", "No tiene ángulos"], answer: "4 ángulos rectos",
    explanation: "Cada una de las cuatro esquinas del cuadrado mide 90°."
  },
  {
    category: "angles", visual: "△", text: "¿Cuánto suman los 3 ángulos interiores de un triángulo?",
    options: ["180°", "90°", "270°", "360°"], answer: "180°",
    explanation: "Los tres ángulos interiores de cualquier triángulo siempre suman 180°."
  },
  {
    category: "angles", visual: "80°", text: "¿Cuál es mayor: un ángulo de 80° o uno de 90°?",
    options: ["El de 90°", "El de 80°", "Son iguales", "No se pueden comparar"], answer: "El de 90°",
    explanation: "90 es mayor que 80, así que el ángulo de 90° tiene una abertura mayor."
  },
  {
    category: "angles", visual: "100°", text: "Un ángulo de 100° es más abierto que un ángulo recto. ¿Verdadero o falso?",
    options: ["Verdadero", "Falso"], answer: "Verdadero",
    explanation: "El ángulo recto mide 90° y 100° es mayor, por eso es más abierto."
  },
  {
    category: "angles", visual: "30°", text: "¿Un ángulo de 30° puede ser obtuso?",
    options: ["No, es agudo", "Sí, es obtuso", "Es recto", "Es llano"], answer: "No, es agudo",
    explanation: "30° es menor que 90°, por eso pertenece a los ángulos agudos."
  },
  {
    category: "angles", visual: "📄", text: "La esquina de una hoja es un ejemplo de ángulo...",
    options: ["Recto", "Agudo", "Obtuso", "Llano"], answer: "Recto",
    explanation: "La esquina de una hoja forma normalmente un ángulo de 90°."
  }
];

const allQuestions = [...shapeQuestions, ...angleQuestions];
const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);

let round = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;

function startRound() {
  const selected = $("#geometry-topic").value;
  const available = selected === "mixed" ? allQuestions : allQuestions.filter((question) => question.category === selected);
  round = shuffle(available).slice(0, 10);
  currentIndex = 0;
  correctCount = 0;
  answered = false;
  $("#geometry-quiz").hidden = false;
  $("#geometry-result").hidden = true;
  renderQuestion();
}

function renderQuestion() {
  const question = round[currentIndex];
  answered = false;
  $("#geometry-current").textContent = currentIndex + 1;
  $("#geometry-correct").textContent = correctCount;
  $("#geometry-progress-bar").style.width = `${((currentIndex + 1) / round.length) * 100}%`;
  $("#question-visual").textContent = question.visual;
  $("#geometry-question-topic").textContent = question.category === "shapes" ? "🔷 Figuras" : "📐 Ángulos";
  $("#geometry-question").textContent = question.text;
  $("#geometry-feedback").hidden = true;
  $("#geometry-next").hidden = true;

  const choices = $("#geometry-choices");
  choices.innerHTML = "";
  shuffle(question.options).forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    choices.appendChild(button);
  });
}

function checkAnswer(selectedButton, selectedAnswer) {
  if (answered) return;
  answered = true;
  const question = round[currentIndex];
  const isCorrect = selectedAnswer === question.answer;
  if (isCorrect) correctCount += 1;
  $("#geometry-correct").textContent = correctCount;

  [...$("#geometry-choices").children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.answer) button.classList.add("correct");
  });
  if (!isCorrect) selectedButton.classList.add("incorrect");

  const feedback = $("#geometry-feedback");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.innerHTML = `<strong>${isCorrect ? "¡Muy bien!" : "Casi."}</strong> ${question.explanation}`;
  feedback.hidden = false;
  $("#geometry-next").textContent = currentIndex === round.length - 1 ? "Ver resultado →" : "Siguiente pregunta →";
  $("#geometry-next").hidden = false;
  $("#geometry-next").focus();
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < round.length) {
    renderQuestion();
    return;
  }
  finishRound();
}

function finishRound() {
  const percent = Math.round(correctCount / round.length * 100);
  $("#geometry-quiz").hidden = true;
  $("#geometry-result").hidden = false;
  $("#geometry-result-title").textContent = percent >= 80 ? "¡Sos un explorador de figuras!" : percent >= 60 ? "¡Vas muy bien!" : "¡Sigamos practicando!";
  $("#geometry-result-text").textContent = `Respondiste correctamente ${correctCount} de ${round.length} preguntas (${percent}%).`;

  try {
    const best = Number(localStorage.getItem("matemundo-geometry-best") || 0);
    localStorage.setItem("matemundo-geometry-best", String(Math.max(best, percent)));
  } catch { /* La ronda funciona aunque el almacenamiento esté bloqueado. */ }
}

$("#geometry-next").addEventListener("click", nextQuestion);
$("#restart-geometry").addEventListener("click", startRound);
$("#geometry-again").addEventListener("click", startRound);
$("#geometry-topic").addEventListener("change", startRound);

startRound();
