
import { fetch } from './csrf.js';

const SET_ART_PRODUCTS = 'artProducts/setArtProducts';
const SET_ART_PRODUCT = 'artProduct/setArtProduct';

const initialState = {
    artProducts: [],
    oneArtProduct: []
};
const setArtProducts = (artProducts) => ({
  type: SET_ART_PRODUCTS,
  payload: artProducts
});

const setArtProduct = (artProduct) => ({
  type: SET_ART_PRODUCT,
  payload: artProduct
});


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



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ART_PRODUCTS:
      newState = Object.assign({}, state, { artProducts: action.payload });
      return newState;
    case SET_ART_PRODUCT:
      newState = Object.assign({}, state, { oneArtProduct: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;
