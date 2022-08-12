const inquirer = require('inquirer');
require('colors');

const preguntas = [
	{
		type: 'list',
		name: 'opcion',
		message: '¿Que desea hacer?',
		choises: [
			{ value: '1', message: '1.Crear tarea' },

			{ value: '2', message: '2.Listar tareas' },

			{
				value: '3',
				message: '3.Listar tareas completadas',
			},

			{
				value: '4',
				message: '4.Listar tareas pendientes',
			},

			{
				value: '5',
				message: '5.Completar tarea(s)',
			},

			{ value: '6', message: '6.Borrar tarea' },

			{ value: '0', message: '0.Salir' },
		],
	},
];

const inquireMenu = async () => {
	console.clear();
	console.log('==========================='.blue);
	console.log('   Seleccione una opcion'.green);
	console.log('===========================\n'.blue);

	return inquirer
		.prompt([
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
		])
		.then((answers) => {
			console.info({ answers });
		});
};

module.exports = {
	inquireMenu,
};
