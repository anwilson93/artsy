import './HomePage.css';
import canvas from './z-s-pCFw8nlNS9c-unsplash.jpg';
import painting from './steve-johnson-5MTf9XyVVgM-unsplash.jpg';
import pottery from './oshin-khandelwal-EQpXnijYejQ-unsplash.jpg';
import photography from './nathan-dumlao-p4TKmK4Egvg-unsplash.jpg';
import {useEffect} from 'react';
import {fetchAllProducts} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {search} from '../../store/search.js';

function HomePage () {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch()
    const currentArtProductImgs = useSelector(state => {
        return state.artProducts.artProducts
    });

    const searchedProducts = useSelector(state => {
        console.log(state.searchedProducts.searchedProducts, 'yoooo')
        return state.searchedProducts.searchedProducts
    });

    const noResultsForSearchedProducts = useSelector(state => {
        console.log(state.searchedProducts.noProducts)
        return state.searchedProducts.noProducts
    });


    useEffect (() => {
        dispatch(fetchAllProducts())
        // dispatch(search)
    }, [dispatch])

    // if user searched for a product and there was no result, return h3
    if (noResultsForSearchedProducts === true) {
        return (
            <h3>No products match the search </h3>
        )


    } else {
    
    if (searchedProducts.length>0){

    return (
        <div>
            <div id="jumbotron">
                <Link to={`/search/canvas`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='canvas'
                src={canvas} alt='' /> 
                <div className='jumbotron-titles'>Canvas</div>
                </Link>

                <Link to={`/search/painting`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='painting'
                src={painting} alt='' /> 
                <div className='jumbotron-titles'>Painting</div>
                </Link>
                
                <Link to={`search/pottery`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='pottery'
                src={pottery} alt='' /> 
                <div className='jumbotron-titles'>Pottery</div>
                </Link>

                <Link to={`/search/photography`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='photography'
                src={photography} alt=''/> 
                <div className='jumbotron-titles'>Photography</div>
                </Link>
            </div>


            {sessionUser && <h2>Welcome, {sessionUser.username}!</h2>}
            <h3>Search Results:</h3>
            <div className='product-listing'>
                {searchedProducts && searchedProducts.map(product => {
                return (
                    <>
                        <Link to={`/products/${product.id}`} id='link'>
                            <img className='product-listing' style={{width: 200, height: 200}} src ={product.ImageUrls[0].url} key={product.id} alt='' /> 
                            <div className='product-prices'>Title: {product.title}</div>
                            <div className='product-prices'> Price: ${product.price}</div>
                        </Link>
                    </>
                )
            })}
            </div>
        </div>
    )

    } else {

    return (
        <div>
            <div id="jumbotron">
                <Link to={`/search/canvas`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='canvas'
                src={canvas} alt='' /> 
                <div className='jumbotron-titles'>Canvas</div>
                </Link>

                <Link to={`search/painting`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='painting'
                src={painting} alt='' /> 
                <div className='jumbotron-titles'>Painting</div>
                </Link>
                
                <Link to={`search/pottery`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='pottery'
                src={pottery} alt='' /> 
                <div className='jumbotron-titles'>Pottery</div>
                </Link>

                <Link to={`search/photography`} id='link'>
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                key='photography'
                src={photography} alt=''/> 
                <div className='jumbotron-titles'>Photography</div>
                </Link>
            </div>


            {sessionUser && <h2>Welcome, {sessionUser.username}!</h2>}


            <div className='product-listing'>
            
            {currentArtProductImgs && currentArtProductImgs.map(art => {
                return (
                    <>
                        <Link to={`/products/${art.artProductId}`} id='link'>
                            <img className='product-listing' style={{width: 200, height: 200}} src ={art.url} key={art.artProductId} alt='' /> 
                            <div className='product-prices'>Title: {art.ArtProduct.title}</div>
                            <div className='product-prices'> Price: ${art.ArtProduct.price}</div>
                        </Link>
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