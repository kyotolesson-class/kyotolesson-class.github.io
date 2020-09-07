$(document).ready(function() {


	$('.gif').each(function(e) {


		if (this.tagName == 'IMG') {

/* this.setAttribute("rel:animated_src", "https://media.giphy.com/media/PmXIbz6RgKcAeoOPxq/giphy.gif");*/
			var supergif = new SuperGif({
				gif: this,
				progressbar_height: 20,
				auto_play: false,
				// on_end: function(egg) {
				// alert( egg.src );
				// egg.src = egg.getAttribute("rel:animated_src");
				// alert(egg.src)
				// egg.setAttribute("background-color", "red");
				// supergif.load(egg);
				// alert(egg.src)
				// }
			});

			var controlElement = document.createElement("div");
			controlElement.className = "gifcontrol loading g" + e;
			

			supergif.load((function(controlElement) {
				controlElement.className = "gifcontrol paused";
				var playing = false;
				controlElement.addEventListener("click", function() {
					if (playing) {
						this.pause();
						playing = false;
						controlElement.className = "gifcontrol paused";
					} else {
						this.play();
						playing = true;
						controlElement.className = "gifcontrol playing";
					}
				}.bind(this, controlElement));

			}.bind(supergif))(controlElement));

			var canvas = supergif.get_canvas();
			/* 		controlElement.style.width = "canvas.width+"px"";
					controlElement.style.height = canvas.height+"px";
				controlElement.style.left = canvas.offsetLeft+"px"; */
			var containerElement = canvas.parentNode;
			containerElement.appendChild(controlElement);

		}
	});

});