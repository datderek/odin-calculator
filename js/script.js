let firstNum = '';
let secondNum = '';
let prevAnswer = '';
let answer = '';
let operator = '';
let numSwitcher = false;

let numbers = document.querySelectorAll('#numbers');
numbers.forEach(number => {
    number.addEventListener('click', e => handleInput(e.target.parentNode.id, e.target.id));
});

let operators = document.querySelectorAll('#operators');
operators.forEach(operator => {
    operator.addEventListener('click', e => handleInput(e.target.parentNode.id, e.target.id));
});

let controls = document.querySelectorAll('#controls');
controls.forEach(control => {
    control.addEventListener('click', e => handleInput(e.target.parentNode.id, e.target.id));
});

function handleInput(type, item) {
    switch(type) {
        case "numbers":
            if (numSwitcher) {
                secondNum += item;
            } else {
                firstNum += item;
            }
            break;
        case "operators":
            if (answer) {
                firstNum = answer;
                answer = '';
            } else {
                operator = item;
                numSwitcher = true;
            }
            break;
        case "controls":
            if (item === 'clear') {
                firstNum = '';
                secondNum = '';
                operator = '';
                answer = '';
                numSwitcher = false;
            } else if (item === 'enter' && firstNum && secondNum) {
                answer = operate(firstNum, secondNum, operator);
                firstNum = '';
                secondNum = '';
                operator = '';
                numSwitcher = false;
            }
            break;
    }
    updateDisplay();
}

function updateDisplay() {
    let display = document.querySelector('#display');
    display.textContent = `${firstNum} ${operator} ${secondNum} ${answer}`;
}

function operate(firstNum, secondNum, operation) {
    switch(operation) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}