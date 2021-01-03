import { fetch } from './csrf.js';

const SET_SEARCHED_PRODUCTS = 'artProductSearch/setArtProductSearch';

const initialState = {
    searchedProducts: [],
};

const setSearchedArtProducts = (products) => ({
  type: SET_SEARCHED_PRODUCTS,
  payload: products
});

// SEARCH 
export const search = (search) => {
    const {searchTerm} = search
    return async (dispatch) => {
        const res = await fetch(`/api/products/${searchTerm}`)
        console.log('searchhhhhhhhh', res.data.artProducts)
        dispatch(
            setSearchedArtProducts(res.data.artProducts)
        );
    };
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_SEARCHED_PRODUCTS:
      newState = Object.assign({}, state, { searchedProducts: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;