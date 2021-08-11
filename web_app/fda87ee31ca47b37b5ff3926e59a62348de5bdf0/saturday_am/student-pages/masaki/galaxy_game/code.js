document.querySelector("#spaceship").style.left = `${window.innerWidth / 2 - 60}px`;  

document.querySelector("#spaceship").style.top = `${window.innerHeight / 2 - 170}px`; 


// document.querySelector(".laser").style.left = `${window.innerWidth / 2 - 15}px`;  

// document.querySelector(".laser").style.top = `${window.innerHeight / 2 - 170}px`; 
// Laser reset //

// document.addEventListener('keydown', (e) => {
//     console.log (e)
//     if(e.key === "r") {
//         document.querySelector(".laser").style.left = `${window.innerWidth / 2 - 15}px`;  

//         document.querySelector(".laser").style.top = `${window.innerHeight / 2 - 170}px`;  
//     }
// })

// Laser reset //

// Spaceship reset // 

document.addEventListener('keydown', (e) => {
    console.log (e)
    if(e.key === "r") {
    document.querySelector("#spaceship").style.left = `${window.innerWidth / 2 - 60}px`;  

    document.querySelector("#spaceship").style.top = `${window.innerHeight / 2 - 170}px`;  
    }
})

// Spaceship reset // 


