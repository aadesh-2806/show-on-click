const show = document.querySelector(".show");
const content = document.querySelector(".content");
const plus = document.querySelector(".plus") ;

show.addEventListener("click" , function see() {
    content.classList.toggle("display");
    if(content.classList.contains("display")){
        plus.innerText = "+";
    }
    else{
        plus.innerText = "x";
    }
})