// Chiedo età;
var anni = parseInt(prompt('Quanti anni hai?'));
// Chiedo km;
var km = parseFloat(prompt('Quanti kilometri vuoi percorrere?'));
// Prezzo biglietto x km;
var prezzo = 0.21;
// Calcolo prezzo biglietto;
var prezzoBiglietto = km * prezzo;

// Calcolo sconti per fasce d'età;
if (anni < 18) {
    alert("Il prezzo del tuo biglietto è €" + (prezzoBiglietto - ((prezzoBiglietto * 20) /100) + " perchè sei minorenne"));
  } else if (anni > 65) {
    alert("Il prezzo del tuo biglietto è €" + (prezzoBiglietto - (prezzoBiglietto * 40) /100 + " perchè sei vecchia"));
  } else {
    alert("Il prezzo del tuo biglietto è €" + prezzoBiglietto);
  }