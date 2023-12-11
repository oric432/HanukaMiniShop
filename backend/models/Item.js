const pool = require("../utils/db");

class Item {
  static getAllItems() {
    const query = `SELECT * FROM items`;
    return pool.query(query);
  }

  static createItem(itemData) {
    const { sid, catID, brandID, name, description, price } = itemData;
    const query = `INSERT INTO items (sid, catID, brandID, name, description, price) VALUES (?, ?, ?, ?, ?, ?)`;

    return pool.query(query, [sid, catID, brandID, name, description, price]);
  }

  static updateItem(itemData) {
    const { id, sid, catID, brandID, name, description, price } = itemData;
    const query = `UPDATE items SET sid = ?, catID = ?, brandID = ?, name = ?, description = ?, price = ? WHERE id = ?`;

    return pool.query(query, [
      sid,
      catID,
      brandID,
      name,
      description,
      price,
      id,
    ]);
  }

  static deleteItem(itemData) {
    const { id } = itemData;
    const query = `DELETE FROM items WHERE id = ?`;

    return pool.query(query, [id]);
  }
}

module.exports = Item;
