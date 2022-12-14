// code partially copied and customised from 'codeWithNick' tutorial
// full detail of customisation carried out is difficult to do as there are so many small tweaks throughout the project and it has been a few weeks now.
// i will highlight the purely custom sections and leave the rest as 'copied and customised' 
// link to tutorial https://www.youtube.com/watch?v=CqddbIrEM5I

// all questions are ORIGINAL
const quizData = [
  {
      question: "What is the average age of gamers in the USA?",
      a: "41",
      b: "32",
      c: "24",
      d: "35",
      correct: "d",
  },
  {
      question: "Mario first appeared in what game??",
      a: "Mario Bros",
      b: "Mario Galaxy",
      c: "Donkey Kong",
      d: "Zelda",
      correct: "c",
  },
  {
      question: "What country tried to put a ban on midnight gaming?",
      a: "Italy",
      b: "China",
      c: "Japan",
      d: "South Korea",
      correct: "d",
  },
  {
      question: "What was Steve Wozniak favorite game?",
      a: "Tetris",
      b: "Space Invaders",
      c: "Breakout",
      d: "Street Fighter",
      correct: "a",
  },
  {
    question: "What was the first gaming console to have internal memory?",
    a: "Nintendo-64",
    b: "Sega Saturn",
    c: "Gamecube",
    d: "Playstation-1",
    correct: "b",
},
{
    question: "What year was Sonic released?",
    a: "1988",
    b: "1999",
    c: "1991",
    d: "1995",
    correct: "c",
},
{
    question: "Where does Super Mario World take place?",
    a: "Dinosaur Land",
    b: "The Moon",
    c: "Texas, USA",
    d: "Peaches Castle",
    correct: "a",
},
{
    question: "What was Super Mario orginally known as?",
    a: "Plumber Boy",
    b: "Magic Boots",
    c: "Jumpman",
    d: "Moustachio Jim",
    correct: "c",
},



];

const quiz= document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

// SFX
let mySound = new Audio("assets/music/quiz-answer.wav"); // ORIGINAL
let mySound2 = new Audio("assets/music/quiz-finished.wav"); // ORIGINAL

loadQuiz();

function loadQuiz() {

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}

// ORIGINAL
submitBtn.addEventListener("click", () => {
  mySound.play()
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }

     // ORIGINAL
     currentQuiz++

     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         mySound2.play()
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})