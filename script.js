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



