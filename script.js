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

function operate(operator, a, b) {
    return operator(a, b);
}

function updateScreenNumber() {
    screenNumber.textContent = firstOperand;
}


const screenNumber = document.getElementsByClassName('screenNumber')[0];
let selectedNumber;
let firstOperand = 0;
let secondOperand = 0;
let operatorSelection;

const numberButtonsArray = [...document.getElementsByClassName('numbers')];
const numberButtonsContainer = document.getElementsByClassName('numberContainer')[0];

numberButtonsContainer.addEventListener('click', (e) => {
    if (e.target.className === 'numbers') {
        selectedNumber = Number(e.target.id);
        if (firstOperand === 0) {
            firstOperand = selectedNumber
        }
        else {
            firstOperand = Number('' + firstOperand + selectedNumber);
        }
        
        updateScreenNumber();
    }
    if(e.target.className === 'operators'){
        //take first operand value as a and if there is no second operand, store operator value and refresh screen for second operand
        //if equals is clicked, take both operands, operator, and calculate result

    }
})

//
