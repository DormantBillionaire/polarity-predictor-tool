const answers = {
    "question-01": "B",
    "question-02": "A",
    "question-03": "B",
    "question-04": "A",
    "question-05": "C",
};

let score = 0;
let breakdown = "";

for (const [question, correct] of Object.entries(answers)){
    const userAnswer = sessionStorage.getItem(question);
    if(userAnswer === correct){
        score++
        breakdown+= `<p>${question}: you answered ${userAnswer}</p>`;
    }
    else {
        breakdown += `<p>${question}: you answered ${userAnswer}, the correct answer was ${correct}</p>`;
    }
}

// prints score to the page
document.getElementById("final-score").innerHTML = `You scored ${score} out of 5`;

// prints question by question breakdown
document.getElementById("answer-breakdown").innerHTML = breakdown;

// clears sessionStorage so quiz is fresh on restart
document.getElementById("restart-button").addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "question01.html";
});