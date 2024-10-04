// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


let word = prompt("inserisci una parola");/* creo il prompt per far inserire la parola allo useer    */

const ch = word.split('');/* suddivido la parola in lettere */
console.log(ch);


const reverseCh = ch.reverse();/* inverto lordine dei caratteri */
console.log(reverseCh);


const reversedWord = reverseCh.join('');/* riunisco i caratteri in una stringa */
console.log(reversedWord);

function palindroma(word) {  /* inserisco la logica precedente nel blocco di codice */
    const ch = word.split('');
    const reverseCh = ch.reverse();
    const reversedWord = reverseCh.join('');

    if (word === reversedWord){ /* se la parola e' uguale dopo aver invertito i caratteri ==> e' palindroma */
        console.log("parola palindroma");
        
    }else{
        console.log("paola NOn palindroma");
        
    }
    
}
palindroma(word);








// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

let userChoice = prompt("scegli un numero pari o dispari");
let userNumber = Number( prompt("inseire un numero  compreso tra 1 e 5"));

// let randomNumber = Math.floor((Math.random()*5) +1);

function randomNumber (){
    return Math.floor((Math.random()*5) +1)
}

randomNumber()