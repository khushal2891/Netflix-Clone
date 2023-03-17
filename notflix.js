const array = [
    {
        name: "Avengers: Infinity War",
        logo: `assets/logos/infinity-logo.png`,
        img: `assets/pictures/infinity-war.png`,
        trailer: `assets/trailers/avengers-endgame.mp4`,
    },
    {
        name: "Knights Of Sidonia",
        logo: 'assets/logos/Sidonia-logo.png',
        img: 'assets/pictures/Knights-Sidonia.png',
        trailer: 'assets/trailers/Knights-Sidonia-1.mp4',
        trailer2: 'assets/trailers/Knights-Sidonia-2.mp4',
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

    playButton.innerHTML = "Play";
    playIcon.className = "fa fa-play";

    array.forEach(obj => {
        let figure = document.createElement("figure"); 
        figure.classList.add("selection");
        let img = new Image();
        img.src = obj.img;
        figure.appendChild(img);
        let figName = document.createElement("figcaption");
        figName.innerHTML = obj.name;
        figure.appendChild(figName);
        carousel1.appendChild(figure);
    });

    selection = document.querySelectorAll(".selection");

}


//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


function theater() {
    
    showcaseImg.src = array[num].logo;
        
    switch(array[num].name) {
        case "Knights Of Sidonia":
            flip();
            break;
        default:
            video.src = array[num].trailer;
            break;
    }

    function flip() {

        let coin = randomRange(1,2);
        
        if(coin == 1) {

            video.src = array[num].trailer;
        } else {
            video.src = array[num].trailer2;
        };
    };

}


showcase.addEventListener("click", function() {

    buttonUI();
});


window.onload = function() { 

    display();
    theater();

    //Took two days, after a 9-5,to figure this out
    for(let i = 0; i < selection.length; i++) {

        selection[i].addEventListener("click", function() {
            num = i;
            theater();
            buttonUI();
        });
    };

 };
