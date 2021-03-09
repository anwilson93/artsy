const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { OrderDetail } = require("../../db/models");

//Add To Cart
router.post('/', asyncHandler(async(req, res) => {

    const {orderId, artProductId, artProductTitle, artProductPrice, quantity} = req.body
    const productInCart = await OrderDetail.create({orderId, artProductId, artProductTitle, artProductPrice, quantity});
    
    res.json({productInCart})
}))

//Delete from Cart
router.delete('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const cartItem = await OrderDetail.findByPk(req.params.id);
    await cartItem.destroy();
    res.json({message: 'Deleted'})
}))

module.exports = router;