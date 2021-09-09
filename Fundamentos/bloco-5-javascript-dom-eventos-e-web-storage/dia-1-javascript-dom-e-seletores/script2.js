//1 - Adicione uma classe igual para os dois parágrafos.
// 2- Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;

document.getElementsByClassName("paragrafo");

// 3- Altere algum estilo do primeiro deles.

document.getElementsByClassName("paragrafo")[1].innerText = "s2";

//4 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName

document.getElementsByTagName("h4").style 