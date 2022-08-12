require('colors');
const { inquireMenu } = require('./helpers/inquirer');
const { pausa } = require('./helpers/mensajes');

const main = async () => {
	let opt = '';

	do {
		await inquireMenu();
	} while (opt !== '0');
};

console.clear();
main();
