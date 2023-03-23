//Creiamo array di objects con le info sulle immagini del carosello
const images = [{
    file: "01.webp",
    title: "Spiderman",
},
{
    file: "02.webp",
    title: "Ratchet & Clank",
},
{
    file: "03.webp",
    title: "Fortnite",
},
{
    file: "04.webp",
    title: "Stray",
},
{
    file: "05.webp",
    title: "Marvel Avengers",
},

]
const carousel = document.getElementById("carousel");
const thumbs = document.getElementById("thumbs");
const buttonUp = document.getElementById("button-up");
const buttonDown = document.getElementById("button-down");
let currentIndex = 0;
buttonUp.addEventListener("click", goPrev);
buttonDown.addEventListener("click", goNext);

function createCarousel() { //ciclo for each per creare carosello coi dati dell'array di oggetti
    images.forEach((image) => {
        carousel.innerHTML += `<div class="slide"> <img class="image-slide" src="img/${image.file}" alt="${image.title}"> <div class="titlebox">${image.title}</div></div>`
        thumbs.innerHTML += `<img class="image-slide" src="img/${image.file}" alt="${image.title}">`
    })
    //attiva tutti i primi tag img
    document.querySelectorAll(".slide")[currentIndex].classList.add("active");
    document.querySelectorAll(".image-slide")[currentIndex + images.length].classList.add("active");
}

function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove("active");//rimuovi active a chi lo possiede attualmente
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.remove("active");
    if (currentIndex === images.length - 1) {// se il numero supera la quantità massima delle immagini disponibili, ritorna a zero
        currentIndex = 0;
    }
    else {
        currentIndex++; //altrimenti vai avanti
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add("active");//assegno ora dove ti trovi (se avanti o a zero) active
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.add("active");
}

function goPrev() {// come sopra ma vai indietro
    document.querySelectorAll('.image-slide')[currentIndex].classList.remove("active");
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.remove("active");
    document.querySelectorAll('.titlebox')[currentIndex + images.length].classList.remove("active");

    if (currentIndex === 0) {//se sei arrivato alla prima foto, riparti dall'ultima, usa lenght per avere la loro quantità
        currentIndex = images.length - 1;
    }
    else {
        currentIndex--;//andiamo indietro
    }
    document.querySelectorAll('.image-slide')[currentIndex].classList.add("active");
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.add("active");
}

createCarousel();

//BONUS MEOW - ho imparato cos'è una funzione ricorsiva
const sound = new Audio('sounds/stray.mp3'); // elemento audio con miagolio Stray
function checkVariable() {
    if (currentIndex == images.indexOf("img/04.webp")) { //controlla currentIndex sia attualmente alla posizione della foto di Stray nell'indice
        sound.play(1); // riproduci il suono
        setTimeout(checkVariable, 15000);// riproduci il suono tra altri 15 secondi se rimani fermo sulla foto, permetti di riprodurre di nuovo il suono soltanto
        // dopo 15sec se ritorni sulla foto da altra posizione
    } else {
        setTimeout(checkVariable, 100); // ogni 100 secondi che l'incide non corrisponde, richiama la funzione
    }
}
checkVariable();//primo avvio della funzione

//AUTOPLAY ogni 2 sec
const autoplay = () => timer = setInterval(goNext, 2000)
const autoplayzones = document.querySelectorAll(".autoplay-zone");
autoplayzones.forEach((zone) => {
    //Quando il mouse va sul carosello o le thumbs, interrompi l'autoplay
    zone.addEventListener("mouseover", () => clearInterval(timer));
    //Quando il mouse esce dal carosello o le thumbs, ricomincia l'autoplay
    zone.addEventListener("mouseout", autoplay);
})

//Autoplay inizia a pagina caricata
autoplay();