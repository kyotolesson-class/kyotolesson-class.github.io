let clownHP = document.getElementById('clownhp');


//////////////////////////////////////////////////// MOVE THE GIRL ////////////////////////////////////////////////////

let girlFight = document.getElementById("girl");
window.addEventListener('load', () =>{
    girlFight.style.position = 'absolute';
    girlFight.style.right = 0;
    girlFight.style.top = 0; 
});


let girlMove = 10;
let punch = (girlFight.src="girl2.png");
window.addEventListener('keydown', (event) => {
    const { style } = girlFight;
    switch(event.key) {
        case 'ArrowLeft': girlFight.style.right = `${parseInt(style.right) + girlMove}px`; break;
        case 'ArrowRight': girlFight.style.right = `${parseInt(style.right) - girlMove}px`; break;
        case 'ArrowUp': girlFight.src="girl2.png"; break;
        case 'ArrowDown': girlFight.src="girl3.png"; break;
        }
        if (parseInt(style.right)<10) {
            style.right="10px";
        }
        if (parseInt(style.right)>1715) {
            style.right="1715px";
        }
    });



    // let images = [];

    // images[0] = ['girl1'];
    // images[1] = ['girl2'];
    // images[2] = ['girl3'];
    // let index = 0;
    
    // function change() {
    //   document.getElementById("mainPhoto").src = images[index];
    //   if (index == 2) {
    //     index = 0;
    //   } else {
    //     index++;
    //   }
    
    // }
    
    // window.onload = change();
    
   // nextCostume() {
    // girlFight.element.attributes.src.value = ./sprites/${girlFight.element.id}/costume${girlFight.nextCostumeNum}.svg
     // girlFight.nextCostumeNum += 1;
     // if(girlFight.nextCostumeNum == girlFight.lastCostume) {
      //    girlFight.nextCostumeNum = 1;
     // };
  //};

//////////////////////////////////////////////////// MOVE THE CLOWN ////////////////////////////////////////////////////

let clownFight = document.getElementById("clown");
window.addEventListener('load', () =>{
    clownFight.style.position = 'absolute';
    clownFight.style.left = 0;
    clownFight.style.top = 0; 
});


//////////////////////////////////////////////////// PUNCH ////////////////////////////////////////////////////



function isTouching() {
    if (false) {
        const withinX = mouseX >= this.element.getBoundingClientRect().x && mouseX <= this.element.getBoundingClientRect().x + this.element.width;
        const withinY = mouseY >= this.element.getBoundingClientRect().y && mouseY <= this.element.getBoundingClientRect().y + this.element.height;
        return withinX && withinY;
    } else if (false) {
        const thisRect = this.element.getBoundingClientRect();
        const overlap = (window.innerWidth < thisRect.right || 
            0 > thisRect.left || 
            0 > thisRect.top || 
            window.innerHeight < thisRect.bottom)

        return overlap;

    } else {
        const objectToTouch = clownFight.getBoundingClientRect();
        const thisRect = girlFight.getBoundingClientRect();
        const overlap = !(objectToTouch.right < thisRect.left || 
            objectToTouch.left > thisRect.right || 
            objectToTouch.bottom < thisRect.top || 
            objectToTouch.top > thisRect.bottom)
        
        return overlap;
    }

}

setInterval(() => {
    if (isTouching()) {
        clownHP.src = "hp2.png";
        clown.src = "piero1.png"
        window.location.href = "./page9.html";
    }

})

// function girlTouchesClown() {
//     let clownDims = document.getElementById('clown').getBoundingClientRect();
//     let girlDims = document.getElementById('girl').getBoundingClientRect();
  
//     return !(
//       clownDims.top > girlDims.bottom ||
//       clownDims.right < girlDims.left ||
//       clownDims.bottom < girlDims.top ||
//       clownDims.left > girlDims.right
//     );
//   }
  
//   setInterval(() => { 
//       if (girlTouchesClown()) {
//          let clownDims.src = "pierosann.png"
//   }
//   }, 5)
  