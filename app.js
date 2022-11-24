const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const squared = document.querySelector('.squared')
const sqrt = document.querySelector('.sqrt')
const pi = document.querySelector('.pi')
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equals')
const point = document.querySelector('.point')
let decimalPointOK = true;
let enteringNumbers = false;
let opOn = false;
let multipleCalculations = false;

// a running total of numbers in the current calculation
let numbersInCalc = [];
let operatorsInCalc = [];

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
        numbersInCalc.push(parseInt(display.innerHTML))
        // for evaluating without equal button
        if(numbersInCalc.length == 2 && operatorsInCalc.length == 1) {
            equalBtnBehaviour()
            numbersInCalc.push(parseInt(display.innerHTML))
            operatorsInCalc.push(operator.target.textContent);
            display.innerHTML = numbersInCalc[0]
            enteringNumbers = false;
            opOn = true;
        }
        if(!opOn && display.innerHTML.length < 18) {
            operatorsInCalc.push(operator.target.textContent);
            enteringNumbers = false;
            decimalPointOK = true;
            opOn = true;
        } 
        
        
    })
})

squared.addEventListener('click', function() {
    display.innerHTML = Math.pow(parseFloat(display.innerHTML), 2)
    enteringNumbers = false
})

sqrt.addEventListener('click', function() {
    display.innerHTML = Math.sqrt(parseFloat(display.innerHTML))
    enteringNumbers = false
})

pi.addEventListener('click', function() {
    display.innerHTML = Math.PI()
})

point.addEventListener('click', function() {
    if(enteringNumbers && decimalPointOK) {
        display.innerHTML = display.innerHTML + '.'
        decimalPointOK = false;
    }
})

function operatorBehaviour(operator) {
    numbersInCalc.push(parseInt(display.innerHTML))
    operatorsInCalc = operator.target.textContent;
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
    switch(operatorsInCalc[0]) {
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
    decimalPointOK = true;
    numbersInCalc = [], operatorsInCalc = [];
}

equalBtn.addEventListener('click', equalBtnBehaviour)

function add(num1, num2) {
    return num1 + num2;
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