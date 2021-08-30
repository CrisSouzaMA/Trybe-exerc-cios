//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 4;

let quadradoLinha = "*";
let quadradoAltura = "";

for (let index = 0; index < n; index += 1) {
   quadradoAltura = quadradoAltura + quadradoLinha;

    for(let index = 0; index < n; index += 1){
        console.log(quadradoAltura);
    }
}