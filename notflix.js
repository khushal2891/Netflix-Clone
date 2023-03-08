const video = document.getElementById("video");
const showcase = document.querySelector(".showcase");


function show() {
   
    video.play();

}


showcase.addEventListener("click", function() {
    
    if(video.paused) {

        show();

    } else {

        video.pause();
    }

});


//window.onload = function() {  };
