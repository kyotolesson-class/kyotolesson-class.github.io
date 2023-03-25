let leftPosition=0;
let bottomPosition=0;
let bill=document.querySelector("img")
let running=false

document.addEventListener("keydown",(event)=>{
    console.log(event)
    setTimeout(()=>{
        bill.src="./sprites/standing-bill-final.png"
    },500)
    if(event.key==="ArrowRight" && !running){
        running=true
        leftPosition = leftPosition + 75;
        document.querySelector("img").style.left= leftPosition + "px";
        bill.style.transform="scaleX(1)"
        bill.src="./sprites/bill-running-4.png"
        setTimeout(()=>{
            running=false
        },100)
    }

})

document.addEventListener("keydown",(event)=>{
    console.log(event)
    if(event.key==="ArrowLeft" && !running){
        running=true
        leftPosition = leftPosition - 75;
        document.querySelector("img").style.left= leftPosition + "px";
        bill.style.transform="scaleX(-1)"
        bill.src="./sprites/bill-running-4.png"
        setTimeout(()=>{
            running=false
        },100)
    }
})

document.addEventListener("keydown",(event)=>{
    console.log(event)
    if(event.key==="ArrowDown" && bottomPosition > 0){
        bottomPosition = bottomPosition - 100;
        document.querySelector("img").style.bottom= bottomPosition + "px";
    }
})

document.addEventListener("keydown",(event)=>{
    console.log(event)
    if(event.key==="ArrowUp" && !bill.classList.contains("jumping")){
        // bottomPosition = bottomPosition + 100;
        // document.querySelector("img").style.bottom= bottomPosition + "px";
        bill.classList.add("jumping") 
        setTimeout(()=>{
            bill.classList.remove("jumping") 
        },1500)
       
    }
})


