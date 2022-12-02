//import myJSON from "./js/question.json" assert {type:"json"};

// const json = [
//     {
//         question: "Quel est la signification du sigle SIDA ?",
//         a: "Syndrome d'immunodéficience acquise",
//         b: "Swedish International Developpment Authority",
//         c: "Syndrome d’immunition asperger",
//         d: "Sonorite d’identification artificiel",
//         correct: "a"
//     }
// ]

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./js/question.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

var quiz= document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    var current = json[currentQuiz]
    questionEl.textContent= current.question
    a_text.textContent = current.a
    b_text.textContent = current.b
    c_text.textContent = current.c
    d_text.textContent = current.d
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
submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    var current = json[currentQuiz]
    console.log(current.correct)
    console.log(answer)
    if(answer) {
        
       if(answer == current.correct) {
           score++
           console.log(score)

       }
       currentQuiz++
       if(currentQuiz < json.length) {
           loadQuiz()
       } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${json.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
}
)