const { executeQuery, executeQueryOne } = require('../utils')

const getAll = () => {
    return executeQuery('select * from usuarios');
};

const create = ({ nombre, apellidos, email, password, username }) => {
    return executeQuery('INSERT INTO usuarios(nombre,apellidos,email,password,username) VALUES(?,?,?,?,?)', [nombre, apellidos, email, password, username]);
};

const getByEmail = (email) => {
    return executeQueryOne('SELECT * FROM usuarios WHERE email = ?', [email]);
};


const getById = (usuarioId) => {
    return executeQueryOne('SELECT * FROM usuarios WHERE id = ?', [usuarioId]);
};

const update = (usuarioId, { nombre, apellidos, email, password, username }) => {
    return executeQuery('UPDATE usuarios SET nombre =?,apellidos = ?,email = ?,password = ?,username = ? WHERE id = ? ', [nombre, apellidos, email, password, username, usuarioId]);
};


const deleteById = (usuarioId) => {
    return executeQuery('delete from usuarios where id = ?', [usuarioId]);
};


module.exports = { getAll, create, getById, deleteById, update, getByEmail }


































/* const { executeQuery, executeQueryOne } = require('../utils');










const create = ({ nombre, apellidos, email, password, username }) => {
    return executeQuery('insert into usuarios (nombre, username, email, password) values (?, ?, ?, ?)', [nombre, apellidos, email, password, username]);
}


const getByEmail = (email) => {
    return executeQueryOne('select * from usuarios where email = ?', [email]);
}

const getById = (usuarioId) => {
    return executeQueryOne('select * from usuarios where id = ?', [usuarioId]);
}




module.exports = { create, getByEmail, getById } */