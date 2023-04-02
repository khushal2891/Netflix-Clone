const array = [
    {
        name: 'Avengers: Endgame',
        logo: 'assets/logos/avengers-endgame-logo.png',
        img: 'assets/pictures/avengers-endgame.png',
        trailer: [
            'assets/trailers/avengers-endgame-1.mp4',
            'assets/trailers/avengers-endgame-2.mp4'
            ],
        genre: ['movies']
    },
    {
        name: 'Avengers: Infinity War',
        logo: 'assets/logos/avengers-infinity-logo.png',
        img: 'assets/pictures/infinity-war.png',
        trailer: [
            'assets/trailers/avengers-infinity-war.mp4', 
            'assets/trailers/avengers-infinity-war-2.mp4'
            ],
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
        trailer: [
            'assets/trailers/cowboy-bebop-opening.mp4', 
            'assets/trailers/bebop-four.mov', 
            'assets/trailers/bebop-bang.mov', 
            'assets/trailers/bebop-one.mov', 
            'assets/trailers/bebop-bass.mov'
            ],
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
        name: '.Hack//Sign',
        logo: 'assets/logos/hack-sign-logo.png',
        img: 'assets/pictures/hack-sign.png',
        trailer: [
            'assets/trailers/hack-sign-opening.mp4',
            'assets/trailers/hack-sign-credits.mp4'
            ],
        genre: ['anime', 'series']
    },
    {
        name: 'Ghost In The Shell: Stand Alone Complex',
        logo: 'assets/logos/ghost-shell-logo.png',
        img: 'assets/pictures/ghost-in-the-shell.png',
        trailer: [
            'assets/trailers/ghost-first-gig.mp4', 
            'assets/trailers/ghost-second-gig.mp4'
        ],
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
        trailer: [
            'assets/trailers/knights-sidonia-1.mp4', 
            'assets/trailers/knights-sidonia-2.mp4'
            ],
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
        trailer: [
            'assets/trailers/trigun.mp4', 
            'assets/trailers/trigun-credits.mp4'
            ],
        genre: ['anime', 'series']
    },
    {
        name: 'Venom',
        logo: 'assets/logo.png',
        img: 'assets/pictures/venom.jpg',
        trailer: [],
        genre: ['movies']
    },
    {
        name: 'The Witcher 3: Wild Hunt',
        logo: 'assets/logos/witcher-logo.png',
        img: 'assets/pictures/witcher3.png',
        trailer: [
            'assets/trailers/witcher-game-of-year.mp4' ,
            'assets/trailers/witcher-hearts-of-stone.mp4', 
            'assets/trailers/witcher-legend.mp4', 
            'assets/trailers/witcher-nextgen.mp4',
            'assets/trailers/witcher-blood-and-wine.mp4'
            ],
        genre: ['games']
    }
    
];

const caret = document.querySelector(".fa-caret-down");
const catalogue = document.querySelector(".catalogue"); //parent to all carousels on document
const showcase = document.querySelector(".showcase"); //background where video displays
const toggle = document.querySelector(".togglebtn");
const video = document.getElementById("video"); 
const watchList = document.getElementById("list"); //used to identify watchlist carousel

let genre = ['originals', 'movies', 'series', 'games', 'watchlist']; //used to create carousel genres 
let num = randomRange(0, array.length - 1); //sets random number within array size
let playButton = document.getElementById("play-button"); //play || pause
let playIcon = document.getElementById("play-icon"); //play || pause --icon
let selection; //will hold array of class selection items
let showcaseImg = document.querySelector(".showcase-img"); //for video title logos


//arranges array length
function arrange() {

    //refreshes array length in case changes were made
    selection = document.querySelectorAll(".selection");
    
    for(let i = 0; i < selection.length; i++) {

        selection[i].addEventListener("click", function() {

            for(let j = 0; j < array.length; j++) {

                //selects correct array item position by matching the items' names
                if(array[j].name == selection[i].children[1].textContent) {
                    
                    num = j;
                    theater();
                    showcaseUI();
                }
            }
        });
    };
    
}


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


    for(let h = 0; h < catalogue.children.length; h++) {
        
        //searches in document for watchlist carousel
        if(catalogue.children[h].children[0].textContent == "Watchlist") {

            //if watchlist is empty
            if(catalogue.children[h].children[1].length == undefined) {
        
                catalogue.children[h].style.display = "none"; //it is hidden
            }
        }
    };

}


//seems not to work on phones. Adding webpage to phone homescreen is a substitute
function fullscreen() {

    if(document.fullscreenElement) { //if currently in full screen mode
        
        if (document.exitFullscreen) {
            document.exitFullscreen(); //Exit full screen mode
        } else if (document.mozCancelFullScreen) { //Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { //Chrome, Safari & Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { //IE/Edge 
        document.msExitFullscreen();
        }
    
    } else { //Not in full screen mode
        
        const elem = document.documentElement; //Get the document element      
    
        if(elem.requestFullscreen) {
            elem.requestFullscreen(); //Make the website go full screen
        } else if (elem.mozRequestFullScreen) { //Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { //Chrome, Safari & Opera 
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { //IE/Edge 
            elem.msRequestFullscreen();
        }
    }
}


//Returns a random number within a chosen range
function randomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


//play or pause, video & button
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


//selects item to display and play
function theater() {
    
    //displays corresponding item logo
    showcaseImg.src = array[num].logo;
    showcaseImg.style.height = '54px';

    //allows for multiple object array trailers to randomly play
    video.src = array[num].trailer[randomRange(0, array[num].trailer.length - 1)];
}


caret.addEventListener("click", function() {

    fullscreen();
});

showcase.addEventListener("click", function() {

    showcaseUI();
});

toggle.addEventListener("click", function() {

    fullscreen();
});


//adds item to user watchlist
watchList.addEventListener("click", function() {

    video.play(); //always triggers pause once showcaseUI() function runs
    
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

        //locates watchlist carousel in document
        if(catalogue.children[h].children[0].textContent == "Watchlist") {

            catalogue.children[h].style.display = "block"; //visibly displays carousel

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
