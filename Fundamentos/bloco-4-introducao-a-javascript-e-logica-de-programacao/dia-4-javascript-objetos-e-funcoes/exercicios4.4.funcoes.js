//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = 'arara';
function verificaPalindromo(palavra) {
    if (palavra === palavra.split('').reverse().join()) {
        console.log('True');
    } else {
        console.log('False');
    }
}

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function retorno(inteiros) {
    let number = 0;
    for (let key in inteiros) {
        if(inteiros[retorno] > inteiros[key]){
            number = key;
        }
    }
return number;
}
console.log(retorno([2, 3, 6, 7, 10, 1]));

/*function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4*/