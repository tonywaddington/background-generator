var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('random');

function setGradient() {
    body.style.background =
        ('linear-gradient(to right, ' +
            color1.value +
            ', ' +
            color2.value +
            ')');

    css.textContent = body.style.background + ";";
}

function randomNumber() {
    return Math.floor(Math.random() * 255);
}

function randomGradient() {

    var random1 = 'rgb(' +
        randomNumber() +
        ', ' +
        randomNumber() +
        ', ' +
        randomNumber() +
        '),' ;
    
    var random2 = 'rgb(' +
        randomNumber() +
        ', ' +
        randomNumber() +
        ', ' +
        randomNumber() +
        ')' ;

    body.style.background =
        ('linear-gradient(to right,' +
            random1 +
            random2);

    css.textContent = body.style.background + ";";
}


setGradient();
css.textContent = body.style.background + ";";

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomBtn.addEventListener('click', randomGradient);
