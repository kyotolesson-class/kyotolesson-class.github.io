setInterval(() => {
    
    // render text boxes
    document.querySelectorAll('.message').forEach(message => {
        const actor = document.getElementById(message.dataset.actor)
        message.style.left = actor.getBoundingClientRect().x - actor.width / 2 + "px";
        message.style.top = actor.getBoundingClientRect().y - actor.height * 1.5  + "px";
    })

    // initialize actors
    document.querySelectorAll('.actor').forEach(actor => {
        actor.style.position = "relative";
        window[actor.id] = new Actor(actor); 
    })



}, 10)