async function startGame() {
    // YOUR CODE BELOW 🚀

    angry.hide()
    girlpic.hide()
    picture2.hide()
    picture3.hide()
    picture4.hide()
    picture5.hide()
    picture6.hide()

    mom.whenThisSpriteClicked(() => {
        mom.hide()
        girl.hide()
        picture1.hide()   
        angry.show() 
    })

    girl.whenThisSpriteClicked(() => {
        girl.hide()
        mom.hide()
        picture1.hide()
        girlpic.show()
    })

    angry.whenThisSpriteClicked(() => {
        
    })
     

    picture1.whenThisSpriteClicked(() => {
        picture1.hide()
        picture2.show()
    })

    picture2.whenThisSpriteClicked(() => {
        picture2.hide()
        picture3.show()
    })

    picture3.whenThisSpriteClicked(() => {
        picture3.hide()
        picture4.show()
    })

    picture4.whenThisSpriteClicked(() => {
        picture4.hide()
        picture5.show()
    })

    picture5.whenThisSpriteClicked(() => {
        picture5.hide()
        picture6.show()
    })


}

startGame();