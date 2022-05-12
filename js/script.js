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






