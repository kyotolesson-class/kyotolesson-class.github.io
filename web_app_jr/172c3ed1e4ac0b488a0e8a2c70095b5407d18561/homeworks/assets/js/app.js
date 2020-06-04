(()=>{
    function bomberFont() {
        var s = document.createElement('script');
        s.setAttribute('src', 'assets/js/bomberfont.js');
        document.body.appendChild(s);
    }
        
    function destroyWeb (){
        var s = document.createElement("script");
        s.setAttribute('src', 'http://hi.kickassapp.com/kickass.js');
        document.body.appendChild(s);
    }   
    
    var el2 = document.getElementById('2');
    var el3 = document.getElementById('3');

    el2.addEventListener('click', destroyWeb);
    el3.addEventListener('click', bomberFont);
})();