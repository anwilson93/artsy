import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {fetchAllProducts} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import AddToCart from "./AddToCart";

const ViewProduct = () => {
    const {id} = useParams();


    const dispatch = useDispatch()
    const currentArtProducts = useSelector(fullReduxState => {
        return fullReduxState.artProducts
    });

    useEffect (() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    const artProduct = currentArtProducts.find(art => art.artProductId === Number(id));
    console.log(artProduct)
    return (
        <div>
            {/* <img style={{width: 500, height: 600, marginTop: 50, marginLeft: 300}} src ={artProduct.url} key={artProduct.artProductId} alt='' />
            <AddToCart artProduct={artProduct} /> */}
        </div>
       
    )
}

export default ViewProduct;