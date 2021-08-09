document.addEventListener('keydown', (e) => {
    // console.log (e)
    if(e.key === " ") {
      firing = true
      document.querySelector(".laser").style.visibility = "visible"
        document.querySelector(".laser").animate([
            // keyframes
            { 
              display: "normal",
              transform: 'translate(0, 5px)' ,
              opacity: "100%",
            },
            { 
              transform: 'translate(0, -370px)',
              opacity: "20%",
            },
      
          ], {
            // timing options
            duration: 1200,
            iterations: 1
          });
          setTimeout(()=> {
            firing = false
          }, 1200);
    }
})




document.querySelector(".firebutton").onclick = function () {
  firing = true
  document.querySelector(".laser").style.display = "block"
    document.querySelector(".laser").animate([
        // keyframes
        { 
          transform: 'translate(0, 5px)',
          opacity: "100%"
        },
        { 
          transform: 'translate(0, -370px)',
          opacity: "20%" ,
          display : "none",
        },

      ], {
        // timing options
        duration: 1200,
        iterations: 1
      });
      setTimeout(()=> {
        firing = false
      }, 1200);
    }
    


