const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/contactsController');

routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getSingleContact);
routes.post('/', contactsController.createContact);
routes.put('/:id', contactsController.updateContact);
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;
