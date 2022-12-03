const resultTxt = document.querySelector(".result")
const historicText = document.querySelector(".historic")
const buttons = document.querySelectorAll(".secAction button");
resultTxt.innerText = ""
// console.log(result)

class Calculator {
  constructor(resultTxt, historicText) {
    this.resultTxt = resultTxt;
    this.historicText = historicText
    this.operation = ""
  }

  addDigit(digit){
    // check if current operation alread has a dot
    if(digit === "." && this.resultTxt.innerText.includes(".")){
        return
    }
    
    this.operation = digit
    this.updateScreen()
  }

  processOperation(operation){
    switch (operation) {
        case "DEL":
            this.processDellOperator()
            break;
        case "+":

        default:
            break;
    }
  }

  updateScreen() {
    this.resultTxt.innerText += this.operation
  }

  processDellOperator(){
    this.resultTxt.innerText = this.resultTxt.innerText.slice(0, -1)
  }
}

const calc = new Calculator(resultTxt);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value)
    } else {
      calc.processOperation(value);
    }
  });
});
