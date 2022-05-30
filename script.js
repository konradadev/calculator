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
    if(content.toString().length > 13){
        alert("Number too big. Truncating to 13 characters...");
        const tooBigNumber = content.toString().split("");
        while(tooBigNumber.length > 13){
            tooBigNumber.pop();
        }
        content = tooBigNumber.join("");
    }
    const screen = document.querySelector(".screen");
    screen.innerText=content;
}

function showNumbers(button){
    if(screenContent.length >= 13){
        alert("A maximum of 13 characters can be displayed");
        return;
    }
    screenContent+=button.innerText;
    if (saveRight){
        rightNumber = screenContent;
    }
    displayScreenContent(screenContent);
}

const numberKeys = document.querySelectorAll(".numberkey")

numberKeys.forEach((button) => {
    button.addEventListener("click", () => {
        showNumbers(button);
    })
})

function clearCalculator(){
    screenContent="";
    leftNumber=null;
    rightNumber=null;
    saveRight=false;
    displayScreenContent(screenContent);
}

const clearKey = document.querySelector(".clearkey")

clearKey.addEventListener("click", clearCalculator);

function saveLeftNumber(button){
    leftNumber=screenContent;
    saveRight=true;
    screenContent="";
    lastOperation=button.innerText;
}

function operateEarly(button){
    rightNumber=screenContent;
    resultFinal=operate(lastOperation, Number(leftNumber),
    Number(rightNumber));
    lastOperation=button.innerText;
}

function updateNumbers(){
    screenContent="";
    rightNumber=null;
    leftNumber=resultFinal;
}

const operatorKeys = document.querySelectorAll(".operatorkey")

operatorKeys.forEach((button) => {
    button.addEventListener("click", () => {
        if(leftNumber===null){
            saveLeftNumber(button);
        }else if(rightNumber!==null){
            if(rightNumber==0 && lastOperation==="/"){
            alert("no");
            return;
            }
            operateEarly(button);
            screenContent=resultFinal;
            displayScreenContent(screenContent);
            updateNumbers();
        }else{
            lastOperation=button.innerText;
        }
    })
})

const decimalKey = document.querySelector(".decimalkey")

decimalKey.addEventListener("click", () => {
    const currentScreen = screenContent.toString();
    if(currentScreen.indexOf(".")===-1){
        screenContent += ".";
        displayScreenContent(screenContent);
    }
})

const plusMinusKey = document.querySelector(".plusminuskey")

plusMinusKey.addEventListener("click", () => {
    screenContent *= -1;
    displayScreenContent(screenContent);
})

const equalsKey = document.querySelector(".equalskey")

equalsKey.addEventListener("click", () => {
    if(rightNumber===null){
        return;
    }
    if(rightNumber==0 && lastOperation==="/"){
        alert("no");
        return;
    }
    resultFinal=operate(lastOperation, Number(leftNumber),
    Number(rightNumber));
    displayScreenContent(resultFinal);
    updateNumbers();
    resultFinal=null;
})
