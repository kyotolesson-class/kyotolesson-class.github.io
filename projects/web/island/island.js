let guyTop =  500;
let guyLeft = 250;
document.getElementById("guyded").style.display = "none"
document.querySelector("h1").style.display = "none";

document.addEventListener('keydown', e => {
    // console.log(e.key)
    if(i === 0) {
        if (e.key === "ArrowUp" && guyTop > 450 ) {
            guyTop -= 50;
            document.querySelector(".spearguy").style.top= guyTop + 'px'
        }
        if (e.key === "ArrowDown" && guyTop < 500) {
            guyTop += 50;
            document.querySelector(".spearguy").style.top= guyTop + 'px'
        }
        if (e.key === "ArrowRight" && guyLeft < 1400) {
            guyLeft += 50;
            document.querySelector(".spearguy").style.left= guyLeft + 'px'
            document.querySelector("#guy").style.transform = "scaleX(-1)"
        }
        if (e.key === "ArrowLeft" && guyLeft > 155) {
            guyLeft -= 50;
            document.querySelector(".spearguy").style.left= guyLeft + 'px'
            document.querySelector("#guy").style.transform = "scaleX(1)"
        }
    }
})

let xMouse = 0
let yMouse = 0
let xSpear = 0
let ySpear = 0
let alpha = 0
let spear = document.getElementById("spear")
let time = 300
let percent = 100
let i = 0 
let xSpearGuy = 0
let ySpearGuy = 0
let xTarget1 = 0
let yTarget1 = 0
let xTarget2 = 0
let yTarget2 = 0
let xTarget3 = 0
let yTarget3 = 0
let xTarget4 = 0
let yTarget4 = 0


rect1 = spear.getBoundingClientRect();
rect2 = fish.getBoundingClientRect();
var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)

onmousemove =function(e){
    xMouse = e.clientX
    yMouse = e.clientY
}

setInterval(function(){
    xSpear=spear.getBoundingClientRect().x
    ySpear=spear.getBoundingClientRect().y
},30)

setInterval(function(){
    xSpearGuy=spearguy.getBoundingClientRect().x
    ySpearGuy=spearguy.getBoundingClientRect().y
    // console.log("xSpearGuy",xSpearGuy)
    // console.log("ySpearGuy",ySpearGuy)
},30)

setInterval(function(){
    // console.log("mouse x",xMouse)
    // console.log("mouse y",yMouse)
    xSpear=spear.getBoundingClientRect().x
    ySpear=spear.getBoundingClientRect().y
    // console.log("guy x",xSpear)
    // console.log("guy y",ySpear)
    if (xMouse>=xSpear){
        alpha = Math.atan((yMouse-ySpear)/(xMouse-xSpear)) + Math.PI
        // console.log("alpha",alpha)
        spear.style.transform = `rotate(${alpha}rad)`
    } else {
        alpha = Math.atan((yMouse-ySpear)/(xMouse-xSpear))
        // console.log("alpha",alpha)
        spear.style.transform = `rotate(${alpha}rad)`
    }
    rect1 = spear.getBoundingClientRect();
    rect2 = fish.getBoundingClientRect();
    rect3 = crow.getBoundingClientRect();
    var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)
    // console.log("Overlap:",overlap)

    if (overlap === true){
        // console.log("fish oof")
        percent = percent + 10
        document.getElementById("fish").style.display = "none";
        setTimeout(() => { document.getElementById("fish").style.display = "block"}, 3000);
    }

    var overlaping = !(rect1.right < rect3.left || 
        rect1.left > rect3.right ||
        rect1.bottom < rect3.top || 
        rect1.top > rect3.bottom)
    // console.log("Overlaping:",overlaping)

    if (overlaping === true){
        // console.log("crow oof")
        percent = percent + 10
        document.getElementById("crow").style.display = "none";
        setTimeout(() => { document.getElementById("crow").style.display = "block"}, 3000);
    }
},30)

var hungerbar = !(setInterval(function(){
    if (i === 0){
        percent -= 0.1
        // console.log(percent)
        hunger2.style.width=`${percent}%`
        if (percent <= 0){
            // console.log("oof")
            document.querySelector("h1").style.display = "flex";
            document.getElementById("guy").style.display = "none"
            document.getElementById("guyded").style.display = "inline"
            document.getElementById("spear").style.display = "none"
            i = 1
        }
    }
    
},30))


document.onclick=function(){
    a = Math.abs(xSpearGuy-xMouse)
    b = Math.abs(ySpearGuy-yMouse)
    xTarget = xMouse - 490
    yTarget = yMouse - 700
    xTarget1 = a + 190
    yTarget1 = b + 200
    xTarget2 = a + 190
    yTarget2 = b - 200
    xTarget3 = a - 190
    yTarget3 = b + 200
    xTarget4 = a - 190
    yTarget4 = b - 200
    console.log("mouse x",xMouse)
    console.log("mouse y",yMouse)
    console.log(xTarget)
    console.log(yTarget)
    if (xMouse<xSpear && yMouse<ySpear)
        document.getElementById("spear").animate([
            { 
                transform: `rotate(${alpha}rad)`,
                top: `-200px`,
                left : `-190px`
            },
            { 
                transform: `rotate(${alpha}rad)`,
                top: `-${yTarget1}px`,
                left : `-${xTarget1}px`
            },
        ], {
            duration: 1000,
            iterations: 1
        });
    else if (xMouse<xSpear && yMouse>ySpear)
        document.getElementById("spear").animate([
            { 
                transform: `rotate(${alpha}rad)`,
                top: `-200px`,
                left : `-190px`
            },
            { 
                transform: `rotate(${alpha}rad)`,
                top: `${yTarget2}px`,
                left : `-${xTarget2}px`
            },
        ], {
            duration: 1000,
            iterations: 1
        });
    else if (xMouse>xSpear && yMouse<ySpear)
        document.getElementById("spear").animate([
            { 
                transform: `rotate(${alpha}rad)`,
                top: `-200px`,
                left : `-190px`
            },
            { 
                transform: `rotate(${alpha}rad)`,
                top: `-${yTarget3}px`,
                left : `${xTarget3}px`
            },
        ], {
            duration: 1000,
            iterations: 1
        });
    else if (xMouse>xSpear && yMouse>ySpear)
        document.getElementById("spear").animate([
            { 
                transform: `rotate(${alpha}rad)`,
                top: `-200px`,
                left : `-190px`
            },
            { 
                transform: `rotate(${alpha}rad)`,
                top: `${yTarget4}px`,
                left : `${xTarget4}px`
            },
        ], {
            duration: 1000,
            iterations: 1
        });
}

// setInterval(function(){
//     time = time - 1
//     document.getElementById("timer").innerHTML = time
// },1000)
