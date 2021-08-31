let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem vinda " + info.personagem);

  info['Recorrente'] = 'sim';

  console.log(info);

  for( let key in info){
      console.log(key);
  }

  for(let key in info){
      console.log(info[key]);
  }

  let info2 = {
      personagem2: "Tio Patinhas",
      origem2: "Christmas on Bear Mountain, Dell'/s Four Color Comics #178",
      nota2: "O último MacPatinhas",
      recorrente2: "sim"
  };

  for(let key2 in info) {
      console.log(info[key] + 'e' + (info2[key2]);
  }