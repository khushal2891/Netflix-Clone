const video = document.getElementById("video");
const showcase = document.querySelector(".showcase");

let playButton = document.getElementById("play-button");
let playIcon = document.getElementById("play-icon");
playButton.innerHTML = "Play";
playIcon.className = "fa fa-play";


function theater() {
   
    if(video.paused) {

        video.play();

        playButton.innerHTML = "Pause";
        playIcon.className = "fa fa-pause";

    } else {

        video.pause();

        playButton.innerHTML = "Play";
        playIcon.className = "fa fa-play";
    }

}


showcase.addEventListener("click", function() {
    
    theater();

});


window.onload = function() { 

 };
