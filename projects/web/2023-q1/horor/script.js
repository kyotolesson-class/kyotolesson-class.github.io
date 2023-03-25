let girlChase = document.getElementById("girl");
window.addEventListener('load', () =>{
    girlChase.style.position = 'absolute';
    girlChase.style.right = 0;
    girlChase.style.top = 0;
});


let move = 10;
window.addEventListener('keydown', (e) => {
    const { style } = girlChase;
    switch(e.key) {
        case 'ArrowUp': girlChase.style.top = `${parseInt(style.top) - move}px`; break;
        case 'ArrowDown': girlChase.style.top = `${parseInt(style.top) + move}px`; break;

        case 'ArrowLeft': girlChase.style.right = `${parseInt(style.right) + move}px`; break;
        case 'ArrowRight': girlChase.style.right = `${parseInt(style.right) - move}px`; break;

    }
    if (parseInt(style.top)<-200) {
        style.top= "-200px";
    }
    if (parseInt(style.top)>350) {
        style.top= "350px";
    }
    if (parseInt(style.right)<10) {
        style.right= "10px";
    }
    if (parseInt(style.right)>1600) {
        style.right= "1600px";
    }
});

///// GHOST GLIDE /////
async function gliding () {
    ghost.glide(2, 80, -300)
    await wait(1)
    ghost.glide(1, 90, -600)
    await wait(1)
    ghost.glide(1, 110, -20)
    await wait(1)
    ghost.glide(1, 30, 20)
    await wait(1)
    ghost.glide(1, 85, -200)
}

var timeleft = 5;
var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdown").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
},1000);

function ghostcatch() {
    let ghostDims=document.getElementById(`ghost`).getBoundingClientRect();
    let girlDims=document.getElementById(`girl`).getBoundingClientRect();

    return!(
        ghostDims.top > girlDims.bottom ||
        ghostDims.right < girlDims.left  ||
        ghostDims.bottom < girlDims.top ||
        ghostDims.left > girlDims.right
    );
}

setInterval(() => {
    if (ghostcatch()){
        window.location.href = "./page6.html";
        girlDims.style.display = "none";
        // ghostDims.style.display = "none";
    } else {

        window.location.href = "./page7.html";
        girlDims.style.display = "none";
    }
},6000)



        














// GHOST (OLDDDD)//
// function startGame() {
//     let id = null
//     const ghostRun = document.getElementById("ghost");
//     let pos = 0;
//     // LR = left, right  TB = top, bottom
//     let posLR = randomGhost(200, 1000); 
//     let posTB = randomGhost(1, 600); 
//     function randomGhost(min, max){

//         return Math.random() * (max - min) + min;
//     }
//     // clearInterval = stop moving
//     clearInterval(id); 
//     id = setInterval(frame, 5);
//     function frame() {
//         if (pos >= 300) {
//             // clearInterval(id);
//             posLR++;
//             ghostRun.style.left = posLR + "px";
//             if (posLR >= 1000){
//                 clearInterval(id);
//             }
//         } else {
//             pos++;
//             ghostRun.style.left = pos + "px";
//             ghostRun.style.top = pos + "px";

//         }
//         // if (posTB >= 600) {
//         //     clearInterval(id);
//         // } else {
//         //     posTB++;
//         //     ghostRun.style.top = posTB + "px";
//         // }
//    }
// }


