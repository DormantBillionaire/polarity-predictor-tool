const answers = {
    "question-01": "H20",
    "question-02": "Because of the trigonal pyramidal geometry, NH₃ is asymmetrical and polar.",
    "question-03": "Zero, because of the molecules linear arrangement.",
    "question-04": "F, Flourine",
    "question-05": "SO₂ is polar because of it's molecular geometry and net dipole that is > 0",
};

let score = 0;

for (const [question, correct] of Object.enteries(answers)){
    const userAnswer = sessionStorage.getItem(question);
    if(userAnswer === correct){
        score++;
    }
}

document.getElementById("final-score").textContext = 'Your final score is ${score} / 5';