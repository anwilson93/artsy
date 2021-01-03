import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {fetchOneProduct} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import AddToCart from "./AddToCart";
import ProductReview from "../ProductReview";

const ViewProduct = () => {
  
    const params = useParams();
    const {id} = params;
    

    const dispatch = useDispatch()
    const currentArtProduct = useSelector(state => {
        return state.artProducts.oneArtProduct;
    });

   

    useEffect (() => {
        dispatch(fetchOneProduct(id))
    }, [dispatch])

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