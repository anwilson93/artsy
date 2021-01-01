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
        console.log('ii', state.artProductReviews.artProductReviews)
        return state.artProductReviews.artProductReviews
    });
   

    useEffect (() => {
        dispatch(fetchAllReviews(id))
    }, [dispatch])

    // if (!currentArtProduct.ImageUrls){
    //     return null
    // }
    if(reviews.length===0) {
        return <h4>No reviews for this product. <NavLink to={`/reviews/${id}`}>Add one!</NavLink></h4>
    }
    return (
        
        <div>
            <div id='product-review'></div>
        </div>
    )
};

export default ProductReview;