async function startGame() {
    // FOR HELP, GO TO: README.md
    // 👇 WRITE YOUR CODE BELOW THIS PART 👇

    let smoking = true;

    const woman = document.getElementById('woman')
    const tabako = document.getElementById('tabako')

    hand.turnLeft(45)
    hand.setSizeTo(80)

    forever(() => {
        hand.goTo('mouse')
        if (smoking) {
            cigarette.goTo('woman')
        }
        if(mouseDown) {
            hand.turnRight(25)

            setTimeout(() => {
                hand.turnRight(-25)
            }, 200)
            
            if(hand.isTouching('img-cigarette') && smoking) {
                smoking = !smoking
                hand.broadcast('slap')
            }
        }
    })

    // this is the part where the hand slaps
    cigarette.whenIReceive('slap', () => {
        cigarette.element.animate([
            {
               transform: "rotate(0deg)",
               left: "400px"
            },
            {
               transform: "rotate(360deg)",
               left: "2000px"
            }
        ],
        {
            iterations: 1,
            duration: 1000
        })
        cigarette.element.style.left = "2000px"
        woman.src = "./sprites/angry-woman.jpg"

        setTimeout(() => {
            woman.animate([
                {
                    right: "0px"
                },
                {
                    right: "-2000px"
                },
                {
                    right: "0px"
                }
            ], {
                iterations: 1,
                duration: 1000
            })
            
            setTimeout(() => {
                woman.src = "./sprites/woman.png"

                setTimeout(() => {
                    cigarette.element.style.left = "450px"
                    cigarette.element.style.transform = "rotate(0deg)"
                    smoking = true;
                }, 1000)

                setTimeout(() => {
                    tabako.animate([
                        {
                            marginTop: "480px"
                        },
                        {
                            marginTop: "350px"
                        },
                        {
                            marginTop: "480px"
                        }
                    ],{
                        duration: 500,
                        iterations: 1
                    })
                }, 800)
                
            }, 250)
        }, 500)
    })


    // 👆 WRITE YOUR CODE ABOVE THIS PART 👆
    // 🛑 STOP 🛑
}

// DON'T CHANGE THIS ❌❌❌
startGame();
// DON'T CHANGE THIS ❌❌❌