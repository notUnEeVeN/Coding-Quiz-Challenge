let timer = 0;
let score = timer;
let gameOver = false;
let timerPaused = false;
let timerInterval;
let scorelist = [];

let questions = [
    {
        question: "Commonly used data-types do NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"]
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: ["Quotes", "Curly brackets", "Parantheses", "Square brackets"]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["Commas", "Curly brackets", "Quotes", "Parantheses"]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: ["JavaScript", "Terminal/bash", "for loops", "console.log"]
    }, 
]

document.getElementById("start-button").addEventListener("click", function () {
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".quizpage").style.display = "block";
    showQuestion1();

    timer = 75;
    document.getElementById("timer").textContent = `Time left: ${timer}` ;
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        if (!timerPaused) {
            timer--
            document.getElementById("timer").textContent = `Time left: ${timer}`;

            if(timer <= 0) {
                clearInterval(timerInterval);
                gameOver = true;
                timer = 0;
                let quizpage = document.querySelector(".quizpage");
                quizpage.style.display = "none";
                endGamePage();
            }
        }
    }, 1000);
});

let highscoresLink = document.getElementById('view-highscores');

highscoresLink.addEventListener('click', function(event) {
    event.preventDefault();
    VHSbuttonF();
});


function showQuestion1() {
    document.getElementById("question").textContent = questions[0].question;
    
    document.getElementById("a1").textContent = questions[0].answers[0];
    document.getElementById("a1").setAttribute("answer-number", 1)

    document.getElementById("a2").textContent = questions[0].answers[1];
    document.getElementById("a2").setAttribute("answer-number", 2)

    document.getElementById("a3").textContent = questions[0].answers[2];
    document.getElementById("a3").setAttribute("answer-number", 3)

    document.getElementById("a4").textContent = questions[0].answers[3];
    document.getElementById("a4").setAttribute("answer-number", 4)

    let quizpage = document.querySelector(".quizpage");
    quizpage.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') {
            let chosenAnswer = parseInt(event.target.getAttribute("answer-number"));
            if(chosenAnswer != 3) {
                timer -= 10; 
            }
            showQuestion2();
        }
        //found this line on the internet when troubleshooting my code, makes it so the listener event applies only once, and won't still be there for the rest of the quiz questions and stack on top of eachother
        //I was stuck for so long, this SAVED MY CODE
    }, {once: true});
}

function showQuestion2(){
    
    document.getElementById("question").textContent = questions[1].question;
    
    document.getElementById("a1").textContent = questions[1].answers[0];
    document.getElementById("a1").setAttribute("answer-number", 1)

    document.getElementById("a2").textContent = questions[1].answers[1];
    document.getElementById("a2").setAttribute("answer-number", 2)

    document.getElementById("a3").textContent = questions[1].answers[2];
    document.getElementById("a3").setAttribute("answer-number", 3)

    document.getElementById("a4").textContent = questions[1].answers[3];
    document.getElementById("a4").setAttribute("answer-number", 4)

    let quizpage = document.querySelector(".quizpage");
    let buttons = document.querySelectorAll(".quizpage button");

    quizpage.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') {
            let chosenAnswer = parseInt(event.target.getAttribute("answer-number"));
            if(chosenAnswer != 2) {
                timer -= 10; 
            }
            showQuestion3();
        }
    }, {once: true});
}

function showQuestion3() {

    document.getElementById("question").textContent = questions[2].question;
    
    document.getElementById("a1").textContent = questions[2].answers[0];
    document.getElementById("a1").setAttribute("answer-number", 1)

    document.getElementById("a2").textContent = questions[2].answers[1];
    document.getElementById("a2").setAttribute("answer-number", 2)

    document.getElementById("a3").textContent = questions[2].answers[2];
    document.getElementById("a3").setAttribute("answer-number", 3)

    document.getElementById("a4").textContent = questions[2].answers[3];
    document.getElementById("a4").setAttribute("answer-number", 4)

    let quizpage = document.querySelector(".quizpage");
    quizpage.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') {
            let chosenAnswer = parseInt(event.target.getAttribute("answer-number"));
            if(chosenAnswer != 4) {
                timer -= 10; 
            }
            showQuestion4();
        }
    }, {once: true});

}

function showQuestion4() {
    document.getElementById("question").textContent = questions[3].question;
    
    document.getElementById("a1").textContent = questions[3].answers[0];
    document.getElementById("a1").setAttribute("answer-number", 1)

    document.getElementById("a2").textContent = questions[3].answers[1];
    document.getElementById("a2").setAttribute("answer-number", 2)

    document.getElementById("a3").textContent = questions[3].answers[2];
    document.getElementById("a3").setAttribute("answer-number", 3)

    document.getElementById("a4").textContent = questions[3].answers[3];
    document.getElementById("a4").setAttribute("answer-number", 4)

    let quizpage = document.querySelector(".quizpage");
    quizpage.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') {
            let chosenAnswer = parseInt(event.target.getAttribute("answer-number"));
            if(chosenAnswer != 3) {
                timer -= 10; 
            }
            showQuestion5();
        }
    }, {once: true});
}

function showQuestion5() {
    document.getElementById("question").textContent = questions[4].question;
    
    document.getElementById("a1").textContent = questions[4].answers[0];
    document.getElementById("a1").setAttribute("answer-number", 1)

    document.getElementById("a2").textContent = questions[4].answers[1];
    document.getElementById("a2").setAttribute("answer-number", 2)

    document.getElementById("a3").textContent = questions[4].answers[2];
    document.getElementById("a3").setAttribute("answer-number", 3)

    document.getElementById("a4").textContent = questions[4].answers[3];
    document.getElementById("a4").setAttribute("answer-number", 4)

    let quizpage = document.querySelector(".quizpage");
    quizpage.addEventListener('click', function(event) {
        if(event.target.tagName === 'BUTTON') {
            endGamePage();
            let chosenAnswer = parseInt(event.target.getAttribute("answer-number"));
            if(chosenAnswer != 4) {
                timer -= 10; 
            }
        }
    }, {once: true});
}

function endGamePage () {
    timerPaused = true;
    document.querySelector(".quizpage").style.display = "none";
    document.querySelector(".highscores").style.display = "block";

    document.getElementById("finalscore").textContent += `${timer}`

    document.getElementById("submit-button").addEventListener("click", function () {
        document.querySelector(".initials").style.display = "none";
        document.getElementById("finalscore").style.display = "none";
        let initials = document.getElementById("initialsInput").value;
        
        let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        
        highScores.push({
            initials: initials,
            score: timer
        });

        
        highScores.sort((a, b) => b.score - a.score);

        localStorage.setItem("highScores", JSON.stringify(highScores));

        showHighScores();

    }, {once: true});
}

function showHighScores() {
    let highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = '';

    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    for (let i = 0; i < highScores.length; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
        highScoresList.appendChild(newLi);
    }

    document.getElementById("lastPageButtons").style.display = "block";

    document.getElementById("go-back-button").addEventListener("click", function () {
        location.reload();

    });
    
    document.getElementById("clear-highscores-button").addEventListener("click", function () {
        localStorage.removeItem("highScores");
    
        document.getElementById("highScoresList").innerHTML = "";
    
    }, {once: true});
}


function VHSbuttonF () {
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".initials").style.display = "none";
    document.querySelector(".quizpage").style.display = "none";
    document.getElementById("finalscore").style.display = "none";
    document.querySelector(".highscores").style.display = "block";
    clearInterval(timerInterval)
    timer = 0;
    showHighScores();
}