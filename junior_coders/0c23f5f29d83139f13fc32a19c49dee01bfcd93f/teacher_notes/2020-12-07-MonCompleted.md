---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Monday PM)
title2: draft
levelsToTop: "../"
---




<details>
<summary>## December 7th
</summary>

## December 7th

### Homework due December 14th

Individual homeworks related to individual projects

### Recap for December 7th

#### Pixlr for removing backgrounds 

The first part of class was a demonstration of how to use the online drawing tool [pixlr](http://pixlr.com). This tool is useful in many way, one of which is removing backgrounds. Using it I removed the background from the photos we took last week so they would look nice as actor costumes in Tynker. One of the students this week also used it to create characters for her project based on images she downloaded from the interrnet.

#### Assorted Projects

Some students are still in the process of planning their next project. As it typical, there was a lot of trial and error, but the current leaders are a Pong-like game, and a Magic: The Gathering, aka MTG, type game. 

#### Pong

For the first, we are able to go to the community tab of our Tynker page and look for similar projects to give us some ideas. If we find an idea we like, we can incorporate it into our project, which is what we will do next week. Here is a sample Pong project, with music included:

<iframe width="660" height="408" src="//www.tynker.com/ide/embedded?p=5fce8639861d357f4b6dedfe&controls=true&autostart=false" frameborder="0" allowfullscreen></iframe>
{: .jsgif}

#### Magic: The Gathering Intro

The MTG game is a bit challenging. While I don't think we are ready to code the entire game ourselves, I think we can go through the project in stages and learn a lot of about how to code this type of game. We did sort of create a plan for what the first steps of such a project would be, and I found some directions on how to play the game and a version of the game elsewhere that I could simplify for Tynker. Here is what it accomplishes so far:

1. Set the life points. These are shown on the screen, as well as what turn it is, and what stage of the game we are in.
2. Create a deck. This deck has 22 cards. The cards in the deck and the cards in our hand are stored in lists called Deck and Hand, respectively.
3. Draw 7 cards. This includes randomly removing cards from our deck list and putting them in our hand list. 
4. A simple loop then clones the template once for each card in our hand list, gives it the right costume, and puts in the right place on the game table. 

![main routine](https://i.imgur.com/M60kGm7.png)
{: .jsgif}

* Here is how we create the Deck by adding items to the Deck list:

![create deck](https://i.imgur.com/L62Xii9.png)
{: .jsgif}

* Then we draw 7 cards:

![create deck](https://i.imgur.com/Zn3nWn0.png)
{: .jsgif}

* It uses this function which transfer the cards from the deck to the hand:

![create deck](https://i.imgur.com/FRd7q0n.png)
{: .jsgif}

+ This prepares the hand to be drawn and creates each card ("clone") and selects the image:

![prepares the hand to be drawn](https://i.imgur.com/XCKuryf.png)
{: .jsgif}

* and this  makes sure the image is drawn in the right place:

![creates it and makes sure it is in the right place](https://i.imgur.com/uMcJXHM.png)
{: .jsgif}

* All together it looks like this. Note that you can click and drag the individual cards to look at them more closely. Also, each time you run the program a different hand is created.

<iframe width="660" height="408" src="//www.tynker.com/ide/embedded?p=5fce4d52333b937d7b1c9773&controls=true&autostart=false" frameborder="0" allowfullscreen></iframe>
{: .jsgif}

Next class I will review this with the student, and we can think of ways we might change it and what to do next. The goal is not to understand all the details, but to see how the steps fit together logically and get a sense what the different types of blocks can do.

As we play the game, we will continue to bring cards from our deck to our hand, and we will also create a way to choose and play cards into our play area, "tap" them, and do combat with the computer. 

#### Bringing Lego Man into our Shooting Game

Lastly, I worked with one student to import the pictures we took last week into their project. The project as it is has too many characters though, so next week we will simplify it so we can get the basic game working, then later add the other characters in.

All in all a very busy class, but kids are working hard and each is learning at their own pace.


</details>