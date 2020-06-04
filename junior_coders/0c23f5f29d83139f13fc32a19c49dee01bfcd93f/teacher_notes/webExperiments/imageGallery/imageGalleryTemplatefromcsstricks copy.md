---
layout: default
title: Template for Images (latest)

# gi= gallery image. Place all the url (required) here, along with an (optional) label (goes above the image)
# aand/or caption (below the image) and then paste the raw markdown in teh appropriate place. 
# more than one gallery can exist on a page. 
gilabel-01: fakeimg.pl
giurl-01: http://fakeimg.pl/66x99/00c/c00?font=museo&text=my%20text
gicaption-01: Caption - http://fakeimg.pl/66x99/00c/c00?font=museo&text=my%20text

gilabel-02: placehold.it
giurl-02: https://placehold.it/600x200/00cc00/cc0000?text=my%20text
gicaption-02: Caption - https://placehold.it/600x200/00cc00/cc0000?text=my%20text

gilabel-03: loremflickr.com
giurl-03: http://loremflickr.com/blue/400/400/car
gicaption-03: Caption - http://loremflickr.com/blue/400/400/car

gilabel-04: lorempixel.com
giurl-04: http://lorempixel.com/400/200/sports/2/Dummy-Text
gicaption-04: Caption - http://lorempixel.com/400/200/sports/2/Dummy-Text

gilabel-05: unsplash.it
giurl-05: http://unsplash.it/300/300?random
gicaption-05: Caption - http://unsplash.it/300/300?random

gilabel-06: placekitten.com
giurl-06: http://placekitten.com/600/200
gicaption-06: Caption for this image

gilabel-07: loremflickr.com
giurl-07: http://loremflickr.com/800/300/Alien%20Sun
gicaption-07: Caption - http://loremflickr.com/800/300/Alien%20Sun

gilabel-08: lorempixel.com
giurl-08: http://lorempixel.com/400/200/animals/3/Different-Text?t=1588288193
gicaption-08: Caption - http://lorempixel.com/400/200/animals/3/Different-Text

gilabel-09: satyr.io first image
giurl-09: http://satyr.io/500x16:9/1
gicaption-09: Caption - http://satyr.io/500x16:9/1

gilabel-10: satyr.io second image ratio set to height
giurl-10: http://satyr.io/9:16x600/2
gicaption-10: Caption - http://satyr.io/300x9:16/2

gilabel-11: p-hold.com in red
giurl-11: http://p-hold.com/sheep/200/300/cc0000
gicaption-11: Caption - 

gilabel-12: p-hold in blue
giurl-12: http://p-hold.com/sheep/200/300/0000cc
gicaption-12: Caption - 



---

<style>
* {
box-sizing: border-box;
}

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
font-size: 100px;
}

.slides p:target {
/*   transform: scale(0.8); */
}
.slides ul:target {
/*   transform: scale(0.8); */
}

.author-info {
background: rgba(0, 0, 0, 0.75);
color: white;
padding: 0.75rem;
text-align: center;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
margin: 0;
}

.author-info a {
color: white;
}

img {
    /*
object-fit: cover;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%; */
}

.slider>a {
display: inline-flex;
width: 1.5rem;
height: 1.5rem;
background: white;
text-decoration: none;
align-items: center;
justify-content: center;
border-radius: 50%;
margin: 0 0 0.5rem 0;
position: relative;
}

.slider>a:active {
top: 1px;
}

.slider>a:focus {
background: #000;
}
/* Don't need button navigation */

@supports (scroll-snap-type) {
.slider>a {
display: none;
}
}

/* 
html,
body {
height: 100%;
overflow: hidden;
}

body {
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(to bottom, #74ABE2, #5563DE);
font-family: 'Ropa Sans', sans-serif;
} */
</style>


<div class="slider">
<!-- necessary space-->
[1](#slide-1) [2](#slide-2) [3](#slide-3) [4](#slide-4) [5](#slide-5)
<!-- These have to be links  -->
<div class="slides">
![ {{ page.gilabel-01 }} ]({{ page.giurl-01 }})
{: #slide-1}
![ {{ page.gilabel-02 }} ]({{ page.giurl-02 }})
{: #slide-2}
![ {{ page.gilabel-03 }} ]({{ page.giurl-03 }})
{: #slide-3}
![ {{ page.gilabel-04 }} ]({{ page.giurl-04 }})
{: #slide-4}
![ {{ page.gilabel-05 }} ]({{ page.giurl-05 }})
{: #slide-5}

  

<!-- 
<div id="slide-1">
1
</div>
<div id="slide-2">
2
</div>
<div id="slide-3">
3
</div>
<div id="slide-4">
4
</div>
<div id="slide-5">
5
</div> -->
</div>
</div>
