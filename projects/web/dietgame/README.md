# Code blocks

## To show or hide an actor

``` javascript
// hide your actor
actor.hide()

// make your actor appear
actor.show()
```

## To make an actor talk

``` javascript
actor.say("hello!")
```

## To make an actor move

``` javascript
// to the right 100 pixels
actor.changeXBy(100)

// to the left 100 pixels
actor.changeXBy(-100)

// up 100 pixels
actor.changeYBy(100)

// down 100 pixels
actor.changeYBy(-100)
```

## To check whether two things are touching

``` javascript
// this returns either true or false
actor.isTouching('actor')
```

## To make something happen when you press a button

``` javascript
whenPressed('button', () => {
    // write code in here
})

// here, the dog says "Bark!" when you press the 'enter' button
whenPressed('enter', () => {
    dog.say('Bark!')
})
```

## To make an actor go to a specific point

``` javascript
// x and y should be numbers
actor.goTo(x, y);

// here, your actor will go the center of your screen
actor.goTo(0, 0);
```

## To make an actor spin

``` javascript
actor.turnClockwise(degrees)

// here, your actor will turn 45 degrees
actor.turnClockwise(45)

// you can also go in the opposite direction
actor.turnCounterClockwise(45)
```

## To make something loop forever

``` javascript
forever(() => {
    // write code in here
})

// here, the dog will spin forever!
forever(() => {
    dog.turnClockwise(10)
})
```

## To choose a random number

``` javascript
pickRandom(kara, made)

// here, the function returns a random number between 5 and 10
pickRandom(5, 10)
```

## To wait to do something

``` javascript
await wait(seconds)

// here, your code will wait 3 seconds before the dog barks
await wait(3)
dog.say('Bark!')
```

## To ask the user for input

``` javascript
// Here, your game will ask the user for their favorite color
ask("What is your favorite color?")

// To save the answer in a variable, use let
let color = ask("What is your favorite color?")
```

## To play a sound

``` javascript
// put the name of your audio file as a string where it says "sound"
playSound(sound)

// here, we'll play the meow.wav file in our sounds directory
playSound('meow.wav')
```
