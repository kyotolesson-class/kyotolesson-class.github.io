---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Monday PM)
title2: 
levelsToTop: "../"
tags: []
---


<details markdown=1>
<summary markdown=1>## January 18th
</summary>

## January 18th

### Homework due January 25th

Keep working on projects. 

### Recap for January 18th


Tutorials, First Project
  : Some students worked mostly on tutorials. One student started his first project. The first thing he wanted to do was import some pictures of his favoriete character to use as actor, so I showed him how to do this. 

Hugh
  : I showed one student the proof-of-concept Haunted House Project from last week's notes. After thinking about it, he gave me some ideas for what he wants to do, and I am going to simplify the project a bit so that he can continue it. In the meantime he came up with some specific ideas for a Top-Down game and began planning and coding it.

Tic Tac Toe
  : The tic tac toe project is coming along very well. The student has on their own created using costumes and message various screens.

  : The project has an opening screen, a character selection and rules selection screen, and a rules screen, as well as the main board. In addition, actors to represent the 9 position on the board are being created. We worked together on solving a problem with the logic for returning to the actor selection screen, and talked about what the position actors would look like. I showed him a demonstration project that gave him an idea of how players cod take turns. This project is full of opportunities for learning.

```
when actor clicked :: events
switch to background (blank1) :: looks
send message [show] to [actor] with []:: events
send message [show] to [actor2] with [] ::events
hide :: looks
broadcast (hide rules) :: events
```
{: .msb}

Here is an incomplete version:

<iframe width="100%" height="408" src="//www.tynker.com/ide/embedded?p=5ffc0b612e79c31472478897&controls=true&autostart=false" frameborder="0" allowfullscreen></iframe>
{: .jsgif}


Peep project, and Pet simulator
  : The Peep Nature Walk project was a bit difficult. The student made a good effort and learned some things. Here is what it could have looked like:

<iframe width="100%" height="408" src="//www.tynker.com/ide/embedded?p=6005f50a2e6d82407f707508&controls=true&autostart=false" frameborder="0" allowfullscreen></iframe>
true{: .jsgif}

Pet Simulator
  : Since it was difficult I gave her the option of trying a new project and she chose the Pet Simulator. This project uses the following series of if statements to choose a different reaction for the pet for each food. 

![pet simulator](https://i.imgur.com/CCwp0qc.png){: .jsgif}

Shooting Game: 
  Another student had a an interesting goal. He wanted to make certain tiles disappear after the player captured a special ring. This is actually quite easy, though it sound difficult to do. The key block is this one:

```
set tile at x: () y: () to (empty) :: looks
```
{: .msb}

After showing the student how to figure out what x and y should be, he was able to complete it himself and continue working on his game. 


</details>