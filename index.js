const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const plus = document.getElementById("add")
const minus = document.getElementById("minus")
const mult = document.getElementById("multiply")
const div = document.getElementById("divide")
const clear = document.getElementById("clear")
const display = document.getElementById("displays")
const giveAns = document.getElementById("ans")
let firstNum = ""
let secondNum = ""
let operand
let num = ""
let ans = 0

one.addEventListener("click", function () {
    if (operand) {
        secondNum += '1'
    } else {
        firstNum += "1"
    }
    display.textContent += 1
})

two.addEventListener("click", function () {
    if (operand) {
        secondNum += '2'
    } else {
        firstNum += '2'
    }
    display.textContent += 2
})

three.addEventListener("click", function () {
    if (operand) {
        secondNum += '3'
    } else {
        firstNum += '3'
    }
    display.textContent += 3
})

four.addEventListener("click", function () {
    if (operand) {
        secondNum += '4'
    }else {
        firstNum += '4'
    }
    display.textContent += 4
})

five.addEventListener("click", function () {
    if (operand) {
        secondNum += '5'
    }else {
        firstNum += '5'
    }
    display.textContent += 5
})

six.addEventListener("click", function () {
    if (operand) {
        secondNum += "6"
    }else {
        firstNum += '6'
    }
    display.textContent += 6
})

seven.addEventListener("click", function () {
    if (operand) {
        secondNum += '7'
    }else {
        firstNum += '7'
    }
    display.textContent += 7
})

eight.addEventListener("click", function () {
    if (operand) {
        secondNum += '8'
    }else {
        firstNum += '8'
    }
    display.textContent += 8
})

nine.addEventListener("click", function () {
    if (operand) {
        secondNum += '9'
    }else {
        firstNum += '9'
    }
    display.textContent += 9
})

zero.addEventListener("click", function () {
    if (operand) {
        secondNum += '0'
    }else {
        firstNum += '0'
    }
    display.textContent += 0
})

plus.addEventListener("click", function () {
    if (firstNum) {
        operand = "+"
        display.textContent += " + "
        num += firstNum
        firstNum = undefined
    }
})

minus.addEventListener("click", function () {
    if (firstNum) {
        operand = "-"
        display.textContent += " - "
        num += firstNum
        firstNum = undefined
    }
})

mult.addEventListener("click", function () {
    if (firstNum) {
        operand = "x"
        display.textContent += " x "
        num += firstNum
        firstNum = undefined
    }
})

div.addEventListener("click", function () {
    if (firstNum) {
        operand = "/"
        display.textContent += " / "
        num += firstNum
        firstNum = undefined
    }
})

clear.addEventListener("click", function () {
    firstNum = ''
    display.textContent = ''
})

giveAns.addEventListener("click", function () {
    let num1 = Number(num)
    let num2 = Number(secondNum)
    console.log(num1)
    console.log(num2)

    if (operand == "+") {
        ans = add(num1, num2)
        display.textContent = ans
        firstNum = ans
    }
    if (operand == "-") {
        ans= subtract(num1, num2)
        display.textContent = ans
        firstNum = ans
    }
    if (operand == "x") {
        ans = multiply(num1, num2)
        display.textContent = ans
        firstNum = ans
    }
    if (operand == "/") {
        ans = divide(num1, num2)
        display.textContent = ans
        firstNum = ans
    }
    
    num = ''
    operand = ''
    secondNum = ''
})


function add(a, b) {
    return a+b
}

function subtract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    return (a/b)
}