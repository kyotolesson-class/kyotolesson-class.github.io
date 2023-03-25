async function startGame() {
    // FOR HELP, GO TO: README.md
    // 👇 WRITE YOUR CODE BELOW THIS PART 👇

    document.body.style.background = 'black'

    let siShow = false;
    let pizzaShow = false;
    let siTouch = false;
    let hshuShow = false;

    h.goTo(1000,1000) 
    ha.goTo(1000,1000)
    hshu.goTo(0,-100)
    si.goTo(400,-300) 
    pipe.goTo(0,0)
    mu.goTo(350,-170)
    pizza.goTo(-500,-400)
    is.goTo(-400,-200)
    cat.goTo(1000,-200)
    ki.goTo(100,-300) 
    muu.goTo(500,-100)
    okashi.goTo(-100,-100)
    neji.goTo(0,-350) 
    liberty.goTo(-300,-100)
    sa.element.style.left = '613px';
    sa.element.style.top = '360px';

    wa.hide()
    hshu.hide()
    na.hide()
    yo.hide()
    ta.hide()
    bu.hide()
    but.hide()
    si.hide()
    pipe.hide()
    hana.hide()
    mu.hide()
    ha.hide()
    pizza.hide()
    is.hide()
    hu.hide()
    aka.hide()
    ki.hide()
    muu.hide()
    okashi.hide()
    neji.hide()
    liberty.hide()
    
    

        whenPressed('right arrow', () => {
            hshu.move(20)
            pipe.move(20)
        })
    
        whenPressed('left arrow', () => {
            hshu.move(-20)
            pipe.move(-20)
        })
    
        whenPressed('down arrow', () => {
            hshu.changeSizeBy(5)
            hshu.changeYBy(-0.5)
            pipe.changeSizeBy(5)
            pipe.changeYBy(-0.5)
            
        })
    
        whenPressed('up arrow', () => {
            hshu.changeSizeBy(-5)
            hshu.changeYBy(0,5)
            pipe.changeSizeBy(-5)
            pipe.changeYBy(0.5)
        })
    

sa.whenClicked(async () => {
    sa.hide()
    document.body.style.background = "url('./backdrops/Blanc.png')"
    await wait(1)
    document.body.style.background = "url('./backdrops/machine.jpg')"
    document.body.style.backgroundSize = "cover"
    mu.show()
    hshu.show()
    hshuShow = true
    await wait(1)
    mu.say('ううっ。。。',3)
    await wait(3)
    hshu.say('(子供。。。?）',3)
    await wait(3)
    hshu.say('ど。。どうしたの？',2)
    await wait(2)
    mu.say('ここはどこ？',2)
    await wait(2)
    hshu.say('え？',1)
    await wait(1)
    mu.say('君は誰？',2)
    await wait(2)
    hshu.say('え。。。',2)
    await wait(2)
    mu.hide()
    hshu.hide()
    document.body.style.background = "url('./backdrops/Blanc.png')"
    await wait(1)
    document.body.style.background = "url('./backdrops/stairs.jpg')"
    document.body.style.backgroundSize = "cover"
    hshu.show()
    hshu.goTo(0,0)
    si.show()
    siShow = true
    hshu.say('?!',1)
    await wait(1)
    hshu.say('な。。。何だったんだ。。。',2)
    await wait(2)
    hshu.say('。。。',2)
    await wait(2)
})

forever(async() => {
    if(hshu.isTouching('si') && siShow){
        await wait(1)
        si.say('。。。こっちだよ',2)
        await wait(1)
        document.body.style.background = "url('./backdrops/Blanc.png')"
        si.hide()
        hshu.hide()
        hshuShow = false
        siShow = false
        await wait(1)
        document.body.style.background = "url('./backdrops/inaka.png')"
        document.body.style.backgroundSize = "cover"
        hshu.goTo(0,-100)
        hshu.show()
        pizza.show()
        pizzaShow = true
    }
}
)

forever(async() => {
    if(hshu.isTouching('pizza') && pizzaShow){
        await wait(1)
        hshu.hide()
        pizza.hide()
        hshuShow = false
        pizzaShow = false
        is.show()
        document.body.style.background = "url('./backdrops/hako.png')"
        document.body.style.backgroundSize = "cover"

    }
}
)

is.whenClicked(async () =>{
    sa.hide()
    si.hide()
    siShow = false
    await wait(1)
    document.body.style.background = "url('./backdrops/inaka.png')"
    document.body.style.backgroundSize="cover"
    is.hide()
    hshu.show()
    hshu.goTo(0,-100)
    await wait(3)
    hu.show()
    hu.goTo(400,-100)
    await wait(1)
    hshu.say('(さっきからあの人なんなん？)',2)
    await wait(2)
    hu.say('君、地球温暖化は存在すると思うかい？',4)
    await wait(4)
    hshu.say('?',2)
    await wait(2)
    hu.say('この世は存在すると思うかい？',3)
    await wait(3)
    hshu.say('ん？中二病かな？',2)
    await wait(2)
    hu.hide()
    aka.show()
    aka.goTo(400,-100)
    aka.say('正解は何も存在しない',3)
    await wait(3)
    hshu.say('!?',2)
    await wait(2)
    aka.hide()
    await wait(2)
    hshu.say('???',2)
    await wait(4)
    hu.show()
    hu.say('。。。あの、えっとさっきは弟がゴメン。。。',4)
    await wait(4)
    hshu.say('弟？同じ人じゃなかったんだね',3)
    await wait(3)
    hu.say('あ、、、うん、、、、',2)
    await wait(3)
    hu.hide()
    await wait(2)
    hshu.say('ありゃ',2)
    document.body.style.background = "url('./backdrops/vending.jpg')"
    document.body.style.backgroundSize="cover"
    await wait(3)
    hshu.say('（本当に意味分からん場所だなぁ。。。）',3)
    await wait(4)
    repeat (() =>{
        cat.move(-20)
      }, 30)
      await wait(1)
      cat.say('ニャァ',2)
      await wait(3)
      hshu.say('。。。猫？！',2)
      await wait(3)
      hshu.say('口になんかくわえてる？！',3)
      await wait(3)
      hshu.say('あれ、機械の残骸じゃ。。。。',3)
      await wait(3)
      repeat (() =>{
        cat.move(-50)
      }, 30)
      await wait(2)
      hshu.say('あっまてや！！！',2)
      await wait(3)
      repeat (() =>{
        hshu.move(-50)
      }, 40)
      await wait(1)
      document.body.style.background = "url('./backdrops/park.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.goTo(800,-100) 
      repeat (() =>{
        hshu.move(-50)
      }, 50)
      await wait(1)
      document.body.style.background = "url('./backdrops/autumn.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.goTo(800,-100) 
      repeat (() =>{
        hshu.move(-50)
      }, 30)
      await wait(1)
      document.body.style.background = "url('./backdrops/street.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.goTo(800,-100) 
      repeat (() =>{
        hshu.move(-50)
      }, 10)
      await wait(1)
      hshu.say(',,,見失った、、、',3)
      await wait(4)
      hshu.say('体力ないなぁ、、ずっと運動せずに研究してたからかなぁ、、',4)
      await wait(4)
      repeat (() =>{
        hshu.move(-10)
      }, 100)
      await wait(2)
      document.body.style.background = "url('./backdrops/behind.jpg')"
      document.body.style.backgroundSize="cover"
      ki.show()
      hshu.goTo(800,-100)
      repeat (() =>{
        hshu.move(-10)
      }, 30)
      await wait(1)
      hshu.say('あれ,,,これって、、、',2)
      await wait(2)
      hshu.say('さっき猫が持ってたやつ。。。',2)
      await wait(2)
      hshu.say('取っておこう。。。',2)
      await wait(3)
      ki.hide()
      await wait(1)
      hshu.say('これで三個目か。。。',2)
      await wait(2)
      hshu.say('とりあえず歩いてりゃいっか・・・',2)
      repeat (() =>{
        hshu.move(-10)
      }, 90)
      await wait(3)
      hshu.goTo(700,-100)
      hshu.say('そういえば残骸って何個見つければいいんだっけ・・・',3)
      document.body.style.background = "url('./backdrops/hotel.jpg')"
      document.body.style.backgroundSize="cover"
      repeat (() =>{
        hshu.move(-10)
      }, 90)
      await wait(3)
      hshu.say('あったしか五個くらいって他の研究者が言ってたな・・・',3)
      await wait(3)
      hshu.say('五個集まったら帰ろう・・',3)
      repeat (() =>{
        hshu.move(-10)
      }, 40)
      await wait(4)
      hshu.say('ってどうやって帰るんだ・・・？',2)
      await wait(3)
      hshu.say('次合った時に謎の人に聞こう....',3)
      await wait(4)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      hshu.show()
      hshu.goTo(500,-100) 
      document.body.style.background = "url('./backdrops/police.jpg')"
      document.body.style.backgroundSize="cover"
      await wait(1)
      hshu.say('全然会わんやん',2)
      await wait(2)
      hshu.say('もうちょっと歩こう・・・',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/street.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('全然いないやん',2)
      await wait(2)
      hshu.say('戻ってきちゃったし',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/park.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('・・・',2)
      await wait(2)
      hshu.say('意味わからんよまじで',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/autumn.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('・・・',2)
      await wait(2)
      hshu.say('なんか歩くのがだんだん遅くなってきた気がする。。。',4)
      await wait(4)
      hshu.say('飲み物飲んだ方がいいか。。。',3)
      await wait(3)
      hshu.say('確か前自動販売機あったよね。。。',4)
      await wait(4)
      hshu.say('探してみよ',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/hotel.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('あれ？確かここらへんだと思ったのに',4)
      await wait(4)
      hshu.say('僕がちゃんと探してないだけか',3)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/street.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('絶対時空歪んでるこの世界',2)
      await wait(2)
      hshu.say('もしかして行きたいって思ったら一生たどり着けないのかな...?',4)
      await wait(4)
      hshu.say('だから謎の人にも会えないとか。。。？',3)
      await wait(3)
      hshu.say('一回無欲でそこらへん歩いてみよう',3)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/vending.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('え、着いた',2)
      await wait(2)
      hshu.say('無欲ってすごい',2)
      await wait(2)
      hshu.say('早速買って見よう...',2)
      await wait(3)
      hshu.say('。。。って言うかお金持ってきてたっけ。。。？',3)
      await wait(3)
      hshu.say('............',3)
      await wait(3)
      hshu.say('んっ！？ポケット中に小銭が！？',3)
      await wait(3)
      hshu.say('五百円も！？',2)
      await wait(2)
      hshu.say('これなら十分買えるっしょ！！',3)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/kaiwa.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/kaiwa2.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/kaiwa3.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/okane.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/vending.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(2)
      hshu.say('.........',2)
      await wait(2)
      hshu.say('無欲、、、無欲、、、',3)
      await wait(4)
      document.body.style.background = "url('./backdrops/poto.png')"
      document.body.style.backgroundSize="cover"
      neji.show()
      hshu.say('！！',2)
      await wait(2)
      document.body.style.background = "url('./backdrops/peto.png')"
      document.body.style.backgroundSize="cover"  
      hshu.say('やったあぁっ!!!!',2)
      await wait(3)
      document.body.style.background = "url('./backdrops/vending.jpg')"
      document.body.style.backgroundSize="cover"
      await wait(1)
      hshu.hide()
      muu.show()
      await wait(4)
      muu.hide()
      hshu.show()
      await wait(1)
      hshu.say('飲んだ飲んだ',2)
      await wait(2)
      hshu.say('なんかシュールだったけど（笑）',3)
      await wait(3)
      hshu.say('ん？何あのネジ',3)
      await wait(3)
      hshu.say('あれもしかして機械のかけら？！',3)
      await wait(3)
      hshu.say('取っておこう',2)
      neji.hide()
      await wait(2)
      hshu.say('これで四個目か',3)
      await wait(3)
      hshu.say('よし！あと一個でミッション達成だ！！',4)
      await wait(5)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/behind.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('ふぅまた戻ってきちゃった',3)
      await wait(3)
      hshu.say('しかもまたペース落ちてる気がする...',3)
      await wait(3)
      hshu.say('あ、食べ物食べたほうがいいか',3)
      await wait(3)
      hshu.say('スーパーでも探すか',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/store.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      hshu.say('おっなんかそれっぽいのある',2)
      await wait(2)
      hshu.say('入ってみるか',2)
      await wait(2)
      hshu.hide()
      document.body.style.background = "url('./backdrops/instore.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hshu.goTo(-100,-100) 
      await wait(1)
      hshu.say('なんかいっぱいあるなぁ。。。',3)
      await wait(4)
      hshu.say('あ、そういえば水買ったときにお金全部持ってかれたんだっけ😅',4)
      await wait(4)
      hshu.say('そういえば店員さんもいなかった。。。',3)
      await wait(4)
      hshu.say('...じゃあもう払わなくていいんじゃね？',3)
      await wait(3)
      hshu.say('とりあえずどれ食べるか決めよ',3)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/instore.jpg')"
      document.body.style.backgroundSize="cover"
      okashi.show()
      okashi.goTo(-100,-100)
      okashi.say('勢いでこれ取っちゃった（笑）',3)
      await wait(3)
      okashi.say('まぁこれで体力回復するか怪しいけど一回試してみるか',5)
      await wait(6)
      okashi.hide()
      document.body.style.background = "url('./backdrops/uoo1.png')"
      document.body.style.backgroundSize="cover"
      await wait(4)
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/store.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hshu.goTo(500,-100)
      await wait(1)
      hshu.say('全部食べるのに10分かかるなんて聞いてないよ。。。',4)
      await wait(4)
      hshu.say('これで体力回復したかな。。。？',3)
      await wait(3)
      repeat (() =>{
        hshu.move(-50)
      }, 20) 
      await wait(1)
      hshu.say('わぁ早い',2)
      await wait(3)
      hshu.say('この調子で探していこう',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/station.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hshu.goTo(500,-100)
      await wait(1)
      hshu.say('おっ新しい所についた',3)
      await wait(3)
      hshu.say('無欲ってほんとすごいなぁー((洗脳',3)
      await wait(3)
      hshu.say('あんなか入ってみよっと',3)
      await wait(4)
      hshu.hide()
      document.body.style.background = "url('./backdrops/basu1.png')"
      document.body.style.backgroundSize="cover"
      await wait(2)
      document.body.style.background = "url('./backdrops/basu2.png')"
      document.body.style.backgroundSize="cover"
      await wait(2)
      document.body.style.background = "url('./backdrops/basu3.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/basu4.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/basu5.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/basu6.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/station.jpg')"
      document.body.style.backgroundSize="cover"
      await wait(1)
      hu.show()
      hu.goTo(300,-100) 
      hshu.show()
      await wait(1)
      hshu.say('わぁァァ出てきた！！ありがとう！！',3)
      await wait(3)
      hu.say('。。。？う、うん',2)
      await wait(2)
      hshu.say('早速だけど聞きたいことがあるんだ！！',4)
      await wait(4)
      hu.say('（この人全然僕のこと怖がらないな。。。）',4)
      await wait(2)
      hu.say('う、うん、、ど、どうしたの、、、？',3)
      await wait(3)
      hshu.say('この世界からどうやって出るの？？',4)
      await wait(4)
      hshu.hide()
      hu.hide()
      document.body.style.background = "url('./backdrops/saa.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/station.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hu.show()
      hshu.say('?',1)
      await wait(1)
      hu.say('君、この世界から出たいの、、、？',3)
      await wait(3)
      hshu.say('え？う、うん',2)
      await wait(2)
      hu.say('!!',2)
      await wait(2)
      hshu.say('???',2)
      await wait(2)
      hu.say('えっと、、この世界の出かた、、、',3)
      await wait(3)
      hshu.say('、、、',2)
      await wait(2)
      hu.say('、、、',2)
      await wait(2)
      hshu.say('もしかしてわかんない、、、？',3)
      await wait(3)
      hu.say('あ、、、',2)
      await wait(2)
      hshu.say('あ、ゴメンね、、知ってるかと思ってた、、、',4)
      await wait(4)
      hshu.hide()
      hu.hide()
      document.body.style.background = "url('./backdrops/sasa.png')"
      document.body.style.backgroundSize="cover"
      await wait(4)
      document.body.style.background = "url('./backdrops/station.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hu.show()
      await wait(1)
      hshu.say('え？',2)
      await wait(2)
      hshu.say('えーー？！ちょっと待って僕まだかけら全部集めてないよ',5)
      await wait(5)
      hu.say('あ、そっか',2)
      await wait(2)
      hshu.hide()
      hu.hide()
      document.body.style.background = "url('./backdrops/sasa2.png')"
      document.body.style.backgroundSize="cover"
      await wait(6)
      document.body.style.background = "url('./backdrops/station.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hu.show()
      await wait(1)
      hshu.say('えっなんでぼくのミッションのこと知ってるの？',4)
      await wait(4)
      hu.say('あ、僕帰り方以外全部知ってるから',4)
      await wait(4)
      hshu.say('ほぅ、、、？',2)
      await wait(2)
      hshu.say('まぁいいやとりあえず探そう',3)
      await wait(3)
      hu.say('うんそうだね,,,あれ',2)
      await wait(2)
      hshu.hide()
      hu.hide()
      document.body.style.background = "url('./backdrops/terepeshi.png')"
      document.body.style.backgroundSize="cover"
      await wait(4)
      document.body.style.background = "url('./backdrops/station.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hu.show()
      await wait(4)
      hshu.say('ん？どうしたの？',3)
      await wait(3)
      hu.say('弟が僕のこと呼んでる',3)
      await wait(3)
      hshu.say('え？',2)
      await wait(2)
      hu.say('急いでいかないとぶっ潰される！！',4)
      await wait(4)
      hu.say('ゴメンね最後のかけらが見つかったらすぐ君のとこ行くから',6)
      await wait(6)
      hu.say('頑張って！',2)
      await wait(3)
      repeat (() =>{
        hu.move(-50)
      }, 50)
      await wait(1)
      hshu.say('ありゃ、、行っちゃった、、、',3)
      await wait(3)
      hshu.say('探すか、、、',2)
      await wait(3)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/autumn.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      await wait(1)
      repeat (() =>{
        hshu.move(-5)
      }, 100)
      hshu.say('ふんふんふふーん♪',3)
      await wait(3)
      hshu.say('んーー！！きれいな景色だ',3)
      await wait(3)
      hshu.say('もう見た気がするけどー！',3)
      await wait(3)
      hshu.say('まだみつかんないなぁー',3)
      await wait(3)
      repeat (() =>{
        hshu.move(-5)
      }, 100)
      hshu.say('無欲無欲無欲で歩くー♪',3)
      await wait(3)
      hshu.say('んーーー',2)
      await wait(2)
      hshu.say('またペース落ちてきた？',3)
      await wait(3)
      hshu.say('またあのコンビニ行くか、、、',3)
      await wait(3)
      repeat (() =>{
        hshu.move(-5)
      }, 100)
      hshu.say('無欲ー無欲ー僕は無欲で歩く人ー♪',3)
      await wait(4)
      hshu.hide()
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/store.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hshu.goTo(500,-100)
      await wait(1)
      hshu.say('入るかー',2)
      await wait(2)
      hshu.hide()
      document.body.style.background = "url('./backdrops/instore.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hshu.goTo(-100,-100) 
      await wait(1)
      hshu.say('うーーん、、なんか美味しそうなもの、、、',4)
      await wait(5)
      hu.show()
      hu.goTo(900,-100)
      repeat (() =>{
        hu.move(-50)
      }, 26)
      hu.say('うわぁぁぁあぁぁぁぁぁ！！',2)
      await wait(2)
      hshu.say('わっ！？',2)
      await wait(2)
      hshu.hide()
      hu.hide()
      document.body.style.background = "url('./backdrops/sasasa.png')"
      document.body.style.backgroundSize="cover"
      await wait(6)
      document.body.style.background = "url('./backdrops/instore.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hu.show()
      await wait(1)
      hshu.say('ええっ！？',2)
      await wait(2)
      hshu.hide()
      hu.hide()
      document.body.style.background = "url('./backdrops/sasasa2.png')"
      document.body.style.backgroundSize="cover"
      await wait(8)
      document.body.style.background = "url('./backdrops/instore.jpg')"
      document.body.style.backgroundSize="cover"
      hshu.show()
      hu.show()
      await wait(1)
      hshu.say('え！？ちょっとそのかけら見せて！',3)
      await wait(3)
      hu.say('合ってるか分んないけど！',3)
      await wait(3)
      liberty.show()
      await wait(3)
      hshu.say('君ほんとに帰り方以外なんでも知ってるの？',5)
      await wait(6)
      hu.say('やっぱり間違ってた、、、？',3)
      await wait(3)
      hshu.say('うん、間違ってる',2)
      await wait(2)
      hu.say('で、、でもこれに必要性を感じたんだ、、！！',4)
      await wait(4)
      hshu.say('ほぅ、、、',2)
      await wait(2)
      hshu.say('まぁ一応持っておいて',2)
      await wait(2)
      hu.say('うん、分かった',2)
      await wait(2)
      liberty.hide()
      await wait(1)
      hshu.say('じゃあ二手に分かれて最後のかけら探そうか',5)
      await wait(5)
      hu.say('う、うん',2)
      await wait(2)
      repeat (() =>{
        hu.move(50)
      }, 30)
      await wait(2)
      hshu.say('とその前に僕は何か食べないと',4)
      await wait(4)
      hshu.hide()
      document.body.style.background = "url('./backdrops/uoo2.png')"
      document.body.style.backgroundSize="cover"
      await wait(4)
      document.body.style.background = "url('./backdrops/moji.png')"
      document.body.style.backgroundSize="cover"
      await wait(3)
      document.body.style.background = "url('./backdrops/store.jpg')"
      document.body.style.backgroundSize="cover"
      await wait(2)
      hshu.show()
      hshu.goTo(500,-100)
      hshu.say('よし、十分間食べ尽くしたしこれでいいだろう',5)
      await wait(5)
      hshu.say('あの子はあっち行ったから僕はこっち行こっと',5)
      await wait(5)
      hshu.hide()
      document.body.style.background = "url('./backdrops/noir.png')"
      await wait(1)
      sa.show()
    })

    // 👆 WRITE YOUR CODE ABOVE THIS PART 👆
    // 🛑 STOP 🛑
}

// DON'T CHANGE THIS ❌❌❌
startGame();
// DON'T CHANGE THIS ❌❌❌