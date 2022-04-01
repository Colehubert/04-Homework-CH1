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
var currentQuestionIndex = 0;


function generateQuestion(){
var quizQuestion = document.createElement("p");
quizQuestion.textcontent = questionsArray[currentQuestionIndex].question 
var answerList = document.createElement("ol");
for (var i =0; i <questionArray[currentQuestionIndex].choices.length; i++){
    var currentChoice = document.createElement("li");
    currentChoice.textContent = questionArray[currentQuestionIndex].choices[i];

}
}

function startQuiz(){
    generateQuestion();


}



quizBtn.addEventListener("click", startQuiz);