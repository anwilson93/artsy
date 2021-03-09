import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart";
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import './ViewProduct.css';
import inStock from './icons8-checkmark-26.png'



const AddToCart = ({currentArtProduct}) => {
    const user = useSelector(state => state.session.user);
    const cartId = useSelector(state => state.session.cartId);
    const [showModal, setShowModal] = useState(false);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const demoLogin = () => {
        setCredential('demo@user.io');
        setPassword('password');
    }

    const registration = () => {
        setShowModal(false)  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            (res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            }
        );
    };

    const addItemToCart = () => {
        let orderId = cartId
        let artProductId = currentArtProduct.id
        let artProductTitle = currentArtProduct.title
        let artProductPrice = currentArtProduct.price
        let quantity = 1
        // orderId(cartId), artProductId, artProductTitle, artProductPrice, quantity 
        dispatch(addProductToCart({orderId, artProductId, artProductTitle, artProductPrice, quantity}));
    }

    // MAKES LOGIN FORM MODAL APPEAR. NEED TO CHANGE!
    if(!user){
        return (
            <div className='product-info'>
            <div id='product-title'>
                {currentArtProduct.title}
            </div>
            <div id='product-description'>
                Description: {currentArtProduct.description}
            </div>
            <div id='product-price-container'>
                <div id='product-price'>
                    ${currentArtProduct.price}
                </div>
                <div id='product-in-stock'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    In Stock
                </div>
            </div>
            <div className='shipping-truck'>
                <svg xmlns="http://www.w3.org/2000/svg" width='48' height="48" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                <div className='shipping-truck-text'>
                    <span style={{fontWeight: "bold"}}>Hooray!</span> This item ships free to the US.
                </div>
                </div>
            <div>
                <button className='add-to-cart-button' onClick={() => setShowModal(true)}>Add To Cart</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div class='login-form-container'>
        <div class='login-form-contents'>
          <div class='login-form-title-header'>
            <h2 id='login-form-title'>Log In</h2>
            <button class='login-form-buttons' onClick={demoLogin}>Demo Login</button>
            <Link to='/signup'><button class='login-form-buttons'  onClick={registration}>Register</button></Link>
          </div>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className='login-form-inputs-container'>
              <label className='login-form-label'>
                Username or Email
              </label>
              <input
                className='login-form-input'
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
              <label className='login-form-label'>
                Password
              </label>
              <input
                className='login-form-input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className='login-form-submit-button'>Log In</button>
            </div>
          </form>
        </div>
      </div>
            
                    </Modal>
                )}
            </div>
        </div>
        )
        
    } else {

    return (
        <div className='product-info'>
            {/* <div className='shop-title'>
                <Link to={`/shops/${currentArtProduct.Shop.id}`}>
                    {currentArtProduct.Shop.shopName}
                </Link>
            </div> */}
            <div id='product-title'>
                {currentArtProduct.title}
            </div>
            <div id='product-description'>
                Description: {currentArtProduct.description}
            </div>
            <div id='product-price-container'>
                <div id='product-price'>
                    ${currentArtProduct.price}
                </div>
                <div id='product-in-stock'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    In Stock
                    {/* <img
                        key='in-stock'
                        src={inStock} alt='in stock' /> 
                    In Stock */}
                </div>
            </div>
            <div className='shipping-truck'>
                <svg xmlns="http://www.w3.org/2000/svg" width='48' height="48" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                <div className='shipping-truck-text'>
                    <span style={{fontWeight: "bold"}}>Hooray!</span> This item ships free to the US.
                </div>
                </div>
            <div>
                <button className='add-to-cart-button' onClick={addItemToCart}>Add To Cart</button>
            </div>
        </div>
    )
}}

export default AddToCart;