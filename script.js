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
    return b ===0 ? undefined : a / b; 
}

function operate(operator, a, b) {
    return operator(a, b);
}

function checkDecimalPlaces(float) {
    if (float && float !== '' && float.toString().length > 1 && !Number.isInteger(float)) {
        return float.toString().split('.')[1].length;
    }}

function updateScreenValues() {
    if ( checkDecimalPlaces(currentNumber) > 5 ) currentNumber = Number(Number(currentNumber).toFixed(5));
    if ( checkDecimalPlaces(currentNumber) > 5) storedNumber = Number((storedNumber).toFixed(5));
    screenNumber.textContent = currentNumber;
    storedNumberElement.textContent = storedNumber;
}


const screenNumber = document.getElementsByClassName('screenNumber')[0];
const storedNumberElement = document.getElementsByClassName('storedNumber')[0];
let selectedNumber;
let currentNumber = '';
let storedNumber = '';
let selectedOperator;
let resultToggle = false;

const numberButtonsArray = [...document.getElementsByClassName('numbers')];
const numberButtonsContainer = document.getElementsByClassName('numberContainer')[0];

numberButtonsContainer.addEventListener('click', (e) => {
    if (e.target.id === 'equal') {
        if ( (currentNumber || currentNumber ===0) && (storedNumber || storedNumber ===0)) {
            currentNumber = selectedOperator(storedNumber, currentNumber);
            storedNumber = '';
            updateScreenValues();
            resultToggle = true;
        }
    }
    else if (e.target.id === '.') {
        if (Number.isInteger(currentNumber)) {
            console.log(true)
            currentNumber = currentNumber + '.'
        }
    }
    else if (e.target.className === 'numbers') {
        selectedNumber = Number(e.target.id);
        if (resultToggle && storedNumber === '') {

            storedNumber = currentNumber
            currentNumber = selectedNumber;
            resultToggle = false;
        }
        else {
            currentNumber = Number('' + currentNumber + selectedNumber);
        }
        
        updateScreenValues();
    }
    
})

const operatorContainer = document.getElementsByClassName('operatorContainer')[0];

operatorContainer.addEventListener('click', (e) => {
    let operatorValue;
    if (e.target.className === 'operators') {
        switch (e.target.id) {
            case 'multiply':
                operatorValue = multiply;
                break;
            case 'divide':
                operatorValue = divide;
                break;
            case 'subtract':
                operatorValue = subtract
                break;
            case 'add':
                operatorValue = add;
                break;
        }
        console.log('current', currentNumber, 'stored', storedNumber, typeof storedNumber, 'selectedop', selectedOperator);
        console.log(!storedNumber)
        if (e.target.id === 'clear') {
            currentNumber = '';
            storedNumber = '';
            selectedOperator = undefined;
            resultToggle = false;
            updateScreenValues();
        }
        if ( (currentNumber || currentNumber === 0) && (!storedNumber && storedNumber !== 0)) {
            selectedOperator = operatorValue;
            storedNumber = currentNumber;
            currentNumber = ''
            updateScreenValues();
        }
        else if (storedNumber || storedNumber == '0') {
            console.log(storedNumber)
            storedNumber = selectedOperator(storedNumber, currentNumber);
            selectedOperator = operatorValue;
            currentNumber = '';
            updateScreenValues();
            console.log(storedNumber)
            console.log('b')
        }
    }
});




