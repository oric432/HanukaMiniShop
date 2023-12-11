const pool = require("../utils/db");

class Category {
  static getAllCategories() {
    const query = `SELECT * FROM categories`;
    return pool.query(query);
  }

  static createCategory(categoryData) {
    const { name, description, catImage } = categoryData;
    const query = `INSERT INTO categories (name, description, catImage) VALUES (?, ?, ?)`;

    return pool.query(query, [name, description, catImage]);
  }

  static updateCategory(categoryData) {
    const { id, name, description, catImage } = categoryData;
    const query = `UPDATE categories SET name = ?, description = ?, catImage = ? WHERE id = ?`;

    return pool.query(query, [name, description, catImage, id]);
  }

  static deleteCategory(categoryData) {
    const { id } = categoryData;
    const query = `DELETE FROM categories WHERE id = ?`;

    return pool.query(query, [id]);
  }
}

module.exports = Category;
