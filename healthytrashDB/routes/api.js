const router = require('express').Router();



const apiUsuariosRouter = require('./api/usuarios');
const apiRecetasRouter = require('./api/recetas');
const apiCategoriasRouter = require('./api/categorias');
const apiBlogsRouter = require('./api/blog');

const { checkToken } = require('./middlewares')



router.use('/usuarios', apiUsuariosRouter);
router.use('/recetas', checkToken, apiRecetasRouter);
router.use('/categorias', checkToken, apiCategoriasRouter);
router.use('/blog', apiBlogsRouter);






module.exports = router;