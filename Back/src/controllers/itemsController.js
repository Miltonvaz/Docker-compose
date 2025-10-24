
const ItemService = require('../services/itemService');

exports.createItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newItem = await ItemService.createItem(name, description, price);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los items
exports.getItems = async (req, res) => {
  try {
    const items = await ItemService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await ItemService.getItemById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updatedItem = await ItemService.updateItem(req.params.id, name, description, price);
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await ItemService.deleteItem(req.params.id);
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
