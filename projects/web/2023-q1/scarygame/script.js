
// console.log("Hello this is Yehonatan")
document.onkeydown = function(e){
    console.log("Key Code is ",e.key)
    if(e.key == "ArrowUp")
    {
        document.getElementById('GC').style.backgroundImage="url(Wall1.png)"
    }

    if(e.key == "ArrowDown")
    {
        document.getElementById('GC').style.backgroundImage="url(Wall3.png)"
    }


    if(e.key == "ArrowRight")
    {
        document.getElementById('GC').style.backgroundImage="url(Wall2.png)"
        // console.log("Right")
    }



    if(e.key == "ArrowLeft")
    {
        document.getElementById('GC').style.backgroundImage="url(Wall4.png)"
    }


}