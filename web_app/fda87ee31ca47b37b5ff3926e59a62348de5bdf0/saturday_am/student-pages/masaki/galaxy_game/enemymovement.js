let firing = false

function overlap(el1,el2){
    const firstObject = document.getElementById(el1).getBoundingClientRect();
    const secondObject = document.getElementById(el2).getBoundingClientRect();
    return !(firstObject.right < secondObject.left || 
        firstObject.left > secondObject.right || 
        firstObject.bottom < secondObject.top || 
        firstObject.top > secondObject.bottom)
}


document.querySelector("#level-1-E-1").animate([
    // keyframes
    { 
      transform: 'translate(20px, 0px)' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(1150px, 0px)',
      opacity: "100%" 
    },
    { 
      transform: 'translate(20px, 0px)',
      opacity: "100%" 
    },

  ], {
    // timing options
    duration: 9000,
    iterations: Infinity
  });



setInterval(()=> {
if(firing && overlap("laser","level-1-E-1")){
    document.querySelector("#level-1-E-1").style.display = "none"
    document.querySelector("#laser").style.visibility = "hidden"
    document.querySelector("#score-number").innerText = Number(document.querySelector("#score-number").innerText) + 1
    firing = false
}
}, 30);

setInterval(()=> {
      document.querySelector("#level-1-E-1").style.display = "block"
  }, 10000);

setInterval(()=> {
  if(overlap("laser","level-1-E-1")){
    document.querySelector("#heart1").src = "half-heart.png"
  }
  }, 30);