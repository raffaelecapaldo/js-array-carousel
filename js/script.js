//Creiamo array con le immagini del carosello

const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const carousel = document.getElementById("carousel");
const thumbs = document.getElementById("thumbs");

function createCarousel() {
    for (let i = 0; i < images.length; i++) {
        carousel.innerHTML += `<img src="${images[i]}" alt="">`
        thumbs.innerHTML += `<img src="${images[i]}" alt="">`
    }

}

createCarousel();