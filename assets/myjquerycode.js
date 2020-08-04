        $(document).ready(function() {


            $('a[href*="#"]').click(function(){
            //alert("clicked" + $(this).attr("href") );
            //$(this).attr("href");
            var linktoclick = $("a[href='" + $(this).attr("href") + "']");
            //alert(linktoclick);
            //alert(   linktoclick[0].outerHTML );
            $(".clickeditem").removeClass("clickeditem");
            $(linktoclick).toggleClass("clickeditem");
            });

            // TOC SECTION    
            // if mainmenu item is clicked
            // makes sure details is open before inner click is applied, so link works.
            // Also toggle details but don't follow links on outermost links (for mobile)
            // and throw error if state is unmatched
            // RECENTLY FIXED BUGGY??: works for links to details within details
            $("#toc ul li a").on("click", function(event) {

                //if closed and inner link open main details first then trigger click
                if (!$($(this).attr("href")).parents("details").last().prop("open") && $(this).is("ul li ul li a")) {
                    // open main details for this
                    $($(this).attr("href")).parents("details").last().children("summary").first().trigger("click");
                    // trigger link only if not to a details tag, or if to a inner details tag (e.g. "details" details") and this details is not open
                    if (!$($(this).attr("href")).parent().parent().is("details") || ($($(this).attr("href")).parent().parent().is("details") && !$($(this).attr("href")).parent().parent().prop("open"))) {
                        $($(this).attr("href")).trigger("click");
                    };
                    return true;
                };

                //if open and inner link just trigger click 
                if ($($(this).attr("href")).parents("details").last().prop("open") && $(this).is("ul li ul li a")) {
                    // trigger link only if not to a details tag, or if to a inner details tag (e.g. "details" details") and this details is not open
                    if (!$($(this).attr("href")).parent().parent().is("details") || ($($(this).attr("href")).parent().parent().is("details") && !$($(this).attr("href")).parent().parent().prop("open"))) {
                        $($(this).attr("href")).trigger("click");
                    };
                    return true;
                };


                //if open and outer link close and don't follow link.
                if ($($(this).attr("href")).parents("details").last().prop("open") && !$(this).is("ul li ul li a")) {
                    // checks toggle state
                    // toggled, then close and don't follow
                    // else if not toggled, throw error
                    if ($(this).parents("li").last().children("a").first().hasClass("toggled")) {
                        $($(this).attr("href")).parents("details").last().removeAttr("open");
                    } else {
                        alert("This is a minor error (unintended menu state). Please notify webmaster.")
                    }
                    // don't follow link
                    return false;
                };

                //if closed and outer link open details don't follow link (for mobile users)
                if (!$($(this).attr("href")).parents("details").last().prop("open") && !$(this).is("ul li ul li a")) {
                    //open without clicking
                    $($(this).attr("href")).parents("details").last().attr("open", "open")
                        // don't follow link
                    return false;
                };

            });
            // END TOC SECTION

            // NAV SECTION

            // on first run, hides nav submenus until clicked.
            $("nav .tag-h3").toggle();

            // if nav item is clicked, makes sure details is open before click
            // is applied, so link works.
            $("nav ul li a").on("click", function(event) {

                //if closed and inner tag-h3 link open details first
                if (!$($(this).attr("href")).parents("details").last().prop("open") && $(this).is("nav .tag-h3 a")) {
                    $($(this).attr("href")).parents("details").last().children("summary").first().trigger("click");
                };
                $($(this).attr("href")).trigger("click");
            });

            // shows tag-h3 when tag-h2 is hovered
            $("nav .tag-h2 a").mouseover(function() {

                // shows contiguous tag-h3. Have to skip the extra tag-h2 created by details
                // by finding next .tag-h3, then selecting contiguous
                $(this).parent().nextUntil(".tag-h3").nextUntil(".tag-h2").toggle("slow", "swing");
            });
            // END NAV SECTION

            // DETAILS SECTION

            // open top details on first run
            $("details").first().children("summary").first().trigger("click")

            // This toggles details when border is clicked
            $("details").click(function(e) {
                //first test to make sure it is not a youtube image that is being clicked, as firefox closes the details in this instance for some unknown reason
                if (!e.target.classList.contains("youtubeimage")) {
                    //now, test to see if border is being clicked
                    if (e.offsetX <= parseInt($(this).css('borderLeftWidth'))) {
                        // needed or parent of details details gets closed too.
                        event.stopPropagation();
                        // now you can trigger the click 
                        $(this).children("summary").first().trigger("click");
                    };
                };
            });

            // This toggles both menu elements when details state changes by finding links to detail h2 ids.
            // only details with h2 ids do this. This may need a tweak.
            $('details').on('toggle', function() {
                //alert("about to  toggle");
                var $elementToToggle = "[href='#" + $(this).children("h2").first().attr("id") + "']";
                $($elementToToggle).toggleClass("toggled");
                //alert("details toggled" + $(this).css('borderLeftWidth') + $(this).html());
            });

            // .innerlink class allows links in one main details to open links within another main details even if that main details is closed.
            $(".innerlink").on("click", function(event) {
                //if closed and inner link open details first then trigger click
                // TODO: Not checked for links to details within details
                if (!$($(this).attr("href")).parents("details").last().prop("open")) {
                    $($(this).attr("href")).parents("details").last().find("summary").trigger("click");
                    $($(this).attr("href")).trigger("click");
                };
                //alert("2");
            });
            // END DETAILS SECTION

            // Don't follow empty links, like footnotes
            $('a[href="#"]').on("click", function(event) {
                //alert("3");
                return false;
            });
        });