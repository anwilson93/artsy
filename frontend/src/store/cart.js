import {fetch} from './csrf.js';

const ADD_TO_CART = '/ADD_TO_CART';

const RETRIEVE_CART_PRODUCTS = '/RETRIEVE_CART_PRODUCTS';

const GET_IMAGES = '/GET_IMAGES';


const setAddProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

const setAllProductsInCart = (products) => ({
  type: RETRIEVE_CART_PRODUCTS,
  payload: products
});

// const setAllImages = (images) => ({
//   type: GET_IMAGES,
//   payload: images
// });


export const addProductToCart = (body) => async(dispatch) => {
  
    const {orderId, artProductId, artProductTitle, artProductPrice, quantity} = body

    const res = await fetch(`/api/cart`, {
        method: 'POST',
        body: JSON.stringify({
            orderId,
            artProductId,
            artProductTitle,
            artProductPrice,
            quantity
        })
    })
    dispatch(setAddProductToCart(res.data.productsInCart))
}


export const removeProductFromCart = (orderDetailId, orderId) => async(dispatch) => {
    await fetch(`/api/cart/${orderDetailId}`, {
        method: 'DELETE'
    })
    dispatch(getAllCartProducts(orderId))
}


export const getAllCartProducts = (orderId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/cart/${orderId}`)
     
        dispatch(
            setAllProductsInCart(res.data.productsInCart)
        );
    };
};



const reducer = (state={}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state,  ['cart']: action.payload};
        case RETRIEVE_CART_PRODUCTS:
            return {...state,  ['cart']: action.payload};
        default:
            return state;
    }

}

export default reducer;