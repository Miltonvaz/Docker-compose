const { getPool } = require('../db');


// Obtener todos los items
const getAllItems = async () => {
    const pool = getPool();
    const result = await pool.query('SELECT * FROM person ORDER BY id');
    return result.rows;
};

// Crear un nuevo item
const createItem = async (name, description, price) => {
    const pool = getPool();
    const result = await pool.query(
        'INSERT INTO person (name, description, price) VALUES ($1, $2, $3) RETURNING *',
        [name, description, price]
    );
    return result.rows[0];
};

// Obtener un item por ID
const getItemById = async (id) => {
    const pool = getPool();
    const result = await pool.query('SELECT * FROM person WHERE id = $1', [id]);
    return result.rows[0];
};

// Actualizar un item
const updateItem = async (id, name, description, price) => {
    const pool = getPool();
    const result = await pool.query(
        'UPDATE person SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
        [name, description, price, id]
    );
    return result.rows[0];
};

// Eliminar un item
const deleteItem = async (id) => {
    const pool = getPool();
    await pool.query('DELETE FROM person WHERE id = $1', [id]);
    return { message: 'Item deleted successfully' };
};

module.exports = {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem,
};
