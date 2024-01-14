let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");

EventListener(question1,".answer1",".plusImg1");
EventListener(question2,".answer2",".plusImg2");
EventListener(question3,".answer3",".plusImg3");
EventListener(question4,".answer4",".plusImg4");

function EventListener(question,answerId,IconDiv){
    question.addEventListener("click",()=> {
        initialization(answerId,IconDiv);
    })
}

function initialization(answerId,IconDiv){
    let answer = document.querySelector(answerId);
    let toggleIcon = document.querySelector(IconDiv);
    toggle(answer,toggleIcon);
}

function toggle(answer,toggleIcon){
    if(answer.classList.contains("hide")){
        answer.classList.remove("hide");
        toggleIcon.style.backgroundImage = 'url("assets/images/icon-minus.svg")';
    }
    else{
        answer.classList.add("hide");
        toggleIcon.style.backgroundImage = 'url("assets/images/icon-plus.svg")';
    }
}