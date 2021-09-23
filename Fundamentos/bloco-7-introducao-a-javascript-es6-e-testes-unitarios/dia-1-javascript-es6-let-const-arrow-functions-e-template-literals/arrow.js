//Faça as modificações necessárias na função para que o seu comportamento 
//respeite o escopo no qual cada variável foi declarada. Use arrow functions e template literals

/*function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);*/

//refatorando
/*const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(false);*/

//Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente

/*const order = (a,b) => a-b;

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(order);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!".`); // será necessário alterar essa linha 😉*/

//Parte 2
//Crie uma função que receba um número e retorne seu fatorial.
//Peguei uma ideia nesse site mas não sei explicar muito bem ..
//https://blog.matheuscastiglioni.com.br/memorizando-funcoes-em-javascript/#:~:text=return%20n%20*%20fatorial(n%20%2D%201)%20%3A%20Caso%20o,o%20anterior%20do%20n%C3%BAmero%20atual.

/*const fat = (n) => {
  if (n > 1) {
    return n * fat(n - 1);
  }
  return n;
}
console.log(fat(1));*/

//Crie uma função que receba uma frase e retorne qual a maior palavra.

