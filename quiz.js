const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const correctAnswers = ['a', 'd', 'c', 'b'];

quizForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let score = 0;
    const userAnswers = [
        quizForm.elements['question1'].value,
        quizForm.elements['question2'].value,
        quizForm.elements['question3'].value,
        quizForm.elements['question4'].value,
    ];

    userAnswers.forEach(function (answer, index) {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    const percentage = Math.round((score / correctAnswers.length) * 100);
    resultDiv.innerHTML = `<p>You got ${score} out of ${correctAnswers.length} (${percentage}%) correct.</p>`;
    quizForm.querySelectorAll('input[type="radio"]').forEach(function (radio) {
        radio.disabled = true;
    });
    submitBtn.disabled = true;

});