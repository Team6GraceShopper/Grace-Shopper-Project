const router = require('express').Router();
const { models: { Products, CartProducts } } = require('../db');
module.exports = router;

// GET /api/products
router.get('/', async (req, res, next) => {
    try {
      const products = await Products.findAll({
        attributes: ['id', 'name', 'price', 'imgUrl', 'inStock', 'description', 'quantity', 'category', 'rating']
      });
      res.json(products);
    } catch (err) {
      next(err);
    }
  });

// GET /api/products/:productId
router.get('/:productId', async (req, res, next) => {
    try {
      const product = await Products.findByPk(req.params.productId, {
        attributes: ['id', 'name', 'price', 'imgUrl', 'inStock', 'description', 'quantity', 'category', 'rating']
      });
      res.json(product);
    } catch (err) {
      next(err);
    }
  });

// POST /api/products
router.post('/', async (req, res, next) => {
    try {
      const product = await Products.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  });

// PUT /api/products/:productId
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.productId);
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:productId
router.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.productId);
    await product.destroy();
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/:productId/:cartId', async (req,res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    const cartItem = await CartProducts.findOne({
    where: {
    cartId: cart.id,
    productId: req.params.productId,
    },
    });
    //First need to check if item is already in cart. If it is, add to the quantity.
    if (cartItem) {
    res.send(
    await cartItem.update({
    quantity: cartItem.quantity+1,
    })
    );
    // Else, create a new CartItem
    } else {
    let newCartItem = await CartProducts.create({
    quantity: 1,
    productId: req.params.productId,
    cartId: req.params.cartId,
    });
    res.send(await newCartItem);
    }
    } catch (error) {
    console.log(error);
    }
})
  
