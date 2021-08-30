//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 4;

let quadradoLinha = "*";
let quadradoAltura = "";

for (let index = 1; index <= n; index += 1){
    quadradoLinha = quadradoLinha + n[index];
}

for(let index = 1; index <= n; index += 1){
    quadradoAltura = quadradoAltura + n[index];
}

console.log(quadradoLinha * quadradoAltura);

//inacabado