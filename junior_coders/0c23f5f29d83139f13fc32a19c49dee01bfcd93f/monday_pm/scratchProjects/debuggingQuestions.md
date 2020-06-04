 
ScratchJr Debugging List
Year 1

Release 1
Minimum experience: Grades K+, 1st year using ScratchJr, 1st quarter or later

# 3 - Dance Party
Why isn’t Scratch Cat dancing when I press the green flag?
We need to attach a start on green flag


# 4 - Starry Night
Why does the bat only go up and down?
It’s missing a second green flag

Why doesn’t the star show again after I press the green flag?
The second hide block should be a show block

Why doesn’t the star spin forever?
It needs a repeat forever block


# 5 - Under the Sea
Why doesn’t the fish keep moving?
It’s missing a repeat forever block

Why doesn’t the starfish spin when I press the green flag?
The trigger block should be the green flag block

Why does the whale keep getting bigger?
The grow block should not be in the repeat forever algorithm


# 6 - Fidget Spinner
Why doesn’t my fidget spinner spin when pressed?
The spin number (parameter) is set to 0

Why doesn’t my fidget spinner spin when pressed?
It needs the start on tap trigger block

Why does my fidget spinner spin slowly when the green flag is pressed?
It needs the start on tap trigger block and the set speed block should be faster


# 7 - Outer Space
Why doesn’t the sun spin when pressed?
It needs the start on tap trigger

Why does the alien stay in the air and not hop back down?
The move up block needs to be replaced with a hop block

Why doesn’t the shooting star hide after it shrinks?
The show block needs to be replaced with a hide block

Why doesn’t the astronaut fly up when pressed?
The number (parameter) on the move up block needs to be greater than 0


# 8 - Animal House
Why does the barn get bigger and not bigger, then smaller?
The second grow block should be a shrink block

Why does the chicken play a pop sound and not the recorded sound?
The pop block sound be a play recorded sound block

Why does the horse play the same recording twice instead of two different recordings?
The second play recorded sound block should have a number 2 and not a number 1


# 9 - Musical Instruments
Why isn’t the snare drum moving when tapped?
It needs a start on tap trigger block

Why isn’t the floor tom playing a sound right when tapped?
The play recorded sound block needs to connect right after a start on tap block

Why doesn’t Scratch Cat dance forever when the green flag is pressed?
The algorithm needs a repeat forever block at the end rather than an end block

Release 2
Minimum experience: Grades K+, 1st year using ScratchJr, 2nd quarter or later


# 11 - Dance Fever
Why doesn’t the child start moving when bumped by another sprite?
We need to use the start on bump block rather than the start on tap

Why does the teen keep getting bigger when bumped? How can we change the code so he repeats getting bigger and smaller? 
We need to change the second grow block to a shrink block

Why doesn’t the teen spin around when bumped?
The stop block in the bottom algorithm will stop all other algorithms from running



# 12 - Animated Card
Why does the balloon spin a little bit and not point up at the end of the repeat?
The second turn block right should turn left. 
Another solution is to use the go home block, but it doesn’t look as smooth as the first solution.

Why doesn’t the red balloon hide when popped?
We need to replace the reset size block with a hide block

Why doesn’t Scratch Cat hop when tapped?
We need to use the start on tap trigger instead of the start on bump trigger



# 13 - Haunted House
Why doesn’t the tree hide when tapped?
The first show block needs to be a hide block

Why don’t we have a blinking star when we tap the green flag?
We need to use the start on green flag trigger block

Why don’t we hear the sound and see the moon spin at the same time?
We need a second start on tap trigger block



# 14 - Look Both Ways
Why doesn’t the soccer ball move down the screen while turning?
We need to use two different events to have the code run in parallel

Why does Scratch Cat start with a huge jump?
The number (parameter) for jump should be 1, not 10. Use the grid mode to demonstrate different numbers.

Why does the car stay slow the entire time instead of slowing down?
The set speed blocks need to change to reflect three different speeds



# 15 - Race to the FInish
Game
Why does the bird keep saying “Yay!” and resetting before reaching the finish line?
The second chunk of code should have a start on bump trigger

Why doesn’t Scratch Cat move when tapped?
We have a motion block after the countdown, but no start on tap algorithm

Why doesn’t the bird move when tapped?
We need to use the start on tap trigger instead of start on bump

Story
Why doesn’t the bird finish the race?
We need to change the move parameter to a higher number than 1

Why isn’t our snake moving in the correct direction?
We need to change the move left block to a move right block

Why is our bird so slow?
We need to change our set speed block to the fastest speed instead of the slowest



