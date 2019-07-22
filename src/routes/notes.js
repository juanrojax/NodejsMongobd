//Crear rutas 
const router = require('express').Router();

router.get('/notes', (req, res)=>{
    res.send('Notas para Base de Datos');
})

module.exports = router;