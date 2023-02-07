function multiplyByTwo(value) {
  let number = 2;
  const inner = () => value * number;
  return inner;
}

console.log(multiplyByTwo(4)());