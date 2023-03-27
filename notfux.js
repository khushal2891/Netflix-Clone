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
        name: 'Deadpool',
        logo: 'assets/logo.png',
        img: 'assets/pictures/deadpool.jpg',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Doctor Strange',
        logo: 'assets/logo.png',
        img: 'assets/pictures/doctor-strange.png',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Ghost In The Shell: Stand Alone Complex',
        logo: 'assets/logos/ghost-shell-logo.png',
        img: 'assets/pictures/ghost-in-the-shell.png',
        trailer: ['assets/trailers/ghost-first-gig.mp4', 'assets/trailers/ghost-second-gig.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Guardians Of The Galaxy',
        logo: 'assets/logo.png',
        img: 'assets/pictures/guardians-of-the-galaxy.jpg',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Iron Man',
        logo: 'assets/logo.png',
        img: 'assets/pictures/iron-man.jpg',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Knights Of Sidonia',
        logo: 'assets/logos/sidonia-logo.png',
        img: 'assets/pictures/knights-sidonia.png',
        trailer: ['assets/trailers/knights-sidonia-1.mp4', 'assets/trailers/knights-sidonia-2.mp4'],
        genre: ['anime', 'originals', 'series']
    },
    {
        name: 'Samurai Champloo',
        logo: 'assets/logos/champloo-logo.png',
        img: 'assets/pictures/samurai-champloo.jpg',
        trailer: ['assets/trailers/samurai-champloo.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Thor: Love And Thunder',
        logo: 'assets/logo.png',
        img: 'assets/pictures/thor-love-thunder.png',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'Trigun',
        logo: 'assets/logos/trigun-logo.png',
        img: 'assets/pictures/trigun.png',
        trailer: ['assets/trailers/trigun.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Venom',
        logo: 'assets/logo.png',
        img: 'assets/pictures/venom.jpg',
        trailer: [],
        genre: ['movies']
    }
    
];

const catalogue = document.querySelector(".catalogue"); //parent to all carousels on document
const showcase = document.querySelector(".showcase"); //background where video displays
const video = document.getElementById("video"); 
const watchList = document.getElementById("list"); //used to identify watchlist carousel

let genre = ['anime', 'originals', 'movies', 'series', 'watchlist']; //used to create carousel genres 
let num = randomRange(0, array.length - 1); //sets random number within array size
let playButton = document.getElementById("play-button"); //play || pause
let playIcon = document.getElementById("play-icon"); //play || pause --icon
let selection; //will hold array of class selection items
let showcaseImg = document.querySelector(".showcase-img"); //for video title logos


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

}


//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


//arranges array length
function arrange() {

    //refreshes array length
    selection = document.querySelectorAll(".selection");
    
    for(let i = 0; i < selection.length; i++) {

        selection[i].addEventListener("click", function() {

            for(let j = 0; j < array.length; j++) {

                //Looks to match selection children elements array-- figCaption name
                if(array[j].name == selection[i].children[1].textContent) {
                    
                    num = j;
                    theater();
                    showcaseUI();
                }
            }
        });

    };
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


//add item to user watchlist
watchList.addEventListener("click", function() {

    video.play(); //always triggers pause when showcaseUI() runs
    
    let anchor = document.createElement("a");
    anchor.href = "#trailer"; 
    
    let figure = document.createElement("figure"); 
    figure.classList.add("selection");

    let figCaption = document.createElement("figcaption"); 
    figCaption.textContent = array[num].name;

    let img = new Image();
    img.src = array[num].img;
    
    anchor.append(figure);
    figure.append(img);
    figure.append(figCaption);
    
    for(let h = 0; h < catalogue.children.length; h++) {

        if(catalogue.children[h].children[0].textContent == "Watchlist") {

            //appends item at the beginning of the list
            catalogue.children[h].children[1].insertBefore(anchor, catalogue.children[h].children[1].children[0]);
        }

    };

    arrange();

});


window.onload = function() { 

    display();
    theater();
    arrange();

};
