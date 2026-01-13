const routes = require('express').Router();
// const baseController = require('../controllers/baseController');

routes.get('/', (req, res) => { res.send('Hello World'); });

// routes.get('/', baseController.helloRoute);
// routes.get('/tomi', baseController.tomiRoute);
// routes.get('/niyi', baseController.niyiRoute);


module.exports = routes;