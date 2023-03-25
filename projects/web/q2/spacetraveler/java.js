let moon = document.querySelector("#moon")
let moonDiv = document.querySelector("div.moon")
let earth = document.querySelector("#earth")
let Jupiter = document.querySelector("#Jupiter")
let Jupiter2 = document.querySelector("#Jupiter2")
let Jupiter3 = document.querySelector("#Jupiter3")

let counter = 0;

let planetToOrbit = moon

let spaceship = document.querySelector(".spaceship")
document.addEventListener('keyup', (event) => {
  if (event.key == " ") {
    if (counter > 3) {
      counter = 0
    }

    if (counter == 0) {
      earth.style.animationDuration = '1s'
      earth.style.animationName = 'earthShift'
      moon.style.animationName = 'zoomout'
      document.body.style.animationName = 'shift'
      Jupiter.style.animationName = 'zoomin'


      setTimeout(() => {
        moon.style.transform = "scale(0)"
        earth.style.transform = "scale(0)"
        document.body.style.backgroundPositionY = "-300px"
        Jupiter.style.top = "364px"      
        Jupiter.style.left = "670px"
      }, 1000)
    }
    
    if (counter == 1) {
      Jupiter.style.animationName = 'zoomout'
      Jupiter2.style.animationName = 'zoomin2'
      document.body.style.animationName = 'shift2'

      // reset Jupiter3
      Jupiter3.style.animationName = ''
      Jupiter3.style.top = "1000px"
      Jupiter3.style.left = "-1000px"
      Jupiter3.style.transform = "scale(1)"

      // reset moonDiv
      moonDiv.style.animationName = ''

      setTimeout(() => {
        Jupiter.style.transform = "scale(0)"
        document.body.style.backgroundPositionY = "0px"
        Jupiter2.style.top = "364px"
        Jupiter2.style.left = "670px"
      }, 1000)
    }

    if (counter == 2) {
      Jupiter2.style.animationName = 'zoomout'
      Jupiter3.style.animationName = 'zoomin3'
      document.body.style.animationName = 'shift'

      setTimeout(() => {
        Jupiter2.style.transform = "scale(0)"
        document.body.style.backgroundPositionY = "-300px"
        Jupiter3.style.top = "364px"
        Jupiter3.style.left = "670px"
      }, 1000)
    }

    if (counter == 3) {
      Jupiter3.style.animationName = 'zoomout'

      // reset moon
      moonDiv.style.top = "0px"
      moonDiv.style.left = "-1000px"
      moon.style.animationName = ''
      moon.style.transform = "scale(1)"
      moonDiv.style.animationName = 'reset'

      // reset Jupiter
      Jupiter.style.top = "2000px"
      Jupiter.style.left = "1000px"
      Jupiter.style.transform = "scale(1)"

      // reset Jupiter2
      Jupiter2.style.animationName = ''
      Jupiter2.style.top = "-2000px"
      Jupiter2.style.left = "1000px"
      Jupiter2.style.transform = "scale(1)"

      document.body.style.animationName = 'shift2'

      setTimeout(() => {
        Jupiter3.style.transform = "scale(0)"
        document.body.style.backgroundPositionY = "0px"
        moonDiv.style.top = "364px"
        moonDiv.style.left = "670px"
      }, 1000)
    }
  
    counter++
  }

  }, false);