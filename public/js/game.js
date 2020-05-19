const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch("https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple")
.then(res => {
  return res.json();
})
.then(loadedQuestions => {

  console.log(loadedQuestions.results);
  questions = loadedQuestions.results.map(loadedQuestion => {
    const formattedQuestion = {
      question: loadedQuestion.question
    };

    const answerChoices = [...loadedQuestion.incorrect_answers];
    formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
    answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestion.correct_answer);

    answerChoices.forEach((choice, index) => {
      formattedQuestion['choice' + (index + 1)] = choice;
    });
    return formattedQuestion;
  });

  startGame();
}).catch(err => {
  console.error(err);
});



//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15;
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions)
  getNewQuestion();
  game.classList.remove('hidden');
  loader.classList.add('hidden');
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    //GO TO THE END page
    return window.location.assign('/quiz/end');

  }
  //shows how many questions answered out of available questions
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question.replace(/&quot;/g,'"').replace(/&egrave;/g,'è')
  .replace(/&amp;/g,'&').replace(/&#039;/g,"'").replace(/&hellip;/g, '...').replace(/&ldquo;/g,'"').replace(/&rdquo;/g,'"').replace(/&eacute;/g,'é');

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number].replace(/&quot;/g,'"').replace(/&egrave;/g,'è')
    .replace(/&amp;/g,'&').replace(/&#039;/g,"'").replace(/&hellip;/g, '...').replace(/&ldquo;/g,'"').replace(/&rdquo;/g,'"').replace(/&eacute;/g,'é');
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    const actualAnswer = currentQuestion.answer
    const answer = document.querySelector(`[data-number= '${currentQuestion.answer}']`);

    const classToApply =
    selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' //if statement - if correct or if incorrect.

    const showCorrectAnswer =
    actualAnswer == currentQuestion.answer ? 'correct' : 'incorrect' //reveals the correct answer after wrong answer selected



    if (classToApply ==='correct') {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    answer.parentElement.classList.add(showCorrectAnswer);

    setTimeout( () =>{
      selectedChoice.parentElement.classList.remove(classToApply);
      answer.parentElement.classList.remove(showCorrectAnswer);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}