# 16 - I’m Soooo Hungry
Why doesn’t the apple disappear when bumped?
We need to replace the show block with a hide block

Why doesn’t the soccer ball make a sound, move, and spin at the same time?
We need to use three separate triggers to make them run in parallel

Why doesn’t the cat move back down after eating the apple?
The second move up block needs to be a move down block



# 17 - My Friends and Family
Why don’t we hear what the mom likes but instead hear a pop?
We need to replace the pop block with play sound 1

Why doesn’t the dad jump when tapped?
We need to use the start on tap trigger

Why doesn’t the baby sister move and turn at the same time?
We need to use a third start on tap to make the algorithms run in parallel



# 18 - When I Grow Up
Why doesn’t the boat forever sail across the screen?
We need to use the repeat forever block instead of the end block (which is an optional block to indicate the end of an algorithm)

Why does the shop get so big when pressed?
We need to set the second parameter to 1, not 10

Why doesn’t the rocket fly into the sky and hide?
We need to change the move up parameter from 3 to 13



# 19 - Knock, Knock
Why does the chicken keep interrupting the pig? 1) no parallel motion; 2) with parallel motion
The parameters for the wait blocks need to be 10, not 1
1) no parallel motion answer 
2) with parallel motion answer

Why does the pig keep saying the same thing repeatedly? 1) no parallel motion; 2) with parallel motion
We need to use the three different play sound blocks, not the first one each time
1) no parallel motion answer
2) with parallel motion answer

I only want the chicken to jump two times when saying knock, knock, but the chicken jumps more than twice. Why is that?
The parameter for the first repeat needs to be 2, not 20

Release 3
Minimum experience: Grades K+, 1st year using ScratchJr, 3rd quarter or later


# 21 - Alien Planet
Why doesn't the sun spin forever?
We need to use the repeat forever block instead of the repeat block

Why doesn't the alien ship forever move, hide, and show?
We need to use the repeat forever block instead of the end block

Why doesn't the alien ball spin, move, and make a sound all at the same time?
We need to use a separate trigger block to get the blocks to trigger in parallel



# 22 - There’s a Monster Under my Bed
Why doesn't the spooky eye sprite appear at the end of the story?
We need to use the message trigger with the correct color for the spooky eyes or use multiple wait blocks

Why doesn't the bed shake with the message blocks?
The message trigger's color does not match color of the send message block

Why does the bed start talking over the cat?
The second wait block should be around 70, not 7



# 23 - In the Future . . .
Why doesn't the astronaut do quick somersaults? 
The first “set speed” block should be set to fast, not slow

Why doesn't the car make a sound when tapped, but it makes a sound when another sprite bumps it?
The trigger block for the sound should be “when tapped”, not “when bumped”

Why doesn't the car get smaller as it flies in the air?
We need to use the “shrink” block instead of the “reset size” block in the repeat



# 24 - Animate my Name
Why doesn’t the letter “d” return to its starting position after hopping?
We need to use a hop motion block instead of a move up motion block

Why does the letter “e” keep getting smaller and smaller rather than grow to its starting size after getting smaller?
We need to replace the show block with a grow block, and set the parameter to two

Why does the letter “r” face the wrong direction when moving left?
This is a little tricky: to prevent this from happening we need to use a move right motion block, but set the motion to a negative number
This will cause it to move left without changing its facing



