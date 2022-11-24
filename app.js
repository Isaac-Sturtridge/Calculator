const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const squared = document.querySelector('.squared')
const sqrt = document.querySelector('.sqrt')
const pi = document.querySelector('.pi')
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equals')
let enteringNumbers = false;
let opOn = false;
let multipleCalculations = false;

// a running total of numbers in the current calculation
let numbersInCalc = [];
let operatorInCalc = '';

numbers.forEach((num) => {
    num.addEventListener('click', function(num) {
        opOn = false;
        if(!enteringNumbers) {
            display.innerHTML = `${num.target.textContent}`
            enteringNumbers = true;
        } else {
            display.innerHTML = display.innerHTML + `${num.target.textContent}`
        }
        if(display.innerHTML.length > 20) {
            display.innerHTML = 'Too long!';
            enteringNumbers = false; opOn = false;
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', function(operator) {
        if(!opOn && display.innerHTML.length < 18) {
            numbersInCalc.push(parseInt(display.innerHTML))
            operatorInCalc = operator.target.textContent;
            enteringNumbers = false;
            opOn = true;
        } 
        // currently it gets the second operator pressed, not the first
        if(numbersInCalc.length == 2 && operatorInCalc != '' ) {
            equalBtnBehaviour()
            numbersInCalc.push(parseInt(display.innerHTML))
            operatorInCalc = operator.target.textContent;
            enteringNumbers = false;
            opOn = true;
        }
        
    })
})

squared.addEventListener('click', function() {
    display.innerHTML = Math.pow(parseFloat(display.innerHTML), 2)
})

sqrt.addEventListener('click', function() {
    display.innerHTML = Math.sqrt(parseFloat(display.innerHTML))
})

pi.addEventListener('click', function() {
    display.innerHTML = Math.PI()
})

function operatorBehaviour(operator) {
    numbersInCalc.push(parseInt(display.innerHTML))
    operatorInCalc = operator.target.textContent;
    enteringNumbers = false;
    opOn = true;
}

clearBtn.addEventListener('click', () => {
    display.innerHTML = '0';
    enteringNumbers = false;
    opOn = false;
    numbersInCalc = [];
})

// sort out equal button behaviour, it should act differently depending on button pressed, psasing a button doesn't work for now
function equalBtnBehaviour() {
    numbersInCalc.push(parseInt(display.innerHTML))
    switch(operatorInCalc) {
        case '+':
            display.innerHTML = operate(add, numbersInCalc[0], numbersInCalc[1]);
        break;
        case '-':
            display.innerHTML = operate(subtract, numbersInCalc[0], numbersInCalc[1]);
        break;
        case '*':
            display.innerHTML = operate(multiply, numbersInCalc[0], numbersInCalc[1]);
        break;
        case '/':
            if(numbersInCalc[1] === 0) {
                display.innerHTML = 'Do not divide by zero';
                break;
            }
            display.innerHTML = operate(divide, numbersInCalc[0], numbersInCalc[1])
        default:
        break;
    }
    enteringNumbers = false;
    numbersInCalc = [], operatorInCalc = '';
}

equalBtn.addEventListener('click', equalBtnBehaviour)

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    return operator(num1, num2)
}

console.log(add(1,1))
console.log(subtract(1,1))
console.log(multiply(2,3))
console.log(divide(3,2))

console.log(operate(divide, 100, 5))