const quizDB = [
    {
        question: "Q1: What is the full form of an HTML?",
        a: "Hello To My Language",
        b: "Hello Text Markup Language",
        c: "Hello Text My Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of an HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Products",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q3: What is the full form of an JS?",
        a: "JavaScript",
        b: "JavaSky",
        c: "JustSay",
        d: "JordanShah",
        ans: "ans1"
    },
    {
        question: "Q4: What is the full form of an CSS?",
        a: "Cascading StyleSheet",
        b: "CastCading StyleSheet",
        c: "Cascading SuperSheet",
        d: "Cascading StyleSuper",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQ = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = quizDB[questionCount].question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQ();

const getChek = () => {
    let answer;

    answers.forEach((curEle) => {
        if(curEle.checked){
            answer = curEle.id;
        }
    })
    return answer;
}

const deselectAll = () => {
    answers.forEach((curEle) => curEle.checked = false)
}

submit.addEventListener('click' , () => {
    const chekAns = getChek();
    console.log(chekAns);

    if(chekAns === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQ();
    }else{
        showScore.innerHTML = `<h3> Your Score ${score}/${quizDB.length} 👌</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>`;

    }
    showScore.classList.remove('scoreArea');

});  