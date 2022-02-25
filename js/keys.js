const zeroBtn = document.getElementById("zero-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const pointBtn = document.getElementById("point-btn");
const plusBtn = document.getElementById("plus-btn");
const subtractBtn = document.getElementById("subtract-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const deleteBtn = document.getElementById("delete-btn");
const resetBtn = document.getElementById("reset-btn");
const resultBtn = document.getElementById("result-btn");


zeroBtn.addEventListener("click", zeroClicked);     
oneBtn.addEventListener("click", oneClicked);      
twoBtn.addEventListener("click", twoClicked);      
threeBtn.addEventListener("click", threeClicked);    
fourBtn.addEventListener("click", fourClicked);     
fiveBtn.addEventListener("click", fiveClicked);     
sixBtn.addEventListener("click", sixClicked);      
sevenBtn.addEventListener("click", sevenClicked);    
eightBtn.addEventListener("click", eightClicked);    
nineBtn.addEventListener("click", nineClicked);     
pointBtn.addEventListener("click", pointClicked);    
plusBtn.addEventListener("click", plusClicked);     
subtractBtn.addEventListener("click", subtractClicked); 
divideBtn.addEventListener("click", divideClicked);   
multiplyBtn.addEventListener("click", multiplyClicked); 
deleteBtn.addEventListener("click", deleteClicked);   
resetBtn.addEventListener("click", resetClicked);    
resultBtn.addEventListener("click", resultClicked); 




function zeroClicked(){
    typedNumberArray.push("0");
    typedNumberString = typedNumberArray.join(""); // Array to string without virgule
    textArea.innerHTML = typedNumberString;
};
function oneClicked(){
    typedNumberArray.push("1");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function twoClicked(){
    typedNumberArray.push("2");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function threeClicked(){
    typedNumberArray.push("3");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function fourClicked(){
    typedNumberArray.push("4");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function fiveClicked(){
    typedNumberArray.push("5");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function sixClicked(){
    typedNumberArray.push("6");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function sevenClicked(){
    typedNumberArray.push("7");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function eightClicked(){
    typedNumberArray.push("8");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};
function nineClicked(){
    typedNumberArray.push("9");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};

function pointClicked(){
    typedNumberArray.push(",");
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};





function plusClicked(){
    if(typedNumberString != 0){ 
        additionReservedNumber = parseFloat(typedNumberString.replace(",",".")); // To have "." instead of "," in the calcul
    }else{
        return undefined; // to ignore the "more than one click"
    }
    typedNumberArray = [];
    typedNumberString = 0;
    // textArea.innerHTML = typedNumberArray;
};
function subtractClicked(){
    if(typedNumberString != 0){ 
        substractionReservedNumber = parseFloat(typedNumberString.replace(",","."));
    }else{
        return undefined;
    }
    typedNumberArray = [];
    typedNumberString = 0;
    textArea.innerHTML = typedNumberArray;
};
function divideClicked(){
    if(typedNumberString != 0){ 
        divisionReservedNumber = parseFloat(typedNumberString.replace(",","."));
    }else{
        return undefined;
    }
    typedNumberArray = [];
    typedNumberString = 0;
    textArea.innerHTML = typedNumberArray;
};
function multiplyClicked(){
    if(typedNumberString != 0){ 
        multiplicationReservedNumber = parseFloat(typedNumberString.replace(",","."));
    }else{
        return undefined;
    }
    typedNumberArray = [];
    typedNumberString = 0;
    textArea.innerHTML = typedNumberArray;
};