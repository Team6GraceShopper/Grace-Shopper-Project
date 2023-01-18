const Sequelize = require("sequelize");
const db = require("../db");

const Products = db.define("products", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.pngkey.com/png/detail/966-9667252_raygun-weapon-weaponx-scifi-alien-galactic-space-ray.png",
  },
  inStock: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "All",
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Products;
