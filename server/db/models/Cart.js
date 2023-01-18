const Sequelize = require("sequelize");
const db = require("../db");
const Products = require("./Products");

const Cart = db.define("cart", {
  product: [Products],
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart;
