---
layout: junior_coders_default
title: Getting Started with Scratch Jr. (Saturday PM)
levelsToTop: "../"
---
<style>
.sb-label{font-family:Lucida Grande,Verdana,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#fff;font-size:10px;word-spacing:+1px}.sb-obsolete{fill:#d42828}.sb-motion{fill:#4a6cd4}.sb-looks{fill:#8a55d7}.sb-sound{fill:#bb42c3}.sb-pen{fill:#0e9a6c}.sb-events{fill:#c88330}.sb-control{fill:#e1a91a}.sb-sensing{fill:#2ca5e2}.sb-operators{fill:#5cb712}.sb-variables{fill:#ee7d16}.sb-list{fill:#cc5b22}.sb-custom{fill:#632d99}.sb-custom-arg{fill:#5947b1}.sb-extension{fill:#4b4a60}.sb-grey{fill:#969696}.sb-bevel{filter:url(#bevelFilter)}.sb-input{filter:url(#inputBevelFilter)}.sb-input-number,.sb-input-number-dropdown,.sb-input-string{fill:#fff}.sb-literal-dropdown,.sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{font-weight:400;font-size:9px;word-spacing:0}.sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{fill:#000}.sb-darker{filter:url(#inputDarkFilter)}.sb-outline{stroke:#fff;stroke-opacity:.2;stroke-width:2;fill:none}.sb-define-hat-cap{stroke:#632d99;stroke-width:1;fill:#8e2ec2}.sb-comment{fill:#ffffa5;stroke:#d0d1d2;stroke-width:1}.sb-comment-line{fill:#ffff80}.sb-comment-label{font-family:Helevetica,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#5c5d5f;word-spacing:0;font-size:12px}]]>
</style>


details>
<summary>## September 14th
</summary>

## September 14th


### September 14th Parent Notes
Today's class was a bit challenging. Kids were very eager to explore new Scratch projects, but also very eager to do things that were a little ahead of their abilities. To try to prevent this I gave students a simple beginner tutorial to work on at the beginning of the class. I fear there was some frustration though as they were all very eager to jump ahead to imitate fancier projects and games. At the same time, despite that, they did all make progress individually and can be proud of what they did accomplish. I recommend going over these notes, to highlight and help you see the progress you made. I encourage you to be patient with following the tutorials.
### Sept 21 Homework

Today's class was a bit challenging. Kids were very eager to explore new Scratch projects, but also very eager to do things that were a little ahead of their abilities. To try to prevent this I gave students a simple beginner tutorial to work on at the beginning of the class. I fear there was some frustration though as they were all very eager to jump ahead to imitate fancier projects and games. At the same time, despite that, they did all make progress individually and can be proud of what they did accomplish. I recommend going over these notes with you child, to highlight and help them see the progress they did make and perhaps encourage them to be patient with following the tutorials.

### Do scratch tutorials

[scratch tutorials](https://scratch.mit.edu/projects/editor/?tutorial=all)

I started the class by asking kids look at and copy the animate a name tutorial. Most kids were very eager to start their own projects, so I had them work on the tutorial and went around the room to hear their ideas for their individual projects (as int he homework) before they started working on them.

### Success 1: Birthday Cakes

One success was making a birthday song/cake project. The project had two goals:

1. Making birthday candles light and unlight.
2. Clicking dots to make the music stop and start.

### Birthday Candles Go On and Off

Small Dot sprites on the radio act as buttons. When you click the buttons, they turn the music on and off. T
![radio](https://i.imgur.com/q5NWd54.jpg)

The Cake sprite has 2 costumes.

![cake](https://i.imgur.com/a8WWROh.jpg)


The pink dot code makes the music play, and sends a message to the cake.  [](# "I corrected the student's project so the candles go out *after* the music plays."). The broadcast message block is just like the send message block in Scratch Jr., but more powerful.

![radio code](https://i.imgur.com/thdqNMT.jpg)

When the cake gets the message, it changes costume. This make it seems the candles are going out.

![radio code](https://i.imgur.com/ctYUBO0.jpg)

The red dot makes the music stop.

![radio code](https://i.imgur.com/IB9SwJh.jpg)

This is an excellent first project, though I think the student may have wanted to do more... It is a very good start. It uses messages

### Success 2: Cool Name animation

This project makes the student name appear sequentially. They key to this project is also using message blocks. On start, the characters hide, wait, then one appears, waits, and tells the next to appear. 

![radio code](https://i.imgur.com/oF20zHM.jpg)

Continuing down the line, the characters appear in sequence, 

![radio code](https://i.imgur.com/Ic1XIle.jpg)

ending in a cool pair of sunglasses (my favorite touch!). 

![radio code](https://i.imgur.com/295we4t.jpg)
![radio code](https://i.imgur.com/Zi1LNCL.jpg)

This student also started emulating a more [advanced project](https://scratch.mit.edu/projects/425323424/).     This was a bit tough, but they made a good start by using the "next costume" trick to change through a series of costumes. 


{% include giphy.html link="https://media.giphy.com/media/Q5dlB0kBckYD20Rgfl/" %} 

If you look at the original project this is exactly what it is, except repeated many times. The original project has 104 costumes!!

{% include giphy.html link="https://media.giphy.com/media/WsSDxggvsefJRAKLL3/" %}{: width="30%" height="400px"} 



<iframe src="https://scratch.mit.edu/projects/418429641/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>


These are both great projects, and worth continuing!!

### Mario Attempt


Another student asked about how to make a character jump. There is a simple way:

<pre class="blocks"><div class="scratchblocks"><svg version="1.1" width="173" height="102"><defs><filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%"><feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"></feGaussianBlur><feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"></feFlood><feOffset result="offset-3" in="blur-1" dx="1" dy="1"></feOffset><feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"></feComposite><feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"></feComposite><feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"></feFlood><feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"></feOffset><feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"></feComposite><feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"></feComposite><feMerge result="merge-10"><feMergeNode in="SourceGraphic"></feMergeNode><feMergeNode in="comp-5"></feMergeNode><feMergeNode in="comp-9"></feMergeNode></feMerge></filter><filter id="inputBevelFilter" x0="-50%" y0="-50%" width="200%" height="200%"><feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"></feGaussianBlur><feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"></feFlood><feOffset result="offset-3" in="blur-1" dx="-1" dy="-1"></feOffset><feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"></feComposite><feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"></feComposite><feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"></feFlood><feOffset result="offset-7" in="blur-1" dx="1" dy="1"></feOffset><feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"></feComposite><feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"></feComposite><feMerge result="merge-10"><feMergeNode in="SourceGraphic"></feMergeNode><feMergeNode in="comp-5"></feMergeNode><feMergeNode in="comp-9"></feMergeNode></feMerge></filter><filter id="inputDarkFilter" x0="-50%" y0="-50%" width="200%" height="200%"><feFlood result="flood-1" in="undefined" flood-color="#000" flood-opacity="0.2"></feFlood><feComposite result="comp-2" operator="in" in="flood-1" in2="SourceAlpha"></feComposite><feMerge result="merge-3"><feMergeNode in="SourceGraphic"></feMergeNode><feMergeNode in="comp-2"></feMergeNode></feMerge></filter><path d="M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z" fill="#3f8d15" id="greenFlag"></path><path d="M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z" fill="#fff" id="turnRight"></path><path d="M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z" fill="#fff" id="turnLeft"></path><path d="M0 0L4 4L0 8Z" fill="#111" id="addInput"></path><path d="M4 0L4 8L0 4Z" fill="#111" id="delInput"></path><g id="loopArrow"><path d="M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2" fill="#000" opacity="0.3"></path><path d="M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2" fill="#fff" opacity="0.9" transform="translate(-1 -1)"></path></g></defs><g><g transform="translate(0 0)"><g transform="translate(2 0)"><path d="M 0 12 L 0 12 A 80 80 0 0 1 80 10 L 166 10 L 169 13 L 169 30 L 166 33 L 27 33 L 24 36 L 16 36 L 13 33 L 3 33 L 0 30 Z" class="sb-events sb-bevel"></path><text x="0" y="10" class="sb-label " transform="translate(6 16)">when</text><g transform="translate(38 15)"><g width="58" height="14" class="sb-input sb-input-dropdown"><rect x="0" y="0" width="58" height="14" class="sb-events sb-darker"></rect></g><text x="0" y="10" class="sb-label sb-literal-dropdown" transform="translate(4 0)">up arrow</text><polygon points="7 0 3.5 4 0 0" fill="#000" opacity="0.6" transform="translate(48 5)"></polygon></g><text x="0" y="10" class="sb-label " transform="translate(100 16)">key</text><text x="0" y="10" class="sb-label " transform="translate(122 16)">pressed</text></g><g transform="translate(2 33)"><path d="M 0 3 L 3 0 L 13 0 L 16 3 L 24 3 L 27 0 L 93 0 L 96 3 L 96 19 L 93 22 L 27 22 L 24 25 L 16 25 L 13 22 L 3 22 L 0 19 Z" class="sb-motion sb-bevel"></path><text x="0" y="10" class="sb-label " transform="translate(6 5)">change</text><text x="0" y="10" class="sb-label " transform="translate(47 5)">y</text><text x="0" y="10" class="sb-label " transform="translate(57 5)">by</text><g transform="translate(73 4)"><rect x="0" y="0" width="17" height="14" class="sb-input sb-input-string"></rect><text x="0" y="10" class="sb-label sb-literal-string" transform="translate(4 0)">10</text></g></g><g transform="translate(2 55)"><path d="M 0 3 L 3 0 L 13 0 L 16 3 L 24 3 L 27 0 L 77 0 L 80 3 L 80 19 L 77 22 L 27 22 L 24 25 L 16 25 L 13 22 L 3 22 L 0 19 Z" class="sb-control sb-bevel"></path><text x="0" y="10" class="sb-label " transform="translate(6 5)">wait</text><g transform="translate(32 4)"><path d="M 6.5 0 L 8.5 0 A 6.5 6.5 0 0 1 8.5 13 L 6.5 13 A 6.5 6.5 0 0 1 6.5 0 Z" class="sb-input sb-input-number"></path><text x="0" y="10" class="sb-label sb-literal-number" transform="translate(5 0)">1</text></g><text x="0" y="10" class="sb-label " transform="translate(51 5)">secs</text></g><g transform="translate(2 77)"><path d="M 0 3 L 3 0 L 13 0 L 16 3 L 24 3 L 27 0 L 99 0 L 102 3 L 102 19 L 99 22 L 27 22 L 24 25 L 16 25 L 13 22 L 3 22 L 0 19 Z" class="sb-motion sb-bevel"></path><text x="0" y="10" class="sb-label " transform="translate(6 5)">change</text><text x="0" y="10" class="sb-label " transform="translate(47 5)">y</text><text x="0" y="10" class="sb-label " transform="translate(57 5)">by</text><g transform="translate(73 4)"><rect x="0" y="0" width="23" height="14" class="sb-input sb-input-string"></rect><text x="0" y="10" class="sb-label sb-literal-string" transform="translate(4 0)">-10</text></g></g></g></g></svg></div></pre>

Of course there are more complicated ways that include moving forwards and gravity and other things, but as a beginning, this is a start.


Another important element of a Mario game is how to move the background. Using series of costumes this can look very smooth, but it takes a while to understand [how to do it](https://scratch.mit.edu/projects/76150/).

<iframe src="https://scratch.mit.edu/projects/76150/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>


### The Fox Project

the Animate My Name tutorial seems very simple, it has a lot fo room for development. One student patiently followed the tutorial to create an alphabet beatbox. They added a background and the letters FOX. Pressing the letter F made music play, and the other letters changed color when touched.

![play music](https://i.imgur.com/dXcq0qC.jpg)

![change color](https://i.imgur.com/6Lb1kuh.jpg)

We had a lot of fun dancing to the music!!!

This project has room for development. For example, the colors of the characters could change when the music changes. That would be very flashy. The limit is your imagination.

</details>