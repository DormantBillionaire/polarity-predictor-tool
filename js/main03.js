document.getElementById("next-question-button").addEventListener("click", () => {
    const form = document.querySelector("form");
    const selected = form.querySelector("input[type='radio']:checked");

    if (!selected) {
        alert("Please select an answer before continuing.");
        return;
    }

    sessionStorage.setItem("question-03", selected.value);
    window.location.href = "question04.html";
});