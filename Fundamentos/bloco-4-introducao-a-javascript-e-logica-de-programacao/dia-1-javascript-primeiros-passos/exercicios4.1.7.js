const nota = 95;

if(nota == "0%" || nota >= "100%"){
    console.log("Erro. Nota não existe")
}else if(nota >= 90){
    console.log("Porcentagem " + nota + " Conceito A");
}else if(nota >= "80%" && nota <= "89%"){ 
    console.log("Conceito B");
}else if(nota >= "70%" && nota <= "79%"){
    console.log("Conceito C")
}else if(nota >= "60%" && nota <= "69%"){
    console.log("Conceito D");0
}else if(nota >= "50%" && nota <= "59%"){
    console.log("Conceito E");
}else{
    console.log("Conceito F");
}