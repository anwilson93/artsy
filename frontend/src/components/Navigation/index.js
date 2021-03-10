import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../SearchBar';
import {resetSearch} from '../../store/search.js';
import ShoppingCart from '../ShoppingCart';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

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
        <NavLink to={`/search/glass`} className='lower-navbar-item'>Glass Art</NavLink>
        <NavLink to={`/search/pastel`} className='lower-navbar-item'>Pastel</NavLink>
        <NavLink to={`/search/drawing`} className='lower-navbar-item'>Drawing & Illustration</NavLink>
        <NavLink to={`/search/decor`} className='lower-navbar-item'>Decor</NavLink>
        <NavLink to={`/search/portrait`} className='lower-navbar-item'>Portrait Art</NavLink>
        <NavLink to={`/search/watercolor`} className='lower-navbar-item'>Watercolor</NavLink>
      </div>
      </div>
    </>
  );
}

export default Navigation;