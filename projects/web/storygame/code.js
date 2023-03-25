
let kuizu ;

let neko = true


async function startGame() {
    // YOUR CODE BELOW 🚀
    cat.goTo(0, -200);
    kuro.goTo(800,-200)
    hito.goTo(-250,-200)
    yaba.goTo(-250,-200)
    mii.goTo(-900,0)
    ana.goTo(1000,1000)
    kada.goTo(1000,1000)
    nia.goTo(1000,1000)
    su.goTo(-250,-230)
    o.goTo(0,-160)
    
     yaba.hide()
     mii.hide()
     ana.hide()
     nia.hide()
     su.hide()
     o.hide()   
     h1.hide()
     

   forever(async() => {
        hito.turnClockwise(5)

        if(cat.isTouching('kuro')) {
            kuro.goTo(1000,1000)
            hito.hide()
            yaba.show()
            yaba.element.style.transform ="scale(-1, 1)"
            await cat.wait(1)
            yaba.hide() 
            cat.hide()
            kuro.hide()
            document.body.style.background = "url('./backdrops/dessin.png')"
            document.body.style.backgroundSize="cover"
            await cat.wait(4)
            document.body.style.background = "url('./backdrops/noir.png')"
            await cat.wait(1)
            document.body.style.background = "url('./backdrops/rouya.png')"
            document.body.style.backgroundSize="cover"
            mii.goTo(100,-200)
            mii.show()
            ana.goTo(500,-100)
        }
    })

    forever(async() => {
        if(mii.isTouching('ana')){
            ana.show()
            await mii.wait(1)
            ana.goTo(1000,1000)
            document.body.style.background = "url('./backdrops/room.jpg')"
            document.body.style.backgroundSize="cover"
            await kuro.wait(2)
            kada.show()
            kada.goTo(-250,-200)
            await kada.wait(1)
            kada.say('お前ここで何してるんだ',3)
            await kada.wait(4)
            kada.say('あの部屋の壁を壊すとは...',3)
            await kada.wait(3)
            kada.say('あそこに入れよう',2)
            await kada.wait(3)
            document.body.style.background = "url('./backdrops/tika.jpg')"
            document.body.style.backgroundSize="cover"
            mii.goTo(-200,-200)
            await kada.wait(1)
            kada.say('ゴメンな、これは上からの命令だから逆らえないんだ',4)
            await kada.wait(4)
            kada.say('じゃ！',1)
            kada.hide()
            nia.goTo(130,-200)
        }

        forever(async()=> {
            if(mii.isTouching('nia')&& neko == true){
                neko = false
                nia.show()
                await mii.wait(1)
                nia.goTo(1000,1000)
                nia.hide()
                document.body.style.background = "url('./backdrops/ruined.jpg')"
                document.body.style.backgroundSize="cover"
                await kada.wait(1)
                kada.show()
                await kada.wait(1)
                kada.say('お前あの壁も壊したのか。。。',2)
                await kada.wait(2)
                kada.hide()
                su.show()
                su.say('.......',2)
                await su.wait(2)
                su.hide()
                kada.show()
                await kada.wait(1)
                kada.say('今ボスに、お前が相当強いことを報告したら飼い主に返してこいと言われた',6)
                await kada.wait(6)
                kada.say('この家ごと壊されて情報が外に漏れたら大変だ',5)
                await kada.wait(5)
                kada.say('そうだ、お前が帰る前にこの組織のことを話してやろう',5)
                await kada.wait(5)
                kada.say('どうせ話し相手もいないし、暇だし',3)
                await kada.wait(3)
                kada.say('この組織のボスは。。。',2)
                await kada.wait(2)
                kada.say('猫が大好きなんだ',2)
                await kada.wait(3)
                kada.say('だからボスは部下に盗ませた猫に囲まれて生きてるんだ（ボスお金ないからなー）',6)
                await kada.wait(6)
                kada.say("だがこれは普通に犯罪だから情報が漏れたらヤバい",4)
                await kada.wait(4)
                kada.say('そうゆう理由でお前を拐った',3)
                await kada.wait(3)
                kada.say('だがお前は強すぎて可愛くなさそうだから飼い主に返してこいと言われた',5)
                await kada.wait(5)
                kada.say('。。。。と、言う事でクイズを始めます！',3)
                await kada.wait(3)
                kada.say('あ、言い忘れてた',2)
                await kada.wait(2)
                kada.say('ボスは猫ちゃんを返す前にその子とクイズをしろって言われてるんだ',5)
                await kada.wait(5)
                kada.say('あの人猫と同じくらいにクイズが好きだからな',4)
                await kada.wait(4)
                kada.say('だから猫とクイズをしてるところを録音しないといけないんだ！（宿題の次にめんどくさい！！）',6)
                await kada.wait(6)
                kada.say('だが俺達も猫マニアだからクイズが終わったらボスに報告せずにその子達を飼ってるんだけどな！！',5)
                await kada.wait(5)
                kada.hide()
                su.show()
                su.say('じゃあとりあえず始めよう、、、録音してと、、、',5)
                await su.wait(3)
                let kuizu = prompt ("一問目：星のカービィディスカバリーは３月２５日に発売されますか！？")
                kuizu = prompt("二問目：星のカービィは今年で３０周年を迎えますか！？")
                kuizu = prompt("三問目：星のカービィは可愛いですか！？")
                await su.wait(1)
                kada.say('はいクイズ終わり、、、',2)
                su.hide()   
                kada.show()
                await kada.wait(3)
                kada.say('ってあれ？なんで君答えれたの？え？君もしかしで喋れる猫？',4)
                await kada.wait(4)
                kada.say('これはボスに報告せねば！！！',3)
                kada.hide()
                su.show()
                await su.wait(3)
                kada.say('わっ！もう返事が来た！！！',2)
                await su.wait(2)
                kada.say('すぐ連れてこいか、、、',2)
                await kada.wait(2)
                kada.say('飼いたかったなぁ。。。',2)
                await kada.wait(2)
                su.hide()
                kada.show()
                kada.say('まぁいっか！！持ってきたら給料上がるかもしれないし！',3)
                await kada.wait(3)
                mii.hide()  
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(2)
                document.body.style.background = "url('./backdrops/rain.jpg')"
                document.body.style.backgroundSize="cover"
                kada.show()
                mii.show()
                document.getElementById("kada").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                kada.element.style.left= "-500px"

                document.getElementById("mii").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                mii.element.style.left= "-500px"
                await kada.wait(1.5)
                // kada.goTo(1500,1000)
                // mii.goTo(1500,1000)
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(1)
                document.body.style.background = "url('./backdrops/jutaku.jpg')"
                document.body.style.backgroundSize="cover"
                kada.show()
                mii.show()
                document.getElementById("kada").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                kada.element.style.left= "-500px"

                document.getElementById("mii").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                mii.element.style.left= "-500px"
                await kada.wait(1.5)
                // kada.goTo(1500,1000)
                // mii.goTo(1500,1000)
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(1)
                document.body.style.background = "url('./backdrops/chapel.jpg')"
                document.body.style.backgroundSize="cover"
                kada.show()
                mii.show()
                document.getElementById("kada").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                kada.element.style.left= "-500px"

                document.getElementById("mii").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                mii.element.style.left= "-500px"
                await kada.wait(1.5)
                // kada.goTo(1500,1000)
                // mii.goTo(1500,1000)
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(1)
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/tengoku.jpg')"
                document.body.style.backgroundSize="cover"
                kada.show()
                mii.show()
                document.getElementById("kada").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                kada.element.style.left= "-500px"

                document.getElementById("mii").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                mii.element.style.left= "-500px"
                await kada.wait(1.5)
                // kada.goTo(1500,1000)
                // mii.goTo(1500,1000)
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(1)
                document.body.style.background = "url('./backdrops/moon.jpg')"
                document.body.style.backgroundSize="cover"
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(1)
                document.body.style.background = "url('./backdrops/space.jpg')"
                document.body.style.backgroundSize="cover"
                kada.show()
                mii.show()
                document.getElementById("kada").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                kada.element.style.left= "-500px"

                document.getElementById("mii").animate([
                    {
                        left : "2000px"
                    },
                    {
                        left : "-500px"
                    },
                ],{
                    duration: 1500,
                    iterations: 1
                })
                mii.element.style.left= "-500px"
                await kada.wait(1.5)
                // kada.goTo(1500,1000)
                // mii.goTo(1500,1000)
                mii.hide()
                kada.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await cat.wait(1)
                document.body.style.background = "url('./backdrops/ocean.jpg')"
                document.body.style.backgroundSize="cover"
                kada.say('はぁ、、はぁ、なんかいろいろ疲れた、、、')
                mii.show()
                kada.show()
                kada.goTo(900,-150)
                mii.goTo(900,-150)
                await repeat(() => {
                    kada.move(-10)
                    mii.move(-10)
                }, 75)
                o.show()
                o.say('待って！！！！',2)
                await kada.wait(2)
                kada.say('お前はこいつの飼い主！！',2)
                await o.wait(2)
                o.say('そう！！だからうちの猫は返してもらうよ！！',2)
                await kada.wait(2)
                kada.say('え！？それは給料が減るから嫌だ！！',2)
                await o.wait(2)
                o.say('給料の問題かよ！！',2)
                await o.wait(2)
                o.say('...じゃあお金あげるから猫返して！！',2)
                await kada.wait(2)
                kada.say('はい！！！わかりました！！返します！！',2)
                await o.wait(2)
                o.say('決断早！!',2)
                await kada.wait(2)
                kada.say('その前にこの猫さんとクイズをさせて！！',3)
                await o.wait(3)
                o.say('猫とクイズ？猫は喋れないからクイズにならないのでは？別にいいけど',3)
                await kada.wait(3)
                kada.say('ありがとう！！（どうせなら最後に生の猫の声を聞きたい！）',3)
                await kada.wait(3)
                kada.say('さぁ始めます！！',2)
                await kada.wait(2)
                let zu = prompt ("一問目：1+1000=")
                zu = prompt("二問目：僕はテンションが上がりすぎて意味のわからたいことを言いますか！？")
                zu = prompt("Tercera pregunta: ¿Qué idioma es este?!??")
                zu = prompt("மூன்றாவது கேள்வி:இது என்ன மொழி?!!!??")
                zu = prompt("تۆتىنچى سوئال: بۇ قايسى تىل؟")
                zu = prompt("第六個問題：這是什麼語言？!??")
                zu = prompt("Седьмой вопрос: Я сошла с ума! ??")
                zu = prompt("Έβδομη ερώτηση: Τρελάθηκα! ??")
                zu = prompt("सातौं प्रश्न: के म पागल भएँ! ??")
                zu = prompt("די זיבעטע שאלה: בין איך משוגע געווארן! ??")
                zu = prompt("Жетінші сұрақ: Мен жынды болып кеттім бе! ??") 
                await o.wait(1)
                o.say('待ってもうこれでいいでしょ！！',3)
                await o.wait(3)
                o.say('でもうちの猫が天才ってことがわかったからおまけに一兆円あげる！！',4)
                await kada.wait(4)
                kada.say('えええええ！？？！？',1)
                await o.wait(1)
                o.say('つまり私は君に三兆円あげることになる',3)
                await kada.wait(3)
                kada.say('あなたお金持ちですね、こんなお優しい人の猫は賢くて当然です',3)
                await o.wait(3)
                o.say('そうかな？まぁいいやとりあえず私の家に来て、お金あげるから',3)
                await kada.wait(3)
                kada.say('ひゃい！！',2)
                await kada.wait(1)
                kada.hide()
                o.hide()
                mii.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                await kada.wait(1)
                document.body.style.background = "url('./backdrops/lounge.png')"
                document.body.style.backgroundSize="cover"
                kada.goTo(-250,-100)
                o.goTo(0,-100)
                kada.show()
                o.show()
                mii.show()
                await kada.wait(1)
                kada.say('ここが家！？',2)
                await o.wait(2)
                o.say('うん、一応,,,ちょっとお金取ってくるね',3)
                await kada.wait(3)
                kada.say('はい！',1)
                o.hide()
                await kada.wait(1)
                kada.say('（それにしてもすごい豪邸。。。）',2)
                await kada.wait(2)
                kada.say('(待てよもしあの女に気に入られたら一生この豪邸でこの猫さんと一緒に住めるのでは？)',5)
                await kada.wait(5)
                kada.say('よしこのままあの人にこびを売りまくろう！',3)
                await o.wait(3)
                o.show()
                await o.wait(1)
                o.say('お金運ぶの手伝ってくれる？',3)
                await kada.wait(3)
                kada.say('もちろん!!!!!',2)
                await kada.wait(2)
                kada.hide()
                o.hide()
                mii.hide()
                document.body.style.background = "url('./backdrops/noir.png')"
                h1.show() 
                await h1.wait(10)
                h1.hide()
                document.body.style.background = "url('./backdrops/fin.png')"
                document.body.style.backgroundSize="cover"

            }
        })

    })

    whenPressed('right arrow', () => {
        cat.move(20)
        cat.element.style.transform ="scale(-1, 1)" 
    })

    whenPressed('left arrow', () => {
        cat.move(-20)
        cat.element.style.transform ="scale(1, 1)"
    })

    whenPressed('down arrow', () => {
        cat.changeYBy(-10)
    })

    whenPressed('up arrow', () => {
        cat.changeYBy(10)
    })


    whenPressed('right arrow', () => {
        mii.move(20)
        mii.element.style.transform ="scale(-1, 1)" 
    })

    whenPressed('left arrow', () => {
        mii.move(-20)
        mii.element.style.transform ="scale(1, 1)"
    })

    whenPressed('down arrow', () => {
        mii.changeYBy(-10)
    })

    whenPressed('up arrow', () => {
        mii.changeYBy(10)
    })
  
}

startGame();