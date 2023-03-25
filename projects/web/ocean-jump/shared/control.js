//Background

// document.body.style.backgroundPositionY = `${backgroundanimate -= 25}px`

//Background

// console.log (e)
document.addEventListener('keydown', (e) => {
  // console.log (e)
  if(e.key === "ArrowRight") {
      document.querySelector("#swimmer").style.left = document.querySelector("#swimmer").getBoundingClientRect().x + 30 + "px";
  }
})

document.addEventListener('keydown', (e) => {
  // console.log (e)
  if(e.key === "ArrowLeft") {
      document.querySelector("#swimmer").style.left = document.querySelector("#swimmer").getBoundingClientRect().x - 30 + "px";
  }
})

// gravity
setInterval(() => {
  if(jumpingstate === false){
    player.style.top = playerPositionY + 9+ "px";
    playerPositionY = playerPositionY + 9
  }
}, 50);


setInterval(() => {
  if(overlap(player,sand)&&(jumpingstate === false)){
    jumpingstate = true
    player.animate([
        // keyframes
        { 
          top: `${playerPositionY}px`,
          opacity: "100%",
        },
        { 
          top: `${playerPositionY - 240}px`,
          opacity: "100%" 
        },
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
      });
    setTimeout(() => {
      playerPositionY = playerPositionY - 240,
      player.style.top = `${playerPositionY}px`
      jumpingstate = false
    }, 1000);
  }
}, 100);

// setInterval(() => {
//   console.log(playerPositionY)
// }, 30);


// setInterval(() => {
//   console.log(playerPositionY) 
// }, 30);

// setInterval(() => {
//   if(overlap(feet,jumpPads)&&(jumpingstate === false)){
//     jumpingstate = true
   
//     player.animate([
//         // keyframes
//         { 
//           top: `${playerPositionY}px`,
//           opacity: "100%",
//         },
//         { 
//           top: `${playerPositionY - 170}px`,
//           opacity: "100%" 
//         },
//       ], {
//         // timing options
//         duration: 1000,
//         iterations: 1,
//       });
//     playerPositionY = playerPositionY - 170
//     setTimeout(() => {
//       player.style.top = `${playerPositionY}px`
//       jumpingstate = false
//     }, 1000);
//   }
// }, 300);


setInterval(() => {
  jumpPads.forEach(jumppad => {
    if(overlap(feet,jumppad)&&(jumpingstate === false)){
      jumpingstate = true
      player.animate([
          // keyframes
          { 
            top: `${playerPositionY}px`,
            opacity: "100%",
          },
          { 
            top: `${playerPositionY - 220}px`,
            opacity: "100%" 
          },
        ], {
          // timing options
          duration: 1000,
          iterations: 1,
        });
      playerPositionY = playerPositionY - 220
      setTimeout(() => {
        player.style.top = `${playerPositionY}px`
        jumpingstate = false
      }, 1000);
    }
  });
}, 30);


setInterval(() => {
  console.log(document.querySelector("#swimmer").style.top)
}, 30);


setInterval(() => {
  if(playerPositionY < 200 && jumpingstate){
    backgroundPositionY += 2.4
    sandPositionY -= 2.4
    sandPositionYtop -= 2.4
    jumpPads.forEach(overlapSetting => {
      overlapSetting.dataset.addition = Number(overlapSetting.dataset.addition) + 2.4
      overlapSetting.style.top = overlapSetting.dataset.addition + "px"
    });
  }
}, 15);




window.addEventListener('load', (e) => {
  // console.log (e)
  for (let i = 2; i < 132; i++) {
    let clone = main.cloneNode(true);
      document.body.insertAdjacentElement("afterbegin", clone)
      let newJumppad = document.querySelector(".jumppad")
      newJumppad.style.left = RandomNumber(window.innerWidth) + "px"
      newJumppad.dataset.addition = addition - (i * 100)
      newJumppad.style.top = newJumppad.dataset.addition + "px"
  }  
  jumpPads = document.querySelectorAll(".jumppad")
})

setInterval(() => {
  document.body.style.backgroundPositionY = backgroundPositionY + "px"
  sand.style.bottom = sandPositionY + "px"
  sandTop.style.bottom = sandPositionYtop + "px"
}, 10);

setInterval(() => {
  if(overlap(bottom,player)){
    deadScreen.style.display = "block"
  }
}, 30);


yesButton.onclick = function() {
  document.location.reload(true)
};

