let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operation) {
    switch(operation) {
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}