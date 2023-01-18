//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Products = require('./models/Products')
const Cart = require('./models/Cart')
const CartProducts = require('./models/CartProducts')

//associations could go here!
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Products, {through: CartProducts});
Products.belongsToMany(Cart, {through: CartProducts});

Cart.getProducts = async function(){
  const data = await Products.findAll({
    include : [
      {
        model: CartProducts,
      }
    ]
  })
  return data;
};

module.exports = {
  db,
  models: {
    User,
    Products,
    Cart,
    CartProducts,
  },
}
