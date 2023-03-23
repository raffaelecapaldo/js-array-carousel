//Creiamo array con le immagini del carosello

const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const carousel = document.getElementById("carousel");
const thumbs = document.getElementById("thumbs");
const buttonUp = document.getElementById("button-up");
const buttonDown = document.getElementById("button-down");
let currentIndex = 0;

buttonUp.addEventListener("click", goPrev);
buttonDown.addEventListener("click", goNext);


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
    document.querySelectorAll('.image-slide')[currentIndex].classList.remove("active");//rimuovi active a chi lo possiede attualmente
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.remove("active");

    if (currentIndex === images.length - 1) {// se il numero supera la quantità massima delle immagini disponibili, ritorna a zero
        currentIndex = 0;
    }
    else {
        currentIndex++; //altrimenti vai avanti
    }
    document.querySelectorAll('.image-slide')[currentIndex].classList.add("active");//assegno ora dove ti trovi (se avanti o a zero) active
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.add("active");
    console.log()
}


function goPrev() {// come sopra ma vai indietro
    document.querySelectorAll('.image-slide')[currentIndex].classList.remove("active");
    document.querySelectorAll('.image-slide')[currentIndex + images.length].classList.remove("active");

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
const autoplay = setInterval(goNext, 2000);
//Quando il mouse va sul carosello, interrompi l'autoplay
carousel.addEventListener("mouseover", ()=> clearInterval(autoplay));