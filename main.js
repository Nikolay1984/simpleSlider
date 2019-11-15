let buttonPrev = document.getElementsByClassName("prev")[0];
let buttonNext = document.getElementsByClassName("next")[0];


buttonNext.addEventListener("click",function (event) {
let activImg = document.getElementsByClassName("visiable")[0];


    if(activImg.nextElementSibling){
        activImg.classList.remove("visiable");
        activImg.nextElementSibling.classList.add("visiable")
    }



})

buttonPrev.addEventListener("click",function (event) {
    let activImg = document.getElementsByClassName("visiable")[0];


    if(activImg.previousElementSibling){
        activImg.classList.remove("visiable");
        activImg.previousElementSibling.classList.add("visiable")
    }



})