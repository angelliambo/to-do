const inquirer = require('inquirer');
require('colors');

const inquireMenu = async () => {
	console.clear();
	console.log('==========================='.blue);
	console.log('   Seleccione una opcion'.green);
	console.log('===========================\n'.blue);

	return inquirer.prompt([
		{
			type: 'list',
			name: 'opcion',
			message: '¿Que desea hacer?',
			choices: [
				{ key: '1', value: '1.Crear tarea' },

				{ key: '2', value: '2.Listar tareas' },

				{
					key: '3',
					value: '3.Listar tareas completadas',
				},

				{
					key: '4',
					value: '4.Listar tareas pendientes',
				},

				{
					key: '5',
					value: '5.Completar tarea(s)',
				},

				{ key: '6', value: '6.Borrar tarea' },

				{ key: '0', value: '0.Salir' },
			],
		},
	]);
};

const pausa = async () => {
	console.log('\n');
	const enter = inquirer.prompt([
		{
			type: 'input',
			name: 'enter',
			message: `Presione ${'Enter'.green} para continuar`,
		},
	]);
	return enter;
};

const leerInput = async (message) => {
	console.log('\n');
	const question = inquirer.prompt([
		{
			type: 'input',
			name: 'descripcion',
			message,
			validate(value) {
				if (this.validate.length === 0) {
					return `${'ERROR: '.red} por favor, ingrese un valor`;
				}
				return true;
			},
		},
	]);
	const { descripcion } = await inquirer.prompt(question);
	return descripcion;
};

module.exports = {
	inquireMenu,
	pausa,
	leerInput,
};
