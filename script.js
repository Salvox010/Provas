let saldo = 1000;

function gioca() {
  const puntata = parseInt(document.getElementById('puntata').value);
  const scelta = document.getElementById('scelta').value;
  const risultato = document.getElementById('risultato');
  
  if (puntata > saldo) {
    risultato.textContent = "Saldo insufficiente!";
    return;
  }
  
  // Simulazione della ruota della roulette
  const numeri = [
    { numero: 0, colore: 'verde' }, 
    { numero: 32, colore: 'rosso' }, { numero: 15, colore: 'nero' }, 
    { numero: 19, colore: 'rosso' }, { numero: 4, colore: 'nero' }, 
    { numero: 21, colore: 'rosso' }, { numero: 2, colore: 'nero' }, 
    { numero: 25, colore: 'rosso' }, { numero: 17, colore: 'nero' }, 
    { numero: 34, colore: 'rosso' }, { numero: 6, colore: 'nero' },
    { numero: 27, colore: 'rosso' }, { numero: 13, colore: 'nero' },
    { numero: 36, colore: 'rosso' }, { numero: 11, colore: 'nero' }
  ];
  
  // Generazione numero casuale
  const risultatoRuota = numeri[Math.floor(Math.random() * numeri.length)];
  const numeroVincente = risultatoRuota.numero;
  const coloreVincente = risultatoRuota.colore;
  
  // Controllo della vincita
  let vincita = 0;
  if (scelta === "rosso" && coloreVincente === "rosso") {
    vincita = puntata;
  } else if (scelta === "nero" && coloreVincente === "nero") {
    vincita = puntata;
  } else if (scelta === "pari" && numeroVincente % 2 === 0) {
    vincita = puntata;
  } else if (scelta === "dispari" && numeroVincente % 2 !== 0) {
    vincita = puntata;
  } else if (scelta === "numero" && numeroVincente === parseInt(prompt("Scegli un numero tra 0 e 36:"))) {
    vincita = puntata * 35; // Moltiplicatore per numero
  } else {
    vincita = -puntata; // Perdita
  }
  
  saldo += vincita;
  if (saldo < 0) saldo = 0;  // Limita il saldo a 0
  
  // Visualizzazione risultato
  risultato.textContent = `Numero Vincente: ${numeroVincente} (${coloreVincente}) | Saldo: ${saldo} unità`;
  document.getElementById('saldo').textContent = saldo;
}
