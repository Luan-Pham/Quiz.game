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
var leaderboard = document.getElementById("highestScore");
// set variables for score
var scoreCount = 0;

function displayScore() {
  score.textContent = scoreCount;
}

// set variables for timer
var timerCount = 30;
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
    timerCount -= 2;
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

//function to end quiz
function endQuiz() {
  endtext.setAttribute("style", "visibility: visible");
  submitButton.setAttribute("style", "visibility: visible");
  var containerChild = bigContain.children;
  for (var i = 0; i < containerChild.length; i++) {
    var showChild = containerChild[i];
    showChild.setAttribute("style", "visibility: hidden");
  }
  var finalScore = scoreCount;
  scoreMessage.textContent = finalScore;
  var leader = JSON.parse(localStorage.getItem("storageKey"));
  leaderboard.innerText = leader;
  console.log(leader);
}

//function to restart page and record score submission
function refreshQuiz() {
  startButton.setAttribute("style", "visibility: visible");
  localStorage.setItem("storageKey", scoreCount);
  submitButton.setAttribute("style", "visbility: hidden");
  endtext.setAttribute("style", "visbility: hidden");
  scoreMessage.setAttribute("style", "visbility: hidden");
}
//click events for each function
startButton.addEventListener("click", startQuiz);
answer1.addEventListener("click", inputanswer);
answer2.addEventListener("click", inputanswer);
answer3.addEventListener("click", inputanswer);
answer4.addEventListener("click", inputanswer);
submitButton.addEventListener("click", refreshQuiz);

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
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<js>",
      b: "<script>",
      c: "<scripting>",
      d: "<javascript<",
    },
    correctAnswer: "<script>",
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answers: {
      a: "response.write('Hello World')",
      b: "'Hello World'",
      c: "document.write('Hello World')",
      d: "('Hello World')",
    },
    correctAnswer: "document.write('Hello World')",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      a: "alert('Hello World')",
      b: "msgBox('Hello World')",
      c: "alertBox='Hello World'",
      d: "alertbox('Hello World')",
    },
    correctAnswer: "alert('Hello World')",
  },
  {
    question: "How do you create a function?",
    answers: {
      a: "function:myFunction()",
      b: "function=myFuction()",
      c: "function myFunction()",
      d: "myFunction():function",
    },
    correctAnswer: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      a: "call myFunction()",
      b: "myFunction()",
      c: "call function myFunction",
      d: "Call.myFunction()",
    },
    correctAnswer: "myFunction()",
  },
  {
    question: "How does a 'for' loop start?",
    answers: {
      a: "for (i = 0; i <= 5)",
      b: "for (i = 0; i <= 5; i++)",
      c: "for i = 1 to 5",
      d: "for (i <=5; i++)",
    },
    correctAnswer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "How can you add a comment in a Javascript?",
    answers: {
      a: "//This is a comment",
      b: "'This is a comment",
      c: "<!--This is a comment-->",
      d: "#This is a comment",
    },
    correctAnswer: "//This is a comment",
  },
  {
    question: "How do you round the number 7.25, to the near whole number?",
    answers: {
      a: "Math.rnd(7.25)",
      b: "round(7.25(",
      c: "rnd(7.25)",
      d: "Math.round(7.25)",
    },
    correctAnswer: "Math.round(7.25)",
  },
  {
    question: "How do you find the largest number of 2 and 4?",
    answers: {
      a: "Math.ceil(2,4)",
      b: "Math.max(2,4)",
      c: "ceil(2,4)",
      d: "top(2,4)",
    },
    correctAnswer: "Math.max(2,4)",
  },
  {
    question: "In Javascript, the symbols +-* and/ are:",
    answers: {
      a: "operators",
      b: "expressions",
      c: "comparison operators",
      d: "None of the above",
    },
    correctAnswer: "operators",
  },
];
