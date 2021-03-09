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
    </>
  );
}

export default Navigation;