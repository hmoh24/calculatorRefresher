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
// let resultToggle = false;

const numberButtonsArray = [...document.getElementsByClassName('numbers')];
const numberButtonsContainer = document.getElementsByClassName('numberContainer')[0];

numberButtonsContainer.addEventListener('click', (e) => {
    if (e.target.id === 'equal') {
        if (currentNumber && storedNumber) {
            currentNumber = selectedOperator(storedNumber, currentNumber);
            storedNumber = '';
            updateScreenValues();
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
        if (currentNumber && (!storedNumber && storedNumber !== 0)) {
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


//current number is set
//operator is clicked
// when operator is clicked, set current operator value 
// stored number is set to current number and current number is set to '' empty
// select a new number
// when a new number is set, operator should be set to empty/null
// when operator is clicked again, value is calculated, stored num is set to empty, current value is set to result of 
//operation
// stored num is empty, operator is set to number that was clicked, current num is the result
// on second click of operator, next number click should be the second operand


//condition is current num is set, prev num is empty, and operator function is set 
//starting condition is current num is set, prev num is empty, operator function is not set

