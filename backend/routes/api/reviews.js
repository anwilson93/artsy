const express = require('express');
const { ImageUrl, ArtProduct, ShopReview, ArtProductReview, User} = require('../../db/models');
const asyncHandler = require("express-async-handler");
const router = express.Router();

// GET ALL REVIEWS FOR A PRODUCT
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

// CREATE REVIEW
router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { artProductId, userId, review } = req.body;
  console.log(req.body)
  const newReview = await ArtProductReview.create({ artProductId, userId, review });
  await newReview.save();
  return res.json({ newReview });
  }));

// GET ALL USER REVIEWS
router.get('/user/:userId(\\d+)', asyncHandler(async (req, res) => {
  const userId = req.params.userId
  const userReviews = await ArtProductReview.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: ArtProduct
        },
        {
        model: User
        }
    ]
  });
  return res.json({userReviews})
}));

// DELETE A USER REVIEW
router.delete('/:reviewId', asyncHandler(async (req, res) => {
    const { reviewId } = req.body;
    const deleteReview = await ArtProductReview.findByPk(reviewId);
    await deleteReview.destroy();
    return res.json({ deleteReview });
}));





module.exports = router;