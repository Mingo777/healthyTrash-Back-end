const router = require('express').Router();



const apiUsuariosRouter = require('./api/usuarios');
const apiRecetasRouter = require('./api/recetas');
const apiCategoriasRouter = require('./api/categorias');

const { checkToken } = require('./middlewares')



router.use('/usuarios', apiUsuariosRouter);
router.use('/recetas', checkToken, apiRecetasRouter);
router.use('/categorias', checkToken, apiCategoriasRouter);






module.exports = router;