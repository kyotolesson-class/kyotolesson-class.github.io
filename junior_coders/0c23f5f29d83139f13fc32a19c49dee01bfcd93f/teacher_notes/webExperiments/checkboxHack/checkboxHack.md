

<style>
/**
  Advanced Checkbox Hack
  
  # What? #
  The better Checkbox-Hack because it works for both iOS and Android. 

  ## 1. Android <= 4.1.2
  pseudo-class + general/adjacent sibling doesn't 
  work on Android so we need a hack:

  body { -webkit-animation: bugfix infinite 1s; }
  @-webkit-keyframes bugfix { from {padding:0;} to {padding:0;} }

  ## 2. iOS < 6.0
  Due to a bug on iOS it's not possible to click the label
  to toggle the input (checkbox), so we add an empty 
  onclick to the label:

  <label for="button" onclick>click / touch</label>


  # 2012 by Tim Pietrusky
  # timpietrusky.com
**/

body { -webkit-animation: bugfix infinite 1s; }
@-webkit-keyframes bugfix { from {padding:0;} to {padding:0;} }

input[type=checkbox] {
   position: absolute;
   top: -9999px;
   left: -9999px;
}

label { 
  cursor: pointer;

}

/* styling */

label {
  display: block;
  background: yellow;
  user-select: none;
}

div.erase {
   background: hsla(24, 80%, 50%, .8);
   display: none;
  
}


/* checked */
input[type=checkbox]:checked + label +  div.erase {
   background: hsla(120, 80%, 50%, .8);
   display: block;
}

input[type=checkbox]:checked + label +  div.erase {
  background: hsla(310, 60%, 50%, .8);
  padding:1em;
}

input[type=checkbox]:checked + label {
   background: hsla(220, 80%, 50%, .8);
}


</style>


# Advanced Checkbox Hack3

<input type="checkbox" id="button0" />
<label for="button0" onclick>

## Best working

</label>
<div class="erase">

## Headings!

Text 

### Subheadings!

Other text

<input type="checkbox" name="button" id="on_click2" value="on_click9" />
<label for="on_click2">

### > telescopes!

</label>
<div class="erase">

#### here I am

More stuff can be put here.
</div>


</div>

## TODO

Can it be programmed??


<input type="checkbox" name="button" id="on_click" value="on_click0" />
<label for="on_click">




## Unused 

</label>
<div class="erase">

## here I am

### lots more



<br>

<input type="checkbox" name="button" id="on_click2" value="on_click" />
<label for="on_click2">

### > telescopes!

</label>
<div class="erase">

## here I am

### lots more

</div>
</div>