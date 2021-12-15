const { executeQuery, executeQueryOne } = require('../utils')


const getAllRecetas = () => {
    return executeQuery('select * from recetas');
};
const getRecetasByCategoria = (categoriaId) => {
    return executeQuery('SELECT * FROM recetas WHERE categoria_id = ?', [categoriaId])
}

const getRecetasById = (recetasId) => {
    return executeQueryOne('SELECT * FROM recetas WHERE id = ?', [recetasId]);
};

const createRecetas = ({ titulo, ingredientes, urlFotos, descripcion, Fecha_inscripcion, autor, modoDeCocinado }) => {
    return executeQuery('INSERT INTO recetas (titulo,ingredientes,urlFotos,descripcion,Fecha_inscripcion,autor,modoDeCocinado) VALUES (?,?,?,?,?,?,?)', [titulo, ingredientes, urlFotos, descripcion, Fecha_inscripcion, autor, modoDeCocinado])
};

const updateRecetas = (recetasId, { titulo, ingredientes, urlFotos, descripcion, Fecha_inscripcion, autor, modoDeCocinado }) => {
    return executeQuery('UPDATE recetas SET titulo =?,ingredientes = ?,urlFotos = ?,descripcion = ?,Fecha_inscripcion = ?, autor = ?, modoDeCocinado= ? WHERE id = ? ', [titulo, ingredientes, urlFotos, descripcion, Fecha_inscripcion, autor, modoDeCocinado, recetasId]);
}


const deleteRecetasById = (recetasId) => {
    return executeQuery('delete from recetas where id = ?', [recetasId]);
};




module.exports = {
    getAllRecetas, getRecetasById, createRecetas, updateRecetas, deleteRecetasById, getRecetasByCategoria
}
