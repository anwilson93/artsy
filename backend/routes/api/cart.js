const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { OrderDetail, ImageUrl, ArtProduct } = require("../../db/models");


router.post('/', asyncHandler(async(req, res) => {

    const {orderId, artProductId, artProductTitle, artProductPrice, quantity} = req.body
    const productInCart = await OrderDetail.create({orderId, artProductId, artProductTitle, artProductPrice, quantity});
    const productsInCart = await OrderDetail.findAll({
        where: {orderId},
        include: [
            {model: ArtProduct, 
                include: [{model: ImageUrl}]
            }
        ]
    })
    res.json({productsInCart})
}));


router.delete('/:orderDetailId(\\d+)', asyncHandler(async(req, res, next) => {
    const orderDetail = await OrderDetail.findByPk(req.params.orderDetailId);
    await orderDetail.destroy();
    res.json({message: 'Deleted'})
}));

// GET ALL CART ITEMS
router.get('/:orderId(\\d+)', asyncHandler(async(req, res) => {

    const orderId = req.params.orderId;
    const productsInCart = await OrderDetail.findAll({
        where: {orderId},
        include: [
            {model: ArtProduct, 
                include: [{model: ImageUrl}]
            }
        ]
    })
    

    // const artProductId = productsInCart.map(product => {
    //     return product.artProductId
    // })

    // const images = await ImageUrl.findAll({where: {artProductId},
    //   // TO STOP SEQUELIZE FROM RETURNING DATAVALUES OBJ
    //   raw: true})
    
    res.json({productsInCart})
}));

module.exports = router;