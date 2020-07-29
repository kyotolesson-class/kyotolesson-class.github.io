// from https://codepen.io/beardofprey/pen/MXmxXR via 
// https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743
// 1. load the Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. When the API code is finished downloading
var player;

function onYouTubePlayerAPIReady(event) {

    var ytplayer = document.querySelectorAll(".ytplayer");

    // 3. for each video
    for (var i = 0; i < ytplayer.length; i++) {

        var source = "https://img.youtube.com/vi/" + ytplayer[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.src = source;
        image.classList.add("youtubeimage")
        image.addEventListener("load", function() {
            ytplayer[i].appendChild(image);
        }(i));

        // 4. Create a click event listener
        ytplayer[i].addEventListener("click", function() {
            // 5. Create the player
            player = new YT.Player(this.id, {
                height: '',
                width: '',
                videoId: this.dataset.embed,
                events: {
                    'onReady': onPlayerReady
                }
            },1);

            // 6. Play the video when player is ready
            function onPlayerReady(event) {
                event.target.playVideo();
            }
            // 7. Remove the image & button
            this.innerHTML = "";
            // alert("removed");
        });

    }

}