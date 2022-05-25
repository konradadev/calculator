//JS
let screenContent = "";
let leftNumber = null;
let rightNumber = null;
let saveRight = false;
let lastOperation = null;
let resultFinal = null;

const add = (addendA, addendB) => addendA+addendB;
  
const subtract = (minuend, subtrahend) => minuend-subtrahend;

const multiply = (factorA, factorB) => factorA*factorB;

const divide = (dividend, divisor) => dividend/divisor;

function operate(operator, a, b){
    let result = null;
    switch(operator){
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        default:
            return "Error! Bad operator";
    }
    return result;
}

function displayScreenContent(content){
    const screen = document.querySelector(".screen");
    screen.innerText=content;
}


const numberKeys = document.querySelectorAll(".numberkey")

numberKeys.forEach((button) => {
    button.addEventListener("click", () => {
        if(screenContent.length >= 13){
            alert("A maximum of 13 digits can be displayed");
            return;
        }
        screenContent+=button.innerText;
        if (saveRight){
            rightNumber = screenContent;
        }
        displayScreenContent(screenContent);
    })
})

const clearKey = document.querySelector(".clearkey")

clearKey.addEventListener("click", () => {
    screenContent="";
    leftNumber=null;
    rightNumber=null;
    saveRight=false;
    displayScreenContent(screenContent);
    console.log(screenContent)
})

const operatorKeys = document.querySelectorAll(".operatorkey")
console.log(operatorKeys)

operatorKeys.forEach((button) => {
    button.addEventListener("click", () => {
        if(leftNumber===null){
            leftNumber=screenContent;
            saveRight=true;
            screenContent="";
            lastOperation=button.innerText;
        }else if(rightNumber!==null){
            rightNumber=screenContent;
            resultFinal=operate(lastOperation, Number(leftNumber),
            Number(rightNumber));
            lastOperation=button.innerText;
            console.log(resultFinal);
            screenContent=resultFinal;
            displayScreenContent(screenContent);
            screenContent="";
            rightNumber=null;
            leftNumber=resultFinal;
        }
    })
})

const equalsKey = document.querySelector(".equalskey")

equalsKey.addEventListener("click", () => {
    if(rightNumber===null){
        return;
    }
    resultFinal=operate(lastOperation, Number(leftNumber), Number(rightNumber));
    displayScreenContent(resultFinal);
    leftNumber=resultFinal;
    rightNumber=null;
    screenContent="";
    resultFinal=null;
})