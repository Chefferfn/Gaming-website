function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <p>Do you enjoy creating art and designing characters?</p>
        <button onclick="showResult('yes')">Yes</button>
        <button onclick="showResult('no')">No</button>
    `;
}

function showResult(answer) {
    const quizContainer = document.getElementById('quiz-container');
    if (answer === 'yes') {
        quizContainer.innerHTML = "<p>Great! A digital art career in gaming could be perfect for you!</p>";
    } else {
        quizContainer.innerHTML = "<p>No worries! There are many other career paths in gaming to explore.</p>";
    }
}

