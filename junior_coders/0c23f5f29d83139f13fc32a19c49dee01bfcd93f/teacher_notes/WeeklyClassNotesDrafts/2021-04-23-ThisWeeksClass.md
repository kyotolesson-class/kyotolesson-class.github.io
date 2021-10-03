---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Monday PM)
title2: 
levelsToTop: "../"
tags: []
---


<!-- MONDAY -->
<details markdown=1>
<summary markdown=1>## April 26th
</summary>
## April 26th

### Recap for April 26th

Back to Scratch
  : Some kids moved back to Scratch after a long time with Tynker. I had loosely offered this a while back, and the kids have asked for it since then. This will allow us to focus more on details and specific steps. 

Virus Shooting
  : Student H continued working on his Virus Shooting Project. Today we worked in the photo editor making his character into a silhouette but cutting part out, and painting over it. Then we moved to coding. We worked on making the gun follow the mouse pointer and limiting the motion to certain directions. This required 2 if block, an a condition block to test tthe diretion and point in the right direction.


```
when @greenFlag clicked
forever
    point towards [mouse-pointer v]
    if <(direction) > [20]> then
        point in direction (20)
    end
    if <(direction) < [-41]> then
        point in direction (-41)
    end
end

when I receive [message2 v]
play sound [Squish Pop v] until done

when @greenFlag clicked
forever
    say (direction)
end

```
{: .msb}

{% include turbowarp.html Name="Virus Shooter" ID="517634593" caption="The spraygun's motion is limited to between -30 and 35 degrees" %}


Tutorials
  : Student M worked in Tynker. As a warmup, he made mouse follow the mousepointer and a cat follow the rat . He made the game stop if the cat caught the mouse. The key was using touching blocks, with forever loops  to do the testing

```
when @greenFlag clicked 
forever
    glide (1) secs to [Mouse1 v]
end

// Cat follows mouse


when @greenFlag clicked 
forever
    go to [mouse-pointer v]
end

// Mouse follows pointer


when @greenFlag clicked 
forever
    if <touching [Cat v]?> then
        say [help] for (2) seconds
        stop [all v]
    end
end

// when touched game stops
```
{: .msb}

{% include turbowarp.html Name="mouse run" ID="521123023" caption="" %}


Pong
  : Then he finished a tutorial for a pong like game. We experimented with different rebound angles for the ball, e.g. 200 degrees instead of 180 degrees.


```
when @greenFlag clicked
forever
    if <touching [Magic Wand v]?> then
        change [score v] by (1)
        turn @turnRight (200) degrees::motion // 200 degrees instead of 180 degrees
        move (15) steps
        wait (0.5) seconds
    end
end
```
{: .msb}


{% include turbowarp.html Name="Pong" ID="521128840" caption="" %}


### Makeup Class
There was also a makeup class.

Joke Game
  : Student A1 finished his comic strip joke class. He added more characters and conversation, as well as a cute "Fin" end card. The project is below but beware, the volume is high, so turn it down before you play the project.

{% include tynkerprojectpage.html Name="Joke" ID="https://www.tynker.com/play/joke/607e7e767499e620f9630a0c-610559XroM3d00DC4i3IC,ulTdk.Yk" %}



Comic 
  : Student A2 was also working on a comic. This time we revised it 

We moved the font and color information to a separate initializion block

