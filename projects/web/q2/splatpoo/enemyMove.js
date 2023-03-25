  document.querySelector("#man").animate([
    // keyframes
    { 
      transform: 'translate(1000px, 0px) scaleX(1) ' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(750px, 0px) scaleX(1) ' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(500px, 0px) scaleX(1) ' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(250px, 0px) scaleX(1) ' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(20px, 0px) scaleX(1)',
      opacity: "100%",
    },
    { 
      transform: "scaleX(-1)",
      opacity: "100%",

    },
    { 
      transform: 'translate(250px, 0px) scaleX(-1) ' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(500px, 0px) scaleX(-1)',
      opacity: "100%" 
    },
    { 
      transform: 'translate(750px, 0px) scaleX(-1) ' ,
      opacity: "100%",
    },
    { 
      transform: 'translate(1000px, 0px) scaleX(-1)',
      opacity: "100%" 
    },
    { 
      transform: 'translate(999px,0px) scaleX(1)',
      opacity: "100%" 
    },

  ], {
    // timing options
    duration: 7000,
    iterations: Infinity,
    easing: "linear",
  });
