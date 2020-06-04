(()=>{
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const date = document.getElementsByTagName("h1");
    console.log(date)
    date[0].children[0].innerHTML = months[month];
    date[0].children[1].innerHTML = day;
    date[0].children[2].innerHTML = year;   

    const main = document.getElementsByTagName("main");

    var section1 = main[0].children[0]
    var section2 = main[0].children[1]
    var section3 = main[0].children[2]


})
();