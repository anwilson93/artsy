import { fetch } from './csrf.js';

const SET_ART_PRODUCTS = 'artProducts/setArtProducts';
const SET_ART_PRODUCT = 'artProduct/setArtProduct';

// action creator that produces obj
const setArtProducts = (art) => ({
  type: SET_ART_PRODUCTS,
  payload: art
});

const setArtProduct = (art) => ({
  type: SET_ART_PRODUCT,
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

export const fetchOneProduct = (id) => {
    return async (dispatch) => {
        const res = await fetch(`/api/products/${id}`)
        dispatch(
            setArtProduct(res.data.artProduct)
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
    case SET_ART_PRODUCT:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default reducer;
