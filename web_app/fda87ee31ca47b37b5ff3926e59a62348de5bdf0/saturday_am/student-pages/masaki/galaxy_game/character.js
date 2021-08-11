// arrow spaceship//

document.addEventListener('keydown', (e) => {
    // console.log (e)
    if(e.key === "ArrowRight") {
        document.querySelector("#spaceship").style.left = document.querySelector("#spaceship").getBoundingClientRect().x + 9 + "px";
    }
})

document.addEventListener('keydown', (e) => {
    // console.log (e)
    if(e.key === "ArrowLeft") {
        document.querySelector("#spaceship").style.left = document.querySelector("#spaceship").getBoundingClientRect().x - 25 + "px";
    }
})

document.addEventListener('keydown', (e) => {
    // console.log (e)
    if(e.key === "ArrowUp") {
        document.querySelector("#spaceship").style.top = document.querySelector("#spaceship").getBoundingClientRect().y - 130 + "px";
    }
})

document.addEventListener('keydown', (e) => {
    // console.log (e)
    if(e.key === "ArrowDown") {
        document.querySelector("#spaceship").style.top = document.querySelector("#spaceship").getBoundingClientRect().y + -80 + "px";
    }
})
 
//  arrow spaceship//


// click spaceship //
    document.querySelector("#right").onclick = function () {
        document.querySelector("#spaceship").style.left = document.querySelector("#spaceship").getBoundingClientRect().x + 9 + "px";
        // document.querySelector(".laser").style.left = document.querySelector(".laser").getBoundingClientRect().x + 9 + "px";
    }
    
    document.querySelector("#left").onclick = function () {
        document.querySelector("#spaceship").style.left = document.querySelector("#spaceship").getBoundingClientRect().x - 25 + "px";
        // document.querySelector(".laser").style.left = document.querySelector(".laser").getBoundingClientRect().x - 25 + "px";
    }
    
    document.querySelector("#up").onclick = function () {
        document.querySelector("#spaceship").style.top = document.querySelector("#spaceship").getBoundingClientRect().y - 130 + "px";
        // document.querySelector(".laser").style.top = document.querySelector(".laser").getBoundingClientRect().y - 256 + "px";
    }
    
    document.querySelector("#down").onclick = function () {
        document.querySelector("#spaceship").style.top = document.querySelector("#spaceship").getBoundingClientRect().y + -80 + "px";
        // document.querySelector(".laser").style.top = document.querySelector(".laser").getBoundingClientRect().y + -180 + "px";
    }
// click spaceship //

//characters//
document.querySelector("#ship1ex").onclick = function () {
    document.querySelector("#default-ship").src = "ship1.png"
    document.querySelector("#laser").style.backgroundColor = "yellow"
    document.querySelector("#skin-background").style.display = "none"
    document.querySelector("#locker-close").style.display = "none"
    document.querySelector("#locker-open").style.display = "block"
}

document.querySelector("#ship2ex").onclick = function () {
    document.querySelector("#default-ship").src = "ship2.png"
    document.querySelector("#laser").style.backgroundColor = "blue"
    document.querySelector("#skin-background").style.display = "none"
    document.querySelector("#locker-close").style.display = "none"
    document.querySelector("#locker-open").style.display = "block"
}

//characters//

document.querySelector("#locker-open").onclick = function () {
    document.querySelector("#skin-background").style.display = "block"
    document.querySelector("#locker-close").style.display = "block"
    document.querySelector("#locker-open").style.display = "none"
}

document.querySelector("#locker-close").onclick = function () {
    document.querySelector("#skin-background").style.display = "none"
    document.querySelector("#locker-close").style.display = "none"
    document.querySelector("#locker-open").style.display = "block"
}



// laser//useless

// document.addEventListener('keydown', (e) => {
//     // console.log (e)
//     if(e.key === "ArrowRight") {
//         document.querySelector(".laser").style.left = document.querySelector(".laser").getBoundingClientRect().x + 9 + "px";
//     }
// })

// document.addEventListener('keydown', (e) => {
//     // console.log (e)
//     if(e.key === "ArrowLeft") {
//         document.querySelector(".laser").style.left = document.querySelector(".laser").getBoundingClientRect().x - 25 + "px";
//     }
// })

// document.addEventListener('keydown', (e) => {
//     // console.log (e)
//     if(e.key === "ArrowUp") {
//         document.querySelector(".laser").style.top = document.querySelector(".laser").getBoundingClientRect().y - 256 + "px";
//     }
// })

// document.addEventListener('keydown', (e) => {
//     // console.log (e)
//     if(e.key === "ArrowDown") {
//         document.querySelector(".laser").style.top = document.querySelector(".laser").getBoundingClientRect().y + 30 + "px";
//     }
// })

// laser//
