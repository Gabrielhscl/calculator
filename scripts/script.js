const resultTxt = document.querySelector(".result");
const historicText = document.querySelector(".historic");
const buttons = document.querySelectorAll(".secAction button");
resultTxt.innerText = ""
historicText.innerText = ""
console.log(historicText.innerText)

class Calculator {
  constructor(resultTxt, historicText) {
    this.resultTxt = resultTxt;
    this.historicText = historicText;
    this.operation = "";
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

    let operationValue;
    let historicValue = +this.historicText.innerText;
    let previewValue = +this.resultTxt.innerText;

    switch (operation) {
        case "DEL":
            this.processDellOperator()
            break;
        case "+":
            operationValue = historicValue + previewValue;
            this.plusOperation()
            console.log(operationValue)            
            break;
        case "Ac":
            this.processAcOperator()
            break;

        case "=":
            this.equalsOperation()
            break
        default:
            break;
    }
  }

  clearCalc(){
    this.resultTxt.innerText = ""
  }
  plusOperation() {
    this.historicCalc()
    this.clearCalc()
  }

  equalsOperation() {
    this.resultTxt.innerText = parseFloat(this.historicText.innerText) + parseFloat(this.resultTxt.innerText)
    this.historicText.innerText = this.historicText.innerText + this.resultTxt.innerText
  }

  updateScreen() {
    this.resultTxt.innerText += this.operation
  }

  historicCalc() {
    this.historicText.innerText = this.resultTxt.innerText
  }

  processDellOperator(){
    this.resultTxt.innerText = this.resultTxt.innerText.slice(0, -1)
  }

  processAcOperator(){
    this.resultTxt.innerText = ""
    this.historicText.innerText = ""
  }
}

const calc = new Calculator(resultTxt, historicText);

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
