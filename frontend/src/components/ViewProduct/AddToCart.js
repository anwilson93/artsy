import {Link} from 'react-router-dom';
import './ViewProduct.css';
const AddToCart = ({currentArtProduct}) => {
    console.log('2ehf', currentArtProduct)
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
                <button>Add To Cart</button>
            </div>
              <div id='product-description'>
                Description: {currentArtProduct.description}
            </div>
        </div>
    )
}

export default AddToCart;