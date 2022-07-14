//set variable for each element in DOM
var score = document.getElementById("scorecount");
var time = document.getElementById("timer");
var bigContain = document.getElementById("quizContainer");
var startButton = document.getElementById("start");
var quest = document.getElementById("questionText");
var answer1 = document.getElementById("answer-btn1");
var answer2 = document.getElementById("answer-btn2");
var answer3 = document.getElementById("answer-btn3");
var answer4 = document.getElementById("answer-btn4");

let shuffledQuestions;
let currentQuestionindex;

// set variables for score
var scoreCount = 0;

function displayScore() {
  score.textContent = scoreCount;
}

// set variables for timer
var timerCount = 60;
var timer;
// function for timer once quiz is started
function startTimer() {
  timer = setInterval(function () {
    if (timerCount > 0) timerCount--;
    time.textContent = timerCount + " seconds";
  }, 1000);
}

//function to hide start button and display quiz
function displayQuiz() {
  var containerChild = bigContain.children;
  for (var i = 0; i < containerChild.length; i++) {
    var showChild = containerChild[i];
    showChild.setAttribute("style", "visibility: visible");
  }
  startButton.style.display = "none";
}

//function to fill questions and answers

function randomQuestion() {
  var randomQuesti = Math.floor(Math.random() * Questions.length);
  var randomQuest = Questions[randomQuesti];
  currentQuestion = randomQuest;
  Questions.splice(randomQuesti);
}

var currentQuestion;

function currentQuestiontext() {
  console.log(currentQuestion);
  quest.innerText = currentQuestion.question;
  answer1.innerText = currentQuestion.answers.a;
  answer2.innerText = currentQuestion.answers.b;
  answer3.innerText = currentQuestion.answers.c;
  answer4.innerText = currentQuestion.answers.d;
}

var currentQuestiondata;

//function to allow user to choose an answer
function inputanswer(event) {
  var answerChoice = event.target.innerText;
  if (answerChoice == currentQuestion.correctAnswer) {
    scoreCount++;
  } else {
    timerCount -= 5;
  }
  randomQuestion();
  currentQuestiontext();
  displayScore();
}

//start quiz function to invoke all other functions

function startQuiz() {
  displayQuiz();
  startTimer();
  randomQuestion();
  displayScore();
  currentQuestiontext();
}

//click events for each function
startButton.addEventListener("click", startQuiz);
answer1.addEventListener("click", inputanswer);
answer2.addEventListener("click", inputanswer);
answer3.addEventListener("click", inputanswer);
answer4.addEventListener("click", inputanswer);

// possible questions as an array of objects
var Questions = [
  {
    question: "Which company developed Javascript?",
    answers: {
      a: "Netscape",
      b: "Apple",
      c: "Twitter",
      d: "Google",
    },
    correctAnswer: "Netscape",
  },
  {
    question: "Who invented Javascript?",
    answers: {
      a: "Michael Jordan",
      b: "Brendan Eich",
      c: "Mark Carlson",
      d: "Robert Downey Jr.",
    },
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Which data type has a value of true or false",
    answers: {
      a: "Null",
      b: "Number",
      c: "String",
      d: "Boolean",
    },
    correctAnswer: "Boolean",
  },
  {
    question:
      "How many licks does it take to get to the center of a tootsie pop",
    answers: {
      a: "75",
      b: "1",
      c: "23",
      d: "8723438927",
    },
    correctAnswer: "23",
  },
];
