const home = document.getElementById('home');

const problemArea = document.getElementById('problem-area');
const scoreArea = document.getElementById('score-area');

const progressBar = document.querySelector(".progress-bar");
const progressSpeed = 10;
let currentProgress;

function clearScreen() {
    document.querySelectorAll("section").forEach(section => section.style.display = "none")
}

function gameOver() {
    clearScreen();
    clearInterval(progressIntervalId)
    document.getElementById('uh-oh').src = `media/no-${randNum(6)}.gif`
    document.getElementById('game-over-screen').style.display = "block"
    document.getElementById('game-over-screen').animate([{ transform: 'scale(0.1)' }, { transform: 'scale(1) rotate(1080deg)' }], { duration: 1000, iterations: 1 })
}

function progressGo() {
    if(progressBar.style.width) {
        let width = progressBar.style.width;
        currentProgress = width.substr(0, width.length - 1)
        if(Number(currentProgress) < 100) {
            progressBar.style.width = `${Number(currentProgress) + progressSpeed}%`
        } else if (Number(currentProgress) >= 100) {
            console.log("welp")
            gameOver();
        }
    } else {
        progressBar.style.width = `${progressSpeed}%`;
    }
}

let progressIntervalId;

function startGame() {
    progressIntervalId = setInterval(progressGo, 1000);
    insertProblem()
}

document.querySelector('#start').onclick = function() {
    this.disabled = "true"
    this.style.display = "none"
    problemArea.style.display = "block"
    scoreArea.style.display = "block"
    startGame();
}

function startOver() {
    progressBar.style.width = '0%'
    clearInterval(progressIntervalId)
    document.querySelector('#start').attributes.removeNamedItem("disabled")
}


const submitButton = document.querySelector("button");
const input = document.querySelector("input");
submitButton.onclick = function(e) {
    e.preventDefault()
    console.log(input.value)
    if(input.value === 'reset') {
        startOver();
    }
    input.value = ''
}


const returnButton = document.getElementById('go-back');
returnButton.onclick = function () {
    window.location.reload();
}

function clearProblem() {
    document.getElementById('problem-area').innerHTML = '';
}

function insertProblem () {
    clearProblem();
    document.getElementById('problem-area').insertAdjacentHTML('beforeend', newProblem())
    document.querySelectorAll('.btn-option').forEach(button => {
        button.onclick = function () {
            if(isCorrect(button)) {
                scoreUp()
                progressBar.style.width = '0%'
                clearInterval(progressIntervalId)
                progressIntervalId = setInterval(progressGo, 1000);
                insertProblem()
            } else {
                progressBar.style.width = `${Number(progressBar.style.width.substr(0, progressBar.style.width.length - 1)) + 25}%`
            }
        }
    })
}