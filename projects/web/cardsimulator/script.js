

 
let Faces = ["J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10]           
let suits =["♠️", "♥️", "♦️", "♣️"]


let text = "";
for (let i = 1; i < 53; i++) {
    text += Faces [Math.round(Math.random() *12)] + " " + suits[Math.round(Math.random() *3)] + "<br>" ;
}



for (i=0; i<51; i++) {
    document.querySelector('.cards').insertAdjacentHTML('afterbegin', '<div class="card"></div>')
}

// select all cards and do something when you click on it. card.onclick
document.querySelectorAll('.card').forEach(card => {
    card.onclick = function(){
        // When you click on the card if it's says hello it means it's working
        console.log("hello") 
        // the designs
        this.classList.add('front')
        this.style.background = "white"

        let Faces = ["J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10]           
        let suits =["♠️", "♥️", "♦️", "♣️"]
        this.innerText = Faces [Math.round(Math.random() *12)] + " " + suits[Math.round(Math.random() *3)]


    
     card.animate([
        {marginTop: "0px" },
        {marginTop: "300px"}
    
     ], {
         interations: 1,
         duration: 2300

     })

     card.style.marginTop = "300px"


     card.animate([
        {transform: "scaleX(1)" },
        {transform: "scaleX(-1)" }
     ],

     {
        interations: 1,
        duration: 2300

    })




    };
})

