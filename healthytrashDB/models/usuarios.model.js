

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
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios WHERE id = ?', [usuarioId], (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        })
    })
}


const deleteById = (usuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from usuarios where id = ?', [usuarioId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}


module.exports = { getAll, create, getById, deleteById }


































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