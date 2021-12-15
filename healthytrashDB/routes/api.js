const router = require('express').Router();



const apiUsuariosRouter = require('./api/usuarios');
const apiRecetasRouter = require('./api/recetas');
const apiCategoriasRouter = require('./api/categorias');


router.use('/usuarios', apiUsuariosRouter);
router.use('/recetas', apiRecetasRouter);
router.use('/categorias', apiCategoriasRouter);






module.exports = router;