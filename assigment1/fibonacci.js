function fibs(number) {
  if (number < 0) return "ERROR";
  if (number === 0) return [0];
  if (number === 1) return [0, 1];

  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (let i = 2; i <= number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

function fibsRec(number) {
  if (number < 0) return "ERROR";
  if (number === 0) return [0];
  if (number === 1) return [0, 1];
  const array = fibsRec(number - 1);
  return [...array, array[number - 2] + array[number - 1]];
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));
console.log(fibsRec(9));
console.log(fibsRec(10));
