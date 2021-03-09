import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SearchBar from '../SearchBar';
import {resetSearch} from '../../store/search.js';
import cart from './icons8-shopping-cart-100.png';
import './ShoppingCart.css';


function ShoppingCart(){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  return (
    <>
        <NavLink id='nav-bar-logo' exact to="/cart" >
            <img id='shopping-cart'
                key='cart'
                src={cart} alt='cart' /> 
        </NavLink>   
    </>
  );
}

export default ShoppingCart;