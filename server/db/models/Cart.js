const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    quantity: {
        type: Sequelize.INTEGER,
        deafultValue: 10
      },
})

module.exports = Cart 