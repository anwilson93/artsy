import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {fetchAllReviews} from '../../store/artProductReviews';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './ProductReview.css';
const ProductReview = () => {
    const params = useParams();
    const {id} = params;
    

    const dispatch = useDispatch()
    const reviews = useSelector(state => {
        return state.artProductReviews.artProductReviews
    });
   

    useEffect (() => {
        dispatch(fetchAllReviews(id))
    }, [dispatch])


    if(reviews.length===0) {
        return <h4 className='add-margin'>No reviews for this product. <NavLink to={`/reviews/${id}`}>Add one!</NavLink></h4>
    }
    return (
        
        <div id='product-review'>
            <div id='all-reviews-title'> {reviews.length} product reviews </div>
            {reviews && reviews.map(review => {
                let reviewDate = new Date(review.createdAt).toString().slice(0, 16)
                return (
                <>
                    <div id='individual-review-container'>
                        <div className='reviewer-username'>
                            <span style={{borderBottom: '1px solid black', marginRight: 8}}>{review.User.username}</span> {reviewDate} 
                        </div>
                        <div className='review-content'>
                            {review.review}
                        </div>
                    </div>
                </>

                )
            })}
            <div id='review-bottom'>Bought this product and would like to leave a review? Add one <NavLink to={`/reviews/${id}`}>here!</NavLink> </div>
        </div>
    )
};

export default ProductReview;