import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../SearchBar';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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

  return (
    <>
      <ul id='top-nav-bar'>
        <li>
          <NavLink id='nav-bar-logo' exact to="/">Artsy</NavLink>
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