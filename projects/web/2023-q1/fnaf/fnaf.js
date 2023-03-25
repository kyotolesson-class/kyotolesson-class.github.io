// 25/02/2023 Daniel

let i =0;
let top_cord =0;
let left_cord =0;
let xfreddy = 0;
let yfreddy = 0;
let currentColumn = 0;
let currentRow = 0;
let currentColumnv = 0;
let currentRowv = 0;
let freddy = document.querySelector("#freddy");
let vannessa= document.querySelector("#vannessa");
let key_1 = document.querySelector("#key1");
let key_2 = document.querySelector("#key2");
let key_3 = document.querySelector("#key3");
let theTable = document.getElementById("mytable");

let chest_1 = document.querySelector("#chest1");
let chest_2 = document.querySelector("#chest2");
let chest_3 = document.querySelector("#chest3");


let tableWidth = 59
let key_1ComputeColor = getComputedStyle(key_1).backgroundColor;
let key_2ComputeColor = getComputedStyle(key_2).backgroundColor;
let key_3ComputeColor = getComputedStyle(key_3).backgroundColor;

let chest_1ComputeColor = getComputedStyle(chest_1).backgroundColor;
let chest_2ComputeColor = getComputedStyle(chest_2).backgroundColor;
let chest_3ComputeColor = getComputedStyle(chest_3).backgroundColor;

let xVannessa = 0;
let yVannessa = 0;

resizeActors();
let key1_status = 0;
let key2_status = 0;
let key3_status = 0;
let xp = 0;
let ip = 0;
let chest_count = 0;
let game_status =0;
// let positions = [[12,24],[13,24]];
let positions =  [[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[4,3],[4,4],[5,4],[5,5],[6,5],[6,6],[6,7],[7,7],[7,8],[8,8],[8,9],[8,10],[8,11],[7,11],[6,11],[6,10],[5,10],[4,10],[4,11],[4,12],[5,12],[5,13],[5,13],[6,13],[7,13],[7,12],[7,11],[6,11],[6,10],[5,10],[4,10],[4,11],[4,12],[4,13],[5,13],[6,13],[7,13],[8,13],[9,13],[9,12],[9,11],[10,11],[11,11],[12,11],[12,10],[12,9],[12,8],[12,7],[12,6],[12,5],[11,5],[10,5],[10,4],[9,4],[10,4],[11,4],[11,3],[12,3],[13,3],[14,3],[15,3],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[14,8],[14,9],[14,10],[13,10],[13,11],[13,12],[13,13],[13,14],[13,15],[13,16],[13,17],[13,18],[13,19],[14,19],[14,20],[13,20],[12,20],[11,20],[11,21],[10,21],[9,21],[9,22],[8,22],[7,22],[6,22],[5,22],[5,23],[5,24],[4,24],[3,24],[2,24],[2,23],[1,23],[1,22],[1,21],[0,21],[0,20],[0,19],[0,18],[0,17],[0,16],[1,16],[2,16],[3,16],[4,16],[4,15],[4,14],[4,13],[4,12],[4,11],[4,10],[3,10],[2,10],[1,10],[1,9],[1,8],[1,7],[1,6],[1,5],[1,4],[0,4],[0,3],[0,2],[0,1]];



top_cord = theTable.rows[currentRow + 1].cells[currentColumn].getBoundingClientRect().y;
currentRow += 1;
freddy.style.top= top_cord + 'px';





top_cord = theTable.rows[currentRow + 1].cells[currentColumn].getBoundingClientRect().y;
currentRow += 1;
freddy.style.top= top_cord + 'px';



document.getElementById("freddyded").style.display = "none"
document.getElementById("oof").style.display = "none"
document.getElementById("winner").style.display = "none"



document.addEventListener('keydown', e => {
    if (game_status == 0) {
    if(i === 0) {
        if (e.key === "w") {
            if (!theTable.rows[currentRowv - 1].cells[currentColumnv].classList.contains("blue"))
            {
                top_cord = theTable.rows[currentRowv - 1].cells[currentColumnv].getBoundingClientRect().y;
                currentRowv -= 1;
                vannessa.style.top= top_cord + 'px';
            }
            
        }
        if (e.key === "s") {
            if (!theTable.rows[currentRowv + 1].cells[currentColumnv].classList.contains("blue"))
            {
                top_cord = theTable.rows[currentRowv + 1].cells[currentColumnv].getBoundingClientRect().y;
                currentRowv += 1;
                vannessa.style.top= top_cord + 'px';

            }
            
        }
        if (e.key === "d") {
            
            if (!theTable.rows[currentRowv].cells[currentColumnv + 1].classList.contains("blue"))
            {
                left_cord = theTable.rows[currentRowv].cells[currentColumnv + 1].getBoundingClientRect().x;
                currentColumnv += 1;
                vannessa.style.left= left_cord + 'px';
                vannessa.style.transform = "scaleX(1)";
            }

        }
        if (e.key === "a" ) {

            if (!theTable.rows[currentRowv].cells[currentColumnv - 1].classList.contains("blue"))
            {
                left_cord = theTable.rows[currentRowv].cells[currentColumnv - 1].getBoundingClientRect().x;
                currentColumnv -= 1;
                vannessa.style.left= left_cord + 'px';
                vannessa.style.transform = "scaleX(-1)";

            }
        }

    
    
    }

}})




setInterval(function(){
    console.log("xfreddy",currentColumn)
    console.log("yfreddy",currentRow)
    console.log("xVannessa",currentColumnv)
    console.log("yVannessa",currentRowv)
    if (currentRow==currentRowv) {
        if (currentColumn==currentColumnv){
            console.log("contact")
            document.getElementById("freddy").style.display =("none")
            document.getElementById("freddyded").style.display =("flex")
            document.getElementById("oof").style.display =("flex")
            document.getElementById("winner").style.display =("none")
            game_status = 1;

        }

    }
    if (chest_count==3){
        document.getElementById("winner").style.display ="flex"
        game_status = 1;
    }

},10)




document.addEventListener('keydown', e => {
    if (game_status == 0) {
    
    
    if(i === 0) {
        if (e.key === "ArrowUp") {
          
            if(currentRow>0){

                // console.log(theTable.rows[currentRow].cells[currentColumn].getBoundingClientRect().y);


                if (theTable.rows[currentRow - 1].cells[currentColumn].id =="chest1")
                {

                    

                   
                    if( key1_status == 1){
                        
                        
                        chest_1.style.backgroundColor = "transparent";
                        chest_1.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest1 Opened");
                }
                }

                if (theTable.rows[currentRow - 1].cells[currentColumn].id =="chest2")
                {
                   
                    if( key2_status == 1){
                        
                       
                        chest_2.style.backgroundColor = "transparent";
                        chest_2.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest2 Opened");
                }
                }

                if (theTable.rows[currentRow - 1].cells[currentColumn].id =="chest3")
                {
                   
                    if( key3_status == 1){
                        
                        
                        chest_3.style.backgroundColor = "transparent";
                        chest_3.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest3 Opened");
                }
                }



            if (theTable.rows[currentRow-1].cells[currentColumn].id =="key3")
            {   
                if(key3_status == 0)
                {
                key_3.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_3ComputeColor;
                key_3.style.backgroundColor = "transparent";
                // console.log("Key up Found");
                key3_status =1;
    
                }
            }
            
            if (theTable.rows[currentRow-1].cells[currentColumn].id =="key2")
            {   
                if(key2_status == 0)
                {
                key_2.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_2ComputeColor;
                key_2.style.backgroundColor = "transparent";
                // console.log("Key Found up");
                key2_status =1;
                }
            }

            if (theTable.rows[currentRow-1].cells[currentColumn].id =="key1")
            {
                if(key1_status == 0)
                {
                key_1.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_1ComputeColor;
                key_1.style.backgroundColor = "transparent";
                // console.log("up Key Found");
                key1_status =1;
            }

                
            }

            if (!theTable.rows[currentRow - 1].cells[currentColumn].classList.contains("blue"))
            {
                top_cord = theTable.rows[currentRow - 1].cells[currentColumn].getBoundingClientRect().y;
                currentRow -= 1;
                freddy.style.top= top_cord + 'px';
            }
        }
            
        }


        if (e.key === "ArrowDown") {

            
            if(currentRow<  15){

                if (theTable.rows[currentRow + 1].cells[currentColumn].id =="chest1")
                {
                   
                    if( key1_status == 1){
                        
                        
                        chest_1.style.backgroundColor = "transparent";
                        chest_1.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest1 Opened");
                }
                }

                if (theTable.rows[currentRow + 1].cells[currentColumn].id =="chest2")
                {
                   
                    if( key2_status == 1){
                        
                        
                        chest_2.style.backgroundColor = "transparent";
                        chest_2.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest2 Opened");
                }
                }

                if (theTable.rows[currentRow + 1].cells[currentColumn].id =="chest3")
                {
                   
                    if( key3_status == 1){
                        
                        
                        chest_3.style.backgroundColor = "transparent";
                        chest_3.style.backgroundImage  = "url('./image/room1/chest_open.png')";ip = ip + 1;
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest3 Opened");
                }
                }




            if (theTable.rows[currentRow+1].cells[currentColumn].id =="key3")
            {   
                if(key3_status == 0)
                {
                key_3.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_3ComputeColor;
                key_3.style.backgroundColor = "transparent";
                // console.log("Key Found");
                key3_status = 1;
                }
            }
            
        
            if (theTable.rows[currentRow+1].cells[currentColumn].id =="key2")
            {   
                if(key2_status == 0)
                {
                key_2.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_2ComputeColor;
                key_2.style.backgroundColor = "transparent";
                // console.log("Key Found down");
                key2_status  = 1;
                }
            }

        
            if (theTable.rows[currentRow+1].cells[currentColumn].id =="key1")
            {
                if(key1_status == 0)
                {
                key_1.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_1ComputeColor;
                key_1.style.backgroundColor = "transparent";   
                // console.log(" down Key Found");
                key1_status =1;
                }
            }


            if (!theTable.rows[currentRow + 1].cells[currentColumn].classList.contains("blue"))
            {
                top_cord = theTable.rows[currentRow + 1].cells[currentColumn].getBoundingClientRect().y;
                currentRow += 1;
                freddy.style.top= top_cord + 'px';

            }
        }
            
        }
        if (e.key === "ArrowRight") {


            if(currentColumn<  26){


                if (theTable.rows[currentRow].cells[currentColumn + 1].id =="chest1")
                {
                   
                    if( key1_status == 1){
                        
                        
                        chest_1.style.backgroundColor = "transparent";
                        chest_1.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest1 Opened");
                }
                }

                if (theTable.rows[currentRow].cells[currentColumn + 1].id =="chest2")
                {
                   
                    if( key2_status == 1){
                        
                        
                        chest_2.style.backgroundColor = "transparent";
                        chest_2.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest2 Opened");
                }
                }

                if (theTable.rows[currentRow].cells[currentColumn +1].id =="chest3")
                {
                   
                    if( key3_status == 1){
                        
                        
                        chest_3.style.backgroundColor = "transparent";
                        chest_3.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest3 Opened");
                }
                }



            if (theTable.rows[currentRow].cells[currentColumn+1].id =="key3")
            {
                if(key3_status == 0)
                {
                key_3.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_3ComputeColor;
                key_3.style.backgroundColor = "transparent";
                // console.log("Key Found");
                key3_status = 1;
                }
            }
            
            if (theTable.rows[currentRow].cells[currentColumn+1].id =="key2")
            {   
                if(key2_status == 0)
                {
                key_2.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_2ComputeColor;
                key_2.style.backgroundColor = "transparent";
                // console.log("Key Found right");
                key2_status = 1;
                }
            }

            if (theTable.rows[currentRow].cells[currentColumn+1].id =="key1")
            {
                if(key1_status == 0)
                {
                key_1.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_1ComputeColor;
                key_1.style.backgroundColor = "transparent";
                // console.log("right Key Found");
                key1_status = 1;
                }
                
            }
            
            
            if (!theTable.rows[currentRow].cells[currentColumn + 1].classList.contains("blue"))
            {
                left_cord = theTable.rows[currentRow].cells[currentColumn + 1].getBoundingClientRect().x;
                currentColumn += 1;
                freddy.style.left= left_cord + 'px';
                freddy.style.transform = "scaleX(1)";
            }
        }

        }
        if (e.key === "ArrowLeft" ) {
            // console.log(currentRow)
            // console.log(currentColumn)  
            if(currentColumn > 0){

        

                if (theTable.rows[currentRow].cells[currentColumn - 1].id =="chest1")
                {
                   
                    if( key1_status == 1){
                        
                        
                        chest_1.style.backgroundColor = "transparent";
                        chest_1.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest1 Opened");
                }
                }

                if (theTable.rows[currentRow].cells[currentColumn -1].id =="chest2")
                {
                   
                    if( key2_status == 1){
                        
                        
                        chest_2.style.backgroundColor = "transparent";
                        chest_2.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest2 Opened");
                }
                }

                if (theTable.rows[currentRow].cells[currentColumn -1].id =="chest3")
                {
                   
                    if( key3_status == 1){
                        
                        
                        chest_3.style.backgroundColor = "transparent";
                        chest_3.style.backgroundImage  = "url('./image/room1/chest_open.png')";
                        freddy.style.backgroundColor = "transparent";
                        chest_count++;
                        // console.log("Chest3 Opened");
                }
                }

            if (theTable.rows[currentRow].cells[currentColumn-1].id =="key3")
            {
                if(key3_status == 0)
                {
                key_3.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_3ComputeColor;
                key_3.style.backgroundColor = "transparent";
                // console.log("Key Found");
                key3_status=1;
                }
            }
            
            if (theTable.rows[currentRow].cells[currentColumn-1].id =="key2")
            {   
                if(key2_status == 0)
                {
                key_2.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_2ComputeColor;
                key_2.style.backgroundColor = "transparent";
                // console.log("Key Found left");
                key2_status = 1;
                }
            }

            if (theTable.rows[currentRow].cells[currentColumn-1].id =="key1")
            {
                if(key1_status == 0)
                {
                key_1.style.backgroundImage  = "none";
                freddy.style.backgroundColor = key_1ComputeColor;
                key_1.style.backgroundColor = "transparent";
                // console.log("left Key Found");
                key1_status =1;
                }
            }

            if (!theTable.rows[currentRow].cells[currentColumn - 1].classList.contains("blue"))
            {
                left_cord = theTable.rows[currentRow].cells[currentColumn - 1].getBoundingClientRect().x;
                currentColumn -= 1;
                freddy.style.left= left_cord + 'px';
                freddy.style.transform = "scaleX(-1)";

            }
        }

        }
    
    }
    }})



function resizeActors(){
    freddy.style.width = theTable.rows[0].cells[0].getBoundingClientRect().width + "px";
    vannessa.style.width = theTable.rows[0].cells[0].getBoundingClientRect().width + "px";
}


setInterval(function () {


    if (game_status == 0) {

    let decode;
    let C,D,next;
 

    C = positions[ip]; 
    // console.log('c',C[0],C[1])

    next = ip + 1;
    D = positions[next];
    console.log("next",next)
    currentColumnv = C[1];
    currentRowv = C[0];

//     // let positions = [[0,0],[0,1],[1,1],[1,2],[2,2]];
//     // [[0,0],[0,1],[0,2],[1,2],[1,3]];

// console.log('c',C[0],C[1])
// console.log('d',D[0],D[1])




console.log("length",positions.length)
console.log("positions index",ip);

if (ip == positions.length-1)
    {

    ip = 0;
    decode = 0;
    console.log("Reset")
    vannessa.style.left = 0 + 'px';
    vannessa.style.top = 0 + 'px';


}















if( C[0] == D[0]){
    if ((D[1] - C[1])>0)
    {
        decode = "d";
     
    }

    if ((D[1] - C[1]) <0)
    {
        decode = "a";
       
    }
}

if( C[1] == D[1]){
    if ((D[0] - C[0])>0)
    {
        decode = "s";
    }

    if ((D[0] - C[0]) <0)
    {
        decode = "w";
    }
}




    ip = ip + 1;


    if (decode === "w") {
        if (!theTable.rows[currentRowv - 1].cells[currentColumnv].classList.contains("blue"))
        {
            top_cord = theTable.rows[currentRowv - 1].cells[currentColumnv].getBoundingClientRect().y;
            currentRowv -= 1;
            vannessa.style.top= top_cord + 'px';
            // console.log("Top")
            // console.log(currentRowv,currentColumnv);
        }
        
    }

    if (decode === "s") {
        if (!theTable.rows[currentRowv + 1].cells[currentColumnv].classList.contains("blue"))
        {
            top_cord = theTable.rows[currentRowv + 1].cells[currentColumnv].getBoundingClientRect().y;
            currentRowv += 1;
            vannessa.style.top= top_cord + 'px';
            // console.log("Down")
            // console.log(currentRowv,currentColumnv);

        }
        
    }


    if ( decode === "d") {
        
        if (!theTable.rows[currentRowv].cells[currentColumnv + 1].classList.contains("blue"))
        {
            left_cord = theTable.rows[currentRowv].cells[currentColumnv + 1].getBoundingClientRect().x;
            currentColumnv += 1;
            vannessa.style.left= left_cord + 'px';
            vannessa.style.transform = "scaleX(1)";
            // console.log("Right")
            // console.log(currentRowv,currentColumnv);
        }

    }


    if (decode === "a" ) {

        if (!theTable.rows[currentRowv].cells[currentColumnv - 1].classList.contains("blue"))
        {
            left_cord = theTable.rows[currentRowv].cells[currentColumnv - 1].getBoundingClientRect().x;
            currentColumnv -= 1;
            vannessa.style.left= left_cord + 'px';
            vannessa.style.transform = "scaleX(-1)";
            // console.log("Left")
            //console.log(currentRowv,currentColumnv);

        }
    }





    // console.log("i",ip)
//     if (ip > positions.length - 1)
//     {

//     ip = 0;
//     decode = 0;
//     console.log("Reset")
//     vannessa.style.left = 0 + 'px';
//     vannessa.style.top = 0 + 'px';


// }
    }


   }, 100);