![Imgur](https://i.imgur.com/BugB9tz.png){: .jsgif}


We talked about loops. For example, we used a loop to move the caveman towards the karate kid and to change the karate kid's costume while he kicks. We counted the number of costumes so that we would end on a high kick.

![Imgur](https://i.imgur.com/3JC5plC.png){: .jsgif}
![Imgur](https://i.imgur.com/OJpPkM8.png){: .jsgif}

We also used a broadcast to hide the Karate Kid and the Caveman at the end.

![Imgur](https://i.imgur.com/YRRQ5GU.png){: .jsgif}

Here is the final product

{% include tynkerprojectpage.html Name="comic-4-27" ID="https://www.tynker.com/play/comic-4-27/6088e7ea80013e53d132cf33-275401XiWac.P.Q1B8NzfXYjpChQgk" %}


### Happy Golden Week

Here is some fun to wish everyone a wonderful golden week:

{% include youtubelazy.html  videoID="dOxlEwX9lb" %}

See after the holiday.
</details>

<!-- FRIDAY -->
<details markdown=1>
<summary markdown=1>## April 23rd
</summary>

## April 23rd

### Recap for April 23rd

Tynker
  : The project this week was a maze game. 

![Imgur](https://i.imgur.com/PCrNSUO.gif){: .jsgif}

Straight Lines
  : One key skill for this is knowing how to make straight lines, as described in the [Dragon Maze](../lessons/DragonMazept1.html). 
  
1. First click the select arrow and then click a line. 
2. The line will appear with dots. 
3. Click on a dot to remove it. 
4. Remove all the dots except 2 to make a perfectly straight line. 
5. Drag 2 dots directly over each other to make a sharp corner. 
6. Drag the dots around to modify the path of the line. 
7. Using a set of lines, make a maze.

![the path of a line in the background](./images/2020-04-13/linearPaths.png){: .bordered width="300px"}

Today I really emphasized step 5, to make a sharp corner. Student Y became very ambitious in his maze and it had long lines, with lots of twists and spirals. This required precision handling of all the dots, and counting the dots needed. I thought this would be discouraging, especially because he wasn't using a stylus, but just his finger. But in the end he kept at it and worked very hard to get what he wanted. Great Job! 

Student K finished his maze and moved on to making the [Dragon Maze](../lessons/DragonMazept1.html). He also worked on. 

Student R was also able to complete the maze, and had a lot of fun adding music.

Exploring Tynker
  : Student Y spent today's class exploring various tutorials and projects looking for his next project to complete. He seems to have settled on make a comic strip project.

Beach Project
  : Student A continued working on her Beach project. She realized that is was a bit hard to get to some of the candy, so she started working on making a basket that the candy could go in when you collect it. We chose a basket image from Google, and used [Pixlr](pixlr.com) to remove the background. Then we inserted it into the project.

![Imgur](https://i.imgur.com/juFElCI.png){: .bordered height="300px"}

{% include tynkerprojectpage.html Name="Beach Project" ID="https://www.tynker.com/play/mermaid-2-revised/6083e6babce7316a2c7167de-564164XpgMLsXuzFhi8BJS.JfT3n4k" caption="A mockup of the **Beach Project** in action. When she hits the good candy, the bad candy disappears and the good candy goes to the basket. She goes back to the starting point." %}

Snowboarder
  : For the snowboarder project, student C continued working on a "life" system for kids. When a player collects bad candy, she loses one life. Before she was using separate actors for each life, and I suggested making each life be a costume. That way she can use the "next costume" block to keep score.  This is a simple alternative to using variables.

![Imgur](https://i.imgur.com/gvDFoZI.png){: .bordered width="300px" }

### Happy Golden Week

Here is some fun to wish everyone a wonderful golden week. Watch it to the end!!

{% include youtubelazy.html  videoID="dOxlEwX9lb" %}

See you after the holiday.
</details>

<!-- SATURDAY -->
<details markdown=1>
<summary markdown=1>## April 24th
</summary>

## April 24th

### Recap for April 24th

Students H and M continued making variations of the *Usseewa* projects. This included adding dancing characters that if you touch will do extra actions. We also began exploring other music to include in their project. 

Student H plans to a Brontosaurus versus Tyrannosaurus game next.

Student N 
  : For homework, Student N made a storyboard involving several projects representing levels. Some of these were mario type jumping games with coins and so on. Others had original ideas, like having a character can disappear and then appear alternately. This required some fancy messaging. This student has been moving along quickly and is now ready for Scratch.

![Imgur](https://i.imgur.com/IHBcLlP.gif){: .jsgif}

Makeup Class
  : There was also interest in a Mario Clone devised by one of our teachers. During a makeup up class on Monday, I walked through this project with student Y (slowly, via Zoom). This is a work in progress and will continue next class. Here is the prototype:

![Mario](https://i.imgur.com/sGTxRqP.gif){: .jsgif}

### Happy Golden Week

Here is some fun to wish everyone a wonderful golden week. Watch it to the end!!

{% include youtubelazy.html  videoID="dOxlEwX9lb" %}

See you after the holiday.

</details> 

## notes

Mario Video 

https://www.youtube.com/watch?v=dOxlEwX9lbA 

A modified version of a student project from last week

<iframe width="660" height="408" src="//www.tynker.com/ide/embedded?p=60886491c9f1474fd1368253&controls=false&autostart=false" frameborder="0" allowfullscreen></iframe>

https://www.tynker.com/play/joke-428-updated/60886491c9f1474fd1368253-718432XlIV6nmng,dhKHff0jPTkTkk

