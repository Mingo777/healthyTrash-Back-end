

const router = require('express').Router();


router.get('/', (req, res) => {
    res.end('Peticiones GET sobre localHost 3000')
})

module.exports = router;