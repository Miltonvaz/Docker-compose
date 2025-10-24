const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Create a new item
router.post('/', itemsController.createItem);

// Get all items
router.get('/', itemsController.getItems);

// Get a single item by ID
router.get('/:id', itemsController.getItemById);

// Update an item by ID
router.put('/:id', itemsController.updateItem);

// Delete an item by ID
router.delete('/:id', itemsController.deleteItem);

module.exports = router;