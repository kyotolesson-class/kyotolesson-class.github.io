---
layout: junior_coders_default
title: test scratch blocks
levelsToTop: "../"
---

Reverse scratch generator:

https://s3blocks.github.io/generator/?id=423771093

where the id is the id of the **shared** project.

https://scratch.mit.edu/projects/423771093/editor




## 1 hardcoded
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

## 2 using hightlight doesn't work

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

## 3 This works

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


## 4 inline 

This `change y by (4)`{: .msb} is a code change codeblock.

## 5 highlight javascript

{% highlight javascript %}
function sayHello(name) {
  if (!name) {
    console.log('Hello World');
  } else {
    console.log(`Hello ${name}`);
  }  
}  
{% endhighlight %}

## 6 All the Scratch blocks

## Motion

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


## Looks

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

# Sound

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

# Events

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

# Pen

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

# Data

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

# Events

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

# Control

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

# Sensing

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

# Operators

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

# Custom

```
define dance (number) [string] <boolean>
...

dance 42 "Hello world!" 0=1

```
{: .msb}

## Using inline and checkboxes. Very hard but looks nice.

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
