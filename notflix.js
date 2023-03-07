const video = document.getElementById("video");

let interact = false; //browsers prevent autoplay


function show() {

    video.style.position = "absolute"; 
    video.style.left = "0";
    video.style.top = "0";

    video.style.height = "100vh";
    video.style.objectFit = "cover";
    video.style.width = "100vw";
    video.style.zIndex = "-1";

    video.playsInLine = "true";
    video.loop = "true";  
    video.play();
}


document.body.addEventListener("click", function() {

    interact = true;
    
    if(interact && video.paused) {

        setTimeout(function(){

            show();

        },500);
    }

});

window.addEventListener("mouseover", function() {

    interact = true;

    if(interact && video.paused) {
        
        setTimeout(function(){

            show();

        },500);
    }
});


/*

window.onload = function() {

};

*/
