var questionArray = [
{
    question: "who won superbowl 48?",
    choices: ["Seahawks", "Broncos", "patriots", "49rs"],
    answer:"Seahawks",
},
{
    question: "who won the nba finals in 2021?",
    choices: ["Bucks","Suns","Nuggets","Hawks"],
    answer: "Bucks",
},
{

    question: "who won the 2021 world series?",
    choices: ["Braves","Dodgers","Yankees","Astros"],
    answer: "Braves",
},
{
    question: "who won the mls cup in 2021?",
    Choices: ["New York FC","Portland Timbers","Seattle Sounders","LA Galaxy"],
    answer: "New York FC",
},
];


var quizBtn = document.getElementById("quiz-button");
var quizContainer = document.querySelector("#quiz-container");
var timer = document.querySelector("#time");
var countdownTime = questionArray.length * 15;
var countdownInterval;
var currentQuestionIndex = 0;

function endgame() {
    quizContainer.innerHTML = "Game Over Loser!!!";
    clearInterval(countdownInterval);
}
function starttimer(){
    countdownTime--;
    timer.textContent = countdownTime;
}

function generateQuestion(){
    if (currentQuestionIndex === questionArray.length){
        endgame();
    }
var quizQuestion = document.createElement("p");
quizQuestion.textcontent = questionArray[currentQuestionIndex].question 
var answerList = document.createElement("ol");

for (var i = 0;
     i < questionArray[currentQuestionIndex].choices.length;
     i++){
    var currentChoice = document.createElement("li");
    currentChoice.textContent = questionArray[currentQuestionIndex].choices[i];
answerList.append(currentChoice);
}
quizContainer.append(quizQuestion);
quizContainer.append(answerList);

}
function checkAnswer(event){
    var currentAnswer = event.target.textContent;
    var correctAnswer = document.createElement("p");
if(currentAnswer === questionArray[currentQuestionIndex].answer){
    correctAnswer.textContent = "you are correct";
    timer.append(correctAnswer);
} else{
    correctAnswer.textContent = "Wrong!!!!!";
    countdownTime -= 5;
    timer.append(correctAnswer);

}
quizContainer.innerHTML ="";
currentQuestionIndex++;
generateQuestion();
}

function startQuiz(){
    generateQuestion();
    countdownInterval =setInterval(starttimer, 500);


}



quizBtn.addEventListener("click", startQuiz);
quizContainer.addEventListener("click", checkAnswer);