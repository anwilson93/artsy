import { useSelector, useDispatch} from "react-redux";
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {getAllCartProducts, removeProductFromCart} from "../../store/cart";
import './ViewShoppingCart.css';


function ViewShoppingCart(){
    // const cartItems = useSelector(state => Object.values(state.cart));
    const dispatch = useDispatch();
    let history = useHistory();

    const orderId = useSelector(state => {
        return state.session.cartId
    });

    const removeFromCart = (orderDetailId) => {
        dispatch(removeProductFromCart(orderDetailId, orderId));
    }

    useEffect (() => {
        dispatch(getAllCartProducts(orderId))
    }, [dispatch])

    let products = useSelector(state => {
        return state.cart.cart
    });

    const sessionUser = useSelector(state => state.session.user);
    let total = 0


    if(!products || !sessionUser){
        return (
            <div className='shopping-cart-heading-container'>
                <h1 className='shopping-cart-heading'> 0 items in your cart </h1>
                {/* <button id='keep-shopping-button'><Link to='/' style={{textDecoration: 'none', color: 'black'}}> Keep shopping</Link></button> */}
                <button id='keep-shopping-button' onClick={() => history.push(`/`)}>Keep shopping</button>
            </div>
        )
    } else {

    return(
        <>
            <div className='shopping-cart-heading-container'>
                    <h1 className='shopping-cart-heading'> {products.length} item(s) in your cart </h1>
                    {/* <button id='keep-shopping-button'><Link to='/' style={{textDecoration: 'none', color: 'black'}}> Keep shopping</Link></button> */}
                    <button id='keep-shopping-button' onClick={() => history.push(`/`)}>Keep shopping</button>
                </div>
            <div className='make-flex'>
            <div className='shopping-cart-container'>
                {/* <div className='shopping-cart-heading-container'>
                    <h1 className='add-margin shopping-cart-heading'> {products.length} item(s) in your cart </h1>
                    <button id='keep-shopping-button'><Link to='/' style={{textDecoration: 'none', color: 'black'}}> Keep shopping</Link></button>
                    <button id='keep-shopping-button' onClick={() => history.push(`/`)}>Keep shopping</button>
                </div> */}
                {products && products.map(product => {
                    let currentImage = product.ArtProduct.ImageUrls[0]
                    let price = product.artProductPrice
                    total+=price
                    
                    return (
                        <>
                            <div className='individual-cart-product-container'>
                                <div className='div-for-image' onClick={() => history.push(`/products/${product.artProductId}`)}>
                                    
                                    <img className="images" src={currentImage.url} alt={product.artProductTitle} />
                                </div>
                                <div className='div-for-title' onClick={() => history.push(`/products/${product.artProductId}`)}>
                                    {product.artProductTitle}
                                </div>
                                <div className='div-for-price'>
                                    <div className='price'>
                                        ${product.artProductPrice}
                                    </div>
                                    <div>
                                        <button className='remove' onClick={() => removeFromCart(product.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
            <div className='cart-total-div'>
                item(s) total ${total}
            </div>
            </div>
        </>
    )
    }
}

export default ViewShoppingCart;