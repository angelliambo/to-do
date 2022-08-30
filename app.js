require('colors');
const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
	let opt = '';
	const tareas = new Tareas();

	do {
		await inquireMenu().then((answers) => {
			switch (answers) {
				case '1.Crear tarea':
					// console.log(tareas._listado);}
					const desc = leerInput('Descripcion: ');
					console.log(desc);
					break;

				case '2.Listar tareas':
					console.log(tareas._listado);
					break;

				case '3.Listar tareas completadas':
					console.log(tareas._listado);
					break;

				case '4.Listar tareas pendientes':
					console.log(tareas._listado);
					break;

				case '5.Completar tarea(s)':
					console.log(tareas._listado);
					break;

				case '6.Borrar tarea':
					console.log(tareas._listado);
					break;

				case '0.Salir':
					console.log(tareas._listado);
					break;
				default:
					console.log(tareas.listado);
					break;
			}
		});

		await pausa();
	} while (opt !== '0.Salir');
};

console.clear();
main();
