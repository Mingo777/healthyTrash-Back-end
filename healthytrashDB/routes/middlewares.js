const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/usuarios.model');


const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'debes incluir la cabezera de autorizacion' });
    }
    let obj
    try {
        const token = req.headers['authorization'];
        obj = jwt.verify(token, process.env.SECRET_KEY);

    } catch (err) {
        return res.status(401).json({ error: 'el token esta caducado o malamente' })
    }
    console.log(obj.expiredAt);
    if (dayjs().unix() > obj.expriredAt) {
        return res.status(401).json({ error: ' el token esta definitivamente caducado' });
    }
    const usuario = await getById(obj.usuarioId);
    req.user = usuario

    next();
}


module.exports = {
    checkToken
};
