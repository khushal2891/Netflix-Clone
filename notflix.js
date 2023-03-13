const video = document.getElementById("video");
const showcase = document.querySelector(".showcase");

let playButton = document.getElementById("play-button");
let playIcon = document.getElementById("play-icon");
playButton.innerHTML = "Play";
playIcon.className = "fa fa-play";

let selection = [
    {
        name: "Knights Of Sidonia",
        logo: 'url(assets/logos/Sidonia-logo.png',
        img: 'url(assets/pictures/Knights-Sidonia.png)',
        trailer1: 'assets/trailers/Knights-Sidonia-1.mp4',
        trailer2: 'assets/trailers/Knights-Sidonia-2.mp4'
    }
];


function theater() {

    function flip() {
        let coin = randomRange(1,2);
        
        if(coin == 1) {
            video.src = selection[0].trailer1;
        } else {
            video.src = selection[0].trailer2;
        };
    };

    flip();

}


function buttonUI() {
   
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


//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


showcase.addEventListener("click", function() {
    
    buttonUI();

});


window.onload = function() { 

    theater();

 };
