class Actor {
    constructor(element) {
        this.element = element;
        // element.width = 100;
        this.width = element.width;
        this.nextCostumeNum = 2;
        this.lastCostume = 2;
    }

    move(steps=10) {
        // const currentAngle = this.getRotationAngle();
        // console.log("current angle: " + currentAngle)
        // console.log("sin function returns: " + Math.sin(currentAngle * Math.PI/180) * steps)
        // this.changeXBy(Math.sin(currentAngle * Math.PI/180) * steps)
        // this.changeYBy(Math.cos(currentAngle * Math.PI/180) * steps)
        this.element.style.left = Number(this.element.style.left.substr(0, this.element.style.left.length - 2)) + steps + "px"
    }

    getRotationAngle() {
        const obj = window.getComputedStyle(this.element, null);
        const matrix = obj.getPropertyValue('-webkit-transform') || 
            obj.getPropertyValue('-moz-transform') ||
            obj.getPropertyValue('-ms-transform') ||
            obj.getPropertyValue('-o-transform') ||
            obj.getPropertyValue('transform');

        let angle = 0; 

        if (matrix !== 'none') 
        {
            const values = matrix.split('(')[1].split(')')[0].split(',');
            const a = values[0];
            const b = values[1];
            angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } 

        return (angle < 0) ? angle +=360 : angle;
    }

    turnClockwise(degrees=15) {
        this.element.style.transform = `rotate(${this.getRotationAngle() + degrees }deg)`
    }

    turnCounterclockwise(degrees=15) {
        this.element.style.transform = `rotate(${this.getRotationAngle() - degrees }deg)`
    }

    pointInDirection(degrees=90) {
        this.element.style.transform = `rotate(${degrees }deg)`
    }

    goTo(x=0, y=0) {
        if (x === 'mouse') {
            this.element.style.left = `${mouseX - this.element.width / 2}px`;
            this.element.style.top = `${mouseY - this.element.width / 2}px`;
        } else if (x === 'random') {
            this.element.style.left = `${pickRandom(0, window.innerWidth)}px`;
            this.element.style.top = `${pickRandom(0, window.innerHeight)}px`;
        } else if (typeof x === 'string') {
            const objectToAttach = document.getElementById(x).getBoundingClientRect();
            this.element.style.left = `${window.innerWidth / 2 - this.element.width / 2 + x}px`;
            this.element.style.top = `${window.innerHeight / 2 - this.element.height / 2 - y}px`;
        } else {
            this.element.style.left = `${window.innerWidth / 2 - this.element.width / 2 + x}px`;
            this.element.style.top = `${window.innerHeight / 2 - this.element.height / 2 - y}px`;
        }
    }

    changeXBy(x=10) {
        this.element.style.left = `${this.element.getBoundingClientRect().x + x}px`;
    }

    changeYBy(y=10) {
        this.element.style.top = `${this.element.getBoundingClientRect().y - y}px`;
    }

    setXTo(x=0) {
        this.element.style.left = `${window.innerWidth / 2 - this.element.width / 2 + x}px`;
    }

    setYTo(y=0) {
        this.element.style.top = `${window.innerHeight / 2 - this.element.height / 2 - y}px`;
    }

    sleep(seconds=1) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    async wait(seconds=1) {
        await this.sleep(seconds);
    }

    async say(message='Hello!', seconds) {
        document.querySelectorAll(`.message[data-actor=${this.element.id}]`).forEach(message => {
            message.parentNode.removeChild(message);
        })

        const newMessage = document.createElement('div');

        newMessage.classList.add('message');
        newMessage.setAttribute('data-actor', this.element.id);
        newMessage.innerText = message;
        newMessage.style.position = 'relative';
        newMessage.style.left = this.element.getBoundingClientRect().x - this.element.width / 2 + "px";
        newMessage.style.top = this.element.getBoundingClientRect().y - this.element.height * 1.5  + "px";
        document.body.insertAdjacentElement('beforeend', newMessage);

        if(seconds) {
            await this.wait(seconds)

            document.querySelectorAll(`.message[data-actor=${this.element.id}]`).forEach(message => {
                message.parentNode.removeChild(message);
            })
        }
    }

