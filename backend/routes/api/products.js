const express = require('express');
const { ImageUrl, ArtProduct, Shop } = require('../../db/models');
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
  const id = req.params.id
  const artProduct = await ArtProduct.findByPk(id, {
    include: Shop
  });
  return res.json({artProduct})
}));

router.get('/', asyncHandler(async (req, res) => {
  const artProducts = await ImageUrl.findAll({
      include: ArtProduct
  });
  return res.json({artProducts})
}));




module.exports = router;