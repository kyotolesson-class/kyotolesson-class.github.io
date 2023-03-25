let birdPosition = 0

let health = 5

let poo = document.querySelector("#poo")

let enemy1 = document.querySelector("#man")

let predator = document.querySelector(".predator")

let overlapNum = 1

let GainedScore = false

let score = 0

let ManHealth = 2

let mute = document.querySelector("#mute")

let unmute = document.querySelector("#unmute")

let BGM = new Audio('../splatpoo/Sound/8-bit_Aggressive1.mp3')
BGM.loop = true;



function overlap(el1,el2){
  const firstObject = document.getElementById(el1).getBoundingClientRect();
  const secondObject = document.getElementById(el2).getBoundingClientRect();
  return !(firstObject.right < secondObject.left || 
      firstObject.left > secondObject.right || 
      firstObject.bottom < secondObject.top || 
      firstObject.top > secondObject.bottom)
}


//Movement
document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        document.querySelector("#bird-right").style.transform = "scaleX(1)"
        document.getElementById("bird-right").animate([
            // keyframes
            { left: `${birdPosition}px` },
            { left: `${birdPosition + 70}px` }, 
          ], {
        
            // timing options
            duration: 500,
            iterations: 1,
            easing: "ease-in-out"
          });
          birdPosition += 70
    }
        document.querySelector("#bird-right").style.left = `${birdPosition}px`
})

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        document.querySelector("#bird-right").style.transform = "scaleX(-1)"
        document.getElementById("bird-right").animate([
            // keyframes
            { left: `${birdPosition}px` },
            { left: `${birdPosition - 70}px` }, 
          ], {
        
            // timing options
            duration: 500,
            iterations: 1,
            easing: "ease-in-out"
          });
          birdPosition -= 70
    }
        document.querySelector("#bird-right").style.left = `${birdPosition}px`
})

document.addEventListener("keydown", event => {
  if (event.key === "ArrowDown") {
      let piuuu = new Audio('../splatpoo/Sound/pi.mp3')
      piuuu.play();
      document.getElementById("poo").animate([
          { 
              transform: 'translate(0, -5px)',
              opacity: "100%"
            },
            { 
              transform: 'translate(0, 400px)',
              opacity: "20%" ,
              display : "none",
            },
        ], {
      
          // timing options
          duration: 500,
          iterations: 1,
          easing: "ease-in-out"
        });
  }
})
//Movement

//Health

setInterval(() => {
  if(health === 5){
    document.querySelector("#healthbar").src = "../splatpoo/Images/HealthMax.png"
  }else if (health === 4){
    document.querySelector("#healthbar").src = "../splatpoo/Images/health4_5.png"
  }else if (health === 3){
    document.querySelector("#healthbar").src = "../splatpoo/Images/health3_5.png"
  }else if (health === 2){
    document.querySelector("#healthbar").src = "../splatpoo/Images/health2_5.png"
  }else if (health === 1){
    document.querySelector("#healthbar").src = "../splatpoo/Images/health1_5.png"
  }else if (health === 0){
    document.querySelector("#healthbar").src = "../splatpoo/Images/dead.png"
  }
}, 50);

setInterval(() => {
  if(health === 0){
    document.querySelector("#dead").style.display = "block" 
    document.querySelector("#gameOver-font").style.display = "block"

  }
}, 30);

mute.onclick = function(){
  unmute.style.display = "block"
  mute.style.display = "none"
  BGM.play();
}

unmute.onclick = function(){
  unmute.style.display = "none"
  mute.style.display = "block"
  BGM.pause();
}

console.log(ManHealth)

