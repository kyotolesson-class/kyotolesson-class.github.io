
# this does not work {: #thisID .thisclass}

# this works for class
{: #thisID .thisclass}

> this works for both
{: #thisID .thisclass}

* this works for both
{: #thisID .thisclass}

{:ref-name: #myid .my-class}
This tests ALD ref-name with #myid .my-class
{: ref-name}

# This uses the ALD but note but  #myid doesn't work for headers somehow.
{: ref-name}


{:refdef: .c1 #id .c2 title="title"}
# Another ALD .c1 #id .c2 title="title"
{: refdef}


Using the 2nd ALD but overriding the id and title with #id-of-other title="hallo you"
{: refdef #id-of-other title="hallo you"}

>this uses key value pairs note that > is ignored, so ILA is processed.
>{: key="value \" with quote" and other='quote brace \}' and test="you bet" id="IChoseThisID"} 

> block above has key="value \" with quote" and other='quote brace \}' and test="you bet" id="IChoseThisID"
and shows how to include
quotes 
and other characters
and braces
and 'and'
and how to continue line
but this block has refdef id="differentID"
{: refdef id="differentID"}

key="value \" with quote"
and other='quote brace \}' and test="you bet"

# like above 
{: key="value \" with quote" and other='quote brace \}' and test="you bet" and id="IChoseThisID"}
id="IChoseThisID" still doesn't work in headers


# key value pairs work without the 'and'
{: key="value \" with quote"  other='quote brace \}' test="you bet"}