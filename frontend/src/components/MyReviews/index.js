import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllUserReviews, deleteReview} from '../../store/artProductReviews.js';
import {Link} from 'react-router-dom';
import HomePageJumbotron from '../HomePageJumbotron/index.js';
import './MyReviews.css';


const MyReviews = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    const myReviews = useSelector(state => {
        return state.artProductReviews.userReviews
    });

    useEffect (() => {
        dispatch(fetchAllUserReviews(sessionUser.id))
    }, [dispatch])



    if(!sessionUser){
        return (
            <>
            <HomePageJumbotron />
            <h3 className='add-margin'>You must be logged in to view your Reviews!</h3>
            </>
        )
    }

    if(myReviews.length < 1) {
        return (
            <>
            <HomePageJumbotron />
            <h3 className='add-margin'>You have no reviews</h3>
            </>
        )
    }

    return (
        <>
            <HomePageJumbotron />
            <h3 className='add-margin'>All Reviews</h3>
            {myReviews && myReviews.map(review => {

                const deleteReviewButton = (e) => {
                    e.preventDefault();
                    dispatch(deleteReview(review.id, sessionUser.id));
                };
               
            return (
                <>
                    <div className='my-reviews-container'>
                    <Link to={`/products/${review.artProductId}`} id='link'>{review.ArtProduct.title} Review
                    </Link>
                    <form style={{marginBottom: 50}}>
                        <p>{review.User.username} said: {review.review}</p>
                        <button onClick={deleteReviewButton}>Delete This Review</button>
                    </form>
                    </div>
                </>
            )
        })}
        </>
    )
}

export default MyReviews;