import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../SearchBar';
import {search} from '../../store/search.js';

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
      return dispatch(search(''))
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