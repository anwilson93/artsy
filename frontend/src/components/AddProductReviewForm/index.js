import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {createReview} from '../../store/artProductReviews';
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomePageJumbotron from '../HomePageJumbotron';


const AddProductReviewForm = () => {
   
    const params = useParams();
    const {id} = params;

    let history = useHistory();
    
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => {
        return state.session.user
    });
    
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
  

    if(!sessionUser){
        return (
          <>
            <HomePageJumbotron />
            <h3 className='add-margin' style={{marginTop: 30}}>Please Log In or <NavLink to={`/signup`}>Sign Up</NavLink> to add a review!</h3>
          </>
        )
    }


    const handleSubmit = (e) => {
    e.preventDefault();
    if (review) {
      setErrors([]);
      let artProductId = Number(id);
      let userId = Number(sessionUser.id)

      return dispatch(createReview({artProductId, userId, review}), history.goBack())
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });

    }
    return setErrors(['Review must not be empty']);
  };
    
    return (
    <>
      <HomePageJumbotron />
      <div className='login-form-container register-form-container'>
        <div className='login-form-contents'>
          <div className='registration-form-title-header'>
            <h2 id='login-form-title'>Leave a Review</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className='login-form-inputs-container'>
            <label className='login-form-label'>Your Review:</label>
            <textarea
              rows='5'
              cols='33'
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
            <button type="submit" className='login-form-submit-button'>Submit!</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default AddProductReviewForm;