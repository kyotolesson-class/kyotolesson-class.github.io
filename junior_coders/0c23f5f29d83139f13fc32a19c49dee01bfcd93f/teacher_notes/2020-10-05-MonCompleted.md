---
layout: junior_coders_default
levelsToTop: "../"
title: "October 5th Plan"
---


details>
<summary>## October 5th
</summary>

## October 5th

### Homework for October 12th

THe homework for October 12th is to DRAFT your new project in scratch, without using scratch, on paper. This is a "thinking ahead" challenge.

Think about characters, objects, actions, scripts, etc.


### Simple Pong Game

Some students worked on the Pong Tutorial. The ball points in the 45 degree direction and keeps moving and bouncing off the edges


```
when gf clicked
point in direction (45)
forever 
move (15) steps
if on edge, bounce
end
```
{: .msb}

If it touches the paddle, it turns and keeps moving. 

```

when gf clicked
forever 
if <touching (paddle v) ?> then 
turn cw (180) degrees
move (15) steps
wait (0.5) seconds
end
end
```
{: .msb}


The paddle has to follow the mouse: 

```
when gf clicked
forever 
set x to (mouse x)
end
```
{: .msb}

The game stops if the wall is touched 

```
when gf clicked
forever 
if <touching (wall v) ?> then 
stop [all v]
end
end
```
{: .msb}

One next step is toa add sound...

```
if < > then 
play sound (1 v) until done :: music
end

```
{: .msb}


Also, adding a score element to the screen is nice{: .msb}
```


when gf clicked
set [Score v] to [0]

when gf clicked
forever 
if <touching (paddle v) ?> then 
change [Score v] by (1)
end
end

```
{: .msb}

### The Music Tutorial

Another students completed their own version of the music tutorial with a special button to start the music.

<iframe src="https://forkphorus.github.io/embed.html?id=432617711&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

* see this in a new tab: [https://forkphorus.github.io/app.html?id=432617711
](https://forkphorus.github.io/app.html?id=432617711)


### A remix 

Lastly, one student chose a different way of exploring; He started with a project he liked, and by tyring ot modify it learned how it worked. This was a great way to learn about tricks you might not have imagined. For example, we noticed this project has an intro screen that opens the first time the project is run, but not after that. It is a nice effect and depends on a clever, but simple, trick. Here's how it worked:

The key here is that the **firstOpen** flag is set to Yes before the project starts.  It is a lone block, not part 
of the regular execution, and so must be set manually. It will not be reset every time the program runs. 

```

set (firstOpen v) to [yes] 
```
{: .msb}

Then, because of the flag, it runs the intro:
```
when @greenFlag clicked
...
if <(firstOpen) = [yes]> then
    broadcast [intro v] and wait
ended

```
{: .msb}

When the intro is done, **firstOpen** is set to **no**
and stays that way on the next start (because it was manually set.)

```
when I receive [intro v]
do the intro
set [firstOpen v] to [no]
do more stuff
```
{: .msb}


Now that the student has learned it, he can use it in other projects.

The student tried to modify the project to add a tenth ball with his own "logo" on it. Designing the character was okay and making it appear was okay, but he found the ball wasn't doing anything. Why?? Because the code depends on creating 9 clones of one ball character, not separate ball characters. This is a technique we haven't learned yet. 

```
when @greenFlag clicked
erase all
ballColors::custom

define ballColors
...
repeat (9)
// this needs to be 10
    create clone of [myself v]
    next costume
    change x by (40)
end

```
{: .msb}

Because of this, the way to create a new ball starts with changing the 9 to a 10. But this still hasn't solved the problem completely. I wonder why? We will work on this next week!! Hint: it involves colors and lists!!



</details>
 
