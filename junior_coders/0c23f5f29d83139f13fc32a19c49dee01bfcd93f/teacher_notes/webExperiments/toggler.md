---
layout: default
title: Toggler

# gi= gallery image. Place all the url (required) here, along with an (optional) label (goes above the image)
# aand/or caption (below the image) and then paste the raw markdown in teh appropriate place. 
# more than one gallery can exist on a page. 
gilabel-01: Alien Monkey
giurl-01: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Monkey.jpg
gicaption-01: Code for this character

gilabel-02: Alien Cat
giurl-02: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Cat.jpg
gicaption-02: Code for this character

gilabel-03: Alien Bat
giurl-03: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Bat.jpg
gicaption-03: Code for this character

gilabel-04: Alien Ball
giurl-04: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Ball.jpg
gicaption-04: Code for this character

gilabel-05: Fidget Spinner
giurl-05: ./scratchProjects/Images/Y1R31AlienPlanetImages/Fidget%20Spinner.jpg
gicaption-05: Code for this character

gilabel-06: Alien Mushroom
giurl-06: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Mushroom.jpg
gicaption-06: Code for this character

gilabel-07: Alien Sun
giurl-07: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Sun.jpg
gicaption-07: Code for this character

gilabel-08: Alien Ship
giurl-08: ./scratchProjects/Images/Y1R31AlienPlanetImages/Alien%20Ship.jpg
gicaption-08: Code for this character
---
<style>
summary p {
    display: inline;
}

summary {
    margin-bottom: 1em;
}
</style>

<!-- Collapsible section with markdown

<details><summary>Label here

</summary>
add above and include label
content here
### headings Okay
finish by closing details tag:
</details>
<br/>
-->
<details><summary>Addendum: Skill Review Checklist
</summary>

#### Addendum: Skill Review Checklist

Skills Review Checklist:
- [ ] Choosing and changing the background
- [ ] adding and changing lines and shapes
- [ ] adding and making characters bigger or smaller
- [ ] making characters visible or invisible
- [ ] making characters move in different ways
- [ ] making characters act at the start, or when they are touched
- [ ] making characters speak and make sounds
- [ ] sending and receiving messages
- [ ] moving to different screens/pages

You have learned a lot already!!! 

