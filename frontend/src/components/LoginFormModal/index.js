import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';
import './LoginForm.css';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';

function LoginFormModal() {
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

  return (
    <>
      <button id='login-button' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <LoginForm /> */}
         
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
    </>
  );
}

export default LoginFormModal;