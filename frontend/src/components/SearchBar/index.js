import './SearchBar.css';
import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {search} from '../../store/search.js';
import magnifyingGlass from './icons8-zoom-out-52.png';
import {Redirect} from 'react-router-dom';
function SearchBar (){
  const dispatch = useDispatch();

   const [searchTerm, setSearchTerm] = useState('');
   const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setErrors([]);

      return dispatch(search({searchTerm}), setSearchTerm('') )
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });

    }
    return setErrors(['Please enter a word to search']);
  };
  return (
        <>
      <form onSubmit={handleSubmit} id='search-form'>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input 
          id='search-bar'
          placeholder={"Search Art By Title or Category"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='magnifying-glass'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </form>
      {/* <img id='magnifying-glass'
          key='magnifyingGlass'
          src={magnifyingGlass} alt='magnifying glass' />  */}
    </>
  );
}

export default SearchBar