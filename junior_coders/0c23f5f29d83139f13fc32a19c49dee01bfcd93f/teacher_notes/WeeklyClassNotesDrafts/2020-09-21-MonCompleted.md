---
layout: junior_coders_default
---


details>
<summary>## Sept. 21st
</summary>

## Sept. 21st



### Sept. 28th Homework

The homework is:

* Do one more tutorial
* Continue working on whatever projects you have started

### Pong Game

Today we focused on the Pong tutorial. We changed the background, and styled the ball and paddle.

<iframe src="https://scratch.mit.edu/projects/427629054/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>


The code also plays a sound if the ball touches the paddle.

```
when green flag clicked
forever
if on edge, bounce
move (15) steps
if <touching (Paddle v) ?> then
play sound (Boing v) until done
turn right (180) degrees
move (15) steps
end 
end 
```
{: .msb}

<!-- ![](https://i.imgur.com/pnpjaiy.jpg) -->



### Pongg  Princess version

{% include giphy.html link="https://media.giphy.com/media/LKlYWuuvT8X8jNhK3K/" %} 


The ball moves at a diagonal, bouncing off the edges. It tells the the paddle (a princess) when it has hit it.

```
when green flag clicked
point in direction (45)
forever
move (15) steps
if on edge, bounce
end 

when green flag clicked
forever
if <touching (Princess v) ?> then
broadcast (hit v)
turn cw (180) degrees
move (15) steps
end 
end
```
{: .msb}

<!-- ![](https://i.imgur.com/dkOBG9i.jpg) -->


The paddle, in the form of a princess, follows the mouse with the set x to mouse x block. It also receives the message to speak.

```
when green flag clicked
forever
set x to (mouse x)
end 

when I receive [hit v]
say [Hello Crystal ] for (2) seconds
```
{: .msb}

<!-- ![](https://i.imgur.com/SkdnaFx.jpg) -->


### character moving

Making a character move
Antoher project focused on adding many new characters. 


![](https://i.imgur.com/NBrGvHE.jpeg)

One character moves from side to side. It also knows how to bounce when it meets the dge. In addition, since it is going side to side, it wants a left-right roaations style (otherwise the character flips and comes back upside down),

```

when green flag clicked
set rotation style [left-right v]
forever
move (9) steps
if on edge, bounce
end

```
{: .msb}

<!-- ![](https://i.imgur.com/A5MCaTQ.jpg) -->

### Next week: Group Project to Review All Blocks 

The kids are very excited to start coding games and other advanced projects. Next week we will make a group project where the focus will be learning how each block works. We will focus on movement blocks, and all the block ss we have used  far. This will help up be able to think about what is possible in Scratch and design our own games!!


</details>
 