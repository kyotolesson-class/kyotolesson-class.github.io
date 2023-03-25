async function startGame() {
let level = 1;

baking1.hide()

deco.hide()

chocopen.hide()
oven.say('choose the right thing')

    // YOUR CODE BELOW 🚀
oven.goTo(-300, 0);
cupcake1.goTo(600, 100);
cupcake2.goTo(600, -70);
cupcake3.goTo(600, -200);
baking1.goTo(0,0)
deco.goTo(0,0)
chocopen.goTo(600,-70)

let draggingCupcake1 = false;

cupcake1.whenThisSpriteClicked(() => {
    draggingCupcake1 = !draggingCupcake1;
})

forever(() => {
    if(draggingCupcake1) {
        cupcake1.goTo('mouse')
    }
})

let draggingCupcake2 = false;

cupcake2.whenThisSpriteClicked(() => {
    draggingCupcake2 = !draggingCupcake2;
})

forever(() => {
    if(draggingCupcake2) {
        cupcake2.goTo('mouse')
    }
})

let draggingCupcake3 = false;

cupcake3.whenThisSpriteClicked(() => {
    draggingCupcake3 = !draggingCupcake3;
})


forever(() => {
    if(draggingCupcake3) {
        cupcake3.goTo('mouse')
    }
})

// let draggingchocopen = false;

// chocopen.whenThisSpriteClicked(() => {
//     draggingchocopen = !draggingchocopen;
// })


// forever(() => {
//     if(draggingchocopen) {
//     chocopen.goTo('mouse')
//     }
// })

forever(() => {
    if(oven.isTouching('cupcake1')) {
            oven.element.src = 'sprites/oven_toaster-2.png'
            oven.say('click the oven to close it')
            oven.whenThisSpriteClicked(() => {
                if (level === 1) {
                    cupcake1.element.style.display = "none"
                    oven.element.src = 'sprites/oven_toaster.png'
                    level++;                
                } else if (level === 2) {
                    oven.hide()
                    cupcake2.hide()
                    cupcake3.hide()
                    baking1.show()
                    deco.show()
                    chocopen.show()
                }
            })
    }
        
    if(oven.isTouching('cupcake2')) {
        oven.element.src = 'sprites/wrong-3.png'
        oven.element.style.width = "400px"
    }
    if(oven.isTouching('cupcake3')) {
        oven.element.src = 'sprites/wrong-4.png'
    }
}) 

chocopen.whenThisSpriteClicked(() => {
    

    chocopen.pointInDirection(340)
    forever(() => {
        chocopen.goTo('mouse')
        if (mouseDown) {
            document.body.insertAdjacentHTML('afterbegin',` 
                <div class="pixel" style="top: ${chocopen.element.style.top}; left: ${chocopen.element.style.left}"></div>`
            )
        }
    })
})





}

startGame();