import {fetch} from './csrf.js';

const ADD_TO_CART = '/ADD_TO_CART';

const REMOVE_FROM_CART = '/REMOVE_FROM_CART';

const setAddProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

const removeFromCart = (id) => {
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
}


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
    dispatch(setAddProductToCart(res.data.productInCart))
}


export const removeItemFromCart = (id) => async(dispatch) => {
    await fetch(`/api/cart/${id}`, {
        method: 'DELETE'

    })
    dispatch(removeFromCart(id))
}


const reducer = (state={}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, [action.payload.id]: action.payload};
        case REMOVE_FROM_CART:
            const newState = {...state}
            delete newState[action.payload]
            return newState;
        default:
            return state;
    }

}

export default reducer;