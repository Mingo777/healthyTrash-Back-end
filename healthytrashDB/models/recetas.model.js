const { executeQuery, executeQueryOne } = require('../utils');


const getAll = () => {
    return executeQuery('select * from recetas');
};


const create = ({ nombre, ingredientes, fotos, descripcion, fecha_inscripcion }) => {
    return executeQuery('INSERT INTO recetas (nombre, ingredientes, fotos, descripcion, fecha_inscripcion) VALUES (?, ?, ?, ?, ?)', [nombre, ingredientes, fotos, descripcion, fecha_inscripcion]);
};





module.exports = { getAll, create }