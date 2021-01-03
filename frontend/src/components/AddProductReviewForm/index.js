import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {createReview} from '../../store/artProductReviews';
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";


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
        return <h3>Please <NavLink to={`/login`}>Log In</NavLink> or <NavLink to={`/signup`}>Sign Up</NavLink> to add a review!</h3>
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
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Review
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddProductReviewForm;