const express = require('express');
const { ImageUrl, ArtProduct, Shop, ArtProductReview, User } = require('../../db/models');
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = req.params.id
  const artProductReviews = await ArtProductReview.findAll({
      where: {
        artProductId: id
      },
      include: User
  });
  return res.json({artProductReviews})
}));

router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { artProductId, userId, review } = req.body;
  console.log(req.body)
  const newReview = await ArtProductReview.create({ artProductId, userId, review });
  await newReview.save();
  return res.json({ newReview });
  }));





module.exports = router;