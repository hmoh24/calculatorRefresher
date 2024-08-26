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

function updateScreenValues() {
    screenNumber.textContent = currentNumber;
    storedNumberElement.textContent = storedNumber;

}


const screenNumber = document.getElementsByClassName('screenNumber')[0];
const storedNumberElement = document.getElementsByClassName('storedNumber')[0];
let selectedNumber;
let currentNumber = '';
let storedNumber = '';
let selectedOperator;

const numberButtonsArray = [...document.getElementsByClassName('numbers')];
const numberButtonsContainer = document.getElementsByClassName('numberContainer')[0];

numberButtonsContainer.addEventListener('click', (e) => {
    if (e.target.id === 'equal') {
        if (currentNumber && storedNumber) {
            currentNumber = selectedOperator(currentNumber, storedNumber)
        }
    }
    else if (e.target.className === 'numbers') {
        selectedNumber = Number(e.target.id);
        if (currentNumber === 0) {
            currentNumber = selectedNumber
        }
        else {
            currentNumber = Number('' + currentNumber + selectedNumber);
        }
        
        updateScreenValues();
    }
    
})

const operatorContainer = document.getElementsByClassName('operatorContainer')[0];

operatorContainer.addEventListener('click', (e) => {
    if (e.target.className === 'operators') {
        switch (e.target.id) {
            case 'multiply':
                selectedOperator = multiply;
                break;
            case 'divide':
                selectedOperator = divide;
                break;
            case 'subtract':
                selectedOperator = subtract
                break;
            case 'add':
                selectedOperator = add;
                break;
        }
        console.log(currentNumber);
        if (currentNumber && !storedNumber) {
            storedNumber = currentNumber;
            currentNumber = ''
            console.log(currentNumber)
            updateScreenValues();
        }
        else if (storedNumber) {
            currentNumber = selectedOperator(currentNumber, storedNumber)
            console.log(currentNumber)
        }
    }
})




// number is set
// click operator, set operator value
// empty current number, and set it as prevnumber
// set new number, set as current number
// click equals - evaluate operation according to variables

//edge cases
//operator clicked first? do nothing
//number set, equals clicked, return current number as screen number and prev number
//number set, operator clicked, second number set, operator clicked again
//this should evaluate first operation, store result as prev value, set new operator, be ready for second value
