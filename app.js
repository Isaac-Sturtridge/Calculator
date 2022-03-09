const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')

numbers.addEventListener('click', )

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