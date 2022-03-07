$(document).ready(function () {



/* START forces click to open tooltip, but not working 
$(".tooltips").tooltip({disabled:true});
$(".tooltips").click(function() {
    if($(this).tooltip("option", "disabled")) {
        $(this).tooltip("enable");
        $(this).tooltip("open");
        $(this).off("mouseleave focusout");
    } else {
        $(this).tooltip("close");
        $(this).tooltip("disable");
    }
});
END */
// tooltips

//$('.tooltips').tooltip({
   //tooltipClass: "tooltips"
//}); 

// START allows tooltip text to be selected and copied
//  from https://stackoverflow.com/a/15014759https://stackoverflow.com/a/15014759
$( document ).tooltip({
  show: null, // null = show immediately 
  items: '.tooltips',
  tooltipClass: 'tooltipstyle',
	content: function () {
              return "<a class='' target='_blank' href='" + $(this).prop('href')+ "' title='link=" + $(this).prop('href') + "' >" + $(this).prop('title')  + "</a>" ;
          },
	hide: {
    effect: "scale", duration: 800,   
  },
  open: function( event, ui ) {
   // ui.tooltip.animate({ width: "50%" }, "30000" );
  },
	show: { effect: "slide", direction: "top", duration: 3000 },
	position: { my: "right top", at: "right bottom", collision: "fit"},
  close: function( event, ui ) {
    ui.tooltip.hover(
        function () {
            $(this).stop(true).fadeTo(1600, 3); 
            //.fadeIn("slow"); // doesn't work because of stop()
        },
        function () {
            $(this).fadeOut("1600", function(){ $(this).remove(); })
        }
    );
  }
});


// END TOOLTIP


	// implements lazy loading of zak iframes to speed page load.
    $("button[name='insertZak'], div[name='insertZak'], a[name='insertZak']").one("click", function () {
		var domElement = $(
			'<iframe src="https://scratch-viewer.techlit.app/view#project=' + $(this).attr("projectID") + '&backgroundColor=#ffec9f&width=515&autoStart=true" width="482" height="393" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>'
		)

		$(this).replaceWith(domElement);
	});

	// TOC SECTION
	// if mainmenu item is clicked
	// makes sure details is open before inner click is applied, so link works.
	// Also toggle details but don't follow links on outermost links (for mobile)
	// and throw error if state is unmatched
	// RECENTLY FIXED BUGGY??: works for links to details within details
	$("#toc ul li a").on("click", function (event) {
		//if closed and inner link open main details first then trigger click
		if (
			!$($(this).attr("href")).parents("details").last().prop("open") &&
			$(this).is("ul li ul li a")
		) {
			// open main details for this
			$($(this).attr("href"))
				.parents("details")
				.last()
				.children("summary")
				.first()
				.trigger("click");
			// trigger link only if not to a details tag, or if to a inner details tag (e.g. "details" details") and this details is not open
			if (
				!$($(this).attr("href")).parent().parent().is("details") ||
				($($(this).attr("href")).parent().parent().is("details") &&
					!$($(this).attr("href")).parent().parent().prop("open"))
			) {
				$($(this).attr("href")).trigger("click");
			}
			return true;
		}

		//if open and inner link just trigger click
		if (
			$($(this).attr("href")).parents("details").last().prop("open") &&
			$(this).is("ul li ul li a")
		) {
			// trigger link only if not to a details tag, or if to a inner details tag (e.g. "details" details") and this details is not open
			if (
				!$($(this).attr("href")).parent().parent().is("details") ||
				($($(this).attr("href")).parent().parent().is("details") &&
					!$($(this).attr("href")).parent().parent().prop("open"))
			) {
				$($(this).attr("href")).trigger("click");
			}
			return true;
		}

		//if open and outer link close and don't follow link.
		if (
			$($(this).attr("href")).parents("details").last().prop("open") &&
			!$(this).is("ul li ul li a")
		) {
			// checks toggle state
			// toggled, then close and don't follow
			// else if not toggled, throw error
			if (
				$(this)
					.parents("li")
					.last()
					.children("a")
					.first()
					.hasClass("TOCtoggled")
			) {
				$($(this).attr("href"))
					.parents("details")
					.last()
					.removeAttr("open");
			} else {
				alert(
					"This is a minor error (unintended menu state). Please notify webmaster."
				);
			}
			// don't follow link
			return false;
		}

		//if closed and outer link open details don't follow link (for mobile users)
		if (
			!$($(this).attr("href")).parents("details").last().prop("open") &&
			!$(this).is("ul li ul li a")
		) {
			//open without clicking
			$($(this).attr("href"))
				.parents("details")
				.last()
				.attr("open", "open");
			// don't follow link
			return false;
		}
	});
	// END TOC SECTION

	// NAV SECTION

	// on first run, hides nav submenus until clicked.
	$("nav .tag-h3").toggle();

	// removes identical tags. This needs revision
	var previousVal = "Initial";
	var previousItem = "";
	$($("nav li.tag-h2").get().reverse()).each(function (i, item) {
		var currentVal = $(item).text(); //alert(currentVal + i);
		var currentItem = $(item);
		if (currentVal == previousVal) {
			//alert(currentVal + "==" + previousVal);
			//$(item).toggle();
			currentItem.toggleClass("navIndented ");
			previousItem.toggle();
			//alert("removed");
		}
		previousVal = currentVal;
		previousItem = currentItem;
	});

	// if nav item is clicked, makes sure details is open before click
	// is applied, so link works.
	$("nav ul li a").on("click", function (event) {
		//if closed and inner tag-h3 link open details first
		if (
			!$($(this).attr("href")).parents("details").last().prop("open") &&
			$(this).is("nav .tag-h3 a")
		) {
			$($(this).attr("href"))
				.parents("details")
				.last()
				.children("summary")
				.first()
				.trigger("click");
		}
		$($(this).attr("href")).trigger("click");
	});

	// shows tag-h3 when tag-h2 is hovered. Using hoverintent.js with interval set to 200 to make it slower.
	$("nav .tag-h2 a").hoverIntent({
		over: function () {
			// shows contiguous tag-h3. Have to skip the extra tag-h2 created by details
			// by finding next .tag-h3, then selecting contiguous
			$(this)
				.parent()
				.nextUntil(".tag-h3")
				.nextUntil(".tag-h2")
				.toggle("slow", "swing");
		},
		out: function () {},
		interval: 200,
	});
	// END NAV SECTION

	// DETAILS SECTION

	// open top details on first run
	$("details").first().children("summary").first().trigger("click");

	// This toggles details when border is clicked
	$("details").click(function (e) {
		//first test to make sure it is not a youtube image that is being clicked, as firefox closes the details in this instance for some unknown reason
		if (!e.target.classList.contains("youtubeimage")) {
			//now, test to see if border is being clicked
			if (e.offsetX <= parseInt($(this).css("borderLeftWidth"))) {
				// needed or parent of details details gets closed too.
				event.stopPropagation();
				// now you can trigger the click
				$(this).children("summary").first().trigger("click");
			}
		}
	});

	// This toggles both menu elements when details state changes by finding links to detail h2 ids.
	// only details with h2 ids do this. This may need a tweak.
	$("details").on("toggle", function () {
		//alert("about to  toggle");
		var $elementToToggle =
			"[href='#" + $(this).children("h2").first().attr("id") + "']";
		$($elementToToggle).toggleClass("TOCtoggled");
		//alert("details toggled" + $(this).css('borderLeftWidth') + $(this).html());
	});

	// .innerlink class allows links in one main details to open links within another main details even if that main details is closed.
	$(".innerlink").on("click", function (event) {
		//if closed and inner link open details first then trigger click
		// TODO: Not checked for links to details within details
		if (!$($(this).attr("href")).parents("details").last().prop("open")) {
			$($(this).attr("href"))
				.parents("details")
				.last()
				.find("summary")
				.trigger("click");
			$($(this).attr("href")).trigger("click");
		}
		//alert("2");
	});
	// END DETAILS SECTION

	// ANCHOR SECTION modify anchors

	// Don't follow empty links, like footnotes
	$('a[href="#"]').on("click", function (event) {
		//alert("3");
		return false;
	});

	// /* when link to a target in the page, i.e. #.. is clicked, the link is highlighted via jquery. Used to show which picture is showing in the galleries. see style sheet a.clickeditem */
	$('a[href*="#"]').click(function () {
		//alert("clicked" + $(this).attr("href") );
		//$(this).attr("href");
		var linktoclick = $("a[href='" + $(this).attr("href") + "']");
		//alert(linktoclick);
		//alert(   linktoclick[0].outerHTML );
		$(".clickeditem").removeClass("clickeditem");
		$(linktoclick).toggleClass("clickeditem");
	});

	// handle external links to new tab
	$("a")
		.filter(function () {
			return this.hostname && this.hostname !== location.hostname;
		})
		.addClass("external level3")
		.attr({
			target: "_blank",
			title: function () {
				return  $(this).attr("title") + " (opens in new window) ";
			},
		});
	//.append(' [^]');

	// END ANCHOR SECTION

	// SCRATCHBLOCKS: in concert with scratchblocks-v3.5-min.js renders beautiful scratchblocks from simple markdown. Hooray!
	// use as:
	//``` pre ```
	//{: .msb}
	scratchblocks.renderMatching(".msb pre", {
		style: "scratch3",
		languages: ["en"],
	});
	scratchblocks.renderMatching("code.msb", {
		style: "scratch3",
		languages: ["en"],
	});


	/* 
this was a fu offsets image gallery links a bit from 
https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to/60975588#60975588

https://jsfiddle.net/ju5xLgkq/

NOTUSED it doesn't work in our case. Just here in case I can figure out how to make it work:
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
	// set the scrollY offset to zero so it doesn't offset after going to link??
    window.scrollTo(window.scrollX, window.scrollY + 0);
  }
}

// Captures click events of all .slider2 .gallerymenu p a elements with href starting with #
$(document).on('click', '.slider2 .gallerymenu p a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);


/* END unused offset image gallery links */
});
