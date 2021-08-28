//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado

let numbers = [3, 10, 4, 112, 70, 8, 100, 2, 36, 28];
let odd = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        odd += 1;
    }
}
if (odd === 0){
    console.log("Nenhum valor encontrado");
}else{
    console.log(odd);
}