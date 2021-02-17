import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../SearchBar';
import {resetSearch} from '../../store/search.js';
import {fetchAllProducts} from '../../store/artProducts';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink id='signup' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const returnHomeClearSearch = () => {
      // dispatch(search(''))
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
      </ul>
    </>
  );
}

export default Navigation;