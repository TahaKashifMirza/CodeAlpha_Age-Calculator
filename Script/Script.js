document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        alert('Fill the input properly.');
        return;
    }

    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    const d = today.getDate() - birthDate.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }

    const loader = document.getElementById('loader');
    const resultContainer = document.querySelector('.result-container');
    const result = document.getElementById('result');

    loader.style.display = 'flex';
    resultContainer.style.display = 'none';

    setTimeout(() => {
        loader.style.display = 'none';
        result.innerText = `You are ${age} years old!`;
        resultContainer.style.display = 'block';

        result.style.transform = 'perspective(600px) rotateY(0deg)';
    }, 3000);
});