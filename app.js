require('colors');
const { inquireMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
	let opt = '';

	do {
		await inquireMenu();
		await pausa();
	} while (opt !== '0.Salir');
};

console.clear();
main();
