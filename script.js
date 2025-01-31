//assegno alle varie conat gli elementi del documento html tramite il loro id 
const imgPC = document.getElementById("imgPC");
const imgUser = document.getElementById("imgUser");
const vincitore = document.getElementById("vincitore");
const bottone = document.getElementById("bottone");
var audio = new Audio('audio/dry-dices.mp3');


//inizialliziamo i numeri dei dati di utente e pc e punteggi
var pPC = pUtente = 0;
var numeroPC = numeroUser = 0;

//la funzione lancia è collegata con il bottone e avvia il gioco
function lancia() {

  //document.querySelector('#bottone').disabled = true;
  bottone.disabled = true;
  imgUser.src = 'img/rotating-dies-unscreen.gif'
  imgPC.src = 'img/forzai.gif'
  imgPC.style.opacity = "0";
  //è un metodo che permette di chiamare una funzione dopo 
  // un certo periodo di tempo, espresso in millisecondi
  setTimeout(() => {

    numeroUser = Math.floor(Math.random() * 6 + 1)
    console.log(numeroUser)
    audio.play();
    imgUser.src = 'img/' + numeroUser + '.png'
    imgPC.style.opacity = "1";
    imgPC.src = 'img/rotating-dies-unscreen.gif'
  }, 5000);
  
  
  setTimeout(() => {
    
    numeroPC = Math.floor(Math.random() * 6 + 1)
    console.log(numeroPC)
    audio.play();
    imgPC.src = 'img/' + numeroPC + '.png'

    if (numeroPC > numeroUser) {
      pPC++;
      vincitore.innerHTML = "Vince il PC! " + pUtente + "-" + pPC;
      vincitore.style.color = "red";
    }
    else if (numeroPC < numeroUser) {
      pUtente++;
      vincitore.innerHTML = "Hai vinto! " + pUtente + "-" + pPC;
      vincitore.style.color = "green"; 
    }
    else {
      vincitore.innerHTML = "Pareggio! " + pUtente + "-" + pPC;
      vincitore.style.color = "#2c3e50";
    }
    
    //document.querySelector('#bottone').disabled = false;
    bottone.disabled = false;
  }, 10000);


}


