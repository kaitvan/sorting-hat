'use strict';

let cards = [];
// let houseColors = [
//     {
//         houseName: 'Gryffindor',
//         houseColor: #AE0001,
//     };
//     {
//         houseName: 'Hufflepuff',
//         houseColor: #FFDB00,
//     };
//     {
//         houseName: 'Slytherin',
//         houseColor: #1A472A,
//     };
//     {
//         houseName: 'Ravenclaw',
//         houseColor: #0E1A40,
//     };
// ]

const buttonEvents = () => {
    document.querySelector('#start-sorting').addEventListener('click', handleStartButtonClick);
    document.querySelector('#btn-submit').addEventListener('click', handleSubmitButtonClick);
    document.querySelector('#cards').addEventListener('click', expelStudent);
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const handleStartButtonClick = (e) => {
    document.getElementById('form').style.display = 'block';
}

const handleSubmitButtonClick = (e) => {

    const inputName = document.getElementById('studentName').value;

    const houses = ['Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw'];
    let randomHouse = houses[Math.floor(Math.random() * houses.length)];

    if (inputName === '') {
        errorMessage();
    } else {
        let obj = {
            studentName: inputName,
            houseName: randomHouse,
        };
    
        cards.push(obj);
        cardBuilder(cards);
    }
}

const cardBuilder = (arr) => {
    let domString = '';

    for (let i = 0; i < arr.length; i++) {
        domString += `<div class="card mb-5 text-center" style="width: 18rem;" id="${i}">
                        <div class="card-body">
                            <h5 class="card-title">${cards[i].studentName}</h5>
                            <p class="card-text">${cards[i].houseName}</p>
                            <a href="#" class="btn btn-danger" type="button" id="${i}">Expel</a>
                        </div>
                    </div>`;
    };
    
    printToDom('cards', domString);
}

const errorMessage = () => {
    alert("You must enter a student's name to be sorted!");
}

const expelStudent = (e) => {
    const target = e.target.id;
    const ctype = e.target.type;

    if (ctype === 'button') {
        cards.splice(target, 1);
        cardBuilder(cards);
    }
}

const init = () => {
    buttonEvents();
}

init();