const body = document.querySelector('body');

const name = prompt('What is your name?');

body.insertAdjacentHTML('afterbegin', `<h1>Hello, ${name}!</h1>`);
body.insertAdjacentHTML('beforeend', '<button>Next!</button>');

let color = '';

document.querySelector('button').onclick = function () {
    color = prompt(`${name}, what is your favorite animal?`);
    body.style.backgroundColor = color;
    document.querySelector('button').style.display = 'none';
}