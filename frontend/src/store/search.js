import { fetch } from './csrf.js';
// import {fetchAllProducts} from './artProducts';

const SET_SEARCHED_PRODUCTS = 'artProductSearch/setArtProductSearch';
const SET_SEARCHED_PRODUCTS_RESULTS_TO_NONE = 'artProductSearch/setArtProductSearchToNone';

const initialState = {
    searchedProducts: [],
};

const setSearchedArtProducts = (products) => ({
  type: SET_SEARCHED_PRODUCTS,
  payload: products
});

const setSearchedArtProductsToNone = (boolean) => ({
  type: SET_SEARCHED_PRODUCTS_RESULTS_TO_NONE,
  payload: boolean
});

// SEARCH 
export const search = (search) => {
    const {searchTerm} = search
    return async (dispatch) => {
        const res = await fetch(`/api/products/${searchTerm}`)
      
        if (res.data.artProducts.length === 0) {
          dispatch(setSearchedArtProductsToNone(true))
        } else {
            dispatch(setSearchedArtProducts(res.data.artProducts))
            dispatch(setSearchedArtProductsToNone(false))
        }
    };
};

export const resetSearch = (boolean) => {

  // need to reset search once home button is clicked so that user will see
  // all product listings
  return async (dispatch) => {
    dispatch(setSearchedArtProductsToNone(boolean))
    dispatch(setSearchedArtProducts([]))
  }
}

export const clearSearch = () => {

  return async (dispatch) => {
    dispatch(setSearchedArtProducts([]))
  }
}


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_SEARCHED_PRODUCTS:
      newState = Object.assign({}, state, { searchedProducts: action.payload });
      return newState;
    case SET_SEARCHED_PRODUCTS_RESULTS_TO_NONE:
      newState = Object.assign({}, state, { noProducts: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;