import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllUserReviews, myReviews} from '../../store/artProductReviews.js';
import {Link} from 'react-router-dom';
const MyReviews = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const myReviews = useSelector(state => {
        console.log(state.artProductReviews.userReviews, 'reviewsssssss')
        console.log(sessionUser.id)
        return state.artProductReviews.userReviews
    });

    useEffect (() => {
        dispatch(fetchAllUserReviews(sessionUser.id))
    }, [dispatch])

    if(!sessionUser){
        return (
            <h3>You must be logged in to view your</h3>
        )
    }
    return (
        <>
            {myReviews && myReviews.map(review => {
                console.log(review, 'hiii')
            return (
                <>
                    <Link to={`/products/${review.artProductId}`} id='link'>Review
                        {/* <img className='product-listing' style={{width: 200, height: 200}} src ={art.url} key={art.artProductId} alt='' /> 
                        <div className='product-prices'>Title: {art.ArtProduct.title}</div>
                        <div className='product-prices'> Price: ${art.ArtProduct.price}</div> */}
                    </Link>
                </>
            )
        })}
        </>
    )
}

export default MyReviews;