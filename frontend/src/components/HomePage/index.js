import './HomePage.css';
import canvas from './z-s-pCFw8nlNS9c-unsplash.jpg';
import painting from './steve-johnson-5MTf9XyVVgM-unsplash.jpg';
import pottery from './oshin-khandelwal-EQpXnijYejQ-unsplash.jpg';
import photography from './nathan-dumlao-p4TKmK4Egvg-unsplash.jpg';
import {useEffect} from 'react';
import {fetchAllProducts} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
function HomePage () {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch()
    const currentArtProducts = useSelector(fullReduxState => {
        return fullReduxState.artProducts
    });
    useEffect (async() => {
        // const res = await fetch('/api/testing')
        // setArtProducts(res.data.artProducts)
        // console.log(res)
        dispatch(fetchAllProducts())
    }, [dispatch])
    return (
        <div>
            <div id="jumbotron">
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={canvas} />
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={painting} />
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={pottery} />
                <img style={{width: 200, height: 200, borderRadius: 200/ 2}}
                src={photography} />
            </div>
            {sessionUser && <h2>Welcome, {sessionUser.username}!</h2>}
            {currentArtProducts && currentArtProducts.map(art => {
                return <img src ={art.url} key={art.id}/>
            })}
        </div>
    )
}

export default HomePage;