const routes = require('express').Router();

routes.get('/', (req, res) => {
    // #swagger.tags = ['Hello World']
    res.send('Hello World');
});
routes.use('/contacts', require('./contacts'));
routes.use('/', require('./swagger'));

module.exports = routes;
