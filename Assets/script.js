const answer = [];
const questionAnswer = [];
var startBtn = document.getElementById("#start")

function startQuiz(){
    Questions.forEach(
        (currentQuestion, questionNumber) => {
            for(letter in currentQuestion.answers){
            //     answers.push(
            //         '<label>
            //             <input type="radio" name="questions${questionNumber}" value="${letter}")>
            //             ${letter} :
            //             ${currentQuestion.answers[letter]}
            //             </label>    
            //  }
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`)}
        }
    )
}

startBtn.addEventListener('click',startQuiz);









































const Questions = [
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
{question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
},
{question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
},
{question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
},
{question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
},
{question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
},
{question: "Which company developed Javascript?",
    answers: {
        a: "Netscape",
        b: "Apple",
        c: "Twitter",
        d: "Google"
    },
    correctAnswer: "a"
}
]