const { getPool } = require('../db');

const getAllItems = async () => {
  const pool = getPool();
  const result = await pool.query('SELECT * FROM estudiantes ORDER BY id');
  return result.rows;
};

const createItem = async (name, description, price) => {
  const pool = getPool();
  const result = await pool.query(
    'INSERT INTO estudiantes (name, description, price) VALUES ($1, $2, $3) RETURNING *',
    [name, description, price]
  );
  return result.rows[0];
};

const getItemById = async (id) => {
  const pool = getPool();
  const result = await pool.query('SELECT * FROM estudiantes WHERE id = $1', [id]);
  return result.rows[0];
};
const updateItem = async (id, name, description, price) => {
  const pool = getPool();
  const result = await pool.query(
    'UPDATE estudiantes SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
    [name, description, price, id]
  );
  return result.rows[0];
};

const deleteItem = async (id) => {
  const pool = getPool();
  await pool.query('DELETE FROM estudiantes WHERE id = $1', [id]);
  return { message: 'Item deleted successfully' };
};

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};