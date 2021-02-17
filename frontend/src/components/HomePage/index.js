import './HomePage.css';
import {useEffect} from 'react';
import {fetchAllProducts} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import HomePageJumbotron from '../HomePageJumbotron';
// import {search} from '../../store/search.js';

function HomePage () {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch()
    const currentArtProductImgs = useSelector(state => {
        return state.artProducts.artProducts
    });

    const searchedProducts = useSelector(state => {
        return state.searchedProducts.searchedProducts
    });

    const noResultsForSearchedProducts = useSelector(state => {
        return state.searchedProducts.noProducts
    });


    useEffect (() => {
        dispatch(fetchAllProducts())
        // dispatch(search)
    }, [dispatch])

    // this allows user to receive feedback on homepage if they search for something
    // and there are no results
    if (noResultsForSearchedProducts === true) {
        return (
            <>
                <HomePageJumbotron />
                <h3>No products match the search </h3>
            </>
        )

    } else {
    
    if (searchedProducts.length>0){

    return (
        <div>
            <HomePageJumbotron />

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
            <HomePageJumbotron />


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