const Sequelize = require("sequelize");
const db = require("../db");

const CartProducts = db.define("cartProducts", {
 quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
 }

});

module.exports = CartProducts;
