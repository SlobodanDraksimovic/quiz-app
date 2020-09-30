const quizQuestion = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("sub");
const selected = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

const quizData = [
  {
    question: "Koje godine je osnovana EU?",
    a: "1962",
    b: "1957",
    c: "1961",
    d: "1959",
    correct: "b",
  },
  {
    question: "Ko je predsednik USA?",
    a: "Bil Klinton",
    b: "Barak Obama",
    c: "Donald Tramp",
    d: "Dzordz Buš",
    correct: "c",
  },
  {
    question: "Koji je najbrži sisar na planeti zemlji?",
    a: "Gepard",
    b: "Leopard",
    c: "Puma",
    d: "Jaguar",
    correct: "a",
  },
  {
    question: "Ko glumi glavnu mušku ulogu u filmu Poslednji krug u Monci?",
    a: "Dragan Bjelogrlić",
    b: "Dragan Nikolić",
    c: "Bogdan Diklić",
    d: "Žarko Laušević",
    correct: "b",
  },
  {
    question: "Koji poznati bend izvodi numeru Lutka sa naslovne strane?",
    a: "Prljavo Kazalište",
    b: "Parni Valjak",
    c: "Riblja Čorba",
    d: "Azra",
    correct: "c",
  },
  {
    question: "Ko je bio pri čovek u svemiru?",
    a: "Aleksej Lenov",
    b: "Jurij Gagarin",
    c: "Džon Glen",
    d: "Nil Armstrong",
    correct: "b",
  },
  {
    question:
      "Koliko hemijskih elemenata ima u Mendeljejevom periodičnom sistemu?",
    a: "83",
    b: "96",
    c: "121",
    d: "118",
    correct: "d",
  },
];

function checkSelected() {
  let answer = undefined;
  selected.forEach((element) => {
    if (element.checked) {
      answer = element.id;
    }
  });
  return answer;
}

function deselectQuiz() {
  selected.forEach((element) => {
    element.checked = false;
  });
}

function loadQuiz() {
  deselectQuiz();
  const currentQuiz = quizData[currentQuestion];
  quizQuestion.innerText = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}
loadQuiz();

submitBtn.addEventListener("click", () => {
  const answer = checkSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h3>Imali ste ${score} tačnih od ${quizData.length} mogućih odgovora!</h3><button onclick="location.reload()">Reload</button>`;
    }
  }
  checkSelected();
});
