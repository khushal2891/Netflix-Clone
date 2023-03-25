const array = [
    {
        name: 'Avengers: Endgame',
        logo: 'assets/logo.png',
        img: 'assets/pictures/avengers-endgame.png',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Avengers: Infinity War',
        logo: 'assets/logos/infinity-logo.png',
        img: 'assets/pictures/infinity-war.png',
        trailer: ['assets/trailers/infinity-war.mp4'],
        genre: ['movies']
    },
    {
        name: 'Captain America: Civil War',
        logo: 'assets/logo.png',
        img: 'assets/pictures/captain-civil-war.jpg',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Cowboy Bebop',
        logo: 'assets/logos/bebop-logo.png',
        img: 'assets/pictures/cowboy-bebop.jpg',
        trailer: ['assets/trailers/bebop-four.mov', 'assets/trailers/bebop-bang.mov', 'assets/trailers/bebop-one.mov', 'assets/trailers/bebop-bass.mov'],
        genre: ['anime', 'series']
    },
    {
        name: 'Ghost In The Shell: Stand Alone Complex',
        logo: 'assets/logos/ghost-shell-logo.png',
        img: 'assets/pictures/ghost-in-the-shell.png',
        trailer: ['assets/trailers/ghost-first-gig.mp4', 'assets/trailers/ghost-second-gig.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Knights Of Sidonia',
        logo: 'assets/logos/sidonia-logo.png',
        img: 'assets/pictures/knights-sidonia.png',
        trailer: ['assets/trailers/knights-sidonia-1.mp4', 'assets/trailers/knights-sidonia-2.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Samurai Champloo',
        logo: 'assets/logos/champloo-logo.png',
        img: 'assets/pictures/samurai-champloo.jpg',
        trailer: ['assets/trailers/samurai-champloo.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Trigun',
        logo: 'assets/logos/trigun-logo.png',
        img: 'assets/pictures/trigun.png',
        trailer: ['assets/trailers/trigun.mp4'],
        genre: ['anime', 'series']
    }
    
];

const catalogue = document.querySelector(".catalogue");
const showcase = document.querySelector(".showcase");
const video = document.getElementById("video");

let genre = ['anime', 'originals', 'movies', 'series', 'watchlist'];
let num = randomRange(0, array.length - 1); //sets random number within array size
let playButton = document.getElementById("play-button");
let playIcon = document.getElementById("play-icon");
let selection;
let showcaseImg = document.querySelector(".showcase-img");


//creates objects in webpage from array
function display() {

    playButton.textContent = "Play";
    playIcon.className = "fa fa-play";

    for(let i = 0; i < genre.length; i++) {

        let outer = document.createElement("div");
        outer.classList.add("category");

        let h3 = document.createElement("h3");
        h3.textContent = genre[i][0].toUpperCase() + genre[i].slice(1);
        h3.id = genre[i];

        let inner = document.createElement("div");
        inner.classList.add("carousel");
    
        outer.append(h3);
        outer.append(inner);
        catalogue.append(outer);
        

        array.forEach(obj => {

            let anchor = document.createElement("a");
            anchor.href = "#trailer"; 

            let figure = document.createElement("figure"); 
            figure.classList.add("selection");

            let figCaption = document.createElement("figcaption"); 
            figCaption.textContent = obj.name;

            let img = new Image();
            img.src = obj.img;

            for(let j = 0; j < obj.genre.length; j++) {
           
                if(obj.genre[j] == genre[i]) {
                    inner.append(anchor);
                }
            }

            anchor.append(figure);
            figure.append(img);
            figure.append(figCaption);
            
        });

    }

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

        playButton.textContent = "Pause";
        playIcon.className = "fa fa-pause";

    } else {

        video.pause();

        playButton.textContent = "Play";
        playIcon.className = "fa fa-play";
    }
}


function theater() {
    
    showcaseImg.src = array[num].logo;
    showcaseImg.style.height = '54px';

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

            for(let j = 0; j < array.length; j++) {

                //Looks to match selection children elements array-- FigCaption name
                if(array[j].name == selection[i].children[1].textContent) {
                    
                    num = j;
                    theater();
                    showcaseUI();
                }
            }
        });

    };

 };
