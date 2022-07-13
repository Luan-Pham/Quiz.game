//set variable for each element in DOM
var score = document.getElementById("#scorecount")
var time = document.getElementById("timer")
var bigContain = document.getElementById("quizContainer")
var startButton = document.getElementById("start")
var quest = document.getElementById("questionText")
var answer1 = document.getElementById("answer-btn1")
var answer2 = document.getElementById("answer-btn2")
var answer3 = document.getElementById("answer-btn3")
var answer4 = document.getElementById("answer-btn4")

// set variables for timer
var timerCount = 60
var timer
// function for timer once quiz is started
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        time.textContent = timerCount + " seconds";
    }, 1000)
}

//function to hide start button and display quiz
function displayQuiz () {
    var containerChild = bigContain.children;
    for (var i = 0; i < containerChild.length; i++) {
        var showChild = containerChild[i]
        showChild.setAttribute("style", "visibility: visible")
    }  
    startButton.style.display ="none"
    }

//function to fill questions and answers
var currentQuestion = 0

function inputQuiz () {
    var randomQuest = Questions[Math.floor(Math.random()*Questions.length)]
    quest.innerText = randomQuest.question
    answer1.innerText = randomQuest.answers.a
    answer2.innerText = randomQuest.answers.b
    answer3.innerText = randomQuest.answers.c
    answer4.innerText = randomQuest.answers.d
}

//start game function to invoke all other functions

function startQuiz () {
    displayQuiz()
    startTimer()
    inputQuiz()
}

startButton.addEventListener("click",startQuiz)


// possible questions as an array of objects
var Questions = [
    {question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
},
{question: "Who invented Javascript?",
    answers: {
        a: "Michael Jordan",
        b: "Brendan Eich",
        c: "Mark Carlson",
        d: "Robert Downey Jr."
    },
    correctAnswer: "b"
},
{question: "Which data type has a value of true or false",
    answers: {
        a: "Null",
        b: "Number",
        c: "String",
        d: "Boolean"
    },
    correctAnswer: "d"}]