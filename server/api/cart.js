const router = require('express').Router();
const { models: { Cart } } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll();
    res.json(cart);
  } catch (err) {
    next(err);
  }
});
<<<<<<< Updated upstream

router.post('/cart', async (req, res, next) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});
=======
>>>>>>> Stashed changes
