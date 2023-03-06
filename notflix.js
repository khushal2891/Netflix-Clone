let video = document.getElementById("video");

let interact = false; //in case browser prevents autoplay


document.body.addEventListener("click", function() {

    interact = true;
    
    if(interact && video.paused) {
        video.play();
    }
});

document.body.addEventListener("mousemove", function() {

    interact = true;

    if(interact && video.paused) {
        video.play();
    }
});
