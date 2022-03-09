const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
let enteringNumbers = false;

numbers.forEach((num) => {
    num.addEventListener('click', function(num) {
        if(!enteringNumbers) {
            display.innerHTML = `${num.target.textContent}`
            enteringNumbers = true;
        } else {
            display.innerHTML = display.innerHTML + `${num.target.textContent}`
        }
        if(display.innerHTML.length > 18) {
            display.innerHTML = "Too long!"
            enteringNumbers = false;
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', function(operator) {
        let num1 = parseInt(display.innerHTML);
    })
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = '0';
    enteringNumbers = false;
})

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