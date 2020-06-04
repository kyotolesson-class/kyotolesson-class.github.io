

<style>

div.control-me {
    display:none;
}
#toggle:checked ~ div.control-me {
    display: block;
}

label {

}

.visually-hidden {
    position: absolute;
    left: -100vw;
    
    /* Note, you may want to position the checkbox over top the label and set the opacity to zero instead. It can be better for accessibilty on some touch devices for discoverability. */
}

</style>


# Basic Checkbox Hack3


<div>
<label for="toggle">Toggle</label>
<input type="checkbox" id="toggle" class="visually-hidden">
<div class="control-me"> god help me</div>
</div>