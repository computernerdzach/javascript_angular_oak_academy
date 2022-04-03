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