    changeSizeBy(num=10) {
        this.element.width += num;
    }

    setSizeBy(percent=100) {
        this.element.width = this.width * percent / 100;
    }

    show() {
        this.element.style.display = "block";
    }

    hide() {
        this.element.style.display = "none";
    }

    async repeat(task, iterations=10) {
        let counter = 1;
        while(counter <= iterations) {
            await this.sleep(.03);
            task();
            counter++;
        }
    }

    createCloneOf(actor) {
        const clone = document.createElement('img');

        clone.classList.add('actor');
        clone.src = actor.element.attributes.src.value;
        console.log(actor.element.attributes.src.value)
        clone.style.position = 'relative';
        clone.style.left = this.element.getBoundingClientRect().x + "px";
        clone.style.top = this.element.getBoundingClientRect().y + "px";
        document.body.insertAdjacentElement('beforeend', clone);

        return clone;
    }

    nextCostume() {         
        this.element.attributes.src.value = `./sprites/${this.element.id}/costume${this.nextCostumeNum}.svg`
        this.nextCostumeNum += 1;
        if(this.nextCostumeNum == this.lastCostume) {
            this.nextCostumeNum = 1;
        }
    }

    whenThisSpriteClicked(task) {
        this.element.addEventListener('click', () => {
            task();
        })
    }

    async broadcast(message) {
        const randId = Math.random();
        globalMessages.push({
            id: randId,
            message: message
        });
        await this.wait(5);
        globalMessages.forEach((object, i) => {
            if (object.id === randId) {
                globalMessages.splice(i, 1);
            }
        })
    }

    whenIReceive(message, task) {
        setInterval(() => {            
            globalMessages.forEach((object, i) => {
                if (object.message === message) {
                    task();
                    globalMessages.splice(i, 1);
                }
            })
        },10)
    }

    isTouching(object) {
        if (object === 'mouse') {
            const withinX = mouseX >= this.element.getBoundingClientRect().x && mouseX <= this.element.getBoundingClientRect().x + this.element.width;
            const withinY = mouseY >= this.element.getBoundingClientRect().y && mouseY <= this.element.getBoundingClientRect().y + this.element.height;
            return withinX && withinY;
        } else if (object === 'edge') {
            const thisRect = this.element.getBoundingClientRect();
            const overlap = (window.innerWidth < thisRect.right || 
                0 > thisRect.left || 
                0 > thisRect.top || 
                window.innerHeight < thisRect.bottom)

            return overlap;

        } else {
            const objectToTouch = document.getElementById(object).getBoundingClientRect();
            const thisRect = this.element.getBoundingClientRect();
            const overlap = !(objectToTouch.right < thisRect.left || 
                objectToTouch.left > thisRect.right || 
                objectToTouch.bottom < thisRect.top || 
                objectToTouch.top > thisRect.bottom)
            
            return overlap;
        }
    }
}

function ask(question) {
    return prompt(question);
}


function switchBackdropTo(backdrop) {
    document.body.style.backgroundImage = `url(backdrops/${backdrop}.jpg)`;
}

function pickRandom(from, to) {
    if (to < from) {
        return console.error('randNum: "from" value is greater than "to" value.');
    }
    let tempNum = Math.round(Math.random() * to);
    if (tempNum < from) {
        return pickRandom(from, to);
    }
    return tempNum;
}

async function forever(task) {
    setInterval(()=> {
        task();
    }, 30);
}

async function whenPressed(key, task) {
    document.addEventListener('keydown', (e) => {
        if(e.key === keyConversions[key]) {
            task();
        }
    })
}

function playSound(sound) {
    const audio = new Audio(`./sounds/${sound}`);
    audio.play();
}