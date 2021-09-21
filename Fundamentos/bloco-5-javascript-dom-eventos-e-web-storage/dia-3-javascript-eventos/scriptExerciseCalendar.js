function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário 
e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>*/

function createDaysInTheWeek() {
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    let daysListDez = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dayDez = dezDaysList[index];
        let listDez = document.createElement('li');
        listDez.innerHTML = dayDez;

        if (dayDez === 24 || dayDez === 31) {
            listDez.className = 'day holiday';
            daysListDez.appendChild(listDez);
        } else if (dayDez === 4 || dayDez === 11 || dayDez === 18 || dayDez === 25) {
            listDez.className = 'day friday';
            daysListDez.appendChild(listDez);
        } else if (dayDez === 25) {
            listDez.className = 'day friday holiday';
        } else {
            listDez.className = 'day'
            daysListDez.appendChild(listDez);
        };
    };
}
createDaysInTheWeek();

/*Exericio 2
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"*/
