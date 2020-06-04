(()=>{
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = document.getElementsByTagName("h1");
    date[0].children[0].innerHTML = months[month];
    date[0].children[1].innerHTML = day;
    date[0].children[2].innerHTML = year;
})();