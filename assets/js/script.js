//declaring my variables, 
let timer = 0;
let score = timer;
let gameOver = false;
let timerPaused = false;
let timerInterval;

//setting all the questions/answer in an array containing objects, so i can easily access them to fill out the infromation in my quiz pages
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

//adding functionality to the start button to initiate the game 
document.getElementById("start-button").addEventListener("click", function () {
    //sets our homepage display to none, and lets our shell quiz page appear
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".quizpage").style.display = "block";
    //this function will add the correct questions/answers to the quiz page as well as the functionality of the buttons
    showQuestion1();

    //setting the timer interval of 75 seconds
    timer = 75;
    //this displays our timer in the top right of the nav bar
    document.getElementById("timer").textContent = `Time left: ${timer}` ;
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        //this will update the timer in the nav bar every second
        if (!timerPaused) {
            timer--
            document.getElementById("timer").textContent = `Time left: ${timer}`;
            //once the timer hits 0 or below, we immediately end the game, and set their score to 0 (in case they hit a negative number)
            if(timer <= 0) {
                clearInterval(timerInterval);
                gameOver = true;
                timer = 0;
                //clear the quiz page and then executes the endgamepage function 
                let quizpage = document.querySelector(".quizpage");
                quizpage.style.display = "none";
                endGamePage();
            }
        }
    }, 1000);
});

//this is the functionality of the view high score button on the nav bar
let highscoresLink = document.getElementById('view-highscores');

highscoresLink.addEventListener('click', function(event) {
    //prevents the default action of an anchor tag so it doesn't try to navigate anywhere
    event.preventDefault();
    //had to create a unique function as the endgamepage function deoesn't clear/add the necessary elements
    VHSbuttonF();
});


//the following blocks of code enter the questions/answers and functionality to the 5 quiz pages 
function showQuestion1() {
    //setting the text content of the quiz page shell to the correct questions and answers using our previously declard array of objects
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
            //last quiz page executes the endgamepage function to finish the game
            endGamePage();
            let chosenAnswer = parseInt(event.target.getAttribute("answer-number"));
            if(chosenAnswer != 4) {
                timer -= 10; 
            }
        }
    }, {once: true});
}

//this is the function that executes to display the last page
function endGamePage () {
    //pauses the timer, as the interval doesn't execute if this is true
    timerPaused = true;
    //hides the quizpage and makes the highscore page appear
    document.querySelector(".quizpage").style.display = "none";
    document.querySelector(".highscores").style.display = "block";
    //adds whatever the paused timer number is to the line that displays your final score
    document.getElementById("finalscore").textContent += `${timer}`
    //adding the funcitonality to the submit button so they can submit their initials
    document.getElementById("submit-button").addEventListener("click", function () {
        //the submit button also hides all the elements except the header of the endgame page, to replace it with the high score list new buttons
        document.querySelector(".initials").style.display = "none";
        document.getElementById("finalscore").style.display = "none";
        //this sets whatever was types into the initials input into the initials variable
        let initials = document.getElementById("initialsInput").value;
        //we are declaring the highscores variable, retrieving it from local storage and parsing it (turning it from a JSON string into an array), the || makes it so if there is nothing in the local storage, it creates an empty array
        let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        
        //here we are pushing the initials value that were inputted, and the final score/timer, into the highScores array as an object 
        highScores.push({
            initials: initials,
            score: timer
        });

        //got this line on sorting from w3 JavaScript array sort website, allows our highscore array to be sorted in descending order
        highScores.sort((a, b) => b.score - a.score);
        //we store the highscores array in the local storage, and then execute the showhighscores function
        localStorage.setItem("highScores", JSON.stringify(highScores));

        showHighScores();

    }, {once: true});
}

//this function will remove the intials input and submit button of the last page, and instead display the leaderboard, as well as create two new buttons that will allow the user to restart or clear the leaderboard
function showHighScores() {
    //here im targetting the header of the highscores and shifting its text align from center to left to apply a different styling to the high scores page
    document.getElementsByClassName("highscores")[0].style.textAlign = "left";
    //creating a highscoreslist variable that targets the html I allocated and styled to place the high scores in, and making sure the variable is empty by setting it to '', as we will set all the scores stored in the local storage into them, and want to avoid repeating scores
    let highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = '';

    //again we are parsing the stringified data stored in the local storage into an array and setting it into the highscores variable just like earlier, we have to repeat these steps as while local storage is universal, the variables only have a local scope within the function they were created in
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    //we are doing the for loop to go through every element of the higscores array, and creating a li item for each one to be displayed on the leaderboard
    for (let i = 0; i < highScores.length; i++) {
        //i already created an ol element in the html that is styled and positioned, and here we are creating new "li" elements that will be added into it 
        let newLi = document.createElement("li");
        //we are creating the text content of each li, which will just display the intials and score seperated by a - for every one stored in our array
        newLi.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
        //we append the fully created list elements into our highScoresList variable which is our ol element in the html, creating our completed leaderboard list
        highScoresList.appendChild(newLi);
    }
    //here we are enabling the buttons I created for the last page to appear, as they are set to hidden by default so they only appear when required
    document.getElementById("lastPageButtons").style.display = "block";

    //adding the functionality to the buttons, this sets the go back button to simply reload the page, which is the easiest way to reset the game and all the variables, while looking seemless, the high scores saved in the local storage will remain there
    document.getElementById("go-back-button").addEventListener("click", function () {
        location.reload();
    });
    
    //adding the functionality to the clear high scores button, we simply remove the highScores array from the local storage, and then set all the currently displayed hihscorelist elements to ""/nothing, clearing both it and the storage
    document.getElementById("clear-highscores-button").addEventListener("click", function () {
        localStorage.removeItem("highScores");
        document.getElementById("highScoresList").innerHTML = "";
    }, {once: true});
}

//this is the functionality of the nav bar view high scores button, because I wanted the user to be able to press it at any time and be taken to the high scores page, I set all possible pages and elements that could be on display to "none", hiding them all, and set the high scores page to visible
function VHSbuttonF () {
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".initials").style.display = "none";
    document.querySelector(".quizpage").style.display = "none";
    document.getElementById("finalscore").style.display = "none";
    document.querySelector(".highscores").style.display = "block";
    //I also clear the timer, as if the player is in the middle of a game and decides to view the leaderboard, I want to stop the timer and set it to 0
    clearInterval(timerInterval)
    timer = 0;
    //I need to call the high scores function, so that the leaderboard and their buttons appear and are functional, rather than just having the empty html shell that you get when making the .highscores page appear
    showHighScores();
}