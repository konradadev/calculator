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