/*
scrivere una funzione per verificare se un numero è pari o dispari,
quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/


// const num = parseInt(prompt('Dammi un numero')); // 10
// if (num % 2 == 0) {
// 	console.log('pari');
// } else {
// 	console.log('dispari');
// }



// const num = parseInt(prompt('Dammi un numero')); // 10
// printDivisibility(15);
// console.log('num fuori da function:', num);
// function printDivisibility(num) { // 15
// 	console.log('num in function:', num);
// 	if (num % 2 == 0) {
// 		console.log('pari');
// 	} else {
// 		console.log('dispari');
// 	}
// }




const num = parseInt(prompt('Dammi un numero')); // 10
// debugger
if (isEven(num)) {
	console.log('pari');
} else {
	console.log('dispari');
}


saluta('hello');

// function isEven(number) {
// 	if (number % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function isEven(number) {
// 	if (number % 2 == 0) {
// 		return true;
// 	}
// 	return false;
// }

function isEven(number) {
	return number % 2 == 0;
}

function saluta(greeting) {
	console.log(greeting);
}
