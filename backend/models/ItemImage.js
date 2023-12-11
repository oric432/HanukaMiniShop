const pool = require("../utils/db");

class ItemImage {
  static getAllItemsImages() {
    const query = `SELECT * FROM items_images`;
    return pool.query(query);
  }

  static createItemImage(itemImageData) {
    const { itemID, imageID } = itemImageData;
    const query = `INSERT INTO items_images (itemID, imageID) VALUES (?, ?)`;

    return pool.query(query, [itemID, imageID]);
  }

  static updateItemImage(brandData) {
    const { id, itemID, imageID } = brandData;
    const query = `UPDATE items_images SET itemID = ?, imageID = ? WHERE id = ?`;

    return pool.query(query, [itemID, imageID, id]);
  }

  static deleteItemImage(brandData) {
    const { id } = brandData;
    const query = `DELETE FROM items_images WHERE id = ?`;

    return pool.query(query, [id]);
  }
}

module.exports = ItemImage;
