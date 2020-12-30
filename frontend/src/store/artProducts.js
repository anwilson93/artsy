import { fetch } from './csrf.js';

const SET_ART_PRODUCTS = 'artProducts/setArtProducts';

// action creator that produces obj
const setArtProducts = (art) => ({
  type: SET_ART_PRODUCTS,
  payload: art
});

//thunk
export const fetchAllProducts = () => {
    return async (dispatch) => {
        const res = await fetch('/api/products')
        dispatch(
            setArtProducts(res.data.artProducts)
        );
    };
};


const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ART_PRODUCTS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default reducer;
