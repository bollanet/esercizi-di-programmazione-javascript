/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var inputSeconds = 12560;

var hour = Math.round(inputSeconds/3600-0.5);
var minutes = Math.round(inputSeconds/60-0.5)-(hour*60);
var seconds = Math.round(-hour*3600)+(-minutes*60)+inputSeconds;

console.log(`${hour} ore, ${minutes} minuti e ${seconds} secondi.`);
