const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equals')
let enteringNumbers = false;
let opOn = false;

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
        if(display.innerHTML.length > 18) {
            display.innerHTML = 'Too long!';
            enteringNumbers = false; opOn = false;
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', function(operator) {
        if(!opOn && display.innerHTML.length < 18) {
            numbersInCalc.push(parseInt(display.innerHTML))
            operatorsInCalc.push(operator.target.textContent);
            enteringNumbers = false;
            opOn = true;
        } 
    })
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = '0';
    enteringNumbers = false;
    opOn = false;
    numbersInCalc = [];
})

equalBtn.addEventListener('click', () => {
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
    numbersInCalc = [], operatorsInCalc = [];
})

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