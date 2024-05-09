/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("-----------------------ESERCIZIO 1----------------------");

function area(l1, l2) {
  const result = (l1 * l2) / 2;
  console.log(result);
}
area(4, 8);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("-----------------------ESERCIZIO 2----------------------");

function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}
console.log("funzione con parametri diversi", crazySum(4, 6));
console.log("funzione con parametri uguali", crazySum(4, 4));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("-----------------------ESERCIZIO 3----------------------");

function crazyDiff(x) {
  let risultato = 0;
  if (x > 19) {
    risultato = (x - 19) * 3;
    return risultato;
  } else if (x <= 19) {
    risultato = x - 19;
    risultato = Math.abs(risultato);
    return risultato;
  }
}

console.log("funzione con parametro(25) > 19= ", crazyDiff(25));
console.log("funzione con parametro(10) < 19= ", crazyDiff(10));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("-----------------------ESERCIZIO 4----------------------");

function boundary(n) {
  if ((20 <= n && n <= 100) || n === 400) {
    console.log(
      "il numero è compreso tra 20 e 100 (incluso) oppure è uguale a 400."
    );
    return true;
  } else {
    console.log(
      "il numero NON è compreso tra 20 e 100 (incluso) oppure è uguale a 400."
    );
    return false;
  }
}
console.log(boundary(100));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("-----------------------ESERCIZIO 5----------------------");

function epify(string) {
  let controlla = string.indexOf("Epicode");
  let parola = "Epicode";
  if (string.indexOf("Epicode") === true) {
    return string;
  } else {
    const unione = parola.concat(string);
    return unione;
  }
}
console.log(epify("Epicode è incredibile"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("-----------------------ESERCIZIO 6----------------------");

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    console.log("il numero è un multiplo di 3 o di 7");
    return num;
  } else {
    console.log("il numero NON è multiplo di 3 o 7");
    return num;
  }
}
console.log(check3and7(12));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("-----------------------ESERCIZIO 7----------------------");

function reverseString(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("-----------------------ESERCIZIO 8----------------------");

function upperFirst(string) {
  console.log(string);

  let parole = string.split(" ");
  console.log("suddivisa la stringa in array= ", parole);

  for (let index = 0; index < parole.length; index++) {
    parole[index] =
      parole[index].charAt(0).toUpperCase() + parole[index].slice(1);
  }
  return parole.join(" ");
}
console.log(upperFirst("Ciao come va"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("-----------------------ESERCIZIO 9----------------------");

function cutString(string) {
  let caratteri = string.split("");
  console.log(caratteri);
  for (let index = 0; index < caratteri.length; index++) {
    if (caratteri[index] === 0) {
      caratteri[index] = caratteri[index].splice(0, 1);
    } else {
      caratteri.pop();
    }
  }
}
console.log(cutString("ibiza"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
