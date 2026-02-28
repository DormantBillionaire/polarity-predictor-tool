const answers = {
    "question-01": "H20",
    "question-02": "NH₃-a",
    "question-03": "0",
    "question-04": "F",
    "question-05": "SO₂-c",
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
        breakdown += `<p>${question}: ❌ Incorrect — you answered ${userAnswer}, correct answer was ${correct}</p>`;
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