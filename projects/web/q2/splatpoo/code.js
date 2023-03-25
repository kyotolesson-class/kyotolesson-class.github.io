setInterval(() => {
  health -= 1
}, 5000);

setInterval(() => {
if(overlap("poo","man")&(overlapNum === 1)&(ManHealth === 2)&(GainedScore === false)){
    ManHealth -= 1
    GainedScore === false
    overlapNum = 2
    setTimeout(() => {
      overlapNum = 1
    }, 500);
}else if(overlap("poo","man")&(overlapNum === 1)&(ManHealth === 1)&(GainedScore === false)){
    ManHealth -= 1
    GainedScore === false
    overlapNum = 2
    health += 1
    setTimeout(() => {
      overlapNum = 1
    }, 500);


}else if((overlapNum === 1)&(ManHealth === 0)&(GainedScore === false)){
    overlapNum = 2
    GainedScore === true
    score += 1
    document.querySelector("#score-number").innerHTML = score
    health += 1
    ManHealth += 2
    setTimeout(() => {
      overlapNum = 1
    }, 500);
  }
}, 30)


setInterval(() => {
  if(ManHealth === 2){
    predator.src = "../splatpoo/Images/man.png"
  }else if(ManHealth === 1){
    predator.src = "../splatpoo/Images/pooMan.png"
  }else if(ManHealth === 0){
    predator.src = "../splatpoo/Images/man.png"
    setTimeout(() => {
      predator.display = "block"
    }, 3000);
  }
}, 30);




setInterval(() => {
  console.log(ManHealth)
}, 30);
