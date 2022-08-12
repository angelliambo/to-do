require('colors');

const mostrarMenu = () => {
	return new Promise((resolve, reject) => {
		console.clear();
		console.log('==========================='.blue);
		console.log('   Seleccione una opcion'.green);
		console.log('===========================\n'.blue);

		console.log(`${' 1.'.cyan} Crear tarea`);
		console.log(`${' 2.'.cyan} Listar todas las tareas`);
		console.log(`${' 3.'.cyan} Listar tareas completadas`);
		console.log(`${' 4.'.cyan} Listar tareas pendientes`);
		console.log(`${' 5.'.cyan} Completar tarea(s)`);
		console.log(`${' 6.'.cyan} Borrar tarea(s)`);
		console.log(`${' 0.'.cyan} Salir\n`);

		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question('Seleccione un opcion: ', (opt) => {
			readline.close();
			resolve(opt);
		});
	});
};

const pausa = () => {
	return new Promise((resolve, reject) => {
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readline.question(`\nPresione ${'Enter'.green}...\n`, (opt) => {
			readline.close();
			resolve();
		});
	});
};

module.exports = {
	mostrarMenu,
	pausa,
};
