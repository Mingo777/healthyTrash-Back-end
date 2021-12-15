// api/usuarios
// fichero que maneja la ruta de los usuarios
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { getAll, create, getById, deleteById, update } = require('../../models/usuarios.model');

//TODO // poner aqui middleware
router.get('/', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});
//TODO // poner aqui middleware
router.get('/:usuarioId', async (req, res) => {
    let result;
    try {
        result = await getById(req.params.usuarioId);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!result) {
        return res.json({ error: 'El id no es correcto' });
    }
    res.json(result);
});


router.post('/registro', async (req, res) => {
    try {
        const passwordEnc = bcrypt.hashSync(req.body.password);
        req.body.password = passwordEnc
    } catch (err) {
        res.json({ error: err.message })
    }
    try {
        const result = await create(req.body)
        const resultId = await getById(result.insertId)
        res.json(resultId);
    } catch (err) {
        res.json({ error: err.message })
    }
});



router.post('/login', (req, res) => {
    res.send('Funciona ruta login')
})


//TODO // poner aqui middleware
router.put('/:usuarioId', async (req, res) => {
    try {
        const result = await update(req.params.usuarioId, req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});
//TODO // poner aqui middleware
router.delete('/:usuarioId', async (req, res) => {
    try {
        const result = await deleteById(req.params.usuarioId);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

module.exports = router; 