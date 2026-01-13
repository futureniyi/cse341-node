const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/contactsController');  

routes.get('/', contactsController.getAllContacts);
routes.get('/contacts/:id', contactsController.getSingleContact);

module.exports = routes;