/* VARIABLES FOR CALCULATOR */
let firstNum = '';
let secondNum = '';
let operator = '';
let secondaryLine = '';
let primaryLine = '';
let answer = '';
let numSwitcher = false;

/* EVENT LISTENERS FOR DIFFERENT BUTTONS */
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

/* CALCULATOR LOGIC */

function handleInput(type, item) {
    switch(type) {
        case "numbers":
            /* Determine which of the two values the user is inputting */
            if (numSwitcher) {
                secondNum += item;
            } else {
                firstNum += item;
            }
            primaryLine = `${firstNum} ${operator} ${secondNum}`;
            break;
        case "operators":
            /* Determines whether this is the first or second operation */
            if (firstNum && secondNum) {
                answer = operate(firstNum, secondNum, operator);
                secondaryLine = `${firstNum} ${operator} ${secondNum} = ${answer}`;
                operator = item;
                firstNum = answer;
                secondNum = '';
                primaryLine = `${firstNum} ${operator}`;
                numSwitcher = true;
            } else if (firstNum && answer) {
                secondaryLine += `${firstNum}`;
                operator = item;
                numSwitcher = true;
                primaryLine = `${firstNum} ${operator} ${secondNum}`;
            } else {
                operator = item;
                numSwitcher = true;
                primaryLine = `${firstNum} ${operator} ${secondNum}`;
            }
            break;
        case "controls":
            /* Reacts to enter and clear commands */
            if (item === 'clear') {
                firstNum = '';
                secondNum = '';
                operator = '';
                answer = '';
                secondaryLine = '';
                primaryLine = '';
                numSwitcher = false;
            } else if (item === 'enter' && firstNum && secondNum) {
                answer = operate(firstNum, secondNum, operator);
                secondaryLine = `${firstNum} ${operator} ${secondNum} = `;
                primaryLine = `${answer}`;
                firstNum = answer;
                secondNum = '';
                operator = '';
                numSwitcher = false;
            }
            break;
    }
    updateDisplay();
}

function updateDisplay() {
    let display = document.querySelectorAll('#display > *');
    display[0].innerText = secondaryLine;
    display[1].innerText = primaryLine;
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