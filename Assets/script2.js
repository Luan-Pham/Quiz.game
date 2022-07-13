var score = document.getElementById("#scorecount")
var time = document.getElementById("timer")
var bigContain = document.getElementById("quizContainer")
var startButton = document.getElementById("start")
var quest = document.getElementById("questionText")
var answer1 = document.getElementById("answer-btn1")
var answer2 = document.getElementById("answer-btn2")
var answer3 = document.getElementById("answer-btn3")
var answer4 = document.getElementById("answer-btn4")

timeCount = 60

function countDown() {

}

function startQuiz () {
 var containerChild = bigContain.children;
    for (var i = 0; i < containerChild.length; i++) {
        var showChild = containerChild[i]
        showChild.setAttribute("style", "visibility: visible")
    }  
    startButton.style.display ="none"
    console.log ("start button clicked")
    countDown()
}

startButton.addEventListener("click",startQuiz)