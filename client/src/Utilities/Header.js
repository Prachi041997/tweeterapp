import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

const HeaderT = (props)=> {
    const listStyle = {
        
        width: '500px'
    }
    return(
        <div className='header'>
          <div className='title'>
          <h1 className='userpageTitle'>TWEET <span> <i className='fab fa-twitter iconuser'></i></span> SEARCH</h1>
          </div>
          <div className='searchbar'>
            <SearchBar width='500px' height='35px' listStyle={listStyle}></SearchBar>
          </div>
          <div className='button'>
            <button className='searchbutton shadow-sm'>SEARCH</button>
          </div>
        </div>
    )
}

export default HeaderT;