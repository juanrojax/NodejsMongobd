//Crear rutas 
const router = require('express').Router();

router.get('/users/signin', (req, res)=>{
    res.send('Ingresando a la App');
});

router.get('/users/signup', (req, res)=>{
    res.send('Formulario de Autenticación');
});

module.exports = router;