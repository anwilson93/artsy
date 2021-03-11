import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../SearchBar';
import {resetSearch, search} from '../../store/search.js';
import ShoppingCart from '../ShoppingCart';


function Navigation({ isLoaded }){
  
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  let history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }

  // THIS ALLOWS USER TO SEARCH FOR PRODUCTS ON DIFFERENT PAGES OTHER THAN HOMEPAGE
  let searchedProducts = useSelector(state => {
    return state.searchedProducts.searchedProducts
  });

  const homepageCheck = () => {
    if(document.location.pathname !== "/" && searchedProducts.length>0){
      history.push('/')
    }   
  }

  homepageCheck();


  const linkSearch = (searchTerm) => {
    return dispatch(search({searchTerm}))
  }

  const returnHomeClearSearch = () => {
      // resets the search to false once logo is clicked so user can see all
      // product listings
      dispatch(resetSearch(false))
  }

  return (
    <>
      <div className='navbar-container'>
      <ul id='top-nav-bar'>
        <li>
          <NavLink id='nav-bar-logo' exact to="/" onClick={returnHomeClearSearch} >Artsy</NavLink>
        </li>
          <SearchBar />
        <li>
          {isLoaded && sessionLinks}
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
      <div className='lower-navbar'>
        <div onClick={() => linkSearch('glass')} className='lower-navbar-item'>Glass Art</div>
        <div onClick={() => linkSearch('pastel')} className='lower-navbar-item'>Pastel</div>
        <div onClick={() => linkSearch('drawing')} className='lower-navbar-item'>Drawing & Illustration</div>
        <div onClick={() => linkSearch('decor')} className='lower-navbar-item'>Decor</div>
        <div onClick={() => linkSearch('portrait')} className='lower-navbar-item'>Portrait Art</div>
        <div onClick={() => linkSearch('watercolor')} className='lower-navbar-item'>Watercolor</div>
      </div>
      </div>
    </>
  );
}

export default Navigation;