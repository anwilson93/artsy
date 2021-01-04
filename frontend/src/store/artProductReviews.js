import { fetch } from './csrf.js';

const SET_ART_PRODUCT_REVIEWS = 'artProductReviews/setArtProductReviews';
const SET_USER_REVIEWS = 'userReviews/setUserReviews';

const initialState = {
    artProductReviews: [],
    userReviews: []
};
const setArtProductReviews = (reviews) => ({
  type: SET_ART_PRODUCT_REVIEWS,
  payload: reviews
});

const setUserReviews = (reviews) => ({
  type: SET_USER_REVIEWS,
  payload: reviews
});


// GET ALL REVIEWS FOR PRODUCT
export const fetchAllReviews = (id) => {
    return async (dispatch) => {
        const res = await fetch(`/api/reviews/${id}`)
        console.log('reviewssssss', res.data.artProductReviews)
        dispatch(
            setArtProductReviews(res.data.artProductReviews)
        );
    };
};

// GET ALL OF USER'S REVIEWS
export const fetchAllUserReviews = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/reviews/user/${userId}`)
        dispatch(
            setUserReviews(res.data.userReviews)
        );
    };
};

// DELETE A USER REVIEW
export const deleteReview = (reviewId, userId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            reviewId
        })
    });
    dispatch(fetchAllUserReviews(userId))
    return res
};

// CREATE REVIEW
export const createReview = (artProductReview) => async (dispatch) => {
  const { artProductId, userId, review } = artProductReview;
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
    case SET_USER_REVIEWS:
      newState = Object.assign({}, state, { userReviews: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;
