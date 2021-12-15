// api/categorias
// fichero que maneja la ruta de los categorias
const router = require('express').Router();
const { getAllCategorias, getCategoriasById, createCategoria, deleteCategoriaById } = require('../../models/categorias.model');




router.get('/', async (req, res) => {
    try {
        const result = await getAllCategorias();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});



router.get('/:categoriasId', async (req, res) => {
    let result;
    try {
        result = await getCategoriasById(req.params.categoriasId);
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
        const result = await createCategoria(req.body);
        const resultId = await getCategoriasById(result.insertId)
        res.json(resultId);
    } catch (err) {
        res.json({ error: err.message })
    }
});

/* router.put('/', (req, res) => {
    res.send('Peticiones PUT sobre localHost 3000')
}); */

router.delete('/:categoriasId', async (req, res) => {
    try {
        const result = await deleteCategoriaById(req.params.categoriasId);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

module.exports = router; 