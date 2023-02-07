let sum = 0, i;
function sumUntil(maxValue){
  for (i = 0; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUntil(5));