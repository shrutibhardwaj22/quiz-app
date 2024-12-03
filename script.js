const questions = [
    {
        question: "What is the color of the sky?",
        options: ["Blue", "Green", "Yellow", "Red"],
        answer: "Blue",
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
    },
    {
        question: "Who is the President of the United States? (2024)",
        options: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
        answer: "Joe Biden",
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Elephant", "Lion", "Tiger", "Giraffe"],
        answer: "Lion",
    },
    {
        question: "What is the boiling point of water?",
        options: ["50°C", "100°C", "200°C", "300°C"],
        answer: "100°C",
    },
    {
        question: "What is the capital city of the United Kingdom?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "London",
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Potato", "Lettuce"],
        answer: "Avocado",
    },
    {
        question: "Which fruit is known for keeping the doctor away if eaten every day?",
        options: ["Orange", "Banana", "Apple", "Mango"],
        answer: "Apple",
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7",
    },
    {
        question: "Which shape has four equal sides?",
        options: ["Triangle", "Square", "Circle", "Rectangle"],
        answer: "Square",
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
const questionContainer = document.getElementById("question-container");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(currentQuestion.options[index]);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreElement.textContent = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    loadQuestion();
}

restartButton.addEventListener("click", restartQuiz);

// Start the quiz
loadQuestion();
