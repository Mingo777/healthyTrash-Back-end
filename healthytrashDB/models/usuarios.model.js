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