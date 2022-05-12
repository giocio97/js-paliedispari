// Palidroma
// Chiedere all’utente di inserire una parola

const parolaUser = (prompt("inserisci una parola"));
console.log(parolaUser);
let parolaInversa = invertiParola (parolaUser);


if (parolaUser == parolaInversa){
    console.log('la tua parola è palindroma');
  } else {
    console.log('la tua parola non è palindroma');
  }



// // Creare una funzione per capire se la parola inserita è palindroma

function invertiParola(parolaUser){
    let parolaInversa = '';
  
    let i = parolaUser.length - 1;
  
    while (i >= 0) {
      parolaInversa += parolaUser[i];
      i--;
    }
  
    return parolaInversa;
  }






// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

