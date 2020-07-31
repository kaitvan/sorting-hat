'use strict';


const handleStartButtonClick = (e) => {
    document.getElementById('form').style.display = 'block';
}

let cards = [];

const handleSubmitButtonClick = (e) => {

    const inputName = document.getElementById('studentName').value;

    const houses = ['Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw'];
    let randomHouse = houses[Math.floor(Math.random() * houses.length)];

    let obj = {
        studentName: inputName,
        houseName: houses[Math.floor(Math.random() * houses.length)],
    };

    cards.push(obj);
    cardBuilder(cards);
}

const handleExpelButtonClick = (e) => {
    const target = e.target.id;
    cards.splice(target, 1);
    cardBuilder(cards);
}

const buttonEvents = () => {
    document.querySelector('#btn-submit').addEventListener('click', handleSubmitButtonClick);
    document.querySelector('#start-sorting').addEventListener('click', handleStartButtonClick);
    document.querySelector('#cards').addEventListener('click', handleExpelButtonClick);
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const cardBuilder = (arr) => {
    let domString = '';

    for (let i = 0; i < arr.length; i++) {
        domString += `<div class="card mb-5 text-center" style="width: 18rem;" id="${i}">
                        <div class="card-body">
                            <h5 class="card-title">${cards[i].studentName}</h5>
                            <p class="card-text">${cards[i].houseName}</p>
                            <a href="#" class="btn btn-danger" id="${i}">Expel</a>
                        </div>
                    </div>`;
    };
    
    printToDom('cards', domString)
}

const init = () => {
    cardBuilder(cards);
    buttonEvents();
}

init();