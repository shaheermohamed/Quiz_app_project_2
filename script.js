const quizData = [
    {
        question:'how old is Florin?',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    },{
        question:'which is most used language in 2022?',
        a:'javascript',
        b:'python',
        c:'java',
        d:'c',
        correct:'a'
    },{
        question:'who is valuable football player in world?',
        a:'cr',
        b:'Messi',
        c:'ozil',
        d:'kroos',
        correct:'b'
    },
    {
        question:'which is html full form?',
        a:'css',
        b:'json',
        c:'Hypertext markup language',
        d:'Helicopter',
        correct:'c'
    },
    {
        question:'what year javascript launched?',
        a:'1996',
        b:'1995',
        c:'1997',
        d:'None of the above',
        correct:'d'
    }
]
const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer') 
const questionE1=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit')

let score = 0
let currentQuiz = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionE1.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

    //currentQuiz ++;
}

function getSelected(){
    let answer =undefined;
    answerE1s.forEach(answerE1 => {
     if(answerE1.checked){
        answer= answerE1.id;
     }
    })

    return answer;
 }

function deselectAnswers(){
    answerE1s.forEach(answerE1 => {
       answerE1.checked = false
       })
}

submitBtn.addEventListener('click',() => {
   
    const answer = getSelected();
    console.log(answer)
    if(answer ){
        if(answer === quizData[currentQuiz].correct){
            score++;


        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2>you answered correctly ${score}/${quizData.length}</h2>`
        }
        }
    
   
    //&& answer === quizData[currentQuiz]
   
    
       
    
  
    
})
