const array = [
    {
        name: '300',
        logo: 'assets/logos/300-logo.png',
        img: 'assets/pictures/300.jpeg',
        poster: 'assets/background/300.png',
        trailer: ['assets/trailers/300.mp4'],
        genre: ['movies']
    },
    {
        name: 'Avengers: Endgame',
        logo: 'assets/logos/avengers-endgame-logo.png',
        img: 'assets/pictures/avengers-endgame.png',
        poster: 'assets/background/endgame.png',
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
        poster: 'assets/background/infinity-war.png',
        trailer: [
            'assets/trailers/avengers-infinity-war.mp4', 
            'assets/trailers/avengers-infinity-war-2.mp4'
            ],
        genre: ['movies']
    },
    {
        name: 'The Big O',
        logo: 'assets/logos/big-o-logo.png',
        img: 'assets/pictures/big-o.png',
        poster: 'assets/background/big-o.png',
        trailer: [
            'assets/trailers/big-o-opening-1.mp4',
            'assets/trailers/big-o-opening-2.mp4',
            'assets/trailers/big-o-credits.mp4'
        ],
        genre: ['anime', 'series']
    },
    {
        name: 'Cowboy Bebop',
        logo: 'assets/logos/bebop-logo.png',
        img: 'assets/pictures/cowboy-bebop.jpg',
        poster: 'assets/background/bebop.png',
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
        name: 'Game Of Thrones',
        logo: 'assets/logos/game-of-thrones-logo.png',
        img: 'assets/pictures/game-of-thrones.png',
        poster: 'assets/background/game-of-thrones.png',
        trailer: [
            'assets/trailers/game-of-thrones-s1.mp4', 
            'assets/trailers/game-of-thrones-s2.mp4', 
            'assets/trailers/game-of-thrones-s3.mp4', 
            'assets/trailers/game-of-thrones-s4.mp4', 
            'assets/trailers/game-of-thrones-s5.mp4', 
            'assets/trailers/game-of-thrones-s6.mp4', 
            'assets/trailers/game-of-thrones-s7.mp4',
            'assets/trailers/game-of-thrones-s8-1.mp4',
            'assets/trailers/game-of-thrones-s8-2.mp4',
            'assets/trailers/game-of-thrones-s8-3.mp4',
            'assets/trailers/game-of-thrones-s8-4.mp4',
            'assets/trailers/game-of-thrones-s8-5.mp4'
            ],
        genre: ['originals', 'series', 'TV Series']
    },
    {
        name: 'Ghost In The Shell: Stand Alone Complex',
        logo: 'assets/logos/ghost-shell-logo.png',
        img: 'assets/pictures/ghost-in-the-shell.png',
        poster: 'assets/background/ghost-in-the-shell.png',
        trailer: [
            'assets/trailers/ghost-first-gig.mp4', 
            'assets/trailers/ghost-second-gig.mp4'
        ],
        genre: ['anime', 'series']
    },
    {
        name: '.Hack//Sign',
        logo: 'assets/logos/hack-sign-logo.png',
        img: 'assets/pictures/hack-sign.jpg',
        poster: 'assets/background/hack-sign.png',
        trailer: [
            'assets/trailers/hack-sign-opening.mp4',
            'assets/trailers/hack-sign-credits.mp4'
            ],
        genre: ['anime', 'series']
    },
    {
        name: 'Knights Of Sidonia',
        logo: 'assets/logos/sidonia-logo.png',
        img: 'assets/pictures/knights-of-sidonia.png',
        poster: 'assets/background/knights-of-sidonia.png',
        trailer: [
            'assets/trailers/knights-sidonia-1.mp4', 
            'assets/trailers/knights-sidonia-2.mp4'
            ],
        genre: ['anime', 'originals', 'series']
    },
    {
        name: 'Mass Effect: Legendary Edition',
        logo: 'assets/logos/mass-effect-logo.png',
        img: 'assets/pictures/mass-effect-legendary.png',
        poster: 'assets/background/mass-effect-legendary.png',
        trailer: [
            'assets/trailers/mass-effect-legendary.mp4',
            'assets/trailers/mass-effect-legendary-short.mp4',
            'assets/trailers/mass-effect-2.mp4',
            'assets/trailers/mass-effect-3.mp4',
            'assets/trailers/mass-effect-trilogy.mp4'
        ],
        genre: ['games']
    },
    {
        name: 'Neon Genesis Evangelion',
        logo: 'assets/logos/evangelion-logo.png',
        img: 'assets/pictures/evangelion.png',
        poster: 'assets/background/evangelion.png',
        trailer: [
            'assets/trailers/evangelion-opening.mp4',
            'assets/trailers/evangelion-credits.mp4'
        ],
        genre: ['anime', 'series']
    },
    {
        name: 'Rome',
        logo: 'assets/logos/rome-logo.png',
        img: 'assets/pictures/rome.png',
        poster: 'assets/background/rome.png',
        trailer: [
            'assets/trailers/rome-1.mp4', 
            'assets/trailers/rome-opening.mp4', 
            ],
        genre: ['originals', 'series', 'TV Series']
    },
    {
        name: 'Samurai Champloo',
        logo: 'assets/logos/champloo-logo.png',
        img: 'assets/pictures/samurai-champloo.jpg',
        poster: 'assets/background/samurai-champloo.png',
        trailer: ['assets/trailers/samurai-champloo.mp4'],
        genre: ['anime', 'series']
    },
    {
        name: 'Transcendent Man',
        logo: 'assets/logos/transcendent-man-logo.png',
        img: 'assets/pictures/transcendent-man.png',
        poster: 'assets/background/transcendent-man.png',
        trailer: ['assets/trailers/transcendent-man.mp4'],
        genre: ['movies']
    },
    {
        name: 'Trigun',
        logo: 'assets/logos/trigun-logo.png',
        img: 'assets/pictures/trigun.jpg',
        poster: 'assets/background/trigun.png',
        trailer: [
            'assets/trailers/trigun.mp4', 
            'assets/trailers/trigun-credits.mp4'
            ],
        genre: ['anime', 'series']
    },
    {
        name: 'Troy',
        logo: 'assets/logos/troy-logo.png',
        img: 'assets/pictures/troy.png',
        poster: 'assets/background/troy.png',
        trailer: [
            'assets/trailers/troy-1.mp4',
            'assets/trailers/troy-2.mp4'    
        ],
        genre: ['movies']
    },
    {
        name: 'The Witcher 3: Wild Hunt',
        logo: 'assets/logos/witcher-logo.png',
        img: 'assets/pictures/witcher3.png',
        poster: 'assets/background/witcher3.png',
        trailer: [
            'assets/trailers/witcher-blood-and-wine.mp4',
            'assets/trailers/witcher-bruxa.mp4',
            'assets/trailers/witcher-game-of-year.mp4',
            'assets/trailers/witcher-hearts-of-stone.mp4', 
            'assets/trailers/witcher-legend.mp4', 
            'assets/trailers/witcher-monsters.mp4',
            'assets/trailers/witcher-nextgen.mp4'
            ],
        genre: ['games']
    }
    
];


