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

var timeHour = 1;
var timeMinutes = 60;
var timeSeconds = 3600;

var hour = Math.round(inputSeconds/timeSeconds-0.5);
var minutes = Math.round(inputSeconds/timeMinutes-0.5)-(hour*timeMinutes);
var seconds = Math.round(-hour*timeSeconds)+(-minutes*timeMinutes)+inputSeconds;

console.log(`${hour} ore, ${minutes} minuti e ${seconds} secondi.`);
