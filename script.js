//JS
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

let screenContent = "";

const numberKeys = document.querySelectorAll(".numberkey")

numberKeys.forEach((button) => {
    button.addEventListener("click", () => {
        if(screenContent.length >= 13){
            alert("A maximum of 13 digits can be displayed");
            return;
        }
        screenContent+=button.innerText;
        displayScreenContent(screenContent);
    })
})

