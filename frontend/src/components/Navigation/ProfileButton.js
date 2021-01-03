import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchAllUserReviews } from "../../store/artProductReviews";
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router'

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
      <button onClick={openMenu} id='profile-button'>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={goToReviews} onClick={() => push('/myreviews')}>My Reviews</button>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
