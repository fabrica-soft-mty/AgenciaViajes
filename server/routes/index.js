const express = require('express');
const router = express.Router();
/*controladores */
const homeController = require('../controllers/homeController')
const nosotrosController = require('../controllers/nosotrosControllers');
const viajesController = require('../controllers/viajesControllers');
const testimonialesControllers = require('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesControllers.mostrarTestimoniales);
    //cuando se llena el formualrio

    router.post('/testimoniales', testimonialesControllers.agregarTestimonial);

    return router;
}