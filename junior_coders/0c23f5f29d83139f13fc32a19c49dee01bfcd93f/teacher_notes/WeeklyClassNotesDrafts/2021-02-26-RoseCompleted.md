---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Monday PM)
title2: 
levelsToTop: "../"
tags: []
---



<details markdown=1>
<summary markdown=1>## February 26th
</summary>

## February 26th

### Homework due March 5th

Work on the Beach Candy Game

### Recap for February 26th

Today we focused on planning. As a group, the class came up with a project. 

<style>
ol li ul li ol {
    margin-bottom: 0px;
</style><!-- fixes bad spacing here -->
1. First we decided on the type fo project, a game. 
2. Setting: The beach
3. Story/Goal: Find and collect candy hidden in the sand.
4. Actors/Actions:
   * Protagonist(s) ("Good guys"): Sheep walks, jumps, digs, picks things up 
   * Antagonist(s) ("Bad guys"): 
      1. Insect attacks and bites 
      2. Skunk sprays 
   * Macguffins (sought-for items) 
      1. Good Candy give points: 
         * Lollipops
         * Chocolate
         * Gummy Bears
         * Cookies
         * Hi-chew
         * Hot Chocolate
      2. Bad Candy loses points, or send actor back to beginning. 
         * old shoes
         * old chocolate
         * smelly socks
         * smelly lollipop
         * coffee

The kids then started working on programming it. So far, the project is a simplified, modified version of the above.

ScratchJr.
  : The game was simplified for ScratchJr. For the protagonist, we used a little girl, for the antagonist, we used an Elephant, and for the MacGuffin we used starfish. In addition, we could only have one piece of candy on the screen.

In Scratch Jr. the kids also needed to make a way for the actor to move, so we repeated the control buttons using messages, as we had done  in the **Race To the Finish** project [a few weeks ago](http://localhost:4000/junior_coders/0c23f5f29d83139f13fc32a19c49dee01bfcd93f/class_notes_lessons/RoseClassNotes.html#february-5th).

From there, we use bump blocks on the starfish, so that when the girl touches the starfish, the start fish says something, and then we move to the next screen.

The project is underway and should be completed next week.

Tynker
  : In Tynker the focus was on choosing actors. 

Kids worked on making the characters the right size and placing them in various places.

Some kids started coding movement using **when key pressed** blocks

![Imgur](https://i.imgur.com/sLIBfBn.png){: .jsgif}

The **did I touch** function block in the repeat block means we have to test to see if the girl had found (is touching) the candy each time we move. We replace it with the following **if touching?** block:

![Imgur](https://i.imgur.com/TMK8ey7.png){: .jsgif}

This sends a message to the "candy" touched. (The break stops the motion of the girl.) The candy gets the message and reacts.

![Imgur](https://i.imgur.com/JubN3mw.png){: .jsgif}

We will work on this next week.

</details>