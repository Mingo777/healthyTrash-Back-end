const router = require('express').Router();



const apiUsuariosRouter = require('./api/usuarios');
const apiRecetasRouter = require('./api/recetas');


router.use('/usuarios', apiUsuariosRouter);
router.use('/recetas', apiRecetasRouter);





/* http://localhost:3000/api/ */
/* router.get('/', (req, res) => {
    res.send('hola mundo');
}); */

/* http://localhost:3000/api/usuarios */
/* router.get('/usuarios', (req, res) => {
    res.send('obtengo todos los usuarios')
}) */



module.exports = router;