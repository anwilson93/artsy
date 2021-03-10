import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchAllUserReviews } from "../../store/artProductReviews";
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router'
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const { push } = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

    const goToReviews = (e) => {
    e.preventDefault();
    dispatch(fetchAllUserReviews(user.id));
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className='profile-button-background'>
      <button onClick={openMenu} id='profile-button'>
          <i class="fas fa-user"></i>
      </button>
      </div>
      {showMenu && (
        <div className='user-manager-container'>
          <div className="profile-dropdown">
            <div className='dropdown-item dropdown-item-username'>{user.username}</div>
            <div className='dropdown-item dropdown-item-hover'>
              <button className='dropdown-button' onClick={goToReviews} onClick={() => push('/myreviews')}>My Reviews</button>
            </div>
            <div className='dropdown-item dropdown-item-hover'>
              <button className='dropdown-button' onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
