import './HomePage.css';
import canvas from './z-s-pCFw8nlNS9c-unsplash.jpg';
import painting from './steve-johnson-5MTf9XyVVgM-unsplash.jpg';
import pottery from './oshin-khandelwal-EQpXnijYejQ-unsplash.jpg';
import photography from './nathan-dumlao-p4TKmK4Egvg-unsplash.jpg';
import {useEffect} from 'react';
import {fetchAllProducts} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
function HomePage () {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch()
    const currentArtProducts = useSelector(fullReduxState => {
        return fullReduxState.artProducts
    });
    useEffect (() => {
        // const res = await fetch('/api/testing')
        // setArtProducts(res.data.artProducts)
        // console.log(res)
        dispatch(fetchAllProducts())
    }, [dispatch])
    return (
        <div>
            <div id="jumbotron">
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={canvas} alt='' />
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={painting} alt='' />
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={pottery} alt='' />
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={photography} alt=''/>
            </div>
            {sessionUser && <h2>Welcome, {sessionUser.username}!</h2>}

            {currentArtProducts && currentArtProducts.map(art => {
                console.log(art.ArtProduct.price)
                return (
                <div className='product-listing'>
                    <Link to={`/products/${art.artProductId}`}>
                        <img style={{width: 200, height: 200}} src ={art.url} key={art.artProductId} alt='' />
                    </Link>
                    
                    <div className='product-prices' key={art.ArtProduct}>Price: ${art.ArtProduct.price}</div>
                </div>

                )
            })}
        </div>
    )
}

export default HomePage;