# 25 - Jungle
Why does the zebra hop down when tapped instead of hopping up?
The number (parameter) needs to be a positive number to hop up (2 instead 

# of -2)

Why does the butterfly get really big when tapped instead of smaller?
We need to replace the grow block with a shrink block

Why does the mushroom keep changing sizes and popping?
We need to replace the trigger blocks with “when tapped” instead of “when bumped”

Why doesn't the tree change sizes when the giraffe bites it?
We need the message color to match the color in the giraffe’s code (orange message instead of yellow)



# 26 - My Aquarium
Why does the pirate ship hide forever and not show again?
The final block should be a "show" block instead of a "reset size" block

Why doesn't the pirate ship hide when tapped?
We should use the "start on tap" trigger block instead of a "start on bump"

Why doesn't the yellow fish move forever?
Both "end" blocks should be "repeat forever" blocks



# 27 - Dribble a Ball
Why does the ball go down when the cat tries to shoot the basket?
The number (parameter) for the final two "hop" blocks should be positive numbers (which causes it to hop up) instead of a negative numbers (which causes it to hop down)

Why doesn't the ball move with the cat when the cat tries to shoot the basket?
There are a couple of things we could change to fix this; however, the problem from the original code is that the repeat should be 3 instead of 5

Why does the cat try and shoot the basket when he starts moving to the right instead of when he's done moving?
We need the "hop" block after the "move right" block



# 28 - Rainy Day
Why don't we switch to the next page when the cat is done talking?
The "end" block needs to be replaced with a "go to page 2" block

Why does the cat throw the ball in the air instead of dribbling the ball on the ground?
The number (parameter) for the “hop” block inside the repeat needs a negative number to make it hop down instead of hopping up

Why does our story keep repeating itself (cycling through pages one and two)?
The "go to page" block needs to be page 3, not page 1



# 29 - A day as a Pirate
Why don't we switch to the next page when the ship moves to the right?
The "repeat forever" block should be replaced with a "go to page 2" block

Why does our lizard stay on the screen instead of hiding after running away?
The "show" block should be replaced with a "hide" block

Why doesn't our whale move forever and we switch to the nighttime backdrop so quickly?
We are using  a "go to page" block instead of a "repeat forever" block

Release 4
Minimum experience: Grades K+, 1st year using ScratchJr, 4th quarter or later


# 31 - Desert
Why don’t the Saguaro flowers appear when I tap the cactus?
We need the message colors to match (e.g., both should be green, not green and yellow)

Why doesn’t the sun switch to the second page when it moves to the top of the screen?
We need to use a “go to page 2” block, not a “repeat forever” block

Why doesn’t SafariCat say anything about the coyote when tapped?
We need to “send orange message” with a “start on tap”

Why don’t we switch to the final page after SafariCat says “I need to go home?”
We need to add a “go to page 4” block



# 32 - Oh No, We’re Super Tiny!
Why don’t we automatically go to the second page when Alex moves off the screen?
We need to replace the “end” block with a “go to page 2” block

Why don’t Alex and Chris talk and move at the same time when leaving the house?
Alex’s code runs when Chris finishes all of her blocks attached to the “start on orange message block.” To fix this, we need to trigger both sets of code in parallel by using a “start on orange message” block for both sprites. 

Why doesn’t the bird swoop down and fly back up with the hop block?
We need to h

# op -7 to swoop down. Positive 7 will make the sprite jump up, but it’s at the top of the screen, so it cannot go any higher

Why won’t Alex move and talk at the same time?
We need to use two “start on orange message” blocks: one for moving and the other for talking



# 33 - If Animals Could Talk
Why doesn’t the child (Goldilocks) stop moving and saying “nom nom” when she runs away?
We need to add a “stop” block when she “starts on yellow or blue message”

Why doesn’t the dog’s ball move at the same speed as the dog (it currently moves too fast)?
We need to reset the speed to the normal speed instead of staying fast (due to the code on the “start on red message” block). This change will make the dog and ball move at the same speed. 
An alternative answer is to make the dog move fast to match the ball’s speed

Why does the Seahorse’s answers not match the questions?
The “send message” block colors are out of order

Why don’t we see the chicken when it’s talking?
We need to include a “show” block before the chicken starts talking



# 34 - To the Moon
Why doesn’t the astronaut get into the rocket?
We need to add a hide block to make the astronaut appear to enter the rocket

Why does the rocket sound not start until it reaches the top of the screen?
We need to trigger the “move up” and “play recorded sound” blocks at the same time by running them in parallel

Why doesn’t the rocket move diagonally?
We need to trigger the “move up” and “move left” blocks at the same time by running them in parallel

Why does the cake keep getting bigger and bigger instead of growing and shrinking every now and then?
We need to trigger the “move up” and “move left” blocks at the same time by running them in parallel



# 35 - Animate a Joke
Why doesn’t the horse appear when we “send red message?”
We need to attach a “show” block to a “start on red message” block

Why doesn’t the mushroom sing and dance when the green flag is clicked?
We need to either “send green message” when “start on green flag” or replace the blocks with a “start on green flag.”

Why doesn’t the cookie appear in the joke?
We need to “send orange message” or use a “wait” block with “start on green flag” to time the cookie’s code with the joke

Why does the PirateCat keep interrupting the other sprites?
We need to add “wait” blocks to prevent PirateCat from saying something at the same time as other sprites



# 36 - The Story of the Stinky Robot
Why doesn’t the sign stop changing sizes after a couple of times?
We need to use a “repeat” instead of “repeat forever”

Why don’t the other audience members start talking when the robot gets near them?
We need to “send green message” when the robot finishes moving to the right

Why does the child who talks to the robot stay, but everyone else and the ball leaves?
Her second set of code should “start on blue message” instead of purple

Why do we hear a pop sound instead of “the end” when the story finishes?
We need to “play recorded sound 4” instead of “pop”



# 37 - A Day at the Beach
Why does the car leave without Scratch Cat?
We need to make Scratch Cat hide before the car drives away

Why don’t we switch to the third backdrop when Scratch Cat decides to surf?
We need to use the “go to page 3” block instead of page 4

Why doesn’t the crab talk while moving on the screen?
We need to run the code in parallel by using two different “start on purple message” blocks

Why do we have two Scratch Cats when the surfboard is left on the beach?
We need to hide the Surfing cat sprite as soon as the “send red message” block is used, not after



# 38 - On My Way to the Dance Party
Why don’t we go to the second page of the story when Scratch Cat moves to the right side of the page?
We need to add a “go to page 2” block at the end of our code

Why don’t we see the dragon when it’s talking?
We need to add a “show” block before it starts talking

Why does Scratch Cat appear in the road and start moving before the car stops at the house?
We need to “start on orange message,” not “start on green flag”

Why doesn’t the grandma resume dancing after the dragon appears?
We need to have her start dancing with a “start on orange message” block, not “start on green flag.” The reason why is because she dances more than once (at the beginning and after she stops for the dragon’s entrance), so we need to be able to trigger the dance twice.



# 39 - Pass it On
Why doesn’t anyone respond when the grandfather (teacher/facilitator) says “good morning, class?”
We need to “send orange message,” not yellow

Why does the car stay on the right side of the page after driving?
We need to replace the “show” block with a “hide” block

Why is the water talking instead of the wizard?
We need to “show” the wizard when we “start on orange message”

Why doesn’t the treasure, pirate ship, or PirateCat appear after the teen (female) touches the X?
We need to use a “start on bump” instead of “start on tap” block

Year 2

Release 1
Minimum experience: Grades 1+, 2nd year using ScratchJr, 1st quarter or later


# 41 - Ninja Maze Challenge 1
For each of the following debugging exercises, display the code with the bug and ask coders to predict what the bug is and solve the bug without running the code. The purpose of this differentiation in debugging is to encourage coders to analyze and predict what an algorithm will do without running the code.

What’s the bug in this code and how can we fix it?
We are not moving up far enough

What’s the bug in this code and how can we fix it?
We need to move right before we move up a second time

What’s the bug in this code and how can we fix it?
We are moving too far up the second time

What are the bugs in this code and how can we fix them?
We need to move down further and need to move right at the very end



# 42 - The Aliens Have Landed
Why doesn’t the spaceship get smaller when flying to Earth?
We need to repeatedly shrink the spaceship instead of shrinking it one time

Why doesn’t the spaceship make a noise when flying, but it makes a noise when the cat appears?
We need to run the noise in parallel with the motion blocks, so we need to change both “when I receive message” blocks to green

Why do the sprites talk about the soccer ball multiple times after tapped?
We don’t need to use a repeat for this message

Why don’t we see the spaceship sprite?
We need to show the sprite after the shortest wait block



# 43 - Flying
Why won’t the duck stay in the pond?
We need to make sure we move down the same distance we move up

Why doesn’t the cloud appear before moving down?
We need to use a “show” block instead of a “reset size” block

Why doesn’t the bird reappear when the sun comes out?
We need to switch the message to orange rather than yellow

Why doesn’t the pilot switch to the first page when it hides?
We need to use a “go to page” block instead of an “end” block



# 44 - Tag, You’re “It”
Why isn’t Tic as fast as the cat?
We need to set the speed to fast instead of slow

Why don’t we see the cat run across the stage?
We need to show the sprite after waiting for 10

Why doesn’t the librarian speak when the cat and Tic are running across the screen?
We need to use the “start on green flag” block instead of a “start on tap” block

Why does the stool move across the screen multiple times?
We need to change the parameter of the move block to move a small amount (e.g., 4) instead of a large amount (e.g., 40)



# 45 - The Helpful/Naughty Wizard
Helpful wizard
Why doesn’t the dog bark and say “Woof!” before the wizard leaves?
We need to change the order of the messages so that the dog jumps and barks before the wizard leaves, otherwise the code will never run

Why doesn’t the wizard leave after warming up the food?
Because we need to send the red message to run the code that makes the wizard leave

Why doesn’t anything happen after the wizard makes the weather warmer (i.e., when it goes to page four)?
We need the Teen’s code to start on green flag rather than on orange message

Naughty wizard
Why doesn’t Colton turn into a Colt?
Our message colors are reversed, so we don’t see Colton appear before it switches pages  (i.e., the blue message should be red and the red message should be blue)

Why does the Father sprite run away before the food turns into a crab?
We need to send an orange message before the father sprite runs away

Why does the wizard say “Not for long” and then the story stops on page three?
The app crashes when the blue message is used to call the blue message again (a process called “recursion”). To fix this, we need to make sure we have the correct message color (purple) to call the big magic cloud



# 46 - In a Cave
Why won’t we switch pages when the fish is tapped?
We need to add a “start on tap” block and connect a “send blue message” block to it

Why don’t we go back to the first page when SafariCat is tapped?
We need to use a “start on tap” block instead of “start on bump”

Why don’t we go back to the first page when SafariCat is tapped? 
You may need to zoom in on the code to make this one a little easier to see
We need to use “go to page 1” instead of using “go to page 4”

Why doesn’t the scorpion and snake appear when the boulder is tapped?
We need to broadcast an orange message instead of stopping the sprite



# 47 - The Silly Monkey
Why does the silly monkey land on its back when doing a flip?
We need to change the parameter to 12 to do a complete rotation

Why does the basketball not move with the silly monkey when doing a dunk?
We need to move up 8 rather than jump 8

Why doesn’t the monkey look like it’s jumping on the moon?
The monkey is moving too fast to be jumping on the moon, so we need to slow it down using the “set speed” block

Why does the fish keep getting bigger and bigger?
We either need to remove the first set of repeated code or we need to add in another set of code that returns the sprite to a smaller size before repeating



# 48 - Our Class
Why does Toc stay in the classroom instead of leaving at the end?
We need to use a “hide” block after moving to the edge of the screen to make Toc appear to leave the classroom

Why does the story seem out of order?
The messages in the Cat sprite should be orange followed by yellow, rather than yellow followed by orange

Why doesn’t Toc do a single flip and return back to the starting direction?
A full flip is only 12 rotations, not 20

Why doesn’t Tic jump four times when the orange message is received?
We need to use the “jump” block rather than the “move up” block



# 49 - Ninja Maze Challenge 2
For each of the following debugging exercises, display the code with the bug and ask coders to predict what the bug is and solve the bug without running the code. The purpose of this differentiation in debugging is to encourage coders to analyze and predict what an algorithm will do without running the code.

What’s the bug in this code and how can we fix it?
We are not moving up far enough

What’s the bug in this code and how can we fix it?
We need to move right before moving up

What’s the bug in this code and how can we fix it?
We are moving too far to the right after moving left

What are the bugs in this code and how can we fix them?
We are not moving down far enough or up far enough



# 50 - Creating Rain with Code
Why don’t we ever see this storm cloud?
We need to alternate between showing and hiding, not hiding twice before repeating forever

Note, there are no links for the following debugging exercises:

Make all of the cloud sprites move at the same speed and wait for the same amount of time after moving in the same direction, then ask if they can reverse engineer why our clouds look fake and how we can fix them.
Moving at different speeds and waiting for a different amount of time makes the clouds look random (i.e., more natural) rather than synchronized (i.e., less natural)

Make all of the rain sprites fall at the same speed, then ask if they can reverse engineer why our rain looks fake and how we can fix it.
Moving at different speeds makes the rain look random (i.e., more natural) rather than synchronized (i.e., less natural)

Make all of the rain sprites spin when they receive a message instead of move left or right, then ask if they can reverse engineer why our wind makes the rain look weird and how we can fix it.
Because the rain drop sprites are not moving to the side or changing speeds, it looks more like snowfall rather than wind pushing the rain to the left or right



# 51 - Can You Find the Sprite?
Why doesn’t our game switch pages when we tap ScratchCat?
We need to use the “start on tap” trigger block

Why is our level so quick?
We need to wait for a larger number (e.g., 99) instead of 9

Why doesn’t the bee hide when tapped?
We need to use a “hide” block instead of a “shrink” block

Why don't we switch to the first page when the timer runs out?
We need to move the “go to page 1” block to the code triggered by the green flag



# 52 - Fall Break
Why doesn’t the thought bubble spin all the way until it changes pages?
We either need to use a higher number in our parameter or use a “repeat forever” block

How long should the SafariCat sprite wait until showing to make the Cat appear to exit the car?
Around 45

Why doesn’t the bird flap up and down?
We need to use a “start on green flag” trigger block instead of a green message

Where should we put the “send yellow message” block?
After the third “say” block to make it appear after the Cat sprite talks about treasure

