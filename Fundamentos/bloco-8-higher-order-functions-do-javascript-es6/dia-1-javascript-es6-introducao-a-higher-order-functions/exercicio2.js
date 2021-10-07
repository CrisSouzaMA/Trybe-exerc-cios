//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
//Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros 
//o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

//let numberSort = 1;
//let numberEsc = 2;
//const number = [1, 2, 3, 4, 5];
const sorteio = (numberSort, number) => (numberSort === number);

const lotery = (numberSort, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(numberSort, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotery(2, sorteio));