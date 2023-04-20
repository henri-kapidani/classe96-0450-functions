// function sommaNumeri(num1, num2) {
// 	// let num1 = 5;
// 	// let num2 = 7;
//		// resto del codice
// }

const varGlobale = 'ciao';

console.log('Posizione A: ', somma2Numeri(50, 50));

// const varGlobale = 'ciao'; // da errore

const grandeCalcolo = 5 + 5 + somma2Numeri(10, 20) * 2 + somma2Numeri(50, 50);

console.log('Posizione B: ', grandeCalcolo);

somma2Numeri();


/* la definizione si puo' mettere sia prima dell'utilizzo che dopo
	perche' le funzioni vengono scoperte nella fase di preanalisi del codice */
function somma2Numeri(num1, num2) {
	const sum = num1 + num2;
	console.log('Posizione C (funzione): ', sum);
	console.log('Posizione D (funzione): ', varGlobale);
	return sum; // qui finisce la funzione
	console.log('dopo il return'); // codice irragiungibile
}