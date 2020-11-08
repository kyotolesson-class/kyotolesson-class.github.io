
document.querySelector('.kirby')


document.querySelector("button").onclick = function () {
    let favoriteColor = prompt("Tell me your favorite color");
    document.querySelector("body").style.backgroundColor = favoriteColor;
}