// api/recetas

// fichero que maneja la ruta de las recetas
const router = require('express').Router();
const { getAllRecetas, getRecetasById, createRecetas, deleteRecetasById, updateRecetas, getRecetasByCategoria, getByUsuario } = require('../../models/recetas.model');
const { checkToken } = require('../middlewares');


router.get('/', async (req, res) => {
    try {
        console.log(req.user);
        const result = await getAllRecetas();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/:recetasId', async (req, res) => {
    let result;
    try {
        result = await getRecetasById(req.params.recetasId);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!result) {
        return res.json({ error: 'El id no es correcto' });
    }
    res.json(result);
});

router.get('/categoria/:categoriaId', async (req, res) => {
    let result;
    try {
        result = await getRecetasByCategoria(req.params.categoriaId);
        res.json(result);

    } catch (err) {
        res.json({ error: err.message })
    }
});

/* router.get('/profile', checkToken, async (req, res) => {
    const recetas = await getByUsuario(req.user.id);
    res.json(recetas);
}) */

router.post('/', async (req, res) => {
    try {
        const result = await createRecetas(req.body);
        const resultId = await getRecetasById(result.insertId)
        res.json(resultId);
    } catch (err) {
        res.json({ error: err.message })
    }
});



router.put('/:recetasId', async (req, res) => {
    try {
        const result = await updateRecetas(req.params.recetasId, req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

router.delete('/:recetasId', async (req, res) => {
    try {
        const result = await deleteRecetasById(req.params.recetasId);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router; 