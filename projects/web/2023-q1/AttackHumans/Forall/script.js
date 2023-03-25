function warningTimer(){
  setTimeout(() => {
    if(warning.style.display !== "block"){
      warning.style.display = "block"
    }
    setTimeout(() => {
      warning.style.display = "none"
    }, warningTime * 0.2);
  }, warningTime * 0.8);  
}

function overlap(firstObject,secondObject){
  const firstObjectDims = firstObject.getBoundingClientRect();
  const secondObjectDims = secondObject.getBoundingClientRect();
    return !(firstObjectDims.right < secondObjectDims.left || 
        firstObjectDims.left > secondObjectDims.right || 
        firstObjectDims.bottom < secondObjectDims.top || 
        firstObjectDims.top > secondObjectDims.bottom)
}

function resetPosition(){
  zombieLeft = 0
  zombie.style.left = zombieLeft + "px"
  zombieUp = 0
  zombie.style.bottom = zombieUp + "px"
  if(outside === true){
    zombieWidth = 10
    zombie.style.width = zombieWidth + "%"
  }else if(outside === false){
    zombieWidth = 20
    zombie.style.width = zombieWidth + "%"
  }
}

let healthDecreasing = false;

setInterval(() => {
  if(outside === true && warning.style.display === "block" && healthDecreasing === false){
    healthDecreasing = true;
    document.querySelector("#health").value -= 10
    setTimeout(() => {
      healthDecreasing = false;
    }, 1000);
  }
});

let warningTime = 30000

let warning = document.querySelector(".warning")

let score = 0

let houses = document.querySelector(".houses")

let movingHouse = document.querySelector(".movingHouse")

let movingHouseLeft = 0

let zombie = document.querySelector(".maincharacter")

let redDoor = document.querySelector(".redDoor")

let FOpenRed = document.querySelector(".FopenRed")

let blueDoor = document.querySelector(".blueDoor")

let FOpenBlue = document.querySelector(".FopenBlue")

let greenDoor = document.querySelector(".greenDoor")

let FOpenGreen = document.querySelector(".FopenGreen")

let greenDoor2 = document.querySelector(".greenDoor2")

let FOpenGreen2 = document.querySelector(".FopenGreen2")

let darkblueDoor = document.querySelector(".darkblueDoor")

let FOpenDarkblue = document.querySelector(".FopenDarkblue")

let brownDoor = document.querySelector(".brownDoor")

let FOpenBrown = document.querySelector(".FopenBrown")

let RLivingRoom = document.querySelector(".RedDoor-LivingRoom")

let Atract = document.querySelector(".AtractStair")

let zombieUp = 15

let zombieWidth = 0

let outside = true

let zombieLeft = 0

let RedStair = document.querySelector(".StairInteract")

let RedHouseStair = document.querySelector(".RedHouseStair")

let RedCorridor = document.querySelector(".RedCorridor")

let place = "road"

let tapeRedAll = document.querySelectorAll(".tapeRed")

let RedHouseHumanRoom = document.querySelector("#HumanRoomRed1")

let blueLivingRoomStair = document.querySelector("#blue-livingroom-corridor")

let openDoor = new Audio("../Forall/openDoor.mp3");

let closeDoor = new Audio("../Forall/closeDoor.mp3");

let walking = new Audio("../Forall/walk.mp3");

let stair = new Audio("../Forall/stair.mp3");

let GameOver = "false"

warningTimer()

setInterval(() => {
  warningTimer()
}, warningTime);

document.querySelector(".background-night").animate([
    // keyframes
    { opacity: '80%' },
    { opacity: '30%' }
  ], {
    // timing options
    duration: warningTime,
    iterations: Infinity
  });

  addEventListener('keydown', (event) => {
    if(event.key === "ArrowLeft" && outside === true){
      console.log(zombie.getBoundingClientRect())
      zombie.style.transform = "scaleX(-1)"
      movingHouseLeft += 30
      movingHouse.style.left = movingHouseLeft + "px"
      walking.play();
    }else if(event.key === "ArrowLeft" && outside === false){
      zombie.style.transform = "scaleX(-1)"
      zombieLeft -= 30
      zombie.style.left = zombieLeft + "px"
    }
    if(event.key === "ArrowRight" && outside === true){
      zombie.style.transform = "scaleX(1)"
      movingHouseLeft -= 30
      movingHouse.style.left = movingHouseLeft + "px"
      walking.play();
    }else if(event.key === "ArrowRight" && outside === false){
      zombie.style.transform = "scaleX(1)"
      zombieLeft += 30
      zombie.style.left = zombieLeft + "px"
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowUp" && outside === false){
      zombieUp += 30
      zombie.style.bottom = zombieUp + "px"
      zombieWidth -= 0.8
      zombie.style.width = zombieWidth + "%"
    }
  });
   
  document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowDown" && outside === false){
      zombieUp -= 30
      zombie.style.bottom = zombieUp + "px"
      zombieWidth += 0.8
      zombie.style.width = zombieWidth + "%"
    }
  });
  

