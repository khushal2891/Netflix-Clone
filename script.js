// khushal

let navbar = document.getElementById("navbar")

const toggle = () =>{
    if (navbar.style.display == "none"){
        navbar.style.display = "block"
        navbar.style.textAlign = "left"
    }
else{
    navbar.style.display = "none"
}

}

function carousel(){
    let carouselslider =document.querySelector(".carousel-slider")
    let list = document.querySelector("carousel-list")
    let item = document.querySelector(".carousel-item")
    let list2

const speed = 1
const width = list.offsetwidth
let x = 0 
let x2 = width 

function clone (){
    list2 =list.cloneNode(true)
    carouselslider.appendChild(list2)
    lists2.style.left = '${width}px'
}

function movefirst(){
    x -= speed
    if (width >= Math.abs(x)){
        list.style.left = '${x}px'
    }
    else {
        x = width
    }
}

function movesecond(){
    x2 -= speed
    if(list.offsetwidth >= Math.abs(x2)){
        lists2.style.left = '${x2}'
    }
    else {
        x2 = width
    }
}

function hover(){
    clearInterval(a)
    clearInterval(b)

}


function unhover(){
a = setInterval(movefirst,10)
b = setInterval(movesecond,10)

}

clone()
let a = setInterval(movefirst,10)
let b = setInterval(movesecond,1)

carouselslider.addEventListener("mouseenter", hover)
carouselslider.addEventListener("mouseenter", unhover)

}

carousel()