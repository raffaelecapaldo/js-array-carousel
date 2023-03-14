//Creiamo array con le immagini del carosello

const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const carousel = document.getElementById("carousel");
const thumbs = document.getElementById("thumbs");
const buttonUp = document.getElementById("button-up");
const buttondown = document.getElementById("button-down");
let currentIndex = 0;



function createCarousel() { //ciclo for per creare i tag img sia nelle slides che nelle thumbs
    for (let i = 0; i < images.length; i++) {
        carousel.innerHTML += `<img class="image-slide" src="${images[i]}" alt="">`
        thumbs.innerHTML += `<img class="image-slide" src="${images[i]}" alt="">`
    }
//attiva tutti i primi tag img
document.querySelectorAll(".image-slide")[currentIndex].classList.add("active");
document.querySelectorAll(".image-slide")[currentIndex + images.length].classList.add("active");
}


function goNext() {

}

createCarousel();

