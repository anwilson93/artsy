import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart";
import './ViewProduct.css';
const AddToCart = ({currentArtProduct}) => {
    const user = useSelector(state => state.session.user);
    const cartId = useSelector(state => state.session.cartId);
    const dispatch = useDispatch()
    const addItemToCart = () => {
        if(!user){
            // return history.push('/login');
            console.log('noooo')
        } else {
            let orderId = cartId
            let artProductId = currentArtProduct.id
            let artProductTitle = currentArtProduct.title
            let artProductPrice = currentArtProduct.price
            let quantity = 1
            // id, orderId(cartId), artProductId, artProductTitle, artProductPrice, quantity 
            dispatch(addProductToCart({orderId, artProductId, artProductTitle, artProductPrice, quantity}));
        }
    
        // history.push('/cart');
        console.log(currentArtProduct.id, 'dguitiubhui')
    }
    return (
        <div className='product-info'>
            <div>
                <Link to={`/shops/${currentArtProduct.Shop.id}`}>
                    {currentArtProduct.Shop.shopName}
                </Link>
            </div>
            <div id='product-title'>
                {currentArtProduct.title}
            </div>
              <div id='product-price'>
                ${currentArtProduct.price}
            </div>
            <div>
                <button onClick={addItemToCart}>Add To Cart</button>
            </div>
              <div id='product-description'>
                Description: {currentArtProduct.description}
            </div>
        </div>
    )
}

export default AddToCart;