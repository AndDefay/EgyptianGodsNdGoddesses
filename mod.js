let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
let totalQuestions =questions.length;

const container = document.querySelector('.question-container');
const questionQuiz = document.querySelector('.question');
const quiz1 = document.querySelector('.Quiz-Answer1');
const quiz2 = document.querySelector('.Quiz-Answer2');
const quiz3 = document.querySelector('.Quiz-Answer3');
const quiz4 = document.querySelector('.Quiz-Answer4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

function generateQuestions (index) {
   
    const question = questions[index];
    const quiz1Total = questions[index].answer1Total;
    const quiz2Total = questions[index].answer2Total;
    const quiz3Total = questions[index].answer3Total;
    const quiz4Total = questions[index].answer4Total;
     
    questionQuiz.innerHTML = `${index + 1}. ${question.question}`
    quiz1.setAttribute('data-total', `${quiz1Total}`);
    quiz2.setAttribute('data-total', `${quiz2Total}`);
    quiz3.setAttribute('data-total', `${quiz3Total}`);
    quiz4.setAttribute('data-total', `${quiz4Total}`);
    quiz1.innerHTML = `${question.answer1}`
    quiz2.innerHTML = `${question.answer2}`
    quiz3.innerHTML = `${question.answer3}`
    quiz4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedQuiz = document.querySelector('input[type="radio"]:checked');
   
    if(!selectedQuiz) {
        alert('Select Answer');
        return;
    }
    
    const answerScore = Number(selectedQuiz.nextElementSibling.getAttribute('data-total'));

    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    currentQuestion++;

        selectedQuiz.checked = false;
    
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         <><h1 class="final-score">Your score: ${totalScore}</h1><div class="summary">
                <h1>Summary</h1>
                <p>Possible - Personality Traits, see below for a summary based on your results:</p>
                <p>37 - 40 - You are Ra. "Supreme Sun God" orginal 1st God.
                    <p>33 - 36 - You are Isis. The "Mother of God" known for being caring, devoted and loving.</p>
                    <p>29 -32 - You are Anubis. The protector of the dead and in charge of passing judgement.</p>
                    <p>25 - 28 - You are Thoth. The God of writing and knowledge.</p>
                    <p>21 - 24 - You are Ma'at. The Goddess of truth, justice and harmony.</p>
                    <p>17 - 20- You are Ptah. The God of creation and craftsman.</p>
                    <p>14 - 16 - You are Hathor. The Goddess of women, love, beauty, pleasure and music.</p>
                    <p>11 - 13 - You are Amun.The "hidden One, Mysterious Form" </p>
                    <p>1 - 10 - You are Bastet. A dependable protector and hunter.</p>
                </p></div><button class="restart">Restart Quiz</button></>
         ;
        return;
    }
    generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {
    currentQuestion--;
    score.pop();
    generateQuestions(currentQuestion);
}

function restartQuiz(e) {
    if(e.target.matches('button')) {
    
    currentQuestion = 0;
    score = [];
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
