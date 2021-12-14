// api/usuarios
// fichero que maneja la ruta de los usuarios
const router = require('express').Router();
const { getAll, create, getById } = require('../../models/usuarios.model');


router.get('/', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }

});

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

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const result = await create(req.body)
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

router.put('/', (req, res) => {
    res.send('Peticiones PUT sobre localHost 3000')
});

router.delete('/', (req, res) => {
    res.send('Peticiones DELETE sobre localHost 3000')
});

module.exports = router; 