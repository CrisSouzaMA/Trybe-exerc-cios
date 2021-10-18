const uppercase = require(Home/Documents/Trybe-exercicios/Fundamentos/bloco-9-javascript-e-testes-assincronos/dia-1-javascript-assincrono-e-callbacks.exercicio7);

test('verifica se a callback funciona', () => {
  setTimeout (() => {
    try {
      expect('CRIS').toBe('CRIS');
      console.log(uppercase());
      done();
    } catch (error) {
      done (error);
    }
  }, 500)
});