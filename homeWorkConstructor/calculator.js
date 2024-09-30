function Calculator(){
}

Calculator.prototype={
    add(firstNumber, secondNumber){
        firstNumber + secondNumber
    },
    subtract(firstNumber, secondNumber){
        firstNumber - secondNumber
    },
    multiply(firstNumber, secondNumber){
        firstNumber * secondNumber
    },
    divide(firstNumber, secondNumber){
        firstNumber / secondNumber
    }
}

const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);