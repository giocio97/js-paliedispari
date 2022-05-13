
// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const numeroUser = parseInt(prompt("inserisci un numero da 1 a 5"));
const sceltaUser = (prompt("scegli pari o dispari"));
console.log(`numero utente`,numeroUser);
let numeroRandomPC = numeroPc();


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroPc (){
    let numeroRandomPC = Math.floor(Math.random() * 5) +1;
    console.log( `numero pc`, numeroRandomPC);

   
    return numeroRandomPC;
} 
 // Sommiamo i due numeri
 



// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariodispari () {
   
    if(somma % 2 == 0 && sceltaUser == "pari"){
        console.log("hai vinto! è uscito pari.");
    }  else if(somma % 2 !== 0 && sceltaUser == "pari"){
        console.log("hai perso! è uscito dispari.");
    } else if(somma % 2 == 0 && sceltaUser == "dispari"){
        console.log("hai perso! è uscito pari.");
    } else {
        console.log("hai vinto! è uscito dispari.");
    }

}

// Dichiariamo chi ha vinto.
let somma = numeroUser + numeroPc () ;
console.log(`somma`,somma);
let vincitore = pariodispari () ;

