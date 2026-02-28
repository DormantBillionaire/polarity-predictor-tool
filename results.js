const answers = {
    "question-01": "H20",
    "question-02": "Because of the trigonal pyramidal geometry, NH₃ is asymmetrical and polar.",
    "question-03": "Zero, because of the molecules linear arrangement.",
    "question-04": "F, Flourine",
    "question-05": "SO₂ is polar because of it's molecular geometry and net dipole that is > 0",
};

let score = 0;
let breakdown = "";

for (const [question, correct] of Object.entries(answers)){
    const userAnswer = sessionStorage.getItem(question);
    if(userAnswer === correct){
        score++
        breakdown+= `<p>${question}: you answered ${userAnswer}</p>`;
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