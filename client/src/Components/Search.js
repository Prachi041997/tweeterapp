import React, {useState} from 'react';
import SearchBar from '../Utilities/SearchBar';
import './Search.css'
import { SearchUser } from '../api/API';
import { Link, withRouter } from 'react-router-dom';


const SearchPage= ({history})=> {
    
    const listStyle = {
        width: '600px'
    }
    return(
     <React.Fragment>
     <div className='searchbarWrapper'>
       <div>
       <h1 className='hometitle'>TWEET <span> <i className='fab fa-twitter iconhome'></i></span> SEARCH</h1>
       <SearchBar width='600px' height='45px' listStyle={listStyle}></SearchBar>
     </div>
     </div>
     </React.Fragment>  
    )
}
export default withRouter(SearchPage);