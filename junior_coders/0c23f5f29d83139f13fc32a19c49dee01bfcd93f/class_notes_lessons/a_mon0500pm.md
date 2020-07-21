---
layout: junior_coders_default
title: Getting Started with Scratch Jr.
title2: (Monday PM) LATEST
levelsToTop: "../"

# gi= gallery image. Place all the image paths (required) here, along with an (optional) label (goes above the image)then paste the raw markdown in teh appropriate place.
# more than one gallery can exist on a page.

## Use the code below, uncommented.

#<div class="slider2">
#<!-- These have to be links  --> <!--
#<div class="slides2">

#[![ {{ page.gilabel-09 }} ](//images.weserv.nl/?url=https://kyotolesson-class.github.io{{ page.dir }}{{ page.giurl-09 }}&w=477 )](./{{ page.giurl-09 }}){: target="_blank"}
#{: #slide-09 }

#[![ {{ page.gilabel-10 }} ](//images.weserv.nl/?url=https://kyotolesson-class.github.io{{ page.dir }}{{ page.giurl-10 }}&w=477 )](./{{ page.giurl-10 }}){: target="_blank"}
#{: #slide-10 }

#[![ {{ page.gilabel-11 }} ](//images.weserv.nl/?url=https://kyotolesson-class.github.io{{ page.dir }}{{ page.giurl-11 }}&w=477 )](./{{ page.giurl-11 }}){: target="_blank"}
#{: #slide-11 }

#</div>
#<!-- necessary space-->
#<div class="gallerymenu">


#[{{ page.gilabel-09 }}](#slide-09) 
#[{{ page.gilabel-10 }}](#slide-10)  
#[{{ page.gilabel-11 }}](#slide-11) 

#</div>

#</div>

# Lines From The Edge as in the ![ "Easy Maze"](./images/2020-05-11/EasyMaze.jpg){: height="50px"}
# Linear Paths as in ![the Dragon Maze](./images/2020-04-13/Screen%20Shot%202020-04-14%20at%2011.30.36%20AM.png){:height="200px"}
# Square-with-holes, as in the ![Follow the Maze Game](./images/2020-05-11/FollowTheMazeGame.gif "Follow the maze Game"){: height="50px"}



# liquid variables used in image galleries to create thumnails, e.g.
# [![ {{ page.gilabel-09 }} ]({{ page.weserve }}{{ page.siteurl }}/{{ page.dir }}{{ page.giurl-09 }}&w=477 )](./{{ page.giurl-09 }}){: target="_blank"}
#{: #slide-09 }

weserve: //images.weserv.nl/?url=
siteurl: https://kyotolesson-class.github.io
---


 
Proceed to [Archives](./a_mon0500pm-Archives.html) 》 
{: style="float: right;"}
<br clear="both">

<div id="toc">

