let timer = 0;
let score = timer;
let questions = ["Commonly used data-types do NOT include:", "The condition in an if / else statement is enclosed within _____.", "Arrays in JavaScript can be used to store", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is: "]
let timerInterval;
let gameOver = false;

document.getElementById("start-button").addEventListener("click", function () {
    var homepage = document.getElementsByClassName("homepage");
    var quizpage = document.getElementsByClassName("quizpage");
    for (let i = 0; i < homepage.length; i++) {
        homepage[i].style.display = "none";
    };

    for (let i = 0; i < quizpage.length; i++) {
        quizpage[i].style.display = "block";
    };

    timer = 75;
    document.getElementById("timer").textContent = `Time left: ${timer}` ;
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        timer--
        document.getElementById("timer").textContent = `Time left: ${timer}`;

        if(timer <= 0) {
            clearInterval(timerInterval);
            gameOver = true;
        }
    }, 1000)

});