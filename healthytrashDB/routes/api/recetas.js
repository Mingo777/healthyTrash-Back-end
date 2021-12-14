// api/recetas
// fichero que maneja la ruta de las recetas
const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Peticiones GET sobre localHost 3000/api/recetas')
});

router.post('/', (req, res) => {
    res.send('Peticiones POST sobre localHost 3000')
});

router.put('/', (req, res) => {
    res.send('Peticiones PUT sobre localHost 3000')
});

router.delete('/', (req, res) => {
    res.send('Peticiones DELETE sobre localHost 3000')
});

module.exports = router; 