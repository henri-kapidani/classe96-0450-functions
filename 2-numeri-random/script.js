/*
generare 10 numeri random tra 1 e 6 inclusi (con un for o con un while) attraverso
una funzione (copiamola da w3schools) e stamparli a schermo
*/

for (let i = 0; i < 10; i++) {
	// generare un numero random
	const randomNumUser = getRandomInteger(1, 6);
	const randomNumComputer = getRandomInteger(1, 6);

	if (randomNumUser > randomNumComputer) {
		console.log(i, 'Hai vinto', randomNumUser, randomNumComputer);
	} else {
		console.log(i, 'Hai perso', randomNumUser, randomNumComputer);
	}
}

for (let i = 0; i < 5; i++) {
	// generare un numero random
	const randomNumUser = getRandomInteger(1, 6);
	const randomNumComputer = getRandomInteger(1, 6);

	if (randomNumUser > randomNumComputer) {
		console.log(i, 'Hai vinto', randomNumUser, randomNumComputer);
	} else {
		console.log(i, 'Hai perso', randomNumUser, randomNumComputer);
	}
}

console.log('Il tuo numero random e\' ', getRandomInteger(50, 60));


function getRandomInteger(min, max) {
	const random = Math.floor(Math.random() * (max - min + 1) ) + min;
	return random;
}