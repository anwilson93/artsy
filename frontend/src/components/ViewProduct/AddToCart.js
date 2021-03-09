import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart";
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import './ViewProduct.css';
import { applyMiddleware } from 'redux';


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
            <div>
                <Link to={`/shops/${currentArtProduct.Shop.id}`}>
                    {currentArtProduct.Shop.shopName}
                </Link>
            </div>
            <div id='product-title'>
                {currentArtProduct.title}
            </div>
              <div id='product-price'>
                ${currentArtProduct.price}
            </div>
            <div>
                <button onClick={() => setShowModal(true)}>Add To Cart</button>
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
              <div id='product-description'>
                Description: {currentArtProduct.description}
            </div>
        </div>
    )
        
    } else {

    return (
        <div className='product-info'>
            <div>
                <Link to={`/shops/${currentArtProduct.Shop.id}`}>
                    {currentArtProduct.Shop.shopName}
                </Link>
            </div>
            <div id='product-title'>
                {currentArtProduct.title}
            </div>
              <div id='product-price'>
                ${currentArtProduct.price}
            </div>
            <div>
                <button onClick={addItemToCart}>Add To Cart</button>
            </div>
              <div id='product-description'>
                Description: {currentArtProduct.description}
            </div>
        </div>
    )
}}

export default AddToCart;