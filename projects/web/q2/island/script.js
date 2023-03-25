let jump = document.querySelector("#jump")
let hito = document.querySelector("#hito")
let shima =document.querySelector("#shima")
// make a gameover queryselector
let over = document.querySelector("#over")

function touches(div1, div2) {
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();
  
    if (!(rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom)) {
        return true;
    }
  }

jump.onclick = function () {
    hito.style.opacity = "100%"
    hito.animate([
        {
            top: "-30px"
        },
        {
            top: "300px"
        }
    ], {
        iterations: 1,
        duration: 6000
    })
    hito.style.top = "300px"
    hito.style.right = hito.getBoundingClientRect().right + "px"
    setTimeout(() => {
        hito.style.animationName = "none"
        if (touches(hito, shima)) {
            // make gameover visible
            over.style.opacity = "100%"
        }
    }, 6000)
}

hito.style.top = "300px"
    hito.style.right = hito.getBoundingClientRect().right + "px"
    setTimeout(() => {
        hito.style.animationName = "none"
        if (touches(hito, umi)) {
            // make gameover visible
            clear.style.opacity = "100%"
        }
    }, 6000)


document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowLeft') {
        hito.style.left = hito.getBoundingClientRect().left - 50 + "px";
    }
    if (e.key == 'ArrowRight') {
        hito.style.left = hito.getBoundingClientRect().left + 50 + "px";
    }
})