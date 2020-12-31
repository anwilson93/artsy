import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {fetchOneProduct} from '../../store/artProducts';
import {useDispatch, useSelector} from 'react-redux';
import AddToCart from "./AddToCart";

const ViewProduct = () => {
    const params = useParams();
    const {id} = params;

    const dispatch = useDispatch()
    const currentArtProduct = useSelector(fullReduxState => {
        console.log(fullReduxState)
        return fullReduxState.artProducts
    });

    useEffect (() => {
        dispatch(fetchOneProduct(id))
    }, [dispatch])

    // const artProduct = currentArtProducts.find(art => art.artProductId === Number(id));
    // console.log(artProduct)
    // return (
    //     <div>
    //         <img style={{width: 500, height: 600, marginTop: 50, marginLeft: 300}} src ={artProduct.url} key={artProduct.artProductId} alt='' />
    //         <AddToCart artProduct={artProduct} />
    //     </div>
       
    // )
    return (
        <h1>hi</h1>
    )
}

export default ViewProduct;