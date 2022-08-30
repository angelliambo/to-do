const { v4: uuidv4 } = require('uuid');
const Tarea = require('./tarea');

class Tareas {
	_listado = {};

	constructor(descripcion) {
		this._listado = {};
	}

	crearTarea(descripcion = '') {
		const tarea = new Tarea(descripcion);
		this._listado[tarea.id] = tarea;
	}
}

module.exports = Tareas;
