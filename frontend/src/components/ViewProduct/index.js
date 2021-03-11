import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {fetchOneProduct} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import {clearSearch} from '../../store/search.js';
import AddToCart from "./AddToCart";
import ProductReview from "../ProductReview";

const ViewProduct = () => {
  
    const params = useParams();
    const dispatch = useDispatch()
    const {id} = params;
    
    
    useEffect (() => {
        dispatch(fetchOneProduct(id))
        dispatch(clearSearch())
    }, [dispatch])

    const currentArtProduct = useSelector(state => {
        return state.artProducts.oneArtProduct;
    });



    if (!currentArtProduct.ImageUrls){
        return null
    }
    return (
       
        <div>
            <img style={{width: 500, height: 600, marginTop: 50, marginLeft: 200}} src ={currentArtProduct.ImageUrls[0].url} key={currentArtProduct.ImageUrls[0].artProductId} alt='' />
            <AddToCart currentArtProduct={currentArtProduct} />
            <ProductReview />
        </div>
     
    )
    
}

export default ViewProduct;