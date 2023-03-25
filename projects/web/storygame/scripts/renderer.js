setInterval(() => {
    
    // render text boxes
    document.querySelectorAll('.message').forEach(message => {
        const actor = document.getElementById(message.dataset.actor)
        message.style.left = actor.getBoundingClientRect().x + "px";
        message.style.top = actor.getBoundingClientRect().y + "px";
    })

    // initialize actors
    document.querySelectorAll('.actor').forEach(actor => {
        actor.style.position = "absolute";
        window[actor.id] = new Actor(actor); 
    })



}, 10)