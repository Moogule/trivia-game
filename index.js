const questionBank = [
  {
    "question": "What is a Schmeckle?",
    "a": "Ricks favorite food",
    "b": "A currency",
    "c": "The name of fly-guards",
    "d": "Ricks Cat-person friend",
    "correctAnswer": "b"
  },
  {
    "question": "Which of the following is NOT one of Rick catch phrases?",
    "a": "No jumping in the sewer.",
    "b": "GRASSSSS... tastes bad!",
    "c": "Hit the deck, Jack!",
    "d": "Uh ohhhh! Somersoult jump!",
    "correctAnswer": "c"
  },
  {
    "question": "Which is the dimension of the original Rick?",
    "a": "C-126",
    "b": "C-132",
    "c": "C-129",
    "d": "C-137",
    "correctAnswer": "d"
  },
  {
    "question": "What is the name of Mortys High School?",
    "a": "Beerwah State High School",
    "b": "Harry Herpson High School",
    "c": "Gene Vegan High School",
    "d": "FIU",
    "correctAnswer": "b"
  },
  {
    "question": "What is the name of Jerrys favorite Rick?",
    "a": "Doofus",
    "b": "Roofus",
    "c": "Goofus",
    "d": "Rick G-506",
    "correctAnswer": "a"
  },
  {
    "question": "What is the name of Ricks ex-wife?",
    "a": "Diane",
    "b": "Janet",
    "c": "Joyce",
    "d": "Ellen",
    "correctAnswer": "a"
  },
  {
    "question": "What job does Beth have?",
    "a": "Chef",
    "b": "Novel Writer",
    "c": "Astronomer",
    "d": "Horse Surgeon",
    "correctAnswer": "d"
  },
  {
    "question": "What does wubba lubba dub dub mean?",
    "a": "I'm a genius",
    "b": "Let's party",
    "c": "Please leave",
    "d": "I'm in great pain",
    "correctAnswer": "d"
  },
  {
    "question": "Who killed Birdperson in a horrific turnabout during his wedding?",
    "a": "Jerry",
    "b": "Summer",
    "c": "Tammy",
    "d": "Beth",
    "correctAnswer": "c"
  },
  {
    "question": "What species is Morty's son?",
    "a": "Smarkian",
    "b": "Gazorpazorp",
    "c": "Cromulan",
    "d": "Human",
    "correctAnswer": "b"
  }
];


const quizWrapper = document.getElementById("quiz");
const questionElem = document.querySelector("#question");
const answerA = document.querySelector("label[for='a']");
const answerB = document.querySelector("label[for='b']");
const answerC = document.querySelector("label[for='c']");
const answerD = document.querySelector("label[for='d']");
const submitBtn = document.getElementById("submitBtn");
const answerChoices = document.querySelectorAll("input[name='answer']");
const scoreLabel = document.getElementById("score");
const quizData = questionBank;

let questionShown = 0;
let score = 0;

function loadQuestion() {
  resetSelection();
  let currentQuestion = quizData[questionShown];

  questionElem.innerHTML = currentQuestion.question;
  answerA.innerHTML = currentQuestion.a;
  answerB.innerHTML = currentQuestion.b;
  answerC.innerHTML = currentQuestion.c;
  answerD.innerHTML = currentQuestion.d;
}

submitBtn.addEventListener("click", () => {
  let selectedAnswer = getSelection();

  if (selectedAnswer == quizData[questionShown].correctAnswer) {
    score++;
  }

  scoreLabel.textContent = `Score: ${score}`;

  if (selectedAnswer != "") {
    questionShown++;
  }

  if (questionShown < quizData.length) {
    if (selectedAnswer != "") {
      loadQuestion();
    }
  } else {
    quizWrapper.innerHTML = `<h1>Quiz completed!</h1><h1>You scored ${score}/${quizData.length} points!</h1><button id="retryBtn" onclick="location.reload();">Try again?</button>`;
  }
});

const getSelection = () => {
  let selectedAnswer = "";

  answerChoices.forEach((e) => {
    if (e.checked) {
      selectedAnswer = e.id;
    }
  });

  return selectedAnswer;
};

const resetSelection = () => {
  answerChoices.forEach((e) => {
    e.checked = false;
  });
};

loadQuestion();