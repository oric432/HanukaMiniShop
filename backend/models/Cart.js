const pool = require("../utils/db");

class Cart {
  static getAllCarts() {
    const query = `SELECT * FROM cart`;
    return pool.query(query);
  }

  static createCart(cartData) {
    const { cartID, itemID, itemCount } = cartData;
    const query = `INSERT INTO cart (cartID, itemID, itemCount) VALUES (?, ?, ?)`;

    return pool.query(query, [cartID, itemID, itemCount]);
  }

  static updateCart(cartData) {
    const { id, cartID, itemID, itemCount } = cartData;
    const query = `UPDATE cart SET cartID = ?, itemID = ?, itemCount = ? WHERE id = ?`;

    return pool.query(query, [cartID, itemID, itemCount, id]);
  }

  static deleteCart(cartData) {
    const { id } = cartData;
    const query = `DELETE FROM cart WHERE id = ?`;

    return pool.query(query, [id]);
  }
}

module.exports = Cart;
