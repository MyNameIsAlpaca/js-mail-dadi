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

let loginEmail = ["gabriele.saragosa@gmail.com", "saragosagabriele@gmail.com", "pincopallo@boolean.com", "lorem@ipsum.net"];

let emailSend = document.getElementById("emailSend");

let emailInput = document.getElementById("emailInput")

let emailApproved;



emailSend.addEventListener("click", function(){
    let email = document.getElementById("emailInput").value;

    emailApproved = "not ok"


    for (let i = 0; i < loginEmail.length; i++) {
        if (email == loginEmail[i]) {
            emailApproved = "ok"
          }
    }
    
    if (emailApproved == "ok") {
        
    } else if (emailApproved == "not ok") {
        alert("Email non presente in archivio")
    }

    console.log(emailApproved)
});
