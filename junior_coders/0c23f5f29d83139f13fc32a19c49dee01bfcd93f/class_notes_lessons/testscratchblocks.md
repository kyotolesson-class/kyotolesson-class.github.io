---
layout: junior_coders_default
title: Scratch Mods
title2: various viewers and mods
levelsToTop: "../"

# gi= gallery image. Place all the image paths (required) here, along with an (optional) label (goes above the image)then paste the raw markdown in teh appropriate place.
# more than one gallery can exist on a page.

## Use the code below, uncommented.

## Use the code below, uncommented.

# <div class="slider2">
# <!-- These have to be links  -->
# <div class="galleryslides">

# [![ {{ page.gilabel-09 }} ]({{ page.weserve }}{{ page.siteurl }}/{{ page.dir }}{{ page.giurl-09 }}&w=477 )](./{{ page.giurl-09 }}){: target="_blank"}
# {: #slide-09 }

# [![ {{ page.gilabel-10 }} ]({{ page.weserve }}{{ page.siteurl }}/{{ page.dir }}{{ page.giurl-10 }}&w=477 )](./{{ page.giurl-10 }}){: target="_blank"}
# {: #slide-10 }

# [![ {{ page.gilabel-11 }} ]({{ page.weserve }}{{ page.siteurl }}/{{ page.dir }}{{ page.giurl-11 }}&w=477 )](./{{ page.giurl-11 }}){: target="_blank"}
# {: #slide-11 }

# </div>
# <!-- necessary space-->
# <div class="gallerymenu">

# [{{ page.gilabel-09 }}](#slide-09) 
# [{{ page.gilabel-10 }}](#slide-10)  
# [{{ page.gilabel-11 }}](#slide-11) 

# </div>

