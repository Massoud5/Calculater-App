const firstTheme = document.getElementById("radio-theme1");
const secondeTheme = document.getElementById("radio-theme2");
const thirdTheme = document.getElementById("radio-theme3");


const body = document.querySelector("body");
const radioBox = document.querySelector(".radio-box");
const screen = document.querySelector(".screen");
const ButtonArea = document.querySelector(".button-area");
const similarBtns = document.querySelectorAll(".similar-btns");
const sameStyleBtn = document.querySelectorAll(".same-style-btn");


firstTheme.addEventListener("input", firstThemeRender);
secondeTheme.addEventListener("input", secondeThemeRender);
thirdTheme.addEventListener("input", thirdThemeRender);



function firstThemeRender(){
    body.style.backgroundColor = "var(--main-background-1)";
    body.style.color = "white";
    radioBox.style.background = "var(--toggle-keypad-background-1)";
    screen.style.background = "var(--screen-background-1)";
    ButtonArea.style.background = "var(--toggle-keypad-background-1)";
    similarBtns.forEach(button => {
        button.style.background = "var(--key-background-1-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-1-3)";
        button.style.color = "var(--Very-dark-grayish-blue-1)";
    });
    sameStyleBtn.forEach(button => {
        button.style.background = "var(--key-background-1)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-1)";
        button.style.color = "white";
    });
    resultBtn.style.background = "var(--key-background-toggle-1)";
    resultBtn.style.boxShadow = "0 3px 0 var(--key-shadow-1-2)";
    resultBtn.style.color = "white";
}

function secondeThemeRender(){
    body.style.backgroundColor = "var(--main-background-2)";
    body.style.color = "var(--Very-dark-grayish-2)";
    radioBox.style.background = "var(--toggle-keypad-background-2)";
    screen.style.background = "var(--screen-background-2)";
    ButtonArea.style.background = "var(--toggle-keypad-background-2)";
    similarBtns.forEach(button => {
        button.style.background = "var(--key-background-2-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-2-3)";
        button.style.color = "var(--Very-dark-grayish-2)";
        
    });
    sameStyleBtn.forEach(button => {
        button.style.background = "var(--key-background-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-2)";
        button.style.color = "white";
    });
    resultBtn.style.background = "var(--key-background-toggle-2)";
    resultBtn.style.boxShadow = "0 3px 0 var(--key-shadow-2-2)";
    resultBtn.style.color = "white";
}

function thirdThemeRender(){
    body.style.backgroundColor = "var(--main-background-3)";
    body.style.color = "var(--Light-yellow-3)";
    radioBox.style.background = "var(--toggle-keypad-screen-background-3)";
    screen.style.background = "var(--toggle-keypad-screen-background-3)";
    ButtonArea.style.background = "var(--toggle-keypad-screen-background-3)";
    similarBtns.forEach(button => {
        button.style.background = "var(--key-background-3-2)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-3-3)";
        button.style.color = "var(--Light-yellow-3)";
    });
    sameStyleBtn.forEach(button => {
        button.style.background = "var(--key-background-3)";
        button.style.boxShadow = "0 3px 0 var(--key-shadow-3)";
        button.style.color = "white";
    });
    resultBtn.style.background = "var(--key-background-toggle-3)";
    resultBtn.style.boxShadow = "0 3px 0 var(--key-shadow-3-2)";
    resultBtn.style.color = "var(--Very-dark-blue-3)";
}