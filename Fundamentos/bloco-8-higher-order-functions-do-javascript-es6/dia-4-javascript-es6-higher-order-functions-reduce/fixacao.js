//faça uma função que some todos os números pares do array

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

/*const isEven = (numbers) => {
  const sumEven = (number, result) => number + result;
  return numbers.filter((number) => number % 2 === 0).reduce((sumEven, 0));
  console.log(sumEven);
}*/

  const sumEven = (number, result) => ((number % 2 === 0) ? number + result : number);
  const isEven = (number) => numbers.reduce(sumEven, 0);

  console.log(isEven(numbers));



/*const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152*/