# </div>


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
* [Scratch viewers not inside details tag](#scratch-viewers-not-inside-details-tag)
  * [forkphorus](#forkphorus)
    * [...not it details tag](#not-it-details-tag)
  * [turbowarp.org](#turbowarporg)
* [Scratch viewers inside details tag](#scratch-viewers-inside-details-tag)
  * [Forkphorus](#forkphorus-1)
  * [Turbowarp](#turbowarp)
  * [s3blocks](#s3blocks)
  * [parse-sb3-blocks](#parse-sb3-blocks)
  * [scratch-viewer.zak.io](#scratch-viewerzakio)
  * [Sulphurous](#sulphurous)
  * [Leopard](#leopard)
* [scratchblocks](#scratchblocks)
  * [1 hardcoded](#1-hardcoded)
  * [2 using hightlight doesn't work](#2-using-hightlight-doesnt-work)
  * [3 This works](#3-this-works)
  * [4 inline](#4-inline)
  * [5 highlight javascript](#5-highlight-javascript)
  * [6 All the Scratch blocks](#6-all-the-scratch-blocks)
    * [Motion](#motion)
    * [Looks](#looks)
    * [Sound](#sound)
    * [Events](#events)
    * [Pen](#pen)
    * [Data](#data)
    * [Events](#events-1)
    * [Control](#control)
    * [Sensing](#sensing)
    * [Operators](#operators)
    * [Custom](#custom)
      * [Using inline and checkboxes. Very hard but looks nice.](#using-inline-and-checkboxes-very-hard-but-looks-nice)

</div>

* Click on the [> Date]() or <span style="color: var(--borderblue);  border-left: 9px solid var(--borderblue)!important;border-radius: 4px 4px; font-weight: bold; padding-left: 2px;">BLUE</span> borders to toggle the <span style="background-color:#ffeca0; border-left: 10px solid var(--borderblue) !important;border-radius: 4px 4px;"><b>  &nbsp;<span style="font-size: 70%">▶︎</span>&nbsp;&nbsp;Details&nbsp;&nbsp;&nbsp;&nbsp;</b></span>


## Scratch viewers not inside details tag

### forkphorus


* forkphorus works, but...

<iframe src="https://forkphorus.github.io/embed.html?id=420456768&auto-start=false&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

<details closed>
<summary>#### ...not it details tag
</summary>

#### ...not it details tag

<iframe src="https://forkphorus.github.io/embed.html?id=420456768&auto-start=false&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

</details>

### turbowarp.org

* a scratch mod 
* better and more compatible than forkphorus 
* has turbo mode and other options
* works even inside a details tag 
* styling difficult
* width="499" height="416"  is given in the instructions, but width="500" height="473"  seems to work better outside of details.
* width="500" height="456" works in details

<iframe src="https://turbowarp.org/embed.html#420456768" width="500" height="473"   allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>

* [open in new tab](https://turbowarp.org/#420456768)

* width="500" height="456" 

<iframe src="https://turbowarp.org/embed.html#420456768" width="500" height="456"    allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>

* [open in new tab](https://turbowarp.org/#420456768)


* width="324" height="448" 
* without jsgif

<iframe src="https://turbowarp.org/embed.html#420456768"  width="324" height="448"  allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>



<details closed>
<summary>## Scratch viewers inside details tag
</summary>

## Scratch viewers inside details tag

### Forkphorus

* version 3 upgrade of [Phoshorus](https://phosphorus.github.io/)
* doesn't work inside details for some reason!
* width="482" height="393"

<iframe src="https://forkphorus.github.io/embed.html?id=420456768&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

[https://forkphorus.github.io/app.html?id=429283651
](https://forkphorus.github.io/app.html?id=429167079)



### Turbowarp 

* width="324" height="448" 
* without jsgif

<iframe src="https://turbowarp.org/embed.html#420456768"  width="324" height="448"  allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>


* height="456" width="500"  
* with jsgif

* [open in new tab](https://turbowarp.org/#420456768)
<iframe src="https://turbowarp.org/embed.html#420456768"  height="456" width="500"  allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
{: .jsgif}

* width="500" height="456"  
* with jsgif

* [open in new tab](https://turbowarp.org/#420456768)
<iframe src="https://turbowarp.org/embed.html#420456768" width="500" height="456"   allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
{: .jsgif}


* height="456" width="500"  
* without jsgif

* [open in new tab](https://turbowarp.org/#420456768)
<iframe src="https://turbowarp.org/embed.html#420456768"  height="456" width="500"  allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>


* width="324" height="432" 
* with jsgif
  
<iframe src="https://scratch.mit.edu/projects/420456768/embed" allowtransparency="true" width="324" height="432" frameborder="0" scrolling="no" allowfullscreen></iframe>
{: .jsgif}

* width="540" height="405" 
* with jsgif

<iframe src="https://scratch.mit.edu/projects/420456768/embed" allowtransparency="true" width="540" height="405" frameborder="0" scrolling="no" allowfullscreen></iframe>
{: .jsgif}

### s3blocks

* a Reverse scratch generator

https://s3blocks.github.io/generator/?id=423771093

where the id is the id of the **shared** project.

https://scratch.mit.edu/projects/423771093/editor


### parse-sb3-blocks
another version. Does one character at a time

https://apple502j.github.io/parse-sb3-blocks/demo.html


### scratch-viewer.zak.io

* a variant of Forkphorus
* <https://github.com/zakkolar/scratch-project-viewer>
* accepts title and caption
* haven't figured out how to size these properly in the iframe
* works without caption, if   "height: -webkit-fill-available;" is added to style
* with caption, scrolling happens

<https://scratch-viewer.zak.io/view#project=430060690&caption=this%20is%20a%20caption&title=our%20project&showDownload=true&backgroundColor=%23f8f9be>

<https://scratch-viewer.zak.io/view#project=430060690&caption=this%20is%20a%20caption&title=our%20project&w=100%25&showDownload=true&backgroundColor=%23f8f9be>

<style>
.f1 {
    font-size: .5rem!important;
}

</style>

<iframe src="https://scratch-viewer.zak.io/view#project=430060690&caption=this%20is%20a%20caption&title=our%20project&w=500&showDownload=true&backgroundColor=%23f8f9be" width="482" height="393"   allowfullscreen="true" allowtransparency="true" style=""></iframe>
{: .jsgif}

* with  "height: -webkit-fill-available;" 

<iframe src="https://scratch-viewer.zak.io/view#project=430060690&caption=this%20is%20a%20caption&title=our%20project&w=500&showDownload=true&backgroundColor=%23f8f9be" width="500" height="456" style="height: -webkit-fill-available;" allowfullscreen="true" allowtransparency="true" ></iframe>
{: .jsgif}

* attempt to use new height value to make room for 2-line title. seems to max out at 644.

<iframe src="https://scratch-viewer.zak.io/view#project=420456768&title=Emotional%20Monsters!&caption=Mario%20Kart&w=500&h=456&showDownload=false&backgroundColor=%23f8f9be" width="500" height="700"  style="height: -webkit-fill-available;"  allowfullscreen="true" allowtransparency="true" ></iframe>
{: .jsgif}

https://scratch-viewer.zak.io/view#project=420456768&title=Emotional%20Monsters!&w=499&h=416



### Sulphurous

* seems to only work on sb2

<script src='https://sulfurous.aau.at/js/embed.js?id=430129999&resolution-x=480&resolution-y=360&auto-start=true&light-content=false'></script>

### Leopard

* converts scratch to javascript

https://leopardjs.now.sh/

</details>

<details>
<summary>## scratchblocks
</summary>

## scratchblocks

* scratchblocks-v3.5-min.js, a scratchblock renderer

I use the .msb ("my scratch blocks") class to trigger scratchblock-rendering via scratchblocks-v3.5-min.js to generate beautiful scratch blocks


### 1 hardcoded
<pre class="msb">
when green flag clicked
forever
    turn cw (15) degrees
    say [Hello!] for (2) seconds
    if <mouse down?> then
        change [mouse clicks v] by (1)
    end
end
</pre>

### 2 using hightlight doesn't work

{% highlight msb %}
when green flag clicked
forever
    turn cw (15) degrees
    say [Hello!] for (2) seconds
    if <mouse down?> then
        change [mouse clicks v] by (1)
    end
end
{% endhighlight %}

### 3 This works

```
when green flag clicked
forever
    turn cw (15) degrees
    say [Hello!] for (2) seconds
    if <mouse down?> then
        change [mouse clicks v] by (1)
    end
end

jump0

define jump
repeat (10)
    change y by (4)
end

jump
```

```
when green flag clicked
forever
    turn cw (15) degrees
    say [Hello!] for (2) seconds
    if <mouse down?> then
        change [mouse clicks v] by (1)
    end
end

jump0

define jump
repeat (10)
    change y by (4)
end

jump
```
{: .msb}


### 4 inline 

This `change y by (4)`{: .msb} is a code change codeblock.

This `when green flag clicked`{: .msb} is a code change codeblock.

### 5 highlight javascript

{% highlight javascript %}
function sayHello(name) {
  if (!name) {
    console.log('Hello World');
  } else {
    console.log(`Hello ${name}`);
  }  
}  
{% endhighlight %}

### 6 All the Scratch blocks

#### Motion

{::options parse_block_html="false" /}

```
move (10) steps
turn cw (15) degrees
turn ccw (15) degrees

go to [mouse-pointer v]
go to [random position v]
go to x: (0) y: (0)

glide (1) secs to [random position v]
glide (1) secs to [mouse-pointer v]
glide (1) secs to x: (0) y: (0)

point in direction (90)
point towards [mouse-pointer v]
point towards (Sprite1)

change x by (10)
set x to (0)

change y by (10)
set y to (0)

if on edge, bounce

set rotation style [left-right v]
set rotation style [don't rotate v]
set rotation style [all around v]

[ ] (x position)
[ ] (y position)
[ ] (direction)

```
{: .msb}


#### Looks

```
say (hello) for (2) seconds
say (hello)
think (Hmmm...) for (2) seconds
think (Hmmm...) 

switch costume to [costume2 v]
next costume

switch backdrop to [backdrop2 v]
switch backdrop to [next backdrop v]
switch backdrop to [previous backdrop v]
switch backdrop to [random backdrop v]
next backdrop


change size by (10)
set size to (100) %

change [color v] effect by (10)
change [fisheye v] effect by (25)
change [whirl v] effect by (25)
change [pixelate v] effect by (25)
change [mosaic v] effect by (25)
change [brightness v] effect by (25)
change [ghost v] effect by (25)

set [color v] effect to (0)

clear graphic effects

show 
hide 

go to [front v] layer
go to [back v] layer

go [forward v] (1) layers
go [back v] (1) layers

[ ] (costume [number v])
[ ] (costume [name v])

[ ] (backdrop [number v])
[ ] (backdrop [name v])
  
[ ] (size)
  
  
  
```
{: .msb}

#### Sound

```
play sound [meow v] until done
play sound [meow v]

stop all sounds

change [pitch v] effect by (10)
change [pan left/right v] effect by (10)

set [pitch v] effect to (10)
set [pan left/right v] effect to (100)

clear sound effects

change volume by (10)
set volume to (100) %

[] (volume)
```
{: .msb}

#### Events

```


play drum [(1) Snare Drum v] for (0.25) beats
rest for (0.25) beats

play note (60) for (0.25) beats
set instrument to [(1) Piano v]


set tempo to (60) 

change tempo by (20)

[ ]  (tempo)
```
{: .msb}

#### Pen

```
erase all
stamp 

pen down
pen up

set pen color to (#ff00ff)
change pen [color v] by (10)
change pen [saturation v] by (10)
change pen [brightness v] by (10)
change pen [transparency v] by (10)

set pen [color v] by (10)
set pen [saturation v] by (10)
set pen [brightness v] by (10)
set pen [transparency v] by (10)

change pen size by (1)
set pen size to (1)

```
{: .msb}

#### Data

```

set score to "0"
change score by 1
show variable score
hide variable score

  (score)
add "thing" to groceries
delete 1 of groceries
insert "thing" at 1 of groceries
replace item 1 of groceries with "thing"

  (item 1 of groceries)
  (length of groceries)
  <groceries contains "thing"?>

show list groceries
hide list groceries

  (groceries)

  ```
{: .msb}

#### Events

```

when flag clicked
when space key pressed
when this sprite clicked
when backdrop switches to "backdrop1"

when loudness > 10

when I receive "message1"
broadcast "message1"
broadcast "message1" and wait

```
{: .msb}

#### Control

```

wait 1 secs

repeat 10
	...
end

forever
	...
end

if <> then
	...
end

if <> then
	...
else
	...
end

wait until <>

repeat until <>
	...
end

stop all
stop this script
stop other scripts in sprite
stop other scripts in stage						// [Stage only]

when I start as a clone
create clone of myself
create clone of "Sprite1"
delete this clone
```
{: .msb}

#### Sensing

```

  <touching mouse-pointer?>
  <touching edge?>
  <touching "Sprite1"?>
  <touching color #ff00ff?>
  <color #ff00ff is touching #00ff00?>
  (distance to mouse-pointer)
  (distance to "Sprite1")

ask "What's your name?" and wait
  (answer)

  <key space pressed?>
  <mouse down?>
  (mouse x)
  (mouse y)

  (loudness)

  (video motion on Stage)
  (video direction on this sprite)
turn video off
turn video on
turn video on-flipped
set video transparency to 50%

  (timer)
reset timer

  (x position of "Sprite2")
  (y position of "Sprite2")
  (direction of "Sprite2")
  (costume # of "Sprite2")
  (costume name of "Sprite2")
  (size of "Sprite2")
  (volume of "Sprite2")
  (backdrop # of Stage)
  (backdrop name of Stage)
  (volume of Stage)

  (current year)
  (current month)
  (current date)
  (current day of week)
  (current hour)
  (current minute)
  (current second)
  (days since 2000)
  (username)




```
{: .msb}

#### Operators

```
  (2 + 2)
  (2 - 2)
  (2 * 2)
  (2 / 2)

  (pick random 1 to 10)

  <_ < _>
  <_ = _>
  <_ > _>

  <<> and <>>
  <<> or <>>
  <not <>>

  (join "hello " "world")
  (join (x position) (y position))
  (letter 1 of "world")
  (length of "world")

  (10 mod 3)
  (round 3.14)

  (sqrt of 9)
  (abs of 9)
  (floor of 9)
  (ceiling of 9)
  (sin of 9)
  (cos of 9)
  (tan of 9)
  (asin of 9)
  (acos of 9)
  (atan of 9)
  (ln of 9)
  (log of 9)
  (e ^ of 9)
  (10 ^ of 9)
```
{: .msb}

#### Custom

```
define dance (number) [string] <boolean>
...

dance 42 "Hello world!" 0=1

```
{: .msb}

##### Using inline and checkboxes. Very hard but looks nice.

<style>

ul.msb {
    list-style-type: none;
    /* margin-left: -40px; */
    /* padding: 0px; */
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    list-style-image: none;
    padding: 0px 15px 15px;
    margin: 0px 0x 20px;
    border-radius: 3px;
    border: 1px solid #c7c7c7;
    background: var(--menuBG);
}

ul.msb0 li {
    list-style-type: none;
    /* margin-left: -40px; */
    /* padding: 0px; */
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    list-style-image: none;
}

</style>

- [ ] `(x position)`{: .msb}
- [ ] `(y position)`{: .msb}
- [ ] `(direction)`{: .msb}
{: .msb}

</details> 
