---
layout: junior_coders_default
title: Getting Started with Scratch Jr.
title2: Rose Class LATEST
levelsToTop: "../"
---

<!-- 
- [ ] Proceed to [Archives](./a_mon0500pm-Archives.html) 》 
- [ ] {: style="float: right;"}
- [ ] --> 

<br clear="both">

<div id="toc">

* [July 17th](#july-17th)
  * [July 17th Homework](#july-17th-homework)
  * [July 17th Homework Review: Outer Space](#july-17th-homework-review-outer-space)
    * [Debugging: Outer Space](#debugging-outer-space)
    * [Debugging: Outer Space Answers](#debugging-outer-space-answers)
  * [July 17 Break](#july-17-break)
  * [Animal House](#animal-house)
    * [Debugging: Animal House](#debugging-animal-house)
    * [Debugging: Animal House Answers](#debugging-animal-house-answers)
* [July 10th](#july-10th)
  * [Review the Under the Sea](#review-the-under-the-sea)
  * [Initializiing a character](#initializiing-a-character)
  * [Repeats](#repeats)
    * [Repeat the Repeat](#repeat-the-repeat)
  * [Drawing Backgrounds and characters](#drawing-backgrounds-and-characters)
  * [Face Spinner](#face-spinner)
  * [July 10th Hangman](#july-10th-hangman)
  * [July 10 Homework: "Outer Space"](#july-10-homework-outer-space)
* [July 3rd](#july-3rd)
  * [July 3rd Sharing Time](#july-3rd-sharing-time)
  * [July 3rd Homework: Under the Sea](#july-3rd-homework-under-the-sea)
* [June 27th](#june-27th)
  * [Game: Black](#game-black)
  * [Game Teacher Says](#game-teacher-says)
  * [ScratchJr Intro](#scratchjr-intro)
  * [June 28th homework](#june-28th-homework)

</div>

* Click on the [> Date]() or <span style="color: #3399cc;  border-left: 9px solid #3399cc!important;border-radius: 4px 4px; font-weight: bold">BLUE</span> borders to toggle the <span style="background-color:#ffeca0; border-left: 10px solid #3399cc !important;border-radius: 4px 4px;"><b>  &nbsp;<span style="font-size: 70%">▶︎</span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;&nbsp;</b></span>

<details>
<summary>## July 17th
</summary>

## July 17th

### July 17th Homework

The homework for next class is:

1. Finish the Animal House Project
2. Do the Outer Space and Animal debugging exercises above.

Below is a summary of what we did in class.

### July 17th Homework Review: Outer Space

We reviewed and developed the [Outer Space project](./scratchProjects/Y1R17Outerspace.sjr). Kids watched the project run and tried to make their own similar code. One key idea was **having two or more actions happen at the same time**. For example, click the astronaut link below, and you can see the astronaut does 3 actions at the same time: 

1. He turns, 
2. moves up, and 
3. shrinks then disappears.

This creates the effect of him spinnin off into space and disappearing. This trick is very important in ScratchJr.

{% include niceimage-galleryNoTables.html folder="/scratchProjects/Y1R17Outerspace/" %}



#### Debugging: Outer Space

Here are some problems to solve:

{% include niceimage-galleryNoTables.html folder="/scratchProjects/Y1R17OuterspaceDebugging/" %}

1. Why doesn’t the sun spin when pressed?
2. Why does the alien stay in the air and not hop back down?
3. Why doesn’t the shooting star hide after it shrinks?
4. Why doesn’t the astronaut fly up when pressed?

<details>
<summary>#### Debugging: Outer Space Answers
</summary>

#### Debugging: Outer Space Answers
1. It needs the start on tap trigger
2. The move up block needs to be replaced with a hop block
3. The show block needs to be replaced with a hide block
4. The number (parameter) on the move up block needs to be greater than 0

</details>

### July 17 Break

We played Hangman during the break, and it was a lot of fun. For a change, the kids worked together to choose a word ("Doctor") that I had to guess. They almost stumped me!

### Animal House

We then moved to making characters talk, either by recording sounds, or adding text bubbles. Our  model was the Animal House Project from BootUp.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/ie-PcCGplu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The kids worked on their own version of the project, and the homework was to finish the project. 


#### Debugging: Animal House

Here are some debugging exercises.

{% include niceimage-galleryNoTables.html folder="/scratchProjects/Y1R18AnimalhouseDebugging/" %}


1. Why does the barn get bigger and not bigger, then smaller?

2. Why does the chicken play a pop sound and not the recorded sound?

3. Why does the horse play the same recording twice instead of two different recordings?


<details>
<summary>#### Debugging: Animal House Answers
</summary>

#### Debugging: Animal House Answers

1. The second grow block should be a shrink block

2. The pop block sound be a play recorded sound block

3. The second play recorded sound block should have a number 2 and not a number 1


</details>

</details>


<details>
<summary>## July 10th
</summary>

## July 10th

### Review the Under the Sea

We reviewed the homework projects. The original Under teh Sea project can be [downloaded here](./scratchProjects/Y1Q15UndertheSea.sjr).


### Initializiing a character

To set the initial position, visibility, or size of a character:

* **manually** change the position of the character. 

![Initial Position](./images/2020-07-10/20200710InitialPosition.gif)
  
Note in the gif above, if I use a block to change the position, it returns when I press the return button. If I manually move it, it stays.

* **manually** change the visibility 

![Initial Position](./images/2020-07-10/20200710Invisble.gif)

* **manually** change the size 

![Size](./images/2020-07-10/20200710Size.gif)


This is useful if you want a character to start off small, or in a certain position. 

* Rotation **doesn't work**

![Rotation](./images/2020-07-10/20200710Rotation.gif)


### Repeats 

#### Repeat the Repeat

I briefly discussed repeats within repeats:

1. Put some actions in a repeat block.
2. Add something to that, and put that in a repeat block
3. Repeat step 2

Not so interesting at this point.


### Drawing Backgrounds and characters

We reviewed the Drawing Editor to:

* Create circles, squares, and lines 
* Use different thicknesses
* Fill in drawings
* Move drawings
* Change the shape of blocks
* Delete drawings

### Face Spinner

<iframe width="100%" height="315" src="https://www.youtube.com/embed/4r-WH7c5w0M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Download here](./scratchProjects/Y1R16Fidgetspinner.sjr)

To practice using the editor, the kids reverse engineered the project above, but then, for fun, we put each other's pictures in the circles to make cool **Face Spinner**. 

Then they made the spinner spin. As a challenge, I proposed making the spinner go fast at first and slower later. Most kids did it this way:

![Rotation](./images/2020-07-10/20200710Fidget.png){: height~"200px"}

### July 10th Hangman

At the end we had a little time left and we played Hangman. For some kids it was their first time playing this classic children's spelling game!

### July 10 Homework: "Outer Space"

<iframe width="100%" height="315" src="https://www.youtube.com/embed/EQ8FqqIM_Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The homework is to try to make this project just from watching the video. The stars and sun are just like we did in class. The Green Cat is a little different and you might have to think about it. The Astronaut is a new trick we will learn next time! 

</details>



<details>
<summary>## July 3rd
</summary>

## July 3rd

This week we continued working on learning basic ScratchJr Blocks.

### July 3rd Sharing Time
The kids shared the work they had done by themselves during the week. Kids learned a lot. 

Children explored using the various motion blocks to create interesting dances. They created their own versions of projects similar to the following Bootup Projects:

1.  Dance Alone

<iframe width="100%" height="315" src="https://www.youtube.com/embed/XO9bv2Oz_68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

2. Can't Stop Dancing

Uses repeat block to repeat motion

<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZPgbWqX4Nog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

3.  Dance Party: several sprites perform at the same time.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/YsS21mU9Nxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Download](./scratchProjects/Y1Q13DanceParty.sjr)


4. Starry Night; Putting it all together


<iframe width="100%" height="315" src="https://www.youtube.com/embed/kxQGuTWfXx0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Starry Night from Bootup](./scratchProjects/Y1Q14StarryNight.sjr)


### July 3rd Homework: Under the Sea 

The homework was to create a project like the following. 

<iframe width="100%" height="315" src="https://www.youtube.com/embed/bleXofsQjzw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</details>


<details>
<summary>## June 27th
</summary>

## June 27th

### Game: Black

We played the game called [Black](../lessons/gameBlack.html). The game teachers kids several concepts related to coding, including making choices, thinking about future steps, and logical reasoning. 


### Game Teacher Says 

We played the [Teacher Says](../lessons/TeacherSays.md) game. This game helps us learn each other's name, as well as teaching about sequencing event and following instructions.


### ScratchJr Intro

I did a simple introduction to the ScratchJr. interface. We covered:

* The home button 
* The green flag/start block 
* The settings
* The blue motion buttons
* The purple size buttons
* The say nd record buttons
 
We also talked about the image interface:

* Changing the color of elements 
* Undoing actions 

Kids then spent some time experimenting with these. Kids shared their "discoveries".

We will review all these again next class.

![scratchjrinterface](./images/jc_a_001_scratchjrinterface.jpg)



### June 28th homework
The homework is for kids to teach parents how to play [Black](../lessons/gameBlack.html). 


Also kids should play with ScratchJr and try to discover new things about how it works.

</details>