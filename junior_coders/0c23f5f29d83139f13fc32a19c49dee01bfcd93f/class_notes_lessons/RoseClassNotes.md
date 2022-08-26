---
layout: junior_coders_default
title: Getting Started with Scratch Jr.
title2: Rose Class LATEST
levelsToTop: "../"
---


Proceed to [Archives](./RoseClassNotes-Archives.html) 》 
{: style="float: right;"}
<br clear="both">

<div id="toc">

<!-- TOC -->

* [August 26th](#august-26th)
  * [Recap for August 26th](#recap-for-august-26th)
* [August 19th](#august-19th)
  * [Recap for August 19th](#recap-for-august-19th)
* [August 5th and 6th makeup](#august-5th-and-6th-makeup)
  * [Recap for August 5th and 6th makeup](#recap-for-august-5th-and-6th-makeup)
* [July 29th & 30th](#july-29th--30th)
  * [Recap for July 29th](#recap-for-july-29th)
  * [Recap for July 30th Makeup](#recap-for-july-30th-makeup)
* [July 22nd](#july-22nd)
  * [Recap for  July 22nd](#recap-for--july-22nd)
* [July 15th](#july-15th)
  * [Recap for July 15th](#recap-for-july-15th)
* [July 8th](#july-8th)
  * [Recap for July 8th](#recap-for-july-8th)
* [July 1st](#july-1st)
  * [Recap for July 1st](#recap-for-july-1st)
* [June 24th](#june-24th)
  * [Recap for June 24th](#recap-for-june-24th)
* [June 17th](#june-17th)
  * [Welcome Trish](#welcome-trish)
  * [Recap for June 17th](#recap-for-june-17th)
* [June 10th](#june-10th)
  * [Recap for June 10th](#recap-for-june-10th)
* [June 3rd](#june-3rd)
  * [Recap for June 3rd](#recap-for-june-3rd)
* [May 27th](#may-27th)
  * [Recap for May 27th](#recap-for-may-27th)
* [May 20th](#may-20th)
  * [Recap for May 20th](#recap-for-may-20th)
* [May 13th](#may-13th)
  * [Recap for May 13th](#recap-for-may-13th)
* [May 6th](#may-6th)
  * [Recap for May 6th](#recap-for-may-6th)
* [April 30th Makeup](#april-30th-makeup)
  * [Recap for April 30th](#recap-for-april-30th)
* [April 22nd](#april-22nd)
  * [Recap for April 22nd](#recap-for-april-22nd)
* [April 15th](#april-15th)
  * [Recap for April 15th](#recap-for-april-15th)
* [April 8th](#april-8th)
  * [Recap for April 8th](#recap-for-april-8th)
* [April 1st](#april-1st)
  * [Recap for April 1st](#recap-for-april-1st)
* [March 25th](#march-25th)
  * [Recap for March 25th](#recap-for-march-25th)
* [March 18th](#march-18th)
  * [Recap for March 18th](#recap-for-march-18th)
* [March 11th](#march-11th)
  * [Recap for March 11th](#recap-for-march-11th)
* [March 4th](#march-4th)
  * [Recap for March 4th](#recap-for-march-4th)
* [February 25th](#february-25th)
  * [Recap for February 25th](#recap-for-february-25th)
* [February 18th](#february-18th)
  * [Recap for February 18th](#recap-for-february-18th)
* [February 4th](#february-4th)
  * [Recap for February 4th](#recap-for-february-4th)
* [January 28th](#january-28th)
  * [Recap for January 28th](#recap-for-january-28th)
* [January 21st](#january-21st)
  * [Recap for January 21st](#recap-for-january-21st)
* [January 14th & 15th](#january-14th--15th)
  * [Recap for January 14th & 15th](#recap-for-january-14th--15th)
* [January 7th](#january-7th)
  * [Recap for January 7th](#recap-for-january-7th)
* [Archives](#archives)
  * [2021 Archives](#2021-archives)
  * [2020 Archives](#2020-archives)

<!-- /TOC -->

</div>

-   Click on the [> Date]() or <span style="color: #3399cc;  border-left: 9px solid #3399cc!important;border-radius: 4px 4px; font-weight: bold">BLUE</span> borders to toggle the <span style="background-color:#ffeca0; border-left: 10px solid #3399cc !important;border-radius: 4px 4px;"><b> &nbsp;<span style="font-size: 70%">▶︎</span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;&nbsp;</b></span> 



<details markdown=1>
<summary markdown=1>## August 26th
</summary>

## August 26th

### Recap for August 26th

Today we began with an overview of the upcoming Fall Showcase. (more information about this will be sent to parents soon.) I went over the various elements they will be prepared to talk about, such as giving an introduction, explaining the game play, and so on.

Student K and M  wrote short descriptions of their projects as part of their introductions. This inspired them to make minor improvements to their games, such as adding a game over score or descriptions of the various levels.

Student S chose some projects for her Showcase and we practiced describing her ScratchJr. projects and how they function. She may also demonstrate a recent Scratch project.


{% include zakviewer.html Name="2022-08-27 sonic exe on Scratch" ID="https://scratch.mit.edu/projects/723812768/" caption="Student H completed stage 1 of his scrolling platformer, and succeeded in making an extended background. He learned about local and this sprite only variables, how to move costumes from one sprite to another, how to initialize sprites in terms of position, direction, and layer." %}


</details>


<details markdown=1>
<summary markdown=1>## August 19th
</summary>

## August 19th

### Recap for August 19th


{% include zakviewer.html Name="2022 8 19 COFM Final" ID="https://scratch.mit.edu/projects/716775548/" caption="Student M has completed his project. 

His final addition this week was to add a high score variable and show it, just as in [this Jelly Jump project](https://scratch.mit.edu/projects/674006017/). We examined the code, and found and imported the sprite that displays the score, and the code in the project that updates the score:

``` 
when @greenFlag clicked
forever
    set [score v] to (round (((scrollY) + (50)) / (100)))
    if <(score) > (☁ Actual highscore)> then
        set [☁ Actual highscore v] to (score)
    end
end
```
{: .msb}

He then modified this to work in his project.

``` 
when @greenFlag clicked
forever
    if <(MONEY) > (☁ Actual highscore)> then
        set [☁ Actual highscore v] to (MONEY)
    end
end
```
{: .msb}

This was a great exercise in hacking and reusing code from one project to another.
<span>" %}


{% include zakviewer.html Name="2022 8 19 Submarine remix on Scratch" ID="https://scratch.mit.edu/projects/593081843/" caption="We then discussed his next project, and he looked through his rather long list of remixes to find one he liked, which turns out to be this submarine game." %}


Since Student S is starting Scratch, I suggested she try [Run Marco Run](https://runmarco.allcancode.com/), which is a useful as training for using Scratch. She was able to get through the first few levels very well on her own. 

{% include imgur.html title="" ID="https://i.imgur.com/lyVrsXp.jpg" caption="When she reached the stage of having to repeat a series of blocks we used pen and paper to work out what the repeated sequence should be. After a few tries she seemed to get it." width="" height="300px" spacer="" %}

{% include zakviewer.html Name="2022 8 19 heart, cloud and ballon" ID="https://scratch.mit.edu/projects/719819301/" caption="She also finished the flying tutorial she started last week. I challenged her to add something to the project, and suggested she use a change size block, and this is how it came out." %}

Student H mostly explored on his own. Though he indicated he wanted to make a project, he did not do so in the end.




</details>



<details markdown=1>
<summary markdown=1>## August 5th and 6th makeup
</summary>

## August 5th and 6th makeup

### Recap for August 5th and 6th makeup



This week some of our class joined with the Summer Coding Camp, where they could work with other scratchers. 

{% include zakviewer.html Name="2022 8 5 Student K Roulette Wheel" ID="https://scratch.mit.edu/projects/719581720/" caption="For example, Student K made this project with a start button and a rotationg roulette wheel." %}

{% include zakviewer.html Name="2022 8 5 Student K color effect" ID="https://scratch.mit.edu/projects/614660661/" caption="He also made a series of projects such as this one exploring color effects." %}

{% include zakviewer.html Name="2022 8 5 Student D" ID="https://scratch.mit.edu/projects/718490181/" caption="Student D also joined the Cooding camp and worked on this maze project." %}

{% include zakviewer.html Name="2022 8 5 COFM for 2022 07 29 code with instructions on Scratch" ID="https://scratch.mit.edu/projects/716775548/" caption="Student M finished adding the art gallery for his project and initialized his variables. I can see that he is beginning to understand how to modify the project, and the project is now quite functional." %}

{% include zakviewer.html Name="2022 8 5 Untitled on Scratch" ID="https://scratch.mit.edu/projects/719819301/" caption="Student S is graduating up to scratch, and made this project based on a flying tutorial. She is doing a great job quickly developing mouse and keyboard skills needed for Scratch, and is able to navigate the tutorial almost by herself." %}

</details>


<details markdown=1>
<summary markdown=1>## July 29th & 30th
</summary>

## July 29th & 30th

### Recap for July 29th


{% include zakviewer.html Name="2022-07-29 Demon Game" ID="https://scratch.mit.edu/projects/708689193/" caption="Student K fixed his weapons to show meaningful weapon names when hovering. He added code to attack when the space key is pressed. The coding focus was broadcasts and creating myblocks." %}


{% include zakviewer.html Name="2022-07-29 COFM " ID="https://scratch.mit.edu/projects/716775548/" caption="Student M started making the code for his 3rd room. We reviewed the concept of nested ifs, and when he suddenly got it, he was off. He is making great progress and as usual showing great initiative." %}



{% include imgur.html title="" ID="https://i.imgur.com/M5KIwGR.gif" caption="Student S created a variation of the Animate My Name Bootup Project. We used multiple start blocks to make the letters move at different angles and spin at different speeds." width="" height="" spacer="" %}

### Recap for July 30th Makeup

{% include zakviewer.html Name="2022 8 2 Untitled-7 on Scratch" ID="https://scratch.mit.edu/projects/716423538/" caption="Though Student D arrived late and was only in class briefly, he did make this original project. The project is not quite finished but his effort working out how to code it  was very good." %}



</details>


<details markdown=1>
<summary markdown=1>## July 22nd
</summary>

##  July 22nd

###  Recap for  July 22nd


{% include zakviewer.html Name="2022 7 25 COFM" ID="https://scratch.mit.edu/projects/716761149/" caption="
Student M did some layer adjusting: the room closed sprite covering the classroom has to appear in front of the classroom when the game starts. If the he has enough money, clicking the sprite opens the classroom. We then used some nested ifs: if the cat is assigned to go to the classroom, then if there is enough money, the cat can go to the classroom. 

Student M has definitely improved his skill in the course of this project.  Having done two room with help, I think he might be ready to take on the final 6 rooms by himself. 

<span>" %}

{% include imgur.html title="" ID="https://i.imgur.com/XFfxbPF.png" caption="Student D worked on making a project about someone turning on a lightbulb. I gave him some tips on using the costume editor that he used to make this drawing." width="" height="" spacer="" %}

{% include zakviewer.html Name="2022-07-25 Untitled-7 on Scratch" ID="https://scratch.mit.edu/projects/716423538/" caption="He also made this project based on a tutorial." %}

Student S made a ScratchJr. maze project similar to a mario platformer. She did a great job using message blocks, and together we added coins that disappear when the player touches them, and even a flashing effect and sound.

Student K continued making his go home button clear all the screens. We are working on adding code that will allow the player to use the weapon to attack the spider and skeleton. 

</details>



<details markdown=1>
<summary markdown=1>## July 15th
</summary>

## July 15th

### Recap for July 15th

* Demon Game

{% include zakviewer.html Name="2022 7 15 COFM 5" ID="https://scratch.mit.edu/projects/708689193/" caption="Student K first problem was that his You Die screen was showing when the game started. This was a good demonstration of why initialization is importabe. Then he added a return HOME button" %}

{% include zakviewer.html Name="2022 07 15 broadcast demo on Scratch" ID="https://scratch.mit.edu/projects/714399589/" caption="To implement his HOME button I used this basic project to show him how to use broadcasts and receive blocks to control other blocks. Clicking the cat hides the girl and makes the bowtie jump. Hiding the screen and buttons also led into a discussion about layers." %}

* Family Mart

{% include zakviewer.html Name="2022 7 15 COFM 2022 07 15 on Scratch" ID="https://scratch.mit.edu/projects/714407794/editor" caption="Student Y finished putting in the code for his classroom and then he worked on making that classroom only open up once the money is $100. He also changed some variables his names to make them more consistent." %}

Student H all worked on his own.

ScratchJr.
  : Student A made a project focusing on using a touch block. He made several characters that you could touch to make them say silly sounds. I suggested that he had separate motions that would start and last as long as the sounds. Adjusting it to do that was kind of fun.

  : Student S made a fidget spinner project and then added many characters that also did various turns. At the end of the class we used the camera to make a turning picture fidget.





</details>


<details markdown=1>
<summary markdown=1>## July 8th
</summary>

## July 8th

### Recap for July 8th

Scratch
  : The scratch group worked on individual projects today.

* Student M continued working on adding a second room to his project, and today his focus was on creating and modifying myblocks.

{% include imgur.html title="" ID="https://i.imgur.com/MeYggxz.png" caption="By renaming and creating new myblocks, he created separate code paths for the Family Mart and Classroom." width="" height="" spacer="" %}

{% include imgur.html title="" ID="https://i.imgur.com/XoBh3y4.png" caption="He began creating the matching code for these myblocks." width="" height="" spacer="" %}

* Student K fixed a mistake he made in copying my template code, and so was finally able to get the hearts to work. 

{% include imgur.html title="" ID="https://i.imgur.com/yEzbdlP.png" caption="He also transcribed another section of code that detects when the player dies. He began working on the 'you die' screen." width="" height="" spacer="" %}

* Pong Game

I prompted Student A to add some new features to his Pong game. He wanted to make the game repeat, so I introduced broadcast and receive blocks and we used them to make his project repeat after the ball breaks. 

{% include imgur.html title="" ID="https://i.imgur.com/XQ9mkZK.png" caption="I briefly explained why we needed a stop this script block here. Then, we used broadcast and receive to add a game over effect. " width="" height="" spacer="" %}

{% include zakviewer.html Name="2022-07-09 bounce game Daifuku 2022 07 01 on Scratch" ID="https://scratch.mit.edu/projects/710787791/" caption="While class finished he was working on adding a cat who comes in at the end of the game to break the broom." %}

* Exploring 
  
Student H seemed happy exploring games on his own today.


ScratchJr.
  : The ScratchJr. kids worked with our new teacher Trisha to make several original projects.

* Cat coming out of a shell

Student A made a couple of projects with original ideas. In one of them he cleverly makes a cat come out of a shell by moving the shell out of the way. He also created some clever synchronized motions. Even though he is still getting command of Scratch program logic, he is being very creative with what he can accomplish.

* Racing Game

Student S made a kind of racing game, where you can touch the cars to make them reach the end and go to the next screen. We talked about what a good next project for her would be, and we came up with the idea for a kind of maze where you have to tap the sprites in the right order to get the cat accross the screen. I introduced her to the copy shape tool in the image editor and she explored fun way to make drawings with this. Student S is also showing a lot of creativity and independent learning as well.



</details>


<details markdown=1>
<summary markdown=1>## July 1st
</summary>

## July 1st

### Recap for July 1st

Scratch Jr.
  : Student A made a game about 2 cats fighting each other  

  : Student S maze project: we made a dragon maze game. , using messages to hide another character  
  

Scratch
  : Student Y continued working on generating random armor. He added more costumes and the appropriate code in parts of the costume but still has some parts to finish.


  : Student K worked on cleaning up his projeect by renaming sprites. I worked with him to learn how to add code from a text template.
  
  
  : Student M worked very hard this week. To create the second room (the family mart) in his project, we first renamed the original mybocks and then created similar myblocks for the second room (the classroom). He has a few more steps before the second room is working.


{% include zakviewer.html Name="2022-07-02 bounce game" ID="https://scratch.mit.edu/projects/710787791/" caption="
Student D worked on his modified Broom Pong game. he wanted the ball to break, so I showed him how to create basic animation frames of the ball breaking using the editor. He made the costumes and next week we will make the broom break when it is hit. 
" %}


Student H did not create any projects today.


</details>


<details markdown=1>
<summary markdown=1>## June 24th
</summary>

## June 24th

### Recap for June 24th

{% include zakviewer.html Name="2022-06-24 Baseball" ID="https://scratch.mit.edu/projects/708987771/" caption="Student D made a baseball game. I gave him an introduction to a variety or different blocks, for example, the 'key pressed - key pressed' trick:

```
change y by ((10) * (<key [up arrow v] pressed?> - <key [down arrow v] pressed?>))
```
{: .msb} 

makes the batter move. We make the baseball bounce against the ball and edge like this:

```
if <touching [Ball v]?> then
	point in direction (180)
	change [score v] by (-1)
end
if on edge, bounce
```
{: .msb} 

<span>" %}

{% include zakviewer.html Name="2022-06-24 Student Y Demon Game Fixed 2022 06 18 on Scratch" ID="https://scratch.mit.edu/projects/666094890/" caption="Today was a mostly a cleanup day for Student Y, who cleaned up his code to incorporate his armor selection step into the main flow. " %}

{% include zakviewer.html Name="2022-06-24 Demon Game with instructions cleaned up copy on Scratch" ID="https://scratch.mit.edu/projects/708689193/" caption="Student K also worked on his Demon Game" %}

{% include imgur.html title="" ID="https://i.imgur.com/tZPxb7v.png" caption="I gave him a rubric to complete and he make the corresponding code (with one mistake). He was very clever and discovered he could use emoji as costume names." width="" height="" spacer="" %}


{% include zakviewer.html Name="2022-06-29 COFM 2022 06 24 with directions for next week on Scratch" ID="https://scratch.mit.edu/projects/709704281/" caption="Student M began adding a second room to his project. He created new my blocks and used an if block to select which room his sprite will go to. This is still a work in progress." %}

Student S worked on making a simple maze in scratch.

Student A created a game in ScratchJr.: 

{% include giphy.html link="https://media.giphy.com/media/g6hT24RX0z023KDlFE/" %} 

Student H did not do any coding today, but focused on a fortnite scratch game.


</details>


<details markdown=1>
<summary markdown=1>## June 17th
</summary>

## June 17th

### Welcome Trish
A new assistant, Trish, will be joining our Friday class. She spent most of the class getting to know some of the kids, and having them 'teach her' about Scratch and ScratchJr. Trish is one of our Thursday Emerging Fluency teachers, but she will be coding with us on Fridays, so feel free to introduce yourself to her.


### Recap for June 17th

{% include zakviewer.html Name="2022-06-17 Student M COFM " ID="https://scratch.mit.edu/projects/701386865/" caption="First, Student M fixed the routine changes the max in the room when clicked. Then he made a new room for his cars if they get more than 100 pts." %}
{% include imgur.html title="" ID="https://i.imgur.com/CCH7VkZ.png" caption="He was able to code this mostly on his own, which was a step up for him." width="" height="" spacer="" %}


{% include zakviewer.html Name="2022-06-17 Student Y Demon Game Fixed 2022 03 25 on Scratch" ID="https://scratch.mit.edu/projects/666094890/" caption="Student Y first did some housekeepin on his project, such as fixing the initial position of his armor stand, and properly naming his sprites.  " %}

{% include zakviewer.html Name="2022-06-17 Simple broadcast on click demo" ID="https://scratch.mit.edu/projects/706303339/" caption="Then I created him this demo project so he could see how to use broadcasts and randomly generate different armor. He worked on creating more armor for his project." %}


{% include zakviewer.html Name="2022-06-17 Student K Demon Game" ID="https://scratch.mit.edu/projects/703632443/" caption="student K created a variable for Health Points and made his character lose HP when attacked by the spider or goblin. I explained to him how to make his heart show health points, but we left coding it until next week. It will eventually look like this: 

```
define renew health
show
if <(id) > (HP)> then
    switch costume to [black v]
    if <(id) < ((HP) + (10))> then
        switch costume to [half v]
    end
else
    switch costume to [red v]
end
show
```
{: .msb}

<span>" %}


{% include imgurmp4Captioned.html title="" link="https://i.imgur.com/GyJP5lm.mp4" caption="
A new teacher, Trisha, is joining us, and Student A and showed off his latest project to her about a cat and 'letter' M ? having a conversation. This is a good use of message and wait blocks to keep the conversation going." width="" height="" spacer="" %}



</details>

<details markdown=1>
<summary markdown=1>## June 10th
</summary>

## June 10th

### Recap for June 10th


{% include zakviewer.html Name="2022-06-10 butter on Scratch" ID="https://scratch.mit.edu/projects/703548222/" caption="Student H made a project devoted to the song Butter. We touched on how to initialize project, how to trigger an action with a click, and how to broadcast a message to all the blocks (so they hide), and included a glide and change size block when BTS is clicked. This project is a step forward for this child." %}

{% include zakviewer.html Name="2022-06-10 Demon Game with instructions" ID="https://scratch.mit.edu/projects/679374913/" caption="Student K worked on making the Spider move when the main game starts. Eventually the spider will deliver damage to Maikey, and the damage will be shown in the hearts. " %}

{% include zakviewer.html Name="2022-06-12 Student Y Demon Game Fixed 2022 03 25 on Scratch" ID="https://scratch.mit.edu/projects/666094890/" caption="Student Y revised his armor selection system. After pressing 'a' the armor selection screen shows. Pressing the random armor button sends a messge to generate a random weapon in the weapon block." %}


Student S made a project where a dragon tries to eat Utlraman. She used say, blocks, bump blokcs, visibility blocks, among others. The she began a 'day in the life' project that makes a 4 panel comic. She began by making a conversation bwteen here and her mother.

Student A made project called a sunny day for biking where and airplane and a bicyle walk through a scene with clouds, birds and a jumping basketball.

{% include zakviewer.html Name="2022-06-12 COFM 2022 06 03 with directions for next week on Scratch" ID="https://scratch.mit.edu/projects/701386865/" caption="Student M added some template code that increased the maximum number of occupants if the player has enought money. Then we adjust this in class to happen if the player clicks the family mart." %}



{% include zakviewer.html Name="2022-06-12 Untitled-3" ID="https://scratch.mit.edu/projects/703546178/" caption="Student D made a balloon popping game from a tutorial. Then we worked together to come up with some improvements such as sounds, setting a score limit of 100, color effects, and a star effect." %}


{% include imgur.html title="" ID="https://i.imgur.com/cHmQN3m.png" caption="The star effect uses the mosaic effects." width="" height="" spacer="" %}



</details>


<details markdown=1>
<summary markdown=1>## June 3rd
</summary>

## June 3rd

### Recap for June 3rd


{% include zakviewer.html Name="2022-06-03 COFM " ID="https://scratch.mit.edu/projects/701386865/" caption="Student M and I discussed next steps for his program. He wanted to make it that if you have enough money, the number of people in the Family Mart goes up. I gave him some pseudocode for how to do it, and he made an effort to complete it, to be completed next week." %}



{% include imgur.html title="" ID="https://i.imgur.com/tYe4T4M.png" caption="Student A made a multiscreen project. The first has the cat saying something and then goin gto the second dscreen. " width="" height="" spacer="" %}

{% include imgur.html title="" ID="https://i.imgur.com/Tto3bN2.png" caption="The second used the bump block to play a game of basketball. " width="" height="" spacer="" %}

{% include imgur.html title="" ID="https://i.imgur.com/Tto3bN2.png" caption="The third created a conversation between the cat and the robot using message blocks. Student A is making progress." width="" height="" spacer="" %}


{% include zakviewer.html Name="2022-06-03 Student D Pong" ID="https://scratch.mit.edu/projects/700521898/" caption="Student D made the pong tutorial. Then I challenged him to make some modifications. He made the color of the padddle chane when it is hit. He learned how to use the time to limit the game to 3 minutes. We talked about how to calulate how many seconds are in 3 minutes. He added levels, and the speed of the ball changes each level. He added a score." %}


Student S made a project describing her day. In addition to using a variety of blocks, I sowed her a trick to make it look as though she is getting dressed and the clothes are following her in the 2nd and 3rd screen.
{: .jsgif style='margin-bottom:0;'}
{% include giphy.html link="https://media.giphy.com/media/pbnDkWsoPLAHiGDyke/" %} 


Student H was not feeling well and spent most of the class resting.
{: .jsgif}

{% include zakviewer.html Name="2022-06-03 Student Y Demon Game" ID="https://scratch.mit.edu/projects/666094890/" caption="Student Y wanted to create a minecraft armor table. After a little discussion he understood the basic procedure and he used some initial go to blocks to place each part. When you press 'a'' the table appears." %}

{% include zakviewer.html Name="2022-06-03 Demon Game with instructions" ID="https://scratch.mit.edu/projects/679374913/" caption="Student K continued working on adapting his characters' costumes." %}

</details>



<details markdown=1>
<summary markdown=1>## May 27th
</summary>

## May 27th

### Recap for May 27th


UFO
  : Student S worked on her own project for a while, and then we worked together on an original project about UFO's. Two cats are speaking. She learned the "bump and step back" trick to activate a bump without getting stuck in a loop. She used wait blocks to make a conversation, and then a UFO appears.

{% include giphy.html link="https://media.giphy.com/media/r2SSTXQWb5kzXQygHu/" %} 


{% include veed.html title="" ID="https://www.veed.io/embed/fb341e14-92fd-4afc-9188-b0fe19c93248" caption="Student A made a project that used tap blocks and messages and a variety of blocks, including ones he created himself." width="" height="" spacer="" %}


 
{% include zakviewer.html Name="2022-05-7 Cat owns an Family Mart 2022 05 20 with directions" ID="https://scratch.mit.edu/projects/694152059/" caption="Student M followed a template that I gave him and added code to make his cats return when the family mart is full. " %}

{% include imgur.html title="" ID="https://i.imgur.com/6PxIh9R.png" caption="He learned how to use the set variable and swich costume blocks to create the effect." width="" height="" spacer="" %}


{% include imgur.html title="" ID="https://i.imgur.com/zjOyaqr.png" caption="Student K worked on carefully redrawing his character so it could be blue. Due to a limitation in Scratch this was necessary. This was a time consuming progress so kudos for sticking with it." width="" height="" spacer="" %}


{% include zakviewer.html Name="2022-05-27ß Scratch Project" ID="https://scratch.mit.edu/projects/697370880/" caption="Student D worked on various challenges using the point and move blocks. For example he had to make the 7 sprite move in a square, and then in a larger square. The next challenge, partly completed, is to make the 7 and 9 switch places." %}


</details>


<details markdown=1>
<summary markdown=1>## May 20th
</summary>

## May 20th

### Recap for May 20th


{% include zakviewer.html Name="2022-05-21 Cat owns an Family Mart 2022 05 20 with directions for next week on Scratch" ID="https://scratch.mit.edu/projects/694152059/" caption="student M made the cat go back to his original place when the family mart was full. " %}


{% include zakviewer.html Name="2022-05-21 Demon Game using clones on Scratch" ID="https://scratch.mit.edu/projects/679374913/" caption="Student K modified his code so that the weapons follow his Maikey sprite. He also added some more sprites." %}

{% include zakviewer.html Name="2022-05-21 Student Y Demon Game Fixed 2022 03 25 on Scratch" ID="https://scratch.mit.edu/projects/666094890/" caption="Student Y added more characters to his game. We discussed how to go about making names for his characters that appear above them." %}


{% include zakviewer.html Name="2022-05-21 にゃんこ大戦争 on Scratch" ID="https://scratch.mit.edu/projects/689871622/" caption="Student H began making a battle cats project by using the youtube video below" %}

{% include youtubelazy.html  videoID="-K2T5o0eYbk" %}


Student S made another BootupPD project called my family. We then upgraded the project by making the characters speak, and I gave her the challenge of making the characters speak in turn. This is an exercise in using bump blocks, the start block, and message blocks. Next we will continue making the conversation pass from person to person in the project.

Student A worked on a rocket project and played with the costume editor and adding photos.


{% include zakviewer.html Name="2022-05-21 Untitled on Scratch" ID="https://scratch.mit.edu/projects/693723636/" caption="Student D worked his first tutorials in scratch. After he had a basic understanding of the layout and how to place blocks I encouraged him to explore the blocks he could. He worked mostly wiht the say and move blocks, but he also discovered the myblock feature. I showed him how to use that to repeat actions several times." %}


</details>


<details markdown=1>
<summary markdown=1>## May 13th
</summary>

## May 13th

### Recap for May 13th



{% include zakviewer.html Name="2022-05-13 Student Y Demon Game " ID="https://scratch.mit.edu/projects/666094890/eitor" caption="Student Y's main objective today was to have a character lose 'power' when clicked. " %}

{% include imgur.html title="" ID="https://i.imgur.com/l29boIW.png" caption="He tried to figure it out himself, and got very close. The power needed to be multliplied by -1 for the routine to work. When the character runs out of power, he will fall over and dies." width="" height="" spacer="" %}

{% include zakviewer.html Name="2022-05-13 Demon Game using clones on Scratch" ID="https://scratch.mit.edu/projects/679374913/" caption="Student K made his Maikey sprite move on arrow presses and made other adjustments to his game." %}

{% include zakviewer.html Name="2022-05-13 Student H looking for eyeglasses " ID="https://scratch.mit.edu/projects/553913239/" caption="Student H came up with 2 projects this week. He made this game that had a crazy cat chaing a pair of sunglasses." %}


{% include zakviewer.html Name="2022-05-13 Student H にゃんこ大戦争" ID="https://scratch.mit.edu/projects/689871622/" caption="He also made this cat that fires cats project. Click the bottom cat to see it in action." %}


ScratchJr
  : The ScratchJR kids worked on making a racing game based on this BootupPd project. 

{% include youtubelazy.html  videoID="0QY_rF8h6-Y" %}

First we made the characters move at different speeds, and to return home when they touch another character at the end of the line. Student A had a lot of fun experimenting with the drawing editor. Student S made this into a Mother's Day project, and showed initiative and creativity in choosing characters and in making the course go vertically, which looks very nice. 

{% include giphy.html link="https://media.giphy.com/media/0gu6fdPTswX9AnIkx1/" %} 



</details>

<details markdown=1>
<summary markdown=1>## May 6th
</summary>

## May 6th

### Recap for May 6th

ScratchJr
  : Student A decided to review skills by making his own project. It involved characters moving across the screen and bumping into each other. He also greatly enjoyed typing in various emoji. 

  : Student S made a project where the characters move, bump into each other, and can be tapped to do things. This is a review of how to use in the bump, touch and loop blocks.
{% include giphy.html link="https://media.giphy.com/media/rYHuM5QrTmL50Odcag/" %} 

Scratch
  : Students K and Y both use clones to show the tools. student M
{% include imgur.html title="" ID="https://i.imgur.com/tePWjT5.png" caption="When they press the tool number key, it should move to the player. We  learned how to use the join block with a variable to detect different types of key presses with one block. This way we compare the clicked key to the id of the clone and know which clone to activate. This works for clicks too" width="" height="" spacer="" %}


{% include zakviewer.html Name="2022-05-06 Demon Game using clones" ID="https://scratch.mit.edu/projects/679374913/" caption="You can see it here after choosi" %}

{% include imgur.html title="" ID="https://i.imgur.com/OUlDgSV.jpg" caption="Student Y worked on making a detailed plan for his project. Many students are reluctant to do this step, but he has embraced it with flair. also needed some instruction on converting webp files to jpg for his project." width="" height="" spacer="" %}


{% include imgur.html title="" ID="https://i.imgur.com/2804sgk.png" caption="Student M worked on making his cats go to Family Mart when they reach the middle. First we shrink them, increase the number of occupants and go to the room. He used a repeat loop for the shrink routine, and go to and ghost effects to make him disappear and reappear." width="" height="" spacer="" %}


First, Student H completed a 5 minute challenge to refactor a shooter game so it worked with the arrow keys instead of the w-a-s-d keys. Then I helped him change a video into a gif to import it into a new project. To help him maintain focus I used a 5 minute timer for him. If he maintained focus for 5 minutes, he would gain some free time. This seemed to be increase the amount of time he could stay on focus.

{% include zakviewer.html Name="2022-05-06 戦え" ID="https://scratch.mit.edu/projects/684157189/" caption="He also made several new mini-projects such as this one, which shows considerable progress." %}

</details>


<details markdown=1>
<summary markdown=1>## April 30th Makeup
</summary>

## April 30th Makeup

### Recap for April 30th



* Today Student M worked on his **Cat owns a Convenience Store** project. 


{% include imgur.html title="" ID="https://i.imgur.com/KZZjj53.png" caption="The first step was to set up 3 variables: room occupants, max in room, money. He then created myblocks (get money, go to room 1, leave room when ready) for the main start as a clone loop. This is the main game loop. We also started making the get money loop." width="" height="" spacer="" %}


{% include zakviewer.html Name="2022-04-30 Cat owns a Convenience Store" ID="https://scratch.mit.edu/projects/655392474/" caption="No visible changes as yet..." %}


* The other students in the class took turns "tutoring" Student S in using ScratchJr. They began a project with 2 screens, and I challenged her to continue the story on her own.

{% include imgur.html title="" ID="https://i.imgur.com/X6CV8nC.gif" caption=" She created a game where the cat chases the piece of toast. If it touches the toast it shrinks and the user has to touch it to make it bigger again. We talked about how to know when a game is over, and suggested the game end after 25 loops. She worked well on her own, and I gave her some help making the toast say 'ouch' using the bump block, and adding a jump to the fourth screen, by adding a blank screen, returning to screen 3, and then dragging the block. She also learned how to drag a sprite to a screen to make a copy of it in that screen." width="" height="" spacer="" %}




</details>



<details markdown=1>
<summary markdown=1>## April 22nd
</summary>

## April 22nd

### Recap for April 22nd

{% include zakviewer.html Name="2022-04-22 Demon Game using clones on Scratch" ID="https://scratch.mit.edu/projects/679374913/" caption="Student K continued trying to understand clones. We talked about how to size the health that make up his health meter. We created a new message to eliminate the need for many individual sprites and go directly to the main health sprite. We struggled to position the hearts at the right location, because it turned out an error elsewhere in his code was hiding the heart." %}


Student Y worked on figuring out how his player should choose their costume. Unusually, he dseems to have decided on a mix between randomly and with some user control. Once this is clear, he will be able to code it.

Student S chose to make another square maze like this: 

![](./../../../junior_coders/Overview/images/FollowTheMazeGame.gif)

Her focus was on learning how to use the paint editor to change line shapes, how to use the camera to import Pokemon images (for the buttons) into the paint editor, and then how to create buttons using messages. 

Student D worked on making a simplified Math Quiz. The key point was how to use messages to control the sequence of actions: Question 1 => Answer 1 -> Question 2 => Answer 2 -> Question 3 => Answer 3 -> Game over screen, where each arrow is a send/receive pair of blocks. He also learned how to use the camera to import images, and about using the hide and show blocks.

Students M and H made minor progress on their recent projects.


</details>



<details markdown=1>
<summary markdown=1>## April 15th
</summary>

## April 15th

### Recap for April 15th

Student M worked on developing his Cat Owns an Inn project. His plan is
* Each cat that goes into Room 1 gives $2
* A maximum of 5 cats can go into the room
* If you have more than $10, the maximum goes up by 1
* If the room is full, the cat goes back and has a worried expression. 

We began to code this, and talked about the variables we would need. 

Students Y and K are both at a stage where their Demon Game programs need to use clones to create multiple copies of a sprite. Today we discussed exactly how they want to use the clones. For example, how to choose weapon randomly or how to create hearts to show character strength. Once it is clear what they want, we will be able to make the clones behave as they should.

Students A and S worked first on making square mazes. In addition to giving practice in using the paint editor to control line thickness and fills, it demonstrates creating buttons that send messages.

![](./../../../junior_coders/Overview/images/FollowTheMazeGame.gif)


For a follow-up challenge we then created an Animate My Name project. The special challenge was making the middle letter make the outside letters change places. This involves one message going to two sprites at the same time.

{% include giphy.html link="https://media.giphy.com/media/PUxPUNhdwXulzfL1Za/" %} 


{% include zakviewer.html Name="2022-04-15 CHristmas Project" ID="https://scratch.mit.edu/projects/676278234/" caption=" He got a gif off the internet and added a modified version of a stock sound. He had a lot of fun showing it off after class to other students and parents." %}


</details>

<details markdown=1>
<summary markdown=1>## April 8th
</summary>

## April 8th

### Recap for April 8th

{% include zakviewer.html Name="2022-04-10 Demon Game" ID="https://scratch.mit.edu/projects/614681649/" caption="Student K continue working on his Demon game. He added some more game elements to his main screen, lik HP and hearts. He also began working on making a key press move the weapon to Mikey." %}


{% include imgur.html title="" ID="https://i.imgur.com/7P6sz1j.png" caption="Student M worked on making his cats point in the right direction when they appear. This involved an if test.  We used a set rotation style to keep the cat from rotating upside down, and set the direction to 90 or -90, depending on the variable left or right. The variable left or right is 1 when the character is on the right, and 2 when the character is on the left." width="" height="" spacer="" %}



Scratch Jr New Students
  : New student S1 used ScratchJr. to make a maze. We created a sprite with a set of shapes, and then she taught the cat to move around the shapes. We coded it so that if she touched the shapes, she would return to the original position. At the end we added a target sprite and a special effect when we successfullly reach the end of the maze.

  : New Student S2 started off by exploring Scratchjr. on his own. He told me he likes Pokemon characters, and he played with the paint editor. We made the pokemon characters move around the screen. I taught him how to copy code and he discovered that copying the same motion script made the characters move faster and faster. 


</details>



<details markdown=1>
<summary markdown=1>## April 1st
</summary>

## April 1st

### Recap for April 1st

Countdown Timer
  : Student K's first task was to create a countdown for the start of the game.

{% include imgur.html title="" ID="https://i.imgur.com/g8SGoDA.png" caption="We showed the sprite for 3 seconds, then waited, then broadcast to sprite 2," width="200px" height="" spacer="" %}

{% include imgur.html title="" ID="https://i.imgur.com/Cpyuhb0.png" caption="again, to sprite 1," width="150px" height="" spacer="" %}

{% include imgur.html title="" ID="https://i.imgur.com/NkJTmUD.png" caption="then finally to the start sprite," width="150px" height="" spacer="" %}

{% include imgur.html title="" ID="https://i.imgur.com/Ym9PYtw.png" caption="and lastly to where the game begins. This was a good demonstration of how broadcasts can be chained from one into the next to create a sequence of events." width="" height="" spacer="" %}

Using Clones to Choose a Weapon
  : Both Students today were at a stage in the game where they could use clones to create a series of buttons for choosing a weapon. 

{% include zakviewer.html Name="2022-04-07 Student Y Demon Game Fixed 2022 04 01 fixed" ID="https://scratch.mit.edu/projects/672566264/" caption="Student Y learned how to use one sprite to choose a weapon. We created clones, and when the clones are clicked, we set a local variable that tells us which weapon to show." %}


{% include zakviewer.html Name="2022-04-08 Demon Game" ID="https://scratch.mit.edu/projects/614681649/" caption="Student K also began working on this stage." %}



</details>


<details markdown=1>
<summary markdown=1>## March 25th
</summary>

## March 25th

### Recap for March 25th

{% include zakviewer.html Name="2022-03-25 Student M Cat owns an Inn Revised" ID="https://scratch.mit.edu/projects/666047491/" caption="Student M began making the Cat Owns an Inn Project. This project was intended as a quick intro to key concepts that he has identified as needed but has not coded before. Ideas covered included Broadcast Model, Initialization, Creating Clones, Starting a Clone, Creating Variables, Size and Ghost effect, random numbers, glides, and ifs and conditionals." %}


{% include imgur.html title="" ID="https://i.imgur.com/beKJV7G.png" caption="Student K created a ground by using eight 'dirt' sprites, and I showed him how to create an array of buttons with just one sprite using clones." width="" height="" spacer="" %}

{% include zakviewer.html Name="2022-03-25 Demon Game" ID="https://scratch.mit.edu/projects/614681649/" caption="" %}


{% include zakviewer.html Name="2022-03-25 Demon Game Fixed 2022 02 04" ID="https://scratch.mit.edu/projects/639245268/" caption="Student Y also needed an array of buttons. His main concern was how to make it so that we could click them and know which one was clicked." %}


{% include imgur.html title="" ID="https://i.imgur.com/ueR1Jt2.png" caption="First we created the clones by looping over the positions" width="" height="" spacer="" %}


{% include imgur.html title="" ID="https://i.imgur.com/ejuAV4B.png" caption="Then we set the appropriate costume and created a test to see which is clicked. We used a local variable to know which clone is which, and a global variable to know which was clicked. By comparing the two we know which clone is clicked." width="" height="" spacer="" %}


</details>


<details markdown=1>
<summary markdown=1>## March 18th
</summary>

## March 18th

### Recap for March 18th

Student Y started working on the next screen of his Demon Game.  

{% include imgur.html title="" ID="https://i.imgur.com/cyRp0Ck.png" caption="He created a mockup of the screen and collected the blocks that he will used for it. Most of these are derived from Minecraft." width="" height="" spacer="" %}

<br/>
Student K likewise did the same, though his approach was different. His main focus this week was using broadcast and receive blocks to change the screen. 

{% include zakviewer.html Name="2022-03-20 Demon Game" ID="https://scratch.mit.edu/projects/614681649/" caption="First he added the change of screen when pressing the other level buttons, and then he made all the characters appear and disappear at the right time." %}

</details>

<details markdown=1>
<summary markdown=1>## March 11th
</summary>

## March 11th

### Recap for March 11th


Both kids made significant progress today.


{% include zakviewer.html Name="2022-03-12 Demon Game" ID="https://scratch.mit.edu/projects/614681649/" caption="Student K:
1. created the background for the main screen. I showed him how to use one sprite for the background, then use a switch costume block to change the background. This is better than using multiple sprites. 
2. He used when I receive block to change the background once choosing the level. 
3. He created a spider and I helped him look for Minecraft soundboards to get the sounds for the spider.<span >" %}

{% include zakviewer.html Name="2022-03-12 Demon Game Fixed 2022 02 04" ID="https://scratch.mit.edu/projects/639245268/" caption="Student Y:<br>
1. Learned how to create a variable to track the number of clicks.
2. Initialized the variable and updated it each click. 
3. Used an if block to test the number of clicks, and perform an action on the 5th click. <br>
  ![imgur](https://i.imgur.com/CE35vqH.png)
4. He began adding swords.
5. He began designing the next scene on paper.
<span>" %}


</details>


<details markdown=1>
<summary markdown=1>## March 4th 
</summary>

## March 4th 

### Recap for March 4th 

Students continued working on the Demon Game Prjoect


{% include zakviewer.html Name="Demon Game 2022 03 05 Student Y" ID="https://scratch.mit.edu/projects/654133485/" caption="Student Y Animated finished animating two characters using repeat blocks and messages. You can see them dance after choosing the level." %}

{% include imgur.html title="" ID="https://i.imgur.com/b6JRXqH.png" caption="Student K added a host of weapons to his project" width="" height="" spacer="" %}


{% include imgur.html title="" ID="https://i.imgur.com/DTWdSAx.png" caption="He also began creating the transition from the level screen to the main game screen using when clicked, broadcast, and received blocks." width="" height="" spacer="" %}

{% include zakviewer.html Name="2022-03-06 Untitled-62" ID="https://scratch.mit.edu/projects/655016688/" caption="This is visible when you click the easy level." %}


</details>


<details markdown=1>
<summary markdown=1>## February 25th
</summary>

## February 25th

### Recap for February 25th

[Last week](#february-18th) we turned a bitmap image into a collection of vector pieces that can be used to make an animation. This week the kids repeated the process on their own without my help. This involved taking images, removing the background using pixlr, slicing them into parts and reassembling them into animation frames.

For student K  we also talked about how to create a transition to the main screen using broadcast/receive blocks. He will have to finish this next week.


</details>


<details markdown=1>
<summary markdown=1>## February 18th
</summary>

## February 18th

### Recap for February 18th

This week the kids worked on making an animation using a stock Minecraft character. Thy plan to use this as part of their Demon Games Project. The kids worked very well together and helped each with ideas and learning the steps.

1. They searched google and found the image they wanted. 
2. They used the [pixlr remove background](https://pixlr.com/remove-background/) removal tool to remove the background. 
3. They imported the result into their project as a bitmap file. 

    {% include imgur.html title="" ID="https://i.imgur.com/5dU3j4S.png" caption="" width="" height="" spacer="" %}

     <br>



4. They then sliced the image to separated the arms, legs, and head. 

    {% include imgur.html title="" ID="https://i.imgur.com/Tz4xbyf.png" caption="" width="" height="" spacer="" %}

     <br>


5. They copied these parts into separate costumes and converted them into vector images.
6. They reassembled the body by pasting all these parts into one full vector image, with movable parts.

    {% include imgur.html title="" ID="https://i.imgur.com/HsdkVIU.png" caption="" width="" height="" spacer="" %}


     <br>
  
7. They created a sequence of animation frames using onion-skinning.
8. Next week they will code these to create animations.


    {% include imgur.html title="" ID="https://i.imgur.com/6fQy55l.gif" caption="" width="" height="" spacer="" %}


</details>



<details markdown=1>
<summary markdown=1>## February 4th
</summary>

## February 4th

### Recap for February 4th

{% include zakviewer.html Name="2022-02-04 Demon Game Fixed" ID="https://scratch.mit.edu/projects/639245268/" caption="Student Y added buttons and a new background to go to the main screen after selecting the difficulty. This involved telling which sprites to hide, which required some troubleshooting." %}

{% include zakviewer.html Name="2022-02-04 Demon Game" ID="https://scratch.mit.edu/projects/614681649/" caption="Student K cfreated Easy, Normal, and Hard difficulty buttons and made them appear at the right time and place using receive, goto and show blocks." %}

Students also tried out a new Minecraft Travel game. 

{% include zakviewer.html Name="Minecraft Travel v4" ID="https://scratch.mit.edu/projects/633644256/" caption="" %}


</details>


<details markdown=1>
<summary markdown=1>## January 28th
</summary>

## January 28th

### Recap for January 28th

Only one student today.

Demon Game
  : Student Y made a big step in hhis the Demon Game. We added a help screen for choosing the level. He learned how to use emoji in text fields.  

{% include imgur.html title="" ID="https://i.imgur.com/qqv4Nfv.png" caption="" width="" height="" spacer="" %}


{% include zakviewer.html Name="" ID="https://scratch.mit.edu/projects/" caption="We also used a 'wait until mouse down' blocks so the scratch cat says 'Brilliant' when you are done choosing the level." %}




</details>



<details markdown=1>
<summary markdown=1>## January 21st
</summary>

## January 21st

### Recap for January 21st

In the beginning of class we spent some time clarifying our goals for the Demon Games Project. We decided that each student would stick to the main outline of the game, but would independently create their own game characters, looks, and so on. This allows for them to develop the game at their own pace while still reusing some code but with ample room for individual creativity and control.

{% include zakviewer.html Name="2022-01-23 Demon Games 2022 01 21 Y" ID="https://scratch.mit.edu/projects/631710507/"  caption="Student Y began making weapons. I showed him how to make a slight modification to his code to create a highlight effect using a colored highlight sprite when clicking on a level." %}

{% include zakviewer.html Name="2022-01-23 Untitled-22" ID="https://scratch.mit.edu/projects/614681649/" caption="Student K added a play button and began working on his level selection screen." %}


</details>



<details markdown=1>
<summary markdown=1>## January 14th & 15th
</summary>

## January 14th & 15th

### Recap for January 14th & 15th

On Friday Student K and I worked in an online drawing program called [Sketchpad](https://sketch.io/sketchpad/) to draw the opening screen of their project, Demon Games (formerly Demon Toetation). This paint editor is superior to the one in Scratch and he learned how to use various functions such as choosing a font, copying stickers, importing photos, and changing colors and fills. We then imported this into Scratch and created the opening backdrop for the project. He also created a Start button this way.

On Saturday, Student Y built on this by coding the start button to open the level selection screen. He also used Sketchpad to create a starred backdrop, and coded the easy, medium and hard button to set the difficulty variable. We talked about how this variable would be used in the game to control the number of demons generated.

Even though the two students were working separately they are working well as a team to handle different parts of the project. It's very exciting to see this project take shape.

{% include zakviewer.html Name="2022 1 17 Demon Games" ID="https://scratch.mit.edu/projects/628807733/" caption="Run the program to see the opening screen. Click start to see the difficulty selection screen. Tapping one of the buttons sets the difficulty." %}

</details>

<details markdown=1>
<summary markdown=1>## January 7th
</summary>

## January 7th

### Recap for January 7th

Demon Toetation Land
  : <a class="external" href="https://lh3.googleusercontent.com/56ZQryQN814eQ_bZa-A4kTospf8yE4cB8IGrczkt-JNuqF0-IzjF_1Sp3scnXkh2IUqp538uOI5CDvP4hIgs6rrlpyQh_jzEDXtGT72avmGtsYiZg1AKqQcnzhU2dhs0is95s3zobw=w2400?source=screenshot.guru"  title="Students planned out a new project" caption="Students planned out a new project"> <img class="giphycontainer jsgif turbowarp" src="https://lh3.googleusercontent.com/56ZQryQN814eQ_bZa-A4kTospf8yE4cB8IGrczkt-JNuqF0-IzjF_1Sp3scnXkh2IUqp538uOI5CDvP4hIgs6rrlpyQh_jzEDXtGT72avmGtsYiZg1AKqQcnzhU2dhs0is95s3zobw=w600-h315-p-k" /></a>
  : The students have decided to work together on an original game Demon Toetation Land. It is loosely based on a minecraft game, but with interesting variations of their own. They drew out a detailed storyboard including characters and character names, a "manga" version of battle mode, a complicated system for the number of enemies and the how they take damage, as well as the motion and actions of the sprites controlled by keypresses. This is a good outline and has potential to be a really fun game. With a few more additions, coding the project will be straightforward.
  
</details>


<details markdown=1>
<summary markdown=1>## Archives
</summary>


## Archives 

### [2021 Archives](./RoseClassNotes-Archives2021.html)
### [2020 Archives ](./RoseClassNotes-Archives2020.html)

</details>
<!-- <div class="bottomSpacer">

</div> -->