Go back to [Skills Review](#skills-review)

</details>
<!-- End ddendum: Skill Review Checklist -->

<details><summary>Addendum: Alien Planet Project Assignment

</summary>

#### Addendum: Alien Planet Project Assignment


1. Create your own background like the one in the project. It can be anything you like, but at least: 
   - [ ] draw several lines 
   - [ ] use the fill tool to fill in areas.
2. Create at least 3 and up to 8 characters. For each one:
   - [ ] Edit the character to make them alien. 
   - [ ] Add fills, strokes, and whatever else you want. 
   - [ ] Size and place the character at their start point 
3. Each character can have more than one green flag or other **trigger** at the same time. See [Alien Bat](#slide-03). 
4. Make each character do one or more things with the **start trigger** and the **touch trigger** and the **bump trigger**. Here are some choices: 
   - [ ] Make the character move and dance. Use all the blue blocks.
   - [ ] Include sounds and speech bubbles for the characters and have the character make the sound, either at the beginning or when touched, or any other time.
   - [ ] Use repeat/loop (yellow) and repeat forever (red) blocks. See the Alien Cat for an example of both.
   - [ ] Change the speed of the character
   - [ ] Have the character become invisible and visible. See [Alien Bat](#slide-03). 
   - [ ] Have the characters talk to each other. This project has no example, but we have covered it before. Here is an easy example of a [simple conversation](./scratchProjects/card08-greet.pdf)     

</details>

<details><summary>Addendum: Sending Projects

</summary>

#### Addendum: Sending Projects

Even though receiving projects does not seem to work on the iPad, sending does seem to work. 

1. Click here to get to send screen.
{:imagesize: width="auto" max-width="initial" height="200px" max-height="250px" }
![upper right corner, inside your project][]{: imagesize }
2. You should see a project page. 

![the project page][]{: imagesize }
3. Rename it with your name, so I know who is sending it!
4. Click ”For Parents”. 
5. You will have to solve a math problem 

![a math problem][]{: imagesize }
6. Solve it and click "Send email" 

![Share by email][]{: imagesize }

[upper right corner, inside your project]: images/2020-04-27/sendingProjectByEmail.PNG
[the project page]: images/2020-04-27/SendingEmail.jpg
[a math problem]: images/2020-04-27/mathProblem.jpg
[Share by email]: images/2020-04-27/SendThroughEmail.jpg

Here is my [direct email](mailto:teacher@kyotolesson.com) or email alan or the school.

</details>

<details><summary>Addendum: Code for Alien Planet

</summary>

#### Addendum: Code for Alien Planet

<style>
.slider {
width: 100%;
text-align: center;
overflow: hidden;
}

.slides  {
display: flex;
overflow-x: auto;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
-webkit-overflow-scrolling: touch;
/*
scroll-snap-points-x: repeat(300px);
scroll-snap-type: mandatory;
*/
}

.slides::-webkit-scrollbar {
width: 10px;
height: 10px;
}

.slides::-webkit-scrollbar-thumb {
background: black;
border-radius: 10px;
}

.slides::-webkit-scrollbar-track {
background: transparent;
}

.slides p  {
scroll-snap-align: start;
flex-shrink: 0;
width: 100%;
height: auto;
margin-right: 50px;
border-radius: 10px;
background: #eee;
transform-origin: center center;
transform: scale(1);
transition: transform 0.5s; 
position: relative;
display: flex;
justify-content: center;
align-items: center;
  padding-top: calc(100% - 350px); 
  margin-top: calc(350px - 100%);
}

.slides p:target {
/*   transform: scale(1); 
    padding-top: calc(100% - 500px);
    margin-top: 0px;*/
}
.slides ul:target {
/*   transform: scale(1); */
}


.slider>a {
display: inline-flex;
width: 1.5rem;
height: 1.5rem;
background: pink;
text-decoration: none;
align-items: center;
justify-content: center;
border-radius: 50%;
margin: 0 0 0.5rem 0;
position: relative;
}

.slider>a:active {
top: 1px;
background-color: pink;
}

.slider>a:focus {
background: #00c;
border: 2px solid red;
}
/* Don't need button navigation */

@supports (scroll-snap-type) {
.slider>a {
display: none;
}
}

</style>
<div class="slider">
<!-- These have to be links  -->
<div class="slides">
[![ {{ page.gilabel-01 }} ]({{ page.giurl-01 }})]({{ page.giurl-01 }}){: target="_blank"}
{: #slide-01}

[![ {{ page.gilabel-02 }} ]({{ page.giurl-02 }})]({{ page.giurl-02 }}){: target="_blank"}
{: #slide-02}

[![ {{ page.gilabel-03 }} ]({{ page.giurl-03 }})]({{ page.giurl-03 }}){: target="_blank"}
{: #slide-03}

[![ {{ page.gilabel-04 }} ]({{ page.giurl-04 }})]({{ page.giurl-04 }}){: target="_blank"}
{: #slide-04}

[![ {{ page.gilabel-05 }} ]({{ page.giurl-05 }})]({{ page.giurl-05 }}){: target="_blank"}
{: #slide-05}

[![ {{ page.gilabel-06 }} ]({{ page.giurl-06 }})]({{ page.giurl-06 }}){: target="_blank"}
{: #slide-06}

[![ {{ page.gilabel-07 }} ]({{ page.giurl-07 }})]({{ page.giurl-07 }}){: target="_blank"}
{: #slide-07}

[![ {{ page.gilabel-08 }} ]({{ page.giurl-08 }})]({{ page.giurl-08 }}){: target="_blank"}
{: #slide-08}

</div>
<!-- necessary space-->
[{{ page.gilabel-01 }}](#slide-01) | [{{ page.gilabel-02 }}](#slide-02) | [{{ page.gilabel-03 }}](#slide-03) | [{{ page.gilabel-04 }}](#slide-04) | [{{ page.gilabel-05 }}](#slide-05) | [{{ page.gilabel-06 }}](#slide-06) | [{{ page.gilabel-07 }}](#slide-07) | [{{ page.gilabel-08 }}](#slide-08)
</div>
     

</details>