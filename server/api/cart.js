const router = require('express').Router();
const { models: { Cart } } = require('../db');
module.exports = router;

router.get('/:cartId', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    // const products = await cart.getProducts()
    console.log('this is cart',cart);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.post('/:cartId', async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.put('/:cartId/:productId', async (req,res, next,) => {
  try{
    const cart = await Cart.findByPk(req.params.cartId);
    const cartProducts = await cartProducts.findOne({
      where: {
      cartId: cart.id,
      productId: req.params.productId,
      }, 
    })
    res.send(await cartProducts.update())
  }catch(err){
    console.log(err)
  }
})
