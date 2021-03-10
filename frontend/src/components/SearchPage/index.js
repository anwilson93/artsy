import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../../store/search.js';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
const SearchPage = () => {
    const params = useParams();
    const {searchTerm} = params;
    
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(search({searchTerm}))
    }, [])

    const searchedProducts = useSelector(state => {
        return state.searchedProducts.searchedProducts
    });

    if (searchedProducts.length === 0){
        return (
            <h3>No products match the search</h3>
        )
    } else {
        return (
            <>
                <p className='add-margin'> {searchedProducts.length} results</p>
                <div className='product-listing'>
                {searchedProducts && searchedProducts.map(product => {
                return (
                    <>
                        {/* <Link to={`/products/${product.id}`} id='link'>
                            <img className='product-listing' style={{width: 200, height: 200}} src ={product.ImageUrls[0].url} key={product.id} alt='' /> 
                            <div className='product-prices'>Title: {product.title}</div>
                            <div className='product-prices'> Price: ${product.price}</div>
                        </Link> */}
                        <div className='individual-product-container'>
                            <Link to={`/products/${product.id}`} id='link'>
                                <img className='product-listing' style={{width: 250, height: 250}} src ={product.ImageUrls[0].url} key={product.id} alt='' /> 
                                <span class="description">
                                    <div className='product-prices'>
                                        Title: {product.title}
                                    </div>
                                    <div className='product-prices'>
                                        Price: ${product.price}
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </>
                )
            })}
            </div>
            </>
        )
    }
}

export default SearchPage;