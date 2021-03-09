import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import HomePageJumbotron from '../HomePageJumbotron';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <HomePageJumbotron />
      <div className='login-form-container register-form-container'>
        <div className='login-form-contents'>
          <div className='registration-form-title-header'>
            <h2 id='login-form-title'>Create your account</h2>
            <p className='registration-text'>Registration is easy.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className='login-form-inputs-container'>
            <label className='login-form-label'>Email</label>
            <input
              className='login-form-input'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className='login-form-label'>Username</label>
            <input
              className='login-form-input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className='login-form-label'>Password</label>
            <input
              className='login-form-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className='login-form-label'>Confirm Password</label>
            <input
              className='login-form-input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className='login-form-submit-button'>Register</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
     
     

export default SignupFormPage;
