function overlap(firstObject,secondObject){
    const firstObjectDims = firstObject.getBoundingClientRect();
    const secondObjectDims = secondObject.getBoundingClientRect();
      return !(firstObjectDims.right < secondObjectDims.left || 
          firstObjectDims.left > secondObjectDims.right || 
          firstObjectDims.bottom < secondObjectDims.top || 
          firstObjectDims.top > secondObjectDims.bottom)
}

function RandomNumber(max) {
  return Math.floor(Math.random() * max);
}

setInterval(() => {
  RandomNumber(window.innerWidth)

  RandomNumber(window.innerHeight - 150)
}, 30);