* [July 13th](#july-13th)
  * [July 13th Homework: Diagonal Movement and Alien Planet](#july-13th-homework-diagonal-movement-and-alien-planet)
    * [Stars and Wishes: Common Wishes](#stars-and-wishes-common-wishes)
  * [Finish the Alien Planet](#finish-the-alien-planet)
  * [July 13th Homework: Naughty/Nice Wizard](#july-13th-homework-naughtynice-wizard)
  * [July 13th Homework](#july-13th-homework)
* [July 6th](#july-6th)
  * [Review Project: "Pass It On"](#review-project-pass-it-on)
  * [Switching Costumes Project](#switching-costumes-project)
  * [The Aliens Have Landed Part 1: *The Space Ship Problem*](#the-aliens-have-landed-part-1-the-space-ship-problem)
    * [Space Ship Problem: Diagonal movement](#space-ship-problem-diagonal-movement)
    * [Space Ship Problem: Shrinking Cat](#space-ship-problem-shrinking-cat)
  * [Hangman](#hangman)
  * [July 6th Homework](#july-6th-homework)
* [June 29th](#june-29th)
  * [Review Project: "A Day At the Beach"](#review-project-a-day-at-the-beach)
  * [Pass It On from BootUp](#pass-it-on-from-bootup)
  * [Hangman](#hangman-1)
  * [June 29th Homework](#june-29th-homework)
* [June 22nd](#june-22nd)
  * [Review Collaborative Project: "Teamwork 5000"](#review-collaborative-project-teamwork-5000)
  * [Debugging Exercises for "A Day at the Beach"](#debugging-exercises-for-a-day-at-the-beach)
    * [Answers for Debugging "A Day at the Beach"](#answers-for-debugging-a-day-at-the-beach)
  * [Storyboarding](#storyboarding)
  * [June 22nd Homework](#june-22nd-homework)
* [June 15th](#june-15th)
  * [Review Projects](#review-projects)
  * [Collaborative Project: "Teamwork 5000"](#collaborative-project-teamwork-5000)
  * [July 15th Homework: Finish the Project](#july-15th-homework-finish-the-project)
  * [Upcoming Project Preview: Good Wizard Bad Wizard](#upcoming-project-preview-good-wizard-bad-wizard)
* [June 8th](#june-8th)
  * [June 8th Homework Review](#june-8th-homework-review)
  * [Individual stories](#individual-stories)
  * [June 8th Homework](#june-8th-homework)
* [June 1st](#june-1st)
  * [Message Mania Part 1](#message-mania-part-1)
  * [May 25th Homework Review](#may-25th-homework-review)
  * [3 Little Pigs in ScratchJr](#3-little-pigs-in-scratchjr)
  * [June 1st homework](#june-1st-homework)
* [May 25th](#may-25th)
  * [Homework Review](#homework-review)
  * [Message Mania Part 1](#message-mania-part-1-1)
    * [[UPDATE to Message Mania Part 1]](#update-to-message-mania-part-1)
  * [May 25th Homework](#may-25th-homework)
  * [Also Coming Up on June 1st](#also-coming-up-on-june-1st)

</div>

* Click on the [> Date]() or <span style="color: #3399cc;  border-left: 9px solid #3399cc!important;border-radius: 4px 4px; font-weight: bold">BLUE</span> borders to toggle the <span style="background-color:#ffeca0; border-left: 10px solid #3399cc !important;border-radius: 4px 4px;"><b>  &nbsp;<span style="font-size: 70%">▶︎</span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;&nbsp;</b></span>

<details>
<summary>## July 13th 
</summary>

## July 13th 


### July 13th Homework: Diagonal Movement and Alien Planet 

We reviewed the Diagonal Movement Puzzle and Alien Planet Project. In one solution, as in the "P1 Spaceship" in the code for the Alien Planet (below), is to have several green flag blocks that all start at the same time. That means the spaceship moves up and across and shrinks at the same time, that is to say diagonally and away. Another answer to the puzzle was, instead of many green flags, to have the character/space ship send a message to itself, and have several "receive message blocks" do movements or other actions at the same time.  


{% include niceimage-galleryNoTablesweserve.html folder="/scratchProjects/Y1R31Alienplanet/" %}

<!-- 
{ % include niceimage-gallery.html folder="/scratchProjects/Y1R31Alienplanet/" %}

{ % include image-gallery.html folder="/scratchProjects/Y1R31Alienplanet/" %}
-->

#### Stars and Wishes: Common Wishes

We looked at all the projects, and kids came up with Stars and Wishes for the projects. Part of the Here are some common "wishes" for projects. Remember to put them into your next project:

* Draw your own interesting character or background. (For example, using colors and shapes well)
* Make clear who is speaking when there is sound. (For example, have characters move when they speak.)
* Make sure people can follow the action of the story. (Make each action separate)
* Use word bubbles to explain the action.
* Use text panels, like a "The End" screen to carry the project forward.
* Add screen navigation buttons

Kids are getting better at using the drawing screen, and the characters are looking better and better.

### Finish the Alien Planet

Some kids took on the extra credit project and gave the alien various objects. Those that didn't can finish their projects for the homework. 

### July 13th Homework: Naughty/Nice Wizard

The assignment was to take the basic idea of the Naughty Wizard Video and make their own version.The basic story is there is some kind of conflict, and either a naughty or nice wizard is involved in solving it or making it worse.  

First the kids worked on a storyboard. I wanted kids to use the [switching constumes](#switching-costumes) technique we learned two weeks ago when applying the "Wizard"'s magic. 

### July 13th Homework

The homework is:
1. Finish the Alien Planet projects, including making the improvements (wishes) that people suggested in class.
2. Finish you Naughty/Nice Wizard thinking about the "Common Wishes" list above.


</details>


<details>
<summary>## July 6th 
</summary>

## July 6th 

### Review Project: "Pass It On"

We reviewed homework projects. Students were very kind in giving out "Stars and Wishes", that is talking about what they liked and would improve in each project.



### Switching Costumes Project

Once common challenge in ScratchJr. is making a character suddenly change. We watched a video about [several ways to do that](https://www.youtube.com/watch?v=7jv5r9aafZA&feature=youtu.be). 

<iframe width="100%" height="315" src="https://www.youtube.com/embed/7jv5r9aafZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


We then walked through a project showing two ways to make a character change costumes using the [Switching Costumes Project](./scratchProjects/20200706HidingDisappearing.sjr)

1. Using a new screen

If you place the character at the same place in both screens (at the end of one, and the beginning of the other) they will appear to magically change.

2. Using a message

If you send a message that goes to both characters, you can make one disappear, and the other appear at the same time. 

If you add a 3 "smoke screen" that appears and disappears as the characters change, it can seem like magic.

### The Aliens Have Landed Part 1: *The Space Ship Problem*

We then watched a video describing out next project, "The Aliens Have Landed" from Bootup.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/aCoA8V1nx9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### Space Ship Problem: Diagonal movement

In the beginning of the video the space ship  moves diagonally up and across the screen. I challenged the group to show me how to do it. Kids came up with some interesting suggestions, and eventually we got to a solution (though there is a simpler one: see screen 1 of the Homework). The secret is having both actions take place at the same time in separate "threads".

#### Space Ship Problem: Shrinking Cat

However, in the video, the space ship also gets smaller. How do we do this? One suggestion was made, but the **Red Shrinking Cat** (screen 2 of Homework) doesn't quite work. This is the homework challenge (screen 3).

### Hangman

After cleanup we had enough time for a fun game of Hangman. 

### July 6th Homework

* Download [the Switching Costumes](./scratchProjects/20200706HidingDisappearing.sjr) project to ScratchJr. Do you understand it?

* **Solve the Space Ship Problem** (in screens 3 and 4). [Here is a guide for you to download](./scratchProjects/20200706SpaceShipProblemHW.sjr). It has 4 screens:
   1. **Diagonal Movement** from class, and a simpler one without loops.
   2. **The Red Shrinking Cat** that didn't work. (has loops)
   3. Fix this **Red Cat** to make it not bump. Click the box for a hint.
   4. An example of how to change direction. Can you make the pig do it too?

* **Extra Credit**: Do you see how I made the hint appear and disappear? Can you copy that somewhere?
* **Extra Credit**: Watch the Aliens have landed video (above) and try to make it (without having the source code). What would you give (of yours!) to an alien?


</details>


<details>
<summary>## June 29th 
</summary>

## June 29th

### Review Project: "A Day At the Beach"

We reviewed the A Day At the Beach projects that students completed. It was interesting how each child had their own ideas about a day at the beach. We also reviewed:

* Editing a character with a neck that was too long. We studied how to tap and drag to move sections on a image to a new location.


### Pass It On from BootUp

We watched the Pass it On from Bootup video. This video presents four situations which students are asked to continue. 

<iframe width="100%" height="315" src="https://www.youtube.com/embed/YdNbPbozgnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Each child chose one project and based on that choice:

* Reverse Engineered the first part based on the video. They were allowed to make whatever changes they wanted.
* Continue the story.

We were unable to download the file from the original site. You may be able to download it from our site: [Pass It On](./scratchProjects/Y1R49Passiton.sjr)

* Making two characters (a pirate and their boat) move together at the same time by using the same message sent to both.

### Hangman

As students worked on the project I demonstrated techniques to solve problems that came up, including a lot of spelling questions. This lead to a rousing game of Hangman. 

### June 29th Homework

Continue working on Pass It On, and send it to my by email. 

</details>


<details>
<summary>## June 22nd
</summary>

## June 22nd

### Review Collaborative Project: "Teamwork 5000"

First we reviewed student homeworks. 

### Debugging Exercises for "A Day at the Beach"

We did a debugging project. I showed students the [A Day at the Beach Project](./scratchProjects/Y1R47AdayatthebeachMod.sjr) from BootUp ans students had to answer the following questions:

1. Why does the car leave without Scratch Cat?

2. Why do we have two Scratch Cats when the surfboard is left on the beach?

Have students reverse engineer it. Click below for answers.

<details>
<summary>#### Answers for Debugging "A Day at the Beach"
</summary>

#### Answers for Debugging "A Day at the Beach"

1. We need to make Scratch Cat hide before the car drives away

2. We need to hide the Surfing cat sprite as soon as the “send red message” block is used, not after

</details>

### Storyboarding

Students then Storyboarded their own day at the beach story. Each student and I reviewed each student's project together to make sure it was complete, and they began to code it.

### June 22nd Homework

The homework is to finish the project and email it to me.

Also, optionally, students can download  [A Day at the Beach Project](./scratchProjects/Y1R47AdayatthebeachMod.sjr)  project and try to debug these two other problems we didn't look at:

1. Why don’t we switch to the third backdrop when Scratch Cat decides to surf?

2. Why doesn’t the crab talk while moving on the screen?





</details>
<details>
<summary>## June 15th
</summary>

## June 15th

### Review Projects

We reviewed the 3 little pigs projects that were submitted as homeworks. Kids seem to enjoy sharing their work very much, and we also attempted to solve minor problems in class. 

### Collaborative Project: "Teamwork 5000"

Today's main project was to work on a project as a class as a story game. The rules were:

* Each person adds one idea. Each person gives one "step".

Possible "steps" are (rules in parentheses were not actually used):

-   Add character
-   Trigger block + up to 3 actions, for example:
    -   green flag + move right and down and repeat 3 times
    -   touch trigger + disappears
    -   etc.
-   send message and receive message plus 2 actions
-   character says something
-   background and character images:
    -   We make the image together.
    -   Take turns adding strokes or figures.
-   Once step is added it cannot be changed without the original creator's agreement

- You may add to them.
- You may make them do unexpected things...that's okay.
- You may only work with the same character 2 times in a row.

### July 15th Homework: Finish the Project

Everyone had made several contributions. We named the project "Teamwork 5000". The homework is to:

 * [Upload this project](./scratchProjects/Teamwork5000.sjr), and continue it on your own. 
 * You may not take away from the project but you can add to it. 
 * You may only add up to 2 more characters. 
 * You may add a background. 
 * You should try to add new screens and use the same characters again.


### Upcoming Project Preview: Good Wizard Bad Wizard

At the end of class we also previewed the next project after this, "Good Wizard, Bad Wizard".

</details>

<details>
<summary>## June 8th
</summary>

## June 8th

### June 8th Homework Review

Today we reviewed the 3 Little Pigs Project that students submitted. They were all very creative in their work. We had the chance to do some practice debugging as a group when one of the projects didn't work as expected. It was a great thinking exercise and I think the kids enjoyed it.

### Individual stories

I then gave the students the in class assignment, which was to tell a new story. This time it could be any story they wanted. First students worked with pen and paper outlining the story, then started in on ScratchJr. Some of them based it on stories they knew, some made entirely original stories. As students were working I went around the room and helped them with problems or questions they had.


### June 8th Homework

This week's homework is to finish their Individual Story Project and email it to me. 


</details>
<details>
<summary>## June 1st
</summary>

## June 1st


### Message Mania Part 1

We watched the video about [Message Mania Part 1](#update-to-message-mania-part-1){: .innerlink}

### May 25th Homework Review

We reviewed the homework assignments the kids submitted. They were great and kids enjoy talking about their projects with the class. Kids worked together to fix some problems.

### 3 Little Pigs in ScratchJr

Some kids told their own version of the 3 Little Pigs. The assignment was to plan, on paper, without using ScratchJr, how they would tell the story. This included:

+ Designing the characters and houses
+ Plotting out the actions
+ Writing dialogue

The purpose was to think about the project before actually starting to code it. I reviewed their plans, and when they were ready they started coding. Here is my example of what my plan and first screen look like. See [here](../lessons/3LittlePigsInScratchJr.html) for more information.

### June 1st homework

The homework is:

1. Complete and submit their final project to me.

2. (**DO NOT USE SCRATCHJR. PLANNING ONLY.**) Think about other stories you might want to tell in scratch. Be ready to tell the story in class! 

</details>

<details>
<summary>## May 25th
</summary>

## May 25th

### Homework Review

We reviewed homework. Great work telling me what your stories were about! 

Everyone was using English well. Gambatte! Ooops, I mean Try Hard! ;-)

### Message Mania Part 1

We ran through the Message Mania HW assignment.  The purpose of the HW was to:

* Plan/think about the story before you code it. That is why the assignment was NOT to do it in ScratchJr.

My explanation was poor. I blame Zoom ;-) 

Many children did this: 

* One character has: Green flag, orange message, red message, yellow message.

![Green Flag 3 Messages](./images/2020-05-25/GreenFlag3Messages.jpg){: height="100px"}

What I wanted was:

* Each character has a green flag. No message. Messages will be sent by Buttons.
* Each character receives 3 messages
* Each reactions is a different type

![Each Character Has This in Message Mania](./images/2020-05-25/EachCharacterHas.jpg){: height="100px"}


The purpose of the project was:

* to show that messages can go to more than one character at a time. 
* to continue getting practice coding messages and buttons.
* Clicking a button can make several characters move at once.
* Help some students use Messages instead of Wait buttons to control sequence and timing. 

#### [UPDATE to Message Mania Part 1]
I could see that some kids were struggling with this so I called in the Big Dogs. Here is a video showing what to do. If you have any questions, let me know. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WA4_xoRt1r8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[A direct link](https://youtu.be/WA4_xoRt1r) to the video.

### May 25th Homework

* Work on HW I gave you in class (if I did). 
* Continue adding to Message Mania.
* Send me your Message Mania project. 
* Download and install MY SAMPLE Message Mania. Try to understand it and we will work on it next week.

If you don't know what to do, just PLAY with ScratchJr. There is no correct answer! It's all good! 

Ideas: 

* Turn Message mania into a story. What happens next? What is the situation? What is the goal?
* Think about characters/actions you want first. Then code it.
* Send messages to more than one character at a time. Why would you do this?
* Use different color messages to control sequence of events. One character orange. Then red, etc.

### Also Coming Up on June 1st

Do you know the story of the 3 little pigs? If not, try to read it.


</details>






<!-- <div class="bottomSpacer">

</div> -->