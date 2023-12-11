const pool = require("../utils/db");

class Brand {
  static getAllBrands() {
    const query = `SELECT * FROM brands`;
    return pool.query(query);
  }

  static createBrand(brandData) {
    const { name, description, brandImage } = brandData;
    const query = `INSERT INTO brands (name, description, brandImage) VALUES (?, ?, ?)`;

    return pool.query(query, [name, description, brandImage]);
  }

  static updateBrand(brandData) {
    const { id: brandId, name, description, brandImage } = brandData;
    const query = `UPDATE brands SET name = ?, description = ?, brandImage = ? WHERE id = ?`;

    return pool.query(query, [name, description, brandImage, brandId]);
  }

  static deleteBrand(brandData) {
    const { id: brandId } = brandData;
    const query = `DELETE FROM brands WHERE id = ?`;

    return pool.query(query, [brandId]);
  }
}

module.exports = Brand;
