

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

const create = ({ nombre, apellidos, email, password, username }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios(nombre,apellidos,email,password,username) VALUES(?,?,?,?,?)', [nombre, apellidos, email, password, username], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

const getById = (usuarioId) => {
    return executeQueryOne('SELECT * FROM usuarios WHERE id = ?', [usuarioId]);
}


module.exports = { getAll, create, getById }


































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