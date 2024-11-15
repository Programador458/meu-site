// Lista de perguntas e respostas
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: [
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
            { text: "São Paulo", correct: false },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "Quantos estados existem no Brasil?",
        answers: [
            { text: "26", correct: false },
            { text: "27", correct: true },
            { text: "25", correct: false },
            { text: "28", correct: false }
        ]
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;

// Seleciona os elementos
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

// Inicia o jogo
function startGame() {
    currentQuestionIndex = 0;
    showQuestion();
}

// Exibe a pergunta atual
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(answer.correct);
        answersElement.appendChild(button);
    });
}

// Limpa o estado anterior
function resetState() {
    resultElement.textContent = '';
    nextButton.style.display = 'none';
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

// Verifica a resposta
function selectAnswer(correct) {
    if (correct) {
        correctSound.play();
        resultElement.textContent = "Você acertou!";
        resultElement.style.color = "green";
    } else {
        wrongSound.play();
        resultElement.textContent = "Você errou!";
        resultElement.style.color = "red";
    }
    nextButton.style.display = 'block';
}

// Próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        resultElement.textContent = "Você completou o jogo!";
        nextButton.style.display = 'none';
    }
}

// Inicia o jogo ao carregar a página
startGame();
