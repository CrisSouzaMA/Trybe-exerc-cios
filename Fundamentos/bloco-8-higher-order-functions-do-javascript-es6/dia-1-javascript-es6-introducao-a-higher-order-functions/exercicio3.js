/*3 - Crie uma HOF que receberá três parâmetros. 
O primeiro será um array de respostas corretas (Gabarito), 
o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) 
e o terceiro é uma função que checa se as 
respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, 
quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.*/

const right_answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const sum = 0;

const check = (_right_answers) => {
  const cont = (right_answers, student_answers) => {
    for (index = 0; index < right_answers.length; index += 1) {
      const position = right_answers[index];
      for (i = 0; i < student_answers.length; i += 1) {
        const position2 = student_answers[index];
        if (position === position2) 
          return sum += 1;
        else if (position === 'N.A' || position2 === 'N.A') 
          return sum;
        }(position !== position2)
          return (sum * 1) / 2;
        }
      }
    }

console.log(`O resultado é de: ${sum} pontos`);