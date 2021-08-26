let chessPiece;

switch (chessPiece){
    case "Rei":
        console.log("Só pode andar uuma casa por vez e não pode se movimentar para casas que estejam sendo atacadas");
        break;
    case "Dama":
        console.log("Peça mais importante. Pode ir para a direção que quiser mas não pode pular casa");
        break;
    case "Torre":
        console.log("POde se movimentar em qualquer direção mas não pode pular casas");
        break;
    case "Bispo":
        console.log("Só se movimenta em casas da mesma cor e não pode pular nenhuma peça");
        break;
    case "Cavalo":
        console.log("Tem umm movimento especial que parece um L e pode pular casas");
        break;
    case "Peão":
        console.log("O peão só se movimenta para frente");
        break;
    default:
        console.log("Nome de peça inexistente!");
}