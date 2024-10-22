document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values of the selected answers
    let q1 = parseInt(document.getElementById('question1').value);
    let q2 = parseInt(document.getElementById('question2').value);
    let q3 = parseInt(document.getElementById('question3').value);

    // Calculate the total score
    let totalScore = q1 + q2 + q3;

    // Generate result based on the score
    let resultText;
    if (totalScore <= 2) {
        resultText = 'You seem to be doing well. Keep up the healthy habits!';
    } else if (totalScore <= 5) {
        resultText = 'You may be experiencing some stress. Consider practicing relaxation techniques.';
    } else {
        resultText = 'You might be dealing with significant stress or anxiety. It may help to speak to a professional.';
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
});