const caret = document.querySelector(".fa-caret-down");
const catalogue = document.querySelector(".catalogue"); //parent to all carousels on document
const header = document.querySelector("header");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //checks if mobile device 
const showcase = document.querySelector(".showcase"); //background where video displays
const title = document.querySelector(".showcase-title"); //video logo section
const toggle = document.querySelector(".togglebtn");
const video = document.getElementById("video"); 
const watchList = document.getElementById("list"); //used to identify watchlist carousel

let genre = ['watchlist', 'originals', 'movies', 'series', 'games', 'anime', 'TV Series']; //used to create carousel genres 
let num = randomRange(0, array.length - 1); //sets random number within array size
let playButton = document.getElementById("play-button"); //play || pause
let playIcon = document.getElementById("play-icon"); //play || pause ,image
let selection; //will hold array of class selection items
let showcaseImg = document.querySelector(".showcase-img"); //for video title logos
let trailers; //for video source selection


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

                    if(playButton.textContent == "Play") {

                        setTimeout(function() { 
                            
                            showcaseUI();    
                            
                        }, 2500); //waits 2.5 secs to show poster image
            
                     } else {
                            
                        showcaseUI(); 
                            
                     }
                    
                }
            }
        });
    };
    
}


//creates objects in webpage from array
function display() {

    for(let i = 0; i < genre.length; i++) {

        let outer = document.createElement("div");
        outer.classList.add("category");

        let h3 = document.createElement("h3");
        h3.textContent = genre[i][0].toUpperCase() + genre[i].slice(1); //makes 1st letter Capital
        h3.id = genre[i]; //set id for the h3 title

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
            img.setAttribute('draggable', false);

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

    header.style.transition = "2.5s ease-in-out 0ms";
    header.style.marginTop = "0";
    header.style.marginBottom = "0";
    showcase.style.minHeight = "70vh";
    title.style.paddingTop = "50vh";
   
    if(video.paused) {

        if(playButton.textContent == "Pause") {

            setTimeout(function() { 

                video.play();
                
            }, 2500); //waits 2.5 secs

        } else {
                
            video.play();
                
        }


        //if no trailer exists
        if(array[num].trailer != 0) {

            playButton.textContent = "Pause";
            playIcon.src = 'assets/pause.png';

            header.style.transition = "5s ease-in-out 1000ms";
            header.style.marginTop = "-25vh";
            header.style.marginBottom = "25vh";
            showcase.style.minHeight = "90vh";
            title.style.paddingTop = "69vh";
        }

    } else {

        video.pause();

        playButton.textContent = "Play";
        playIcon.src = 'assets/play.png';
    }
    
}


//selects item to display and play
function theater() {
    
    //displays corresponding item logo
    showcaseImg.src = array[num].logo;
    showcaseImg.style.height = '52px';

    //allows for multiple object array trailers to randomly play
    video.poster = array[num].poster;
    trailers = randomRange(0, array[num].trailer.length - 1); //random video selection
    video.src = array[num].trailer[trailers];
}


//Best view for portrait or landscape mode?
function viewStyle() {

    if(window.innerHeight > window.innerWidth) {

        video.style.objectFit = "fill"; //portrait mode
        
        //this fixes a bug in mobile 
        if(isMobile && playButton.textContent == "Pause") {
            
            video.play();
        }
        
    } else {

        video.style.objectFit = "cover"; //landscape mode
    }
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
            

            for(let j = 0; j < catalogue.children[h].children[1].children.length; j++) {
                
                //checks watchlist array for previous copies of current item
                if(anchor.children[0].children[1].textContent == catalogue.children[h].children[1].children[j].children[0].children[1].textContent) {
                                        
                    //removes duplicate from array
                    catalogue.children[h].children[1].children[j].remove();
                }
            }

            //append current selection at the beginning of the list
            catalogue.children[h].children[1].insertBefore(anchor, catalogue.children[h].children[1].children[0]);

        }
    };

    arrange();

});


window.addEventListener("resize", function() {
        
    header.style.transition = "0s ease-in-out 0ms"; //header width changes occur fast on screen resize
    
    //timeout fixes a bug on mobile 
    setTimeout(function() { 
        
        viewStyle();
    }, 25);
    
});


video.onended = function () {
    
    trailers++

    if(trailers > array[num].trailer.length - 1) {
        trailers = 0;
    }

    video.src = array[num].trailer[trailers];
    
    setTimeout(function() { 

        if(playButton.textContent == "Pause") {

            video.play();
        }
    }, 1500); //waits 1.5 sec
};


window.onload = function() { 

    display();
    theater();
    arrange();
};
