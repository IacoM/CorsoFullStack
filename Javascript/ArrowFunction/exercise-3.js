let a = 2, b = 4, c = 5;

const sum = () => a + b, sum2 = () => c + a, multiply = () => sum() * sum2(), subtract = () => multiply() - a, divide = () => subtract() / c;

const result = () => divide();
console.log(result());