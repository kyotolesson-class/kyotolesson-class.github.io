---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Monday PM)
title2: 
levelsToTop: "../"
tags: []
---


<details markdown=1>
<summary markdown=1>## January 11th
</summary>

## January 11th

### Homework due January 18th

Individually Assigned.

### Recap for January 11th

Tic Tac Toe
  : A student is working on a tic tac toe game. We talked about how it should be set up, and the student worked on making an introduction and rules. His homework is to create actors for each of the positions and give each 3 costumes (blank, X, O).

Tutorials
  : One child continues to work on tutorials and needed a little help with understanding if conditionals.

Haunted House
  : The Haunted House project hit a few snags as at first, characters kept "falling" when the program started. Sometimes students, especially creative ones, have problems or questions that are difficult to answer, not because there isn't an answer, but the answer or explanation is long, difficult, uncertain, and so on. This is an example. The answer turns out to depend on the following, among other things:  
  
  : * "Static" and "active" settings. 
  : * The main fact that character in a platform game will fall until he/she hits the either a platform of the bottom of the world. 
  : * The fact that in this case you need to use an invisible platform, and invisible platforms are not available in the basic GUI. You CAN use them, but you have to program them.
  : * You also need to set the world size to an appropriate value, and this depends on the size of the stage and whether the stage is normal, stretched, or tiled.
  : * Lastly, the fact that Tynker's documentation of these is confusing and sparse. 

The following project shows how it works. When it starts, it creates a visible platform. If you press c, it replaces the visible platform with an invisible one that the player can walk on:

<iframe width="100%" height="408" src="//www.tynker.com/ide/embedded?p=5ffc1a203ab9a77e703c2363&controls=true&autostart=false" frameborder="0" allowfullscreen></iframe>{: .jsgif}


Platform Game
  : Another student continued to make a complex platform game with various platforms, enemies, and even a dead-end trap. While it is easy and fun to just add new characters to shoot at, I suggested making the game more interesting by adding a story to it, such as a goal or endpoint, or an object to collect. Perhaps next week.


Peep and the Big Wide World
  : Another student kept working on her walk through the forest project. She added a butterfly that followed peep, and then created a conversation between Peep and the butterfly. Her homework is to create other scenarios.


</details>

Hugh: 

I was able to make your haunted house project. I am sorry I couldn't give you an answer in class. The answer is just not easy to explain in a few words. I created a revised project so now it works. You can keep working on the project in it. 

I like the idea of the project, and it would be fun to work on it with you. If you plan out the idea a little more before you try to code it it will be easier to code, and for me to explain to you how to do it. Look at the project, which has lots of annotations. 

: In the project, when it starts I delete all the tiles and add a platform. In the game I first do this with visible tiles so you can see the platform is. Then press c to get the same platform with invisible tiles.

<iframe width="100%" height="408" src="//www.tynker.com/ide/embedded?p=5ffc1a203ab9a77e703c2363&controls=true&autostart=false" frameborder="0" allowfullscreen></iframe>{: .jsgif}


<https://www.tynker.com/play/death-run2/5ffc1a203ab9a77e703c2363-566908Xsxu.,ItYhl2kKq9nS.gAf8k>

Here are some of the ideas involved:
  
  : * "static" and "active" settings. Tynker doesn't explain these very well. If a player is static, he will not move; he will appear as if he is stapled to the background. If he is active, he gains mass: other characters can bump into him. 

  : * Setting the world size to the appropriate number of tiles. If the world is larger than the stage, the stage will be extended (unless the stage is set to stretch, in which case the tiles are there but the image covers it completely). This means that characters can go outside of the stage image. For example, they can fall off screen.

  : * For the stage not to fall, the platform has to be above the "center" of the screen, as the camera will want to center the main actor, and the platform stops him from moving before he falls below "center". The main character in a platform game will fall until he/she hits the either a platform of the bottom of the world. The camera will fall with the main hero, creating the effect that the characters are falling. 

  : In practice these interact with each other, and finding the right settings can be a matter of trial and error. By playing with your project I was able to find a setting that kept the characters from moving. They key is to create a "blank" or invisible tiles that still keeps the player up, but prevents him from falling. 

  : BUT, you can't create invisible tiles in the usual way. You have to code them  using the set tile block. 

  