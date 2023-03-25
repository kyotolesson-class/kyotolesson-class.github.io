async function startGame() {
    // FOR HELP, GO TO: README.md
    // 👇 WRITE YOUR CODE BELOW THIS PART 👇
    let daShow = false;
    let siShow = false;
    let hanaShow = false;


    wa.goTo(200, 0)
    hshu.goTo(0,0)
    shu.goTo(0,0)
    na.goTo(100,100)
    yo.goTo(200,0)
    us.goTo(50,0)
    ta.goTo(-900,-100)
    h.goTo(1000,1000) 
    ha.goTo(1000,1000)
    si.goTo(600,-100)
    da.goTo(-4000,-3000)
    pipe.goTo(-200,0)
    pe.goTo(7000,6000)
    hana.goTo(999,999)
    mu.goTo(350,-170)
    bu.element.style.left = '734px';
    bu.element.style.top ='360px';
    but.element.style.left = '734px';
    but.element.style.top ='360px';
    sa.element.style.left = '613px';
    sa.element.style.top = '360px';
    // butt.element.style.left = '990px';
    // butt.element.style.top ='495px';

    wa.hide()
    hshu.hide()
    na.hide()
    yo.hide()
    us.hide()
    ta.hide()
    bu.hide()
    but.hide()
    si.hide()
    da.hide()
    pipe.hide()
    pe.hide()
    hana.hide()
    mu.hide()
    sa.hide()
    // h.hide()
    


    shu.whenClicked(async () => {
        document.body.style.background = "url('./backdrops/noir.png')"
        shu.say('ここはどこ？',2)
        await wait(4)
        shu.hide()
        us.show()
        await wait(1)
        us.say('君は誰？',2)
        await wait(3)
        us.hide()
        document.body.style.background = "url('./backdrops/Blanc.jpg')"
        await wait(2)
        document.body.style.background = "url('./backdrops/labo.jpg')"
        wa.show()
        hshu.show()
        await wait(1)
        wa.say('はぁ、地球温暖化また進んじゃったなぁ、、、',4)
        await wait(4)
        hshu.say('...',1)
        await wait(2)
        wa.say('ご先祖様が作った「おんどたもちましーん！！」も台風に巻き込まれて壊れちゃったし、、、',6)
        await wait(6)
        wa.say('おかげで今日も残業だよ、、、',3)
        await wait(4)
        hshu.say('...',1)
        await wait(2)
        wa.say('最近喋らないね、君',2)
        await wait(2)
        hshu.say('...',2)
        await wait(2)
        wa.say('...',2)
        ta.show()
        repeat (() =>{
            ta.move(20)
          }, 30)
        wa.hide()
        yo.show()
        ta.say('わぁァァァきぃてよ二人共ぉぉぉ！！！',3)
        await wait(3)
        yo.say('何急に',1)
        await wait(1)
        ta.say('「おんどたもちましーん！！」のかけらがある場所を見つけたんだァァァ！！',5)
        await wait(5)
        yo.say('はぁいぃぃ！？！！？',2)
        await wait(2)
        ta.say('でも、そこが、すっげぇあぶねぇから行けなさそうなんだぁ、、、',4)
        await wait(4)
        yo.say('うわぁ、、じゃあ諦めるしかないの、、、？',3)
        await wait(4)
        bu.goTo(0,0)
        bu.show()
    })

    bu.whenClicked(async () =>{
        await wait(1)
        bu.hide()
        ta.say('え？',1)
        yo.say('え？',1)
        await wait(1)
        yo.say('別に無理して行かなくてもいいんだよ？',3)
        await wait(3)
        ta.say('そーだよ人が行かなくても自分たちで作ったロボット行かせれば、、、',5)
        await wait(5)
        yo.say('でもそれは時間がかかりすぎるよ',3)
        await wait(4)
        but.show()
    }
    )

    but.whenClicked(async () =>{
        but.hide()
        yo.say('、、、そこまで言うなら、、、',2)
        await wait(3)
        yo.hide()
        ta.hide()
        hshu.hide()
        document.body.style.background = "url('./backdrops/Blanc.jpg')"
        await wait(1)
        document.body.style.background = "url('./backdrops/bh.jpeg')"
        document.body.style.backgroundSize="cover"
        hshu.goTo(0,-900)
        wa.goTo(150,-200)
        hshu.show()
        wa.show()
        await wait(1)
        wa.say('ここ、、、らしい、、、',2)
        await wait(2)
        wa.say('じゃ、じゃあ僕は、、これで、、、',3)
        await wait(4)
        wa.show()
        repeat (() =>{
            wa.move(20)
          }, 40)

          whenPressed('right arrow', () => {
            hshu.move(20)
            // hshu.element.style.transform ="scale(-1, 1)" 
        })
    
        whenPressed('left arrow', () => {
            hshu.move(-20)
            // hshu.element.style.transform ="scale(1, 1)"
        })
    
        whenPressed('down arrow', () => {
            hshu.changeSizeBy(5)
            hshu.changeYBy(-0.5)
        })
    
        whenPressed('up arrow', () => {
            hshu.changeSizeBy(-5)
            hshu.changeYBy(0,5)
        })
        h.goTo(0,0)
    

    }
    )
    


    forever(async() => {
        if(hshu.isTouching('h')){
            h.goTo(5000,5000)
       await wait(1)
       hshu.hide()
       document.body.style.background = "url('./backdrops/Blanc.jpg')"
       await wait(1)
       document.body.style.background = "url('./backdrops/ruined.jpg')"
       hshu.show()
       await wait(5)
       ha.goTo(-40,-130)
    }})

    forever(async() => {
        if(hshu.isTouching('ha')){
            ha.goTo(5000,5000)
            hshu.hide()
            document.body.style.background = "url('./backdrops/Blanc.jpg')"
            await wait(1)
            document.body.style.background = "url('./backdrops/room.jpg')"
            document.body.style.backgroundSize="cover"
            si.show()
            siShow = true
            da.show()
            daShow = true
            da.goTo(-400,-300)
            si.show()
            hshu.goTo(-300,-800)
            hshu.show()
        }
    }
    )

    forever(async() => {
        if(hshu.isTouching('si') && siShow == true){
          si.say('あのダンボールの中に変なものが入ってる',5)
          siShow = false
        }
    }
    )

    forever(async() => {
        if(hshu.isTouching('da') && daShow == true){
            await wait(1)
            si.hide()
            da.hide()
            daShow = false
            hshu.hide()
            pipe.show()
            document.body.style.background = "url('./backdrops/dan.png')"
            document.body.style.backgroundSize="cover"
            
        }
    }
    )
    
    pipe.whenClicked(async () => {
        await wait(1)
        document.body.style.background = "url('./backdrops/room.jpg')"
        document.body.style.backgroundSize="cover"
        pe.goTo(0,400)
        pe.show()
        pipe.hide()
        hshu.show()
        hshu.goTo(0,0)
        await wait(7)
        hana.goTo(0,0)
        hana.show()
        hanaShow = true
        whenPressed('right arrow', () => {
            pe.move(20)
            hshu.element.style.transform ="scale(-1, 1)" 
        })
    
        whenPressed('left arrow', () => {
            pe.move(-20)
            hshu.element.style.transform ="scale(1, 1)"
        })
    
        whenPressed('down arrow', () => {
            pe.changeSizeBy(5)
            pe.changeYBy(-0.5)
        })
    
        whenPressed('up arrow', () => {
            pe.changeSizeBy(-5)
            pe.changeYBy(0,5)

            
        })
    })
    
    
    forever(async() => {
        if(hshu.isTouching('hana') && hanaShow == true){
            document.body.style.background = "url('./backdrops/machine.jpg')"
            document.body.style.backgroundSize="cover"
            mu.show()
            hana.hide()
            hanaShow = false
            await wait(1)
            hshu.say('ここは。。。',2)
            await wait(3)
            mu.say('ううっ。。。うう。。',3)
            await wait(3)
            hshu.say('。。。誰か泣いてる？',2)
            await wait(3)
            hshu.hide()
            pe.hide()
            document.body.style.background = "url('./backdrops/noir.png')"
            document.body.style.backgroundSize="cover"
            await wait()
            sa.show()
}
}
)

sa.whenClicked(async () => {
    sa.hide()

})


 
    




    // 👆 WRITE YOUR CODE ABOVE THIS PART 👆
    // 🛑 STOP 🛑
}

// DON'T CHANGE THIS ❌❌❌
startGame();
// DON'T CHANGE THIS ❌❌❌