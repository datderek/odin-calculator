let firstNum = "";
let secondNum = "";
let operator = null;
let numSwitcher = false;

let numbers = document.querySelectorAll('#numbers');
numbers.forEach(number => {
    number.addEventListener('click', e => handleInput(e.target.parentNode.id, e.target.id));
});

let operators = document.querySelectorAll('#operators');
operators.forEach(operator => {
    operator.addEventListener('click', e => handleInput(e.target.parentNode.id, e.target.id));
});

function handleInput(type, item) {
    if (type === 'numbers') {
        if (numSwitcher) {
            secondNum += item;
        } else {
            firstNum += item;
        }
    } else if (type === 'operators' && firstNum) {
        operator = item;
        numSwitcher = true;
    }
    updateDisplay();
}

function updateDisplay() {
    let display = document.querySelectorAll('#display > *');
    display[0].textContent = firstNum;
    display[1].textContent = operator;
    display[2].textContent = secondNum;
}

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