setInterval(() => {
  if(overlap(zombie,redDoor)){
    FOpenRed.style.display = "block"
  }else{
    FOpenRed.style.display = "none"
  }

  if(overlap(zombie,blueDoor)){
    FOpenBlue.style.display = "block"
  }else{
    FOpenBlue.style.display = "none"
  }

  if(overlap(zombie,greenDoor)){
    FOpenGreen.style.display = "block"
  }else{
    FOpenGreen.style.display = "none"
  }  

  if(overlap(zombie,greenDoor2)){
    FOpenGreen2.style.display = "block"
  }else{
    FOpenGreen2.style.display = "none"
  }

  if(overlap(zombie,darkblueDoor)){
    FOpenDarkblue.style.display = "block"
  }else{
    FOpenDarkblue.style.display = "none"
  }

  if(overlap(zombie,brownDoor)){
    FOpenBrown.style.display = "block"
  }else{
    FOpenBrown.style.display = "none"
  }

  //In house red

  if(overlap(zombie,RedStair)){
    RedHouseStair.style.display = "block"
  }else{
    RedHouseStair.style.display = "none"
  }

  //In house
}, 30);

//Go back

document.addEventListener('keydown', (event) => {
  if(event.key === "Escape" && place === "road"){
    movingHouseLeft = 30
      movingHouse.style.left = movingHouseLeft + "px"
  }else if(event.key === "Escape" && place === "redHouse"){
    movingHouse.style.display = "block"
    RLivingRoom.style.display = "none"
    RedStair.style.display = "none"
    zombie.style.width = "20%"
    Atract.style.display = "none"
    outside = true
    place = "road"
    if(outside === true){
      zombieWidth = 10
    }
    resetPosition()
    closeDoor.play();
  }else if(event.key === "Escape" && place === "redHouseDoor"){
    RedStair.style.display = "block"
    RLivingRoom.style.display = "block"
    Atract.style.display = "block"
    RedCorridor.style.display = "none"
    tapeRedAll.forEach(tape =>{
      tape.style.display = "none"
    });
    document.querySelector("#HumanRoomRed1").style.display = "none"
    place = "redHouse"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition();
    stair.play();
  }else if(event.key === "Escape" && place === "redHouseHumanRoom"){
    RedCorridor.style.display = "block"
    tapeRedAll.forEach(tape =>{
      tape.style.display = "block"
    });
    document.querySelector("#HumanRoomRed1").style.display = "block"
    document.querySelector("#HouseRedRoom").style.display = "none"
    document.querySelector("#blood1").style.display = "none"
    place = "redHouseDoor"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    closeDoor.play();
  }else if(event.key === "Escape" && place === "bluehouse"){
    movingHouse.style.display = "block"
    document.querySelector("#livingRoomBlueAll").style.display = "none"
    place = "road"
    outside = true
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    closeDoor.play();
  }else if(event.key === "Escape" && place === "blueHouseCorridor"){
    document.querySelector("#livingRoomBlueAll").style.display = "block"
    document.querySelector("#blueHouseCorridorAll").style.display = "none"
    place = "bluehouse"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    stair.play();
  }else if(event.key === "Escape" && place === "blueHouseRoom"){
    document.querySelector("#blueHouseCorridorAll").style.display = "block"
    document.querySelector("#blueHouseRoomInside").style.display = "none"
    place = "blueHouseCorridor"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    closeDoor.play();
  }
});

//Go back

//Door Interaction

document.addEventListener('keydown', (event) => {
  if(event.key === "f" && (overlap(zombie,redDoor )|| overlap(zombie,greenDoor)||overlap(zombie,greenDoor2))){
    movingHouse.style.display = "none"
    RLivingRoom.style.display = "block"
    RedStair.style.display = "block"
    zombie.style.width = "20%"
    Atract.style.display = "block"
    outside = false
    place = "redHouse"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition();
    openDoor.play();
  }
});

document.addEventListener('keydown', (event) => {
  if(event.key === "f" && (overlap(zombie,blueDoor)||overlap(zombie,darkblueDoor)||overlap(zombie,brownDoor))){
    movingHouse.style.display = "none"
    document.querySelector("#livingRoomBlueAll").style.display = "block"
    outside = false
    place = "bluehouse"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    openDoor.play();
  }
});
//Door Interaction

//In red house
document.addEventListener('keyup', (event) => {
  if(event.key === "f" && overlap(zombie,RedStair)&& place === "redHouse"){
    RedStair.style.display = "none"
    RLivingRoom.style.display = "none"
    Atract.style.display = "none"
    RedCorridor.style.display = "block"
    tapeRedAll.forEach(tape =>{
      tape.style.display = "block"
    });
    document.querySelector("#HumanRoomRed1").style.display = "block"
    place = "redHouseDoor"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition();
    stair.play()
  }else if(event.key ==="f" && overlap(zombie,RedHouseHumanRoom) && place === "redHouseDoor"){
    RedCorridor.style.display = "none"
    tapeRedAll.forEach(tape =>{
      tape.style.display = "none"
    });
    document.querySelector("#HumanRoomRed1").style.display = "none"
    document.querySelector("#HouseRedRoom").style.display = "block"
    place = "redHouseHumanRoom"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    openDoor.play();
  }else if(event.key ==="f" && overlap(zombie,document.querySelector("#SleepingRed"))){
    document.querySelector("#blood1").style.display = "block"
    score += 1
    Number(document.querySelector("#ScoreNum").innerText = score) 
  }
});

setInterval(() => {
  if(overlap(zombie,RedHouseHumanRoom)){
    document.querySelector("#RedDoorRoom1").style.display = "block"
  }else{
    document.querySelector("#RedDoorRoom1").style.display = "none"
  }

  if(overlap(zombie,document.querySelector("#SleepingRed"))){
    document.querySelector("#KillHuman").style.display = "block"
  }else{
    document.querySelector("#KillHuman").style.display = "none"
  }
}, 30);
//In red house

//In blue house

setInterval(() => {
  if(overlap(zombie,blueLivingRoomStair)){
    document.querySelector("#BlueLivingRoom").style.display = "block"
  }else{
    document.querySelector("#BlueLivingRoom").style.display = "none"
  }

  if(overlap(zombie,document.querySelector("#overlapBlueRoom"))){
    document.querySelector("#blueHouseRoom").style.display = "block"
  }else{
    document.querySelector("#blueHouseRoom").style.display = "none"
  }

  if(overlap(zombie,document.querySelector("#SleepingBlue"))){
    document.querySelector("#SleepingHumanBlue").style.display = "block"
  }else{
    document.querySelector("#SleepingHumanBlue").style.display = "none"
  }
},);

document.addEventListener('keyup', (event) => {
  if(event.key === "f" && overlap(zombie,blueLivingRoomStair)&& place === "bluehouse"){
    document.querySelector("#livingRoomBlueAll").style.display = "none"
    document.querySelector("#blueHouseCorridorAll").style.display = "block"
    place = "blueHouseCorridor"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    stair.play()
  }else if(event.key === "f" && overlap(zombie,document.querySelector("#overlapBlueRoom"))&& place === "blueHouseCorridor"){
    document.querySelector("#blueHouseCorridorAll").style.display = "none"
    document.querySelector("#blueHouseRoomInside").style.display = "block"
    place = "blueHouseRoom"
    if(outside === false){
      zombieWidth = 20
    }
    resetPosition()
    openDoor.play();
  }else if(event.key ==="f" && overlap(zombie,document.querySelector("#SleepingBlue"))){
    document.querySelector("#blood").style.display = "block"
    score += 1
    Number(document.querySelector("#ScoreNum").innerText = score) 
  }
});

//In blue house

//GameOver

setInterval(() => {
  if(document.querySelector("#health").value === 0 && GameOver === "false"){
    GameOver = "true"
    movingHouse.style.display = "none"
    document.querySelector("#Score").style.display = "none"
    document.querySelector("#health").style.display = "none"
    document.querySelector("#GameOverWhole").style.display = "block"
    
    document.querySelector("#maincharacter").animate([
      // keyframes
      { 
        left: '20px' ,
        opacity: "100%",
        transform: "scaleX(1)",
      },
      { 
        left: '1000px' ,
        opacity: "100%",
        transform: "scaleX(1)",
      },
      { 
        left: '1001px' ,
        opacity: "100%",
        transform: "scaleX(-1)",
      },
      { 
        left: '20px' ,
        opacity: "100%", 
        transform: "scaleX(-1)",
      },
      { 
        left: '21px' ,
        opacity: "100%", 
        transform: "scaleX(1)",
      },
  
    ], {
      // timing options
      duration: 20000,
      iterations: Infinity
    });
  }
}, );

document.querySelector("#Retry").onclick = function () {
 location.reload()
}












  