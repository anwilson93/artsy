import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {getAllCartProducts} from "../../store/cart";
import cart from './icons8-shopping-cart-100.png';
import './ShoppingCart.css';


function ShoppingCart(){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  //  const orderId = useSelector(state => {
  //       return state.session.cartId
  //   });

  //   useEffect (() => {
  //       dispatch(getAllCartProducts(orderId))
  //   }, [dispatch])


  const cartItems = useSelector(state => {
    return state.cart.cart
  });

  if(!cartItems || !sessionUser){
    return (
      <>
        <NavLink id='nav-bar-logo' exact to="/cart" >
            <img id='shopping-cart'
                key='cart'
                src={cart} alt='cart' /> 
        </NavLink>   
    </>

    )
  } else {
    return (
    <>
        <NavLink id='nav-bar-logo' exact to="/cart" >
            <img id='shopping-cart'
                key='cart'
                src={cart} alt='cart' /> 
            <span style={{marginLeft:-10, fontSize:12}}>{cartItems.length}</span>
        </NavLink>   
    </>
  );

  }
}

export default ShoppingCart;