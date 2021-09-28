---
layout: junior_coders_default
title: "Battle Cats"
levelsToTop: "../"

---

* [1 Overview](#1-overview)
* [2 Money and Cats](#2-money-and-cats)
  * [Shop: start/initialize](#shop-startinitialize)
  * [Money Button: clicked when enough, spawn Cat](#money-button-clicked-when-enough-spawn-cat)
  * [Cat: start/initialize](#cat-startinitialize)
  * [Cat starts as clone/Create new Cat](#cat-starts-as-clonecreate-new-cat)
* [3 Dogs](#3-dogs)
  * [Dog Base starts/initialize](#dog-base-startsinitialize)
  * [Dog Base clone Dogs](#dog-base-clone-dogs)
  * [Dog: start/initialize](#dog-startinitialize)
  * [Dog: starts as clone](#dog-starts-as-clone)
* [4 Initialize](#4-initialize)
  * [Cat Base start/initialize costume HP](#cat-base-startinitialize-costume-hp)
  * [Money Button start/initialize](#money-button-startinitialize)
  * [Cat/Dog Base HP](#catdog-base-hp)
  * [Cat/Dog as clone HP](#catdog-as-clone-hp)
* [5 Main Loops](#5-main-loops)
  * [Dog as clone Main Dog loop](#dog-as-clone-main-dog-loop)
  * [Cat as clone Main Cat loop](#cat-as-clone-main-cat-loop)
* [6 Main Loop: Define/Initialize Set State myBlock](#6-main-loop-defineinitialize-set-state-myblock)
  * [Dog: Define Set State myBlock](#dog-define-set-state-myblock)
  * [Cat: Define Set State myBlock](#cat-define-set-state-myblock)
  * [Dog/Cat Set State myBlock: Initialize State](#dogcat-set-state-myblock-initialize-state)
* [7 Main Loop: State is Walking](#7-main-loop-state-is-walking)
  * [Dog is Walking](#dog-is-walking)
  * [Cat is Walking](#cat-is-walking)
* [8 Set State myBlock: Set State Fighting](#8-set-state-myblock-set-state-fighting)
  * [Set State myBlock: Dog touching Cat Fight -HP](#set-state-myblock-dog-touching-cat-fight--hp)
  * [Set State myBlock: Dog touching Cat Base  Fight -HP move](#set-state-myblock-dog-touching-cat-base--fight--hp-move)
  * [Set State myBlock: Cat touching Dog Fight -HP](#set-state-myblock-cat-touching-dog-fight--hp)
  * [Set State myBlock: Cat touching Dog Base Fight -HP move](#set-state-myblock-cat-touching-dog-base-fight--hp-move)
* [9 Main Loop: Cat is Fighting](#9-main-loop-cat-is-fighting)
  * [Cat: gets ready to be Thrown](#cat-gets-ready-to-be-thrown)
  * [Cat: gets Thrown back](#cat-gets-thrown-back)
  * [Cat Dies](#cat-dies)
  * [Cat fighting](#cat-fighting)
* [10 Main Loop: Dog is Fighting](#10-main-loop-dog-is-fighting)
  * [Dog: Ready to be Thrown](#dog-ready-to-be-thrown)
  * [Dog: Get thrown back](#dog-get-thrown-back)
  * [Dog: is dead?](#dog-is-dead)
  * [Dog fighting](#dog-fighting)
* [11 Effects](#11-effects)
  * [Money Button: show when enough money](#money-button-show-when-enough-money)
* [12 Difficulty](#12-difficulty)
  * [Dog Base starts/initialize Difficulty](#dog-base-startsinitialize-difficulty)
  * [Dog Base clone Dogs Difficulty](#dog-base-clone-dogs-difficulty)
  * [Set State myBlock: Difficulty](#set-state-myblock-difficulty)
* [13 Game Over](#13-game-over)
  * [Cat Base game over](#cat-base-game-over)
  * [Dog Base game over stop all](#dog-base-game-over-stop-all)
  * [Shop: Game over](#shop-game-over)
  * [Money Button: game over](#money-button-game-over)


# 1 Overview

This is a breakdown of the Scratch Game [Battle Cats](https://scratch.mit.edu/projects/571503168), to show the steps involved in making a game like this from scratch. 

{% include zakviewer.html Name="Battle Cats Basic Game" ID="https://scratch.mit.edu/projects/571503168" caption="" %}

# 2 Money and Cats
- Shop starts set up Current money, Max money, income
- Money button clicked: if enough money spawn Cat reduce money
- Cat start/initialize
- Cat starts as clone (show)

## Shop: start/initialize

```
when @greenFlag clicked
show
set [Current Money v] to [0]
set [Max Money v] to [100]
set [Income v] to [1]
forever
    if <(Current Money) < (Max Money)> then
        change [Current Money v] by (Income)
        if <(Current Money) > (Max Money)> then
            set [Current Money v] to (Max Money)
        end
    end
    set [Display Money v] to (join (join (Current Money) [ / ]) (Max Money))
    wait (0.1) seconds
end
```
{: .msb}
## Money Button: clicked when enough, spawn Cat

```
when this sprite clicked
if <(Current Money) > [25]> then
    change [Current Money v] by (-25)
    create clone of [Cat v]
end
```
{: .msb}

## Cat: start/initialize

```
when @greenFlag clicked
go to x: (-180) y: (100)
hide
go to [front v] layer
```
{: .msb}

## Cat starts as clone/Create new Cat



```
when I start as a clone
show
```
{: .msb}



# 3 Dogs
- Dog Base start/initialize (choose costume)
- Dog Base clone/spawn Dogs
- Dog Start/initialize
- Dog starts as clone

## Dog Base starts/initialize

```
when @greenFlag clicked
switch costume to [building-b v]
```
{: .msb}


## Dog Base clone Dogs
forever

```
    wait (6) seconds
    create clone of [Dog v]
end
```
{: .msb}


## Dog: start/initialize

```
when @greenFlag clicked
go to x: (180) y: (-100)
hide
go to [front v] layer
```
{: .msb}

## Dog: starts as clone

```
when I start as a clone
show
set [HP v] to [10]
```
{: .msb}



# 4 Initialize
- Cat Base start/initialize
- Money button start/initialize
- Cat/Dog Base HP
- Cat/Dog as clone HP

## Cat Base start/initialize costume HP


```
when @greenFlag clicked
switch costume to [building-d v]
set [Cat Base HP v] to [1000]
```
{: .msb}

## Money Button start/initialize

```
when @greenFlag clicked
show
forever
end
```
{: .msb}


## Cat/Dog Base HP


```
set [Dog Base HP v] to [1000]
```
{: .msb}


## Cat/Dog as clone HP

```
set [HP v] to [10]
```
{: .msb}



# 5 Main Loops

- Dog as clone HP start Dog loop
- Cat as clone HP start Cat loop

## Dog as clone Main Dog loop

```
repeat until <touching [edge v]?>

end
delete this clone
```
{: .msb}

## Cat as clone Main Cat loop

```
repeat until <touching [edge v]?>

end
delete this clone
```
{: .msb}


# 6 Main Loop: Define/Initialize Set State myBlock
- Dog: Set State myBlock
- Cat: Set State myBlock
- Dog/Cat Set State myBlock: Initialize State


## Dog: Define Set State myBlock


```
Set State::custom

define Set State
wait (0.1) seconds
clear graphic effects
```
{: .msb}


## Cat: Define Set State myBlock


```
Set State::custom

define Set State
wait (0.1) seconds
clear graphic effects
```
{: .msb}



## Dog/Cat Set State myBlock: Initialize State

```
set [State v] to [Walk]
```
{: .msb}

# 7 Main Loop: State is Walking
- Dog is Walking
- Cat is Walking

## Dog is Walking

```
if <(State) = [Walk]> then
	change x by (3)
	next costume
end
```
{: .msb}


## Cat is Walking

```
if <(State) = [Walk]> then
	change x by (3)
	next costume
end
```
{: .msb}

# 8 Set State myBlock: Set State Fighting


- Set State: Dog set State is Walking
- Cat set State is Walking



## Set State myBlock: Dog touching Cat Fight -HP

```
if <touching [Cat v]?> then
    change [brightness v] effect by (100)::looks
    set [State v] to [Fight]
    change [HP v] by (-1)
end
```
{: .msb}


## Set State myBlock: Dog touching Cat Base  Fight -HP move

```
if <touching [Cat Base v]?> then
    set [State v] to [Fight]
    change x by (3)
    change [Cat Base HP v] by (-1)
end
```
{: .msb}


## Set State myBlock: Cat touching Dog Fight -HP

```
if <touching [Dog v]?> then
    change [brightness v] effect by (100)::looks
    set [State v] to [Fight]
    change [HP v] by (-1)
end
```
{: .msb}

## Set State myBlock: Cat touching Dog Base Fight -HP move 


```
if <touching [Dog Base v]?> then
    set [State v] to [Fight]
    change x by (-3)
    change [Dog Base HP v] by (-1)
end
```
{: .msb}


# 9 Main Loop: Cat is Fighting

- Cat: gets ready to be Thrown
- Cat: gets Thrown back
- Cat Dies
- Cat fighting



## Cat: gets ready to be Thrown

```
define Update Thrown Meter
if <touching [Dog v]?> then
    change [Thrown Meter v] by (pick random (1) to (10))
end
```
{: .msb}

## Cat: gets Thrown back

```
define Get Thrown Back
if <(Thrown Meter) > [50]> then
    set [Thrown Meter v] to [0]
    repeat (10)
        turn @turnLeft (18) degrees::motion
        change x by (-1)
        change y by (3)
    end
    repeat (10)
        turn @turnLeft (18) degrees::motion
        change x by (-1)
        change y by (-3)
    end
end
```
{: .msb}


## Cat Dies

```
define Check if Dead
if <(HP) < [1]> then
    delete this clone
end
```
{: .msb}


## Cat fighting

```
if <(State) = [Fight]> then
  Update Thrown Meter::custom
  Get Thrown Back::custom
  Check if Dead::custom
end
```
{: .msb}	
	


# 10 Main Loop: Dog is Fighting
- Dog: Ready to be Thrown
- Dog: Get thrown back
- Dog: is dead?
- Shop: Game over

## Dog: Ready to be Thrown

```
define Update Thrown Meter
if <touching [Cat v]?> then
    change [Thrown Meter v] by (pick random (1) to (10))
end
```
{: .msb}

## Dog: Get thrown back

```
define Get Thrown Back
if <(Thrown Meter) > [50]> then
    set [Thrown Meter v] to [0]
    repeat (10)
        turn @turnRight (18) degrees::motion
        change x by (1)
        change y by (3)
    end
    repeat (10)
        turn @turnRight (18) degrees::motion
        change x by (1)
        change y by (-3)
    end
end
```
{: .msb}

## Dog: is dead?

```
define Check if Dead
if <(HP) < [1]> then
    delete this clone
end
```
{: .msb}

## Dog fighting

```
if <(State) = [Fight]> then
  Update Thrown Meter::custom
  Get Thrown Back::custom
  Check if Dead::custom
end
```
{: .msb}


# 11 Effects

- Money Button: show when enough money



## Money Button: show when enough money

```
if <(Current Money) < [25]> then
	set [ghost v] effect to (50)::looks
else
	clear graphic effects
end
```
{: .msb}

# 12 Difficulty 


- Dog Base starts/initialize Difficulty
- Dog Base clone Dogs Difficulty
- Set State myBlock: Difficulty

## Dog Base starts/initialize Difficulty

```
set [Difficulty Level v] to [0]
```
{: .msb}

## Dog Base clone Dogs Difficulty


```
change 6 to "(6) - (Difficulty Level)"
```
{: .msb}

## Set State myBlock: Difficulty
inside if <touching [Dog Base v]?>:

```
  change [Difficulty Increase Meter v] by (1)
```
{: .msb}

# 13 Game Over

- Cat Base game over
- Dog Base game over stop all
- Money Button: game over


## Cat Base game over

```
when I receive [Game Over v]
if <(Cat Base HP) < [1]> then
    switch costume to [ruins v]
end
```
{: .msb}


## Dog Base game over stop all

```
when I receive [Game Over v]
if <(Dog Base HP) < [1]> then
    switch costume to [ruins v]
    stop [all v]
end
```
{: .msb}

## Shop: Game over

```
when I receive [Game Over v]
hide
```
{: .msb}

## Money Button: game over

```
when I receive [Game Over v]
hide
```
{: .msb}


















