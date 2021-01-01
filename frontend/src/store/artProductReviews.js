import { fetch } from './csrf.js';

const SET_ART_PRODUCT_REVIEWS = 'artProductReviews/setArtProductReviews';
const ADD_ART_PRODUCT_REVIEW = 'artProductReview/addArtProductReview';

const initialState = {
    artProductReviews: [],
    newArtProduct: []
};
const setArtProductReviews = (reviews) => ({
  type: SET_ART_PRODUCT_REVIEWS,
  payload: reviews
});

// const setArtProduct = (artProduct) => ({
//   type: SET_ART_PRODUCT,
//   payload: artProduct
// });

// GET ALL REVIEWS
export const fetchAllReviews = (id) => {
    return async (dispatch) => {
        const res = await fetch(`/api/reviews/${id}`)
        console.log('reviewssssss', res.data.artProductReviews)
        dispatch(
            setArtProductReviews(res.data.artProductReviews)
        );
    };
};

// CREATE REVIEW
export const createReview = (artProductReview) => async (dispatch) => {
   const { artProductId, userId, review } = artProductReview;
  console.log('rgtjoi', review)
  const res = await fetch(`/api/reviews/${artProductId}`, {
    method: 'POST',
     body: JSON.stringify({
            artProductId: artProductId,
            userId: userId,
            review: review
      })
  });
    dispatch(fetchAllReviews(artProductId))
    return res
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ART_PRODUCT_REVIEWS:
      newState = Object.assign({}, state, { artProductReviews: action.payload });
      return newState;
    // case SET_ART_PRODUCT:
    //   newState = Object.assign({}, state, { oneArtProduct: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;
