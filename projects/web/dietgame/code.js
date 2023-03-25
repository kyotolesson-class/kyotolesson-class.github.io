

async function startGame() {
    // YOUR CODE BELOW 🚀
    circleButtonSuper.hide()
    circleButtonConbini.hide()
    xButtonSuper.hide()
    xButtonConbini.hide()

    tomate.hide()
    retasu.hide()
    nasu.hide()
    brocori.hide()
    carote.hide()
    women.hide()
    next.hide()

    women.goTo(100,400)
    next.goTo(100,1000)

    circleButtonResutoran.whenThisSpriteClicked(() => {
        pizza.element.src = "./sprites/resu.jpg"

        circleButtonResutoran.hide()
        xButtonResutoran.hide()

        women.show()
        next.show()
    })

    xButtonResutoran.whenThisSpriteClicked(() => {
        pizza.element.src = "./sprites/sebunn.png"
        circleButtonResutoran.hide()
        xButtonResutoran.hide()
        circleButtonConbini.show()
        xButtonConbini.show()
    })

    circleButtonConbini.whenThisSpriteClicked(() => {
        pizza.hide()
        circleButtonConbini.hide()
        xButtonConbini.hide()

    tomate.show()
    retasu.show()
    nasu.show()
    brocori.show()
    carote.show()
    })


    xButtonConbini.whenThisSpriteClicked(() => {
        pizza.element.src = "./sprites/supermarket.png"
        
    })












}

startGame();