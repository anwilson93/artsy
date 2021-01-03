const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { ImageUrl, ArtProduct, Shop, ArtProductReview } = require('../../db/models');
const asyncHandler = require("express-async-handler");
const router = express.Router();

// GET PRODUCT BY ID
router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
  const id = req.params.id
  const artProduct = await ArtProduct.findByPk(id, {
    include: [
    {
      model: Shop
    },
    {
      model: ImageUrl
    },
    {
      model: ArtProductReview
    }
    ] 
  });
  
  return res.json({artProduct})
}));

// GET ALL PRODUCTS
router.get('/', asyncHandler(async (req, res) => {
  const artProducts = await ImageUrl.findAll({
      include: ArtProduct
  });
  return res.json({artProducts})
}));

// GET PRODUCTS WHERE DESCRIPTION, TITLE, OR CATEGORY MATCH SEARCH TERM
router.get('/:searchTerm', asyncHandler(async(req, res) => {
  const searchTerm = req.params.searchTerm
  const artProducts = await ArtProduct.findAll({
    where: {
      [Op.or]: {
      description: {
        [Op.iLike]: `%${searchTerm}`
      },
      title: {
        [Op.iLike]: `%${searchTerm}`
      },
      category: {
        [Op.iLike]: `%${searchTerm}`
      }
      }
    },
    include: ImageUrl
  });

  return res.json({artProducts})
}));




module.exports = router;