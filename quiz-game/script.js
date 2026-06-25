// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.querySelector('.start-btn');
const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-questions');
const scoreSpan = document.querySelector('.score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');

const quizQuestions = [
    {
        question: 'Waht is the capital of France?',
        answers: [
            { text: 'Lodon', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Madrid', correct: false },
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Satrun', correct: false },
        ]
    },
    {
        question: 'Which is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pcific OCean', correct: true },
        ]
    },
    {
        question: 'Which of these is NOT a programming language?',
        answers: [
            { text: 'Java', correct: false },
            { text: 'Python', correct: false },
            { text: 'Banana', correct: true },
            { text: 'Javascript', correct: false },
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Go', correct: false },
            { text: 'Gd', correct: false },
            { text: 'Au', correct: true },
            { text: 'Aa', correct: false },
        ]
    },
];

// Quiz state vars
let currentQuestionsIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EVENT listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz)

function startQuiz() {
    console.log('Quiz started')
    // reset vars
    currentQuestionsIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion()


}
function showQuestion() {
    // reset state
    let currentQuestion = quizQuestions[currentQuestionsIndex]

    currentQuestionSpan.textContent = currentQuestionsIndex + 1;

    const progressPercent = (currentQuestionsIndex / quizQuestions.length) * 100;
    console.log(progressPercent, "98")
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question

    //  exaplain this in  a second

    answerContainer.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.textContent = answer.text
        button.classList.add('answer-btn')

        // what is dataset ? it's a property of teh button element that allows you to store custom data
        button.dataset.correct = answer.correct
        button.addEventListener('click', selectAnswer);

        answerContainer.appendChild(button);

    })
}
function selectAnswer(event) {
    // optimization check
    if (answersDisabled) return

    answersDisabled = true
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answerContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionsIndex++;

        //Check if there are more questions or if the quiz is over
        if (currentQuestionsIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }
    }, 1000)
    answersDisabled = false;
}
function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScoreSpan.textContent = score;
    const percentage = (score / quizQuestions.length) * 100

    if (percentage === 100) {
        resultMessage.textContent = "Perfect! you're a genius"
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great Job"

    } else if (percentage >= 60) {
        resultMessage.textContent = "Not bad !"

    } else if (percentage >= 40) {
        resultMessage.textContent = "Keep studying"

    }
}

function restartQuiz() {
    resultScreen.classList.remove('active')

    startQuiz();
}