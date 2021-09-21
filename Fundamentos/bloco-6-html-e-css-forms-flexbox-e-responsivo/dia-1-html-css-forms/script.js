function countries (){
  const countrie = document.getElementById('countries');
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for(let index = 0; index < estados.length; index +=1){
    const option = document.createElement('option');
    countrie.appendChild(option).innerText = estados[index];
    countrie.appendChild(option).value = estados[index];
  }
}
countries()

let inputs {
  nome: {
    maxLength: 40;
    required: true;
  }
  email: {
    maxLength: 50;
    required: true;
  }
  cpf: {
    maxLength: 11;
    required: true;
  }
  adress: {
    maxLength: 200;
    required: true;
  }
  city: {
    maxLength: 28;
    required: true;
  }
  countries: {
    type: 'select';
    required: true;
  }
  tipoDeREsidencia:{
    type: 'radio';
    required: true;
  }
  exp: {
    maxLength: 1000;
    required: true;
  }
  cargo1: {
    maxLength: 40;
    required: true;
  }
  descCargo1: {
    maxLength: 500;
    required: true;
  }
  dataInicio: {
    type: 'date';
    required: true;
  }
}

function valuationName (input, name){

    let trimmed = input.value.trim();
    let validation = inputs[name];
  
    if(validation.required && trimmed.length === 0){
      return false;
    }
  
    if(validation.maxLength && trimmed.length > validation.maxLength){
      return false;
    }
    
    return true;
  }
}

function valuationDate (input, name){

  if(input.value.length === 0){
    return {
      message: "Data inválida"
    }
  }

  const regex = /^\d\d\/\d\d\/\d\d\d\d$/; 
}

window.onload = function () {
  countries();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields);
}
