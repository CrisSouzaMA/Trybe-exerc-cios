const saleValue = 140;
const costValue = 100;
const tax = (costValue * 20) / 100;
const totalCost = (costValue + tax);
let profit = (saleValue - totalCost) * 1000;

if(saleValue <= 0){
    console.log("Erro!");
}else{
    console.log(profit);
}

