/*
var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';
var isBlue = true;

var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function () {

    if(isYellow) {
        bodyElement.style.background = 'white';
    } else {
        bodyElement.style.background = 'yellow';
    }
    isYellow = !isYellow;

    if(isBlue) {
        h1Element.style.color = 'blue';
    } else {
        h1Element.style.color = 'red';
    }
    isBlue = !isBlue;

}, 1000);
*/

/*
var selectWithId = document.getElementById('oakParagrah');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithQuery = document.querySelector('#oakParagrah');
console.log(selectWithQuery);

var selectWithQueryClass = document.querySelector('.background');
console.log(selectWithClass);

var selectWithQueryAllClass = document.querySelectorAll('.background');
console.log(selectWithQueryAllClass);
*/


// MANIPULATION METHODS //

// var divToManipulate = document.querySelector('.background');

/*
divToManipulate.style.height = '50px';
divToManipulate.style.width = '400px';
divToManipulate.style.backgroundColor = 'red';
divToManipulate.style.fontSize = '30px';
divToManipulate.style.border = '5px solid black';
*/

// divToManipulate.classList.add('addClass');
// divToManipulate.classList.remove('addClass');

// divToManipulate.classList.toggle('addClass');
// divToManipulate.classList.toggle('addClass');
// divToManipulate.classList.toggle('addClass');

/*
var paragraph = document.querySelector('#oakParagraph');

// paragraph.textContent = 'OAK academy is the best, really!';
paragraph.innerHTML = 'Oak academy is <strong>great</strong>';
*/


// MANIPULATE ATTRIBUTES //

// var myLink = document.querySelector('a');
// console.log(myLink.getAttribute('href'));

// myLink.setAttribute('href', 'https://www.facebook.com/');
// console.log(myLink.getAttribute('href'));

// myLink.textContent = 'go to facebook';



// EVENT HANDLERS //

// var button = document.querySelector('#btn1');
// var buttonClicks = 0;
// var title = document.querySelector('#OAKTitle');

// button.addEventListener('click', function () {
//     buttonClicks++;
//     if (buttonClicks === 1) {
//         console.log('You clicked the buttone 1 time');
//     } else {
//         console.log('You clicked the button', buttonClicks, 'times')
//     }
// });

// title.style.backgroundColor = 'red';

// var listParent = document.querySelector('ul');
// listParent.addEventListener('click', function () {
//     console.log('You clicked the ul');
//     listParent.style.backgroundColor = 'blue';
// });

// var ulS = document.querySelectorAll('li');
// ulS.forEach(function (item) {
//     item.addEventListener('click', function () {
//         this.style.backgroundColor = 'white';
//     })
// });

// var oakParagraph = document.querySelector('#oakParagraph');

// function toggleBackground () {
//     oakParagraph.classList.toggle('toggleBackground');
// }

// oakParagraph.addEventListener('click', toggleBackground);

var toDos = document.querySelectorAll('#lineItem');
console.log(toDos);

toDos.forEach(function (line) {
    line.addEventListener('mouseover', function () {
        this.classList.toggle('toggleLine');
    })
});



