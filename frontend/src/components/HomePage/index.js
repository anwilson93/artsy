import './HomePage.css';
import {useEffect} from 'react';
import {fetchAllProducts, fetchOneProduct} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {getAllCartProducts} from "../../store/cart";
import HomePageJumbotron from '../HomePageJumbotron';
// import {search} from '../../store/search.js';

function HomePage () {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    let history = useHistory();
    
    const currentArtProductImgs = useSelector(state => {
        return state.artProducts.artProducts
    });

    const searchedProducts = useSelector(state => {
        return state.searchedProducts.searchedProducts
    });

    const noResultsForSearchedProducts = useSelector(state => {
        return state.searchedProducts.noProducts
    });

    const orderId = useSelector(state => {
        return state.session.cartId
    });


    useEffect (() => {
        dispatch(fetchAllProducts())
        dispatch(getAllCartProducts(orderId))
    }, [dispatch])

    const getProduct = (id) => {
        dispatch(fetchOneProduct(id)).then(() => {
            history.push(`/products/${id}`)
        })
        
    }

    // this allows user to receive feedback on homepage if they search for something
    // and there are no results
    if (noResultsForSearchedProducts === true) {
        return (
            <>
                <HomePageJumbotron />
                <h3 className='add-margin'>No products match the search </h3>
            </>
        )

    } else {
    
    if (searchedProducts.length>0){

    return (
        <div>
            <HomePageJumbotron />

            <p className='add-margin'> {searchedProducts.length} results</p>
            {/* <p className='add-margin' style={{padding: 10, fontSize: 15}}>Search Results:</p> */}
            <div className='product-listing'>
                {searchedProducts && searchedProducts.map(product => {
                return (
                    <>
                        <div className='individual-product-container'>
                            {/* <Link to={`/products/${product.id}`} id='link' onClick={() => getProduct(product.id)}> */}
                                <img className='product-listing' style={{width: 250, height: 220}} src ={product.ImageUrls[0].url} key={product.id} alt='' onClick={() => getProduct(product.id)}/> 
                                <span class="description">
                                    <div className='product-prices'>
                                        Title: {product.title}
                                    </div>
                                    <div className='product-prices'>
                                        Price: ${product.price}
                                    </div>
                                </span>
                            {/* </Link> */}
                        </div>
                    </>
                )
            })}
            </div>
        </div>
    )

    } else {

    return (
        <div>
            <HomePageJumbotron />


            {sessionUser && <h2 className='add-margin'>Welcome, {sessionUser.username}!</h2>}


            <div className='product-listing'>
            
            {currentArtProductImgs && currentArtProductImgs.map(art => {
                return (
                    <>
                        <div className='individual-product-container'>
                            {/* <Link to={`/products/${art.artProductId}`} id='link'> */}
                                <img className='product-listing' style={{width: 250, height: 250}} src ={art.url} key={art.artProductId} alt='' onClick={() => getProduct(art.artProductId)}/> 
                                <span class="description">
                                    <div className='product-prices'>
                                        Title: {art.ArtProduct.title}
                                    </div>
                                    <div className='product-prices'>
                                        Price: ${art.ArtProduct.price}
                                    </div>
                                </span>
                            {/* </Link> */}
                        </div>
                    </>
                )
            })}
            </div>
        </div>
    )
        }
    }
}


export default HomePage;