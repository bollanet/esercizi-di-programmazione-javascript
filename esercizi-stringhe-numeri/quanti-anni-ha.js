/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var currentYear = 2020;
var inputBirthyear = 1974;

var outputBirthyears = (currentYear-inputBirthyear);
var upto100 = 100-outputBirthyears;

console.log(`L'età della persona è ${outputBirthyears} e sono necessari ${upto100} anni per raggiugere i 100.`); 
