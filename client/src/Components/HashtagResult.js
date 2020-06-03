import React, {useState, useEffect} from 'react';
import { GetHashTags } from '../api/API';
import HeaderT from '../Utilities/Header';
import Card from '../Utilities/Card';
import { useLocation } from "react-router-dom";
import './HashtagResult.css';
import  a from './notfound.png';
import SearchBar from '../Utilities/SearchBar';



const HashResult = ()=> {
    const [value, setValue] = useState({
        tweets: []
    })
    const [reload, setReload] = useState(false)
    const listStyle = {
        
        width: '500px'
    }
    const location = useLocation();

    useEffect(()=> {
        console.log(location.state);
        let tweetsCpy = [];
        location.state[0].map(t=> {
            tweetsCpy.push({
                date: t.created_at,
                text: t.text,
                name: t.user.name,
                profilepic: t.user.profile_image_url,
                retweet: t.retweet_count,
                love:t.favorite_count ,
                screenName: t.user.screen_name
            })
               setValue({...value, tweets: tweetsCpy})
           })
       
    }, [reload])
    const Header = ()=> {
       return  <div className='header'>
       <div className='title'>
       <h1 className='userpageTitle'>TWEET <span> <i className='fab fa-twitter iconuser'></i></span> SEARCH</h1>
       </div>
       <div className='searchbar'>
         <SearchBar width='500px' height='35px' listStyle={listStyle}
         setReload={setReload} reload={reload}></SearchBar>
       </div>
      
     </div>
    }
    const CardWrapper = ()=> {
        return (
          value.tweets.length!=0?<div className='cardWrapper'>
              {value.tweets.map(t=> {
                  return <Card key={t.id} tweet={t}></Card>
              })} 
            </div>:
            <React.Fragment>
           <div className='notweets' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <img src={a} style={{width:'80hw', height: '80vh', backgroundSize: 'cover'}}></img>
         </div>
         <h2 style={{textAlign: 'center'}}>Sorry! No Tweets Found</h2>
           </React.Fragment>
        )
    }
    return(
        <React.Fragment>
          {Header()}
          {CardWrapper()}
        </React.Fragment>
    )
}
export default HashResult;