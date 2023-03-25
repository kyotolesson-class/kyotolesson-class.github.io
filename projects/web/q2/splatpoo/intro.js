let backgroundanimate = 0

let intro = new Audio('../splatpoo/Sound/intro.mp3')

background = setInterval(() => {
    document.body.style.backgroundPositionX = `${backgroundanimate -= 15}px`
}, 30);



document.querySelector("#New").onclick = function(){
    document.querySelector("#return").style.display = "none"
    document.querySelector("#StartGame").style.display = "none"
    document.querySelector("#New").style.display = "none"
    document.querySelector(".health").style.display = "block"
    document.querySelector("#score-background").style.display = "block"
    document.querySelector("#bird-right").style.display = "block"
    document.querySelector("#man").style.display = "block"
    document.querySelector(".muteButton").style.display = "block"
    document.querySelector("#Controls").style.display = "block"
    clearInterval(background)
}


window.addEventListener('load', (event) => {
    document.querySelector(".health").style.display = "none"
    document.querySelector("#score-background").style.display = "none"
    document.querySelector("#bird-right").style.display = "none"
    document.querySelector("#man").style.display = "none"
    document.querySelector(".muteButton").style.display = "none"
    document.querySelector("#Controls").style.display = "none"
  });


document.querySelector("#Controls").onclick = function(){
   document.querySelector("#Controls").style.display = "none"
   document.querySelector("#Controls-1").style.display = "block"
   intro.play();
}

document.querySelector("#Controls-1").onclick = function(){
    document.querySelector("#Controls-1").style.display = "none"
    document.querySelector("#Controls").style.display = "block"
    intro.pause();
 }

