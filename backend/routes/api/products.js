const express = require('express');
const { ImageUrl, ArtProduct } = require('../../db/models');
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const artProducts = await ImageUrl.findAll({
      include: ArtProduct
  });
  return res.json({artProducts})
}));

module.exports = router;