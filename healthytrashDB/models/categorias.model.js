const { executeQuery, executeQueryOne } = require('../utils');


const getAllCategorias = () => {
    return executeQuery('Select * From categorias');
};

const getCategoriasById = (categoriasId) => {
    return executeQueryOne('SELECT * FROM categorias WHERE id = ?', [categoriasId]);
};

const createCategoria = ({ nombre }) => {
    return executeQuery('INSERT INTO categorias (nombre) VALUES (?)', [nombre]);
};


const deleteCategoriaById = (categoriasId) => {
    return executeQuery('delete from categorias where id = ?', [categoriasId]);
}



module.exports = {
    getAllCategorias, getCategoriasById, createCategoria, deleteCategoriaById
}