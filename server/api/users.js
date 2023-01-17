const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', 'password', 'firstName', 'lastName', 'email', 'phoneNumber', 'address']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ['id', 'username', 'password', 'firstName', 'lastName', 'email', 'phoneNumber', 'address']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// PUT /api/users/:userId
router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.update(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/users/:userId
router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.destroy()
    res.json(user)
  } catch (err) {
    next(err)
  }
})