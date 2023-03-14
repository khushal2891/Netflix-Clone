const video = document.getElementById("video");
const showcase = document.querySelector(".showcase");
let carousel1 = document.getElementById("carousel1");
let showcaseImg = document.querySelector(".showcase-img");


let playButton = document.getElementById("play-button");
let playIcon = document.getElementById("play-icon");
playButton.innerHTML = "Play";
playIcon.className = "fa fa-play";

let selection = [
    {
        name: "Knights Of Sidonia",
        logo: 'assets/logos/Sidonia-logo.png',
        img: 'assets/pictures/Knights-Sidonia.png',
        trailer: 'assets/trailers/Knights-Sidonia-1.mp4',
        trailer2: 'assets/trailers/Knights-Sidonia-2.mp4'
    },
    {
        name: "Avengers: Infinity War",
        logo: `assets/logos/infinity-logo.png`,
        img: `assets/pictures/infinity-war.png`,
        trailer: `assets/trailers/avengers-endgame.mp4`
    }
];

let num = randomRange(0, selection.length - 1); //sets random number within array size


function theater() {
    
    video.src = selection[num].trailer;
    showcaseImg.src= selection[num].logo;
    
    
    function flip() {
        let coin = randomRange(1,2);
        
        if(coin == 1) {
            video.src = selection[num].trailer;
        } else {
            video.src = selection[num].trailer2;
        };
    };
    
    if(selection[num].name == "Knights Of Sidonia") {

        flip();
    }
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

function display() {

    selection.forEach(obj => {
        let figure = document.createElement("figure");
        let img = new Image();
        img.src = obj.img;
        figure.appendChild(img);
        let figName = document.createElement("figcaption");
        figName.innerHTML = obj.name;
        figure.appendChild(figName);
        carousel1.appendChild(figure);
    });

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

    display();
    theater();

 };
