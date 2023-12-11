const pool = require("../utils/db");

class Image {
  static getAllImages() {
    const query = `SELECT * FROM images`;
    return pool.query(query);
  }

  static createImage(imageData) {
    const { name, description } = imageData;
    const query = `INSERT INTO images (name, description) VALUES (?, ?)`;

    return pool.query(query, [name, description]);
  }

  static updateImage(imageData) {
    const { id, name, description } = imageData;
    const query = `UPDATE images SET name = ?, description = ? WHERE id = id`;

    return pool.query(query, [name, description, id]);
  }

  static deleteImage(imageData) {
    const { id } = imageData;
    const query = `DELETE FROM images WHERE id = ?`;

    return pool.query(query, [id]);
  }
}

module.exports = Image;
