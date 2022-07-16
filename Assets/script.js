//set variable for each element in DOM
var score = document.getElementById("scorecount");
var time = document.getElementById("timer");
var bigContain = document.getElementById("quizContainer");
var startButton = document.getElementById("start");
var submitButton = document.getElementById("Submission");
var endtext = document.getElementById("end-msg");
var quest = document.getElementById("questionText");
var answer1 = document.getElementById("answer-btn1");
var answer2 = document.getElementById("answer-btn2");
var answer3 = document.getElementById("answer-btn3");
var answer4 = document.getElementById("answer-btn4");
var scoreMessage = document.getElementById("finalScoreText");
// set variables for score
var scoreCount = 0;

function displayScore() {
  score.textContent = scoreCount;
}

// set variables for timer
var timerCount = 20;
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
  Questions.splice(randomQuesti, 1);
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
  if (timerCount <= 0) {
    endQuiz();
    timerCount = 0;
  }
}

//start quiz function to invoke all other functions

function startQuiz() {
  displayQuiz();
  startTimer();
  randomQuestion();
  displayScore();
  currentQuestiontext();
}
//variables to create HTML elements to display scores
const newScore = document.createElement("p");

//function to end quiz
function endQuiz() {
  var containerChild = bigContain.children;
  endtext.setAttribute("style", "visibility: visible");
  restartButton.setAttribute("style", "visibility: visible");
  for (var i = 0; i < containerChild.length; i++) {
    var showChild = containerChild[i];
    showChild.setAttribute("style", "visibility: hidden");
  }
  var finalScore = scoreCount;
  scoreMessage.textContent = finalScore;
  if (finalScore > highestScore)
    var highestScore = localStorage.setItem("highscore", finalScore);
}

//click events for each function
startButton.addEventListener("click", startQuiz);
answer1.addEventListener("click", inputanswer);
answer2.addEventListener("click", inputanswer);
answer3.addEventListener("click", inputanswer);
answer4.addEventListener("click", inputanswer);
submitButton.addEventListener("click", startQuiz);

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
    question: "Which javascript framework/library uses the $ symbol",
    answers: {
      a: "React",
      b: "jQuery",
      c: "Moment",
      d: "Bootstrap",
    },
    correctAnswer: "jQuery",
  },
  {
    question: "Javascript is an ______ language.",
    answers: {
      a: "Object-oriented",
      b: "Object-based",
      c: "Procedural",
      d: "Fictional",
    },
    correctAnswer: "Object-oriented",
  },
  {
    question: "Which of the following is used to define a variable?",
    answers: {
      a: "var",
      b: "let",
      c: "A and B",
      d: "very",
    },
    correctAnswer: "A and B",
  },
  {
    question: "Which of the following denotes exact equality",
    answers: {
      a: "=",
      b: "==",
      c: "===",
      d: "!==",
    },
    correctAnswer: "===",
  },
  {
    question: "In the setInterval function, what appears in the 2nd argument",
    answers: {
      a: "time in seconds",
      b: "time in hours",
      c: "time in days",
      d: "time in milliseconds",
    },
    correctAnswer: "time in milliseconds",
  },
];
