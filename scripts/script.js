
let result = document.getElementsByClassName('result').innerHtml = 555
const buttons = document.querySelectorAll(".buttonNumber")

console.log(buttons)

function isNumber(number1, number2) {
    if (!isNaN(parseFloat(number1)) && !isNaN(parseFloat(number2))) {
        console.log("foi")   
    }
    else{
        console.log("não foi")
    }
}

function sum(number1, number2) {
    return number1 + number2
}

isNumber(10, "10")