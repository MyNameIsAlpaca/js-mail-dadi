/* 
1 Creare lista di email con accesso al gioco
2 fare controllo in base alla mail inserita dall'utente
  Se la mail è presente nel database iniziare gioco
  se la mail non è presente nel database dare alert errore
3 Generare un numero a caso da 1 a 6 per l'user
4 Generare un numero a caso da 1 a 6 per il pc
5 confrontare i due risultati
  Se il numero dell'user è maggiore di quello del pc assegnare 1 punto all'user
  Se il numero del pc è maggiore di quello del pc assegnare 1 punto al pc
6 Se il punteggio di uno dei due giocatori è ugale a 2 decretare il vincitore
*/

alert("Per i tutor: email per iniziare lorem@boolean.com")

//email section

let loginEmail = ["lorem@boolean.com", "saragosagabriele@gmail.com", "pincopallo@boolean.com", "lorem@ipsum.net"];

let emailSend = document.getElementById("emailSend");

let emailInput = document.getElementById("emailInput")

let emailApproved;

let login = document.getElementById("login")

emailSend.addEventListener("click", function(){
    let email = document.getElementById("emailInput").value;

    let hidden = document.getElementById("hidden");

    emailApproved = "not ok"


    for (let i = 0; i < loginEmail.length; i++) {
        if (email == loginEmail[i]) {
            emailApproved = "ok"
          }
    }
    
    if (emailApproved == "ok") {
        
      hidden.style.display = "flex";

      login.style.display = "none";

    } else if (emailApproved == "not ok") {
        alert("Email non presente in archivio, riprova!")
    }
});

//email section end

//game section

let startGame = document.getElementById("startGame");

//lista dadi

let diceFaces = ['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>', '<i class="fa-solid fa-dice-three"></i>', '<i class="fa-solid fa-dice-four"></i>', '<i class="fa-solid fa-dice-five"></i>', '<i class="fa-solid fa-dice-six"></i>'];

//creo un contenitore per i dadi

let diceContainer = document.getElementById("diceContainer")


//genero randomicamente due dadi, uno per il giocatore l'altro per il pc quando premo il pulsante

startGame.addEventListener("click", function(){
  
  let userDice = diceFaces[Math.floor(Math.random() * diceFaces.length)];
  
  let pcDice = diceFaces[Math.floor(Math.random() * diceFaces.length)];
  
  //creo due contenitori per i risultati e genero il risultato in pagina

  let userDiceContainer = document.getElementById("userDiceContainer")

  userDiceContainer.innerHTML = `Il tuo risultato è ${userDice}`;

  let pcDiceContainer = document.getElementById("pcDiceContainer")

  pcDiceContainer.innerHTML = `Il risultato bot è ${pcDice}`;

  //controllo chi è il vincitore

  //genero una scritta personalizzata in base al vincitore

  let andWin = document.getElementById("andWin")

  let infoUser = diceFaces.indexOf(userDice);

  let infoPc = diceFaces.indexOf(pcDice);

  if(infoUser > infoPc) {

    andWin.innerHTML = "Il vincitore sei tu!";

  } else if (infoUser < infoPc) {

    andWin.innerHTML = "Le macchine hanno vinto!";

  } else if (infoUser == infoPc) {
    andWin.innerHTML = "Tu e il bot andate di paripasso con la fortuna!";
  }

});





