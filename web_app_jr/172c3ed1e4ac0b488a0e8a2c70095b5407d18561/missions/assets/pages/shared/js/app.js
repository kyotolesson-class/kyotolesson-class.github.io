hideImages()
function showImages(){
    let images = document.getElementsByTagName("img");
    for(let i = 0; i<images.length; i++){
        images[i].classList.remove("d-none");
    }
}

function hideImages(){
    let images = document.getElementsByTagName("img");
    for(let i = 0; i<images.length; i++){
        images[i].classList.add("d-none");
    }
}