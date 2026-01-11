const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.helloRoute);
routes.get('/niyi', lesson1Controller.niyiRoute);
routes.get('/tomi', lesson1Controller.tomiRoute);

module.exports = routes;