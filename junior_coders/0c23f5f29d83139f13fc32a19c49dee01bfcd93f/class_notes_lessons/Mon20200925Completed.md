---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Monday PM)
title2: draft
levelsToTop: "../"
---

details>
<summary>## September 25th
</summary>

## September 25th

### Homework for September 28th and October 2nd

The homework is to: 

* keep working on projects you started.
* complete one or more Motion exercises here: <https://scratch.mit.edu/studios/27602759/>. 

The exercises have various sets of blocks. The goal is to put the blocks together in the right order so that they look like the videos below:

1. Exercise 1

<https://scratch.mit.edu/projects/429158314/>

    * What it will look like in the end


<iframe src="https://forkphorus.github.io/embed.html?id=429155328&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

* link to new tab: [https://forkphorus.github.io/app.html?id=429155328
](https://forkphorus.github.io/app.html?id=429155328)

1. Exercise 2

<https://scratch.mit.edu/projects/429161838/>


    * What it will look like in the end


<iframe src="https://forkphorus.github.io/embed.html?id=429165733&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

* link to new tab: [https://forkphorus.github.io/app.html?id=429165733
](https://forkphorus.github.io/app.html?id=429165733)

1. Exercise 3

<https://scratch.mit.edu/projects/429173104/>


    * What it will look like in the end


<iframe src="https://forkphorus.github.io/embed.html?id=429167079&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

* link to new tab: [https://forkphorus.github.io/app.html?id=429167079
](https://forkphorus.github.io/app.html?id=429167079)

### Basic Motion Blocks

One student was being introduced to Scratch for the first time after using ScratchJR. The main goal was to help her get used to the new program "interface". She also did some basic tutorials and learned how to use the motion, play a sound, and change size blocks as follows. It was a lot for one day, but she did very well!

```
When this sprite clicked
move (100) steps
if on edge, bounce
set rotation style [left-right v] 

when this sprite clicked
play sound (1 v) until done

when this sprite clicked
repeat (15) 
change size by (10)
end
repeat (15) 
change size by (-10)
end
```
{: .msb}


## A more advanced student

A slightly more advanced student started with some tutorials, but added a lot of his own ideas.

<iframe src="https://forkphorus.github.io/embed.html?id=429283651&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

* [open in new tab
](https://forkphorus.github.io/app.html?id=429283651)


 This project is wonderfully complex, with many great examples of "broadcasting". This is called sending messages in ScratchJr.

* making the character dance by changing the background, and then having this wonderful conversation:

```
// On the Dancer
when this sprite clicked
repeat (27) 
wait (1) seconds
next costume
end
broadcast (2 v)

// On the cat:

when i receive [2 v]
set voice to [kitten v] ::tts
speak [dude so cool] ::tts
broadcast (3 v)

// Dancer says thank you

when i receive [3 v] // small error in student project fixed here!
speak [thanks] ::tts
broadcast (5 v)

// Cat says you're welcome
when i receive [5 v]
speak [your welcome] ::tts
wait (5) seconds
speak [bye] ::tts
```
{: .msb}

* Using text to speech and starting the music

```
when this sprite clicked
set voice to [squeak v] ::tts //initialize
speak [I like to dance] ::tts
broadcast (1 v)


when I receive [1]
start sound [dance celebration] 
```
{: .msb}

* Buttons that send messages to change the music

```
// change background
when this sprite clicked
broadcast (7)

when I receive [7]
next backdrop
``` 
{: .msb}

* Using a variable to make the sounds change

This is especially difficult and I helped a bit. 

```
// initialize on dancer
when gf clicked
set [my variable v] to [0] // initialize

// on button click broadcast
when this sprite clicked
broadcast (8)

// on dancer receives broadcast
// and changes music
when i receive [8 v]
change [my variable v] by (1) // here we use the variable
stop all sounds
play sound (my variable v) until done // new variable -> new sound
```
{: .msb}



All together a great project. 

</details>


### Additional Notes Not for publication


### Rino

ID: 429294195

<iframe src="https://forkphorus.github.io/embed.html?id=429294195&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

[https://forkphorus.github.io/app.html?id=429294195
](https://forkphorus.github.io/app.html?id=429294195)


test

<iframe src="https://forkphorus.github.io/embed.html?id=429294195&ui=false" width="480" height="360" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

```
when this sprite clicked
play sound (1 v) until done

when this sprite clicked
repeat (15) 
change size by (10)
end
repeat (15) 
change size by (-10)
end
```
{: .msb}


### Akira 

ID: 429283651

<iframe src="https://forkphorus.github.io/embed.html?id=429283651&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

[https://forkphorus.github.io/app.html?id=429283651
](https://forkphorus.github.io/app.html?id=429283651)

```

//BACKDROP



when i receive [7 v]
next backdrop


* This could be eliminated
# This could be eliminated
//# This could be eliminated

---
when i receive [2 v]
set voice to [kitten v] ::tts
speak [dude so cool] ::tts
broadcast (1 v)

when i receive [5 v]
speak [I like to dance] ::tts
wait (5) seconds
speak [I like to dance] ::tts

---

when this sprite clicked
set voice to [squeak v] ::tts
speak [I like to dance] ::tts
broadcast (1 v)

when i receive [8 v]
change [my variable v] by (1)
stop all sounds
play sound (3 v) until done

when i receive [message1 v]
start sound (1 v) ::sound

when i receive [4 v]
text2speech_speakAndWait
broadcast (1 v)

when gf clicked
set [my variable v] to [0]

when this sprite clicked
repeat (27) 
wait (1) seconds
next costume
end
broadcast (1 v)

when this sprite clicked
broadcast (1 v)

when this sprite clicked
broadcast (1 v)

```
{: .msb}

This block 

```
when i receive [message1 v]
start sound (1 v) ::sound
```
{: .msb}

only plays music once. Could repeat using the 

```
repeat until <(costume #) = (1)>
start sound (1 v) ::sound
end 
```
{: .msb} 

When you start the project, nothing happens. How do you let the user know that he/she has to click the character? Some options:

* A button
* She says something at the start
* A sign appears
* An opening screen

What if the background changed automatically as the music played


## My hw project


<iframe src="https://forkphorus.github.io/embed.html?id=429167079&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

[https://forkphorus.github.io/app.html?id=429167079
](https://forkphorus.github.io/app.html?id=429167079)

