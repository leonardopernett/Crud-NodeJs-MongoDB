const express = require('express')
const router = express.Router();


const controlador =  require('../controller/RutaController.js')

//rutas
router.get('/', controlador.add)
router.post('/save', controlador.save)
router.get('/delete/:id',controlador.delete)
router.get('/done/:id',controlador.done)
router.get('/edit/:id',controlador.edit)
router.post('/update/:id',controlador.update)
module.exports = router 