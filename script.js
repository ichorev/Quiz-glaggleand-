const quizData = [
  {
    question: "is the giggler trustworthy?",
    options: ["trustworthy", "can not be trusted"],
    answer: "trustworthy"
  },
  {
    question: "is the enphoso stable?",
    options: ["no he is unpredictable", "he is very stable"],
    answer: "no he is unpredictable"
  },
  {
    question: "is the giggler reclusive?",
    options: ["highly reclusive",  "he is very sociable"],
    answer: "he is very sociable"
  },
  {
    question: "does the giggler lack directions or is he determined?",
    options: ["lacking Direction", "Determined"],
    answer: "lacking Direction"
  },
  {
    question: "is the enphoso hostile?",
    options: ["no not at all", "often hostile"],
    answer: "often hostile"
  }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit-btn');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption.toLowerCase() === currentQuizData.answer.toLowerCase()) {
    score++;
    resultElement.innerText = "Correct!";
  } else {
    resultElement.innerText = "Wrong!";
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.innerText = `You scored ${score} out of ${quizData.length}!`;
  optionsElement.innerHTML = "";
  resultElement.innerText = "";
  submitButton.style.display = "none";
}

loadQuestion();
