const textArea = document.getElementById("text-area");

let typedNumberArray = [];
let typedNumberString = "";
let additionReservedNumber = 0;
let substractionReservedNumber = 0;
let divisionReservedNumber = 0;
let multiplicationReservedNumber = 0;
let resultReservedNumber = 0;
let resultNumber = 0; 


function resultClicked(){
    if(typedNumberString != 0){ 
        resultReservedNumber = parseFloat(typedNumberString.replace(",",".")); // To have "." instead of "," in the calcul
    }else{
        return undefined; // to ignore the "more than one click" 
    }

    // addition
    if(additionReservedNumber != 0){
        resultNumber = additionReservedNumber + resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    // substraction
    else if(substractionReservedNumber != 0){
        resultNumber = substractionReservedNumber - resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    // division
    else if(divisionReservedNumber != 0){
        resultNumber = divisionReservedNumber / resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    // multiplication
    else if(multiplicationReservedNumber != 0){
        resultNumber = multiplicationReservedNumber * resultReservedNumber;
        let pointTovirgule = "" + resultNumber;
        textArea.innerHTML = pointTovirgule.replace(".",",");
    }
    
    typedNumberArray = [];
    typedNumberString = 0;
    additionReservedNumber = 0;
    substractionReservedNumber = 0;
    divisionReservedNumber = 0;
    multiplicationReservedNumber = 0;
    resultReservedNumber = 0;
};

function deleteClicked(){
    typedNumberArray.pop();
    typedNumberString = typedNumberArray.join("");
    textArea.innerHTML = typedNumberString;
};

function resetClicked(){
    typedNumberArray = [];
    typedNumberString = 0;
    reservedNumber = 0;
    reservedNumber2 = 0;
    textArea.innerHTML = typedNumberString;
};