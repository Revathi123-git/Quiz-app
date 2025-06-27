const questions = [
    {
        question:"What is the capital of India?",
        options:["Delhi", "Mumbai", "chennai", "Kolkata"],
        answer:"Delhi"
    },
    {
        question:"which language runs in browser?",
        options:["Java", "Python", "JavaScript", "C++"],
        answer:"JavaScript"
    },
    {
        question:"what is the difference between plain javascrpt and react js?",
        options:["react js is a framework", "react js is a library", "react js is a language", "react js is a framework"],
        answer:"react js is a framework"
    }
]

let currenctQuestion = 0
let score=0

const questionE1 = document.getElementById("questions")
const optionE1 =  document.getElementById("options")
const nextButton = document.getElementById("nextBtn")
const resultbox = document.getElementById("result-box")
const scoreText = document.getElementById("score")

const loadQuestions = ()=>{
    const {question, options} = questions[currenctQuestion]
    questionE1.textContent = question;
    optionE1.innerHTML='';
    options.forEach(option=>{
        const btn = document.createElement("button")
        btn.classList.add("option")
        btn.textContent = option;
        btn.onclick = ()=> checkAnswer(option)
        optionE1.appendChild(btn)
    })
}
const checkAnswer = (selectedOption)=>{
    const  correct = questions[currenctQuestion].answer
    if(selectedOption ===correct){
        score++
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", ()=>{
    currenctQuestion++
    if(currenctQuestion<questions.length){
        loadQuestions()
        nextButton.disabled = true;
    }else{
        showResult()
    }
})

const showResult = ()=>{
    document.getElementById("quiz-box").style.display = "none";
    resultbox.style.display = "block";
    scoreText.textContent=`${score} / ${questions.length}`

}

loadQuestions()
nextButton.disabled = true;