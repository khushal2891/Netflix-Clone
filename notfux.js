const array = [
    {
        name: 'Avengers: Infinity War',
        logo: 'assets/logos/infinity-logo.png',
        img: 'assets/pictures/infinity-war.png',
        trailer: ['assets/trailers/infinity-war.mp4']
    },
    {
        name: 'Knights Of Sidonia',
        logo: 'assets/logos/sidonia-logo.png',
        img: 'assets/pictures/knights-sidonia.png',
        trailer: ['assets/trailers/knights-sidonia-1.mp4', 'assets/trailers/knights-sidonia-2.mp4']
    },
    {
        name: 'Trigun',
        logo: 'assets/logos/trigun-logo.png',
        img: 'assets/pictures/trigun.png',
        trailer: ['assets/trailers/trigun.mp4']
    }
    
];

const catalogue = document.querySelector(".catalogue");
const showcase = document.querySelector(".showcase");
const video = document.getElementById("video");

let carousel1 = document.getElementById("carousel1");
let num = randomRange(0, array.length - 1); //sets random number within array size
let playButton = document.getElementById("play-button");
let playIcon = document.getElementById("play-icon");
let selection;
let showcaseImg = document.querySelector(".showcase-img");


//creates objects in webpage from array
function display() {

    playButton.innerHTML = "Play";
    playIcon.className = "fa fa-play";

    array.forEach(obj => {
        let anchor = document.createElement("a");
        let figure = document.createElement("figure"); 
        let figCaption = document.createElement("figcaption"); 
        let img = new Image();

        anchor.href = "#top"; 
        img.src = obj.img;
        figCaption.innerHTML = obj.name;
        figure.classList.add("selection");
        
        anchor.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figCaption);
        carousel1.appendChild(anchor);
    });

    selection = document.querySelectorAll(".selection");
}


//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


//plays, pauses, video & button
function showcaseUI() {
   
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


function theater() {
    
    showcaseImg.src = array[num].logo;

    //allows for multiple object array trailers to randomly play
    video.src = array[num].trailer[randomRange(0, array[num].trailer.length - 1)];
}


showcase.addEventListener("click", function() {

    showcaseUI();
});


window.onload = function() { 

    display();
    theater();

    //only works after array objects are created onload
    for(let i = 0; i < selection.length; i++) {

        selection[i].addEventListener("click", function() {

            num = i;
            theater();
            showcaseUI();
        });
    };

 };
