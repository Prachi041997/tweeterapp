import React, {useEffect, useState} from 'react';
import './SearchResult.css'
import SearchBar from '../Utilities/SearchBar';
import Card from '../Utilities/Card';
import { GetUser } from '../api/API';
import HeaderT from '../Utilities/Header';
import  a from './notfound.png';

const SearchResult = ({match})=> {

    const [value, setValue] = useState({
         tweets: [],
         name: '',
         profilepic: '',
         screenName: '',
         err: false
    })
    const [reload, setReload] = useState(false)
    

    const listStyle = {
        width: '500px'
    }
    
    useEffect(()=> {
        console.log(match.params.userId);
        let tweetsCpy= []
        GetUser(match.params.userId)
        .then(response => {
            setValue({...value, err: false})
            console.log(response);
            response.map(r=> {
                tweetsCpy.push({
                    text: r.text,
                    retweet: r.retweet_count,
                    date: r.created_at,
                    love: r.favorite_count
                })
            })
            setValue({...value,
                tweets: tweetsCpy,
                name:response[0].user.name,
                profilepic: response[0].user.profile_image_url,
                screenName:response[0].user.screen_name })
        })
        .catch(err=> {
            console.log(err);
            setValue({...value, err: true})
        });
    }, [reload])

    const Header = ()=> {
        return(
            <div className='header'>
            <div className='title'>
            <h1 className='userpageTitle'>TWEET <span> <i className='fab fa-twitter iconuser'></i></span> SEARCH</h1>
            </div>
            <div className='searchbar'>
              <SearchBar width='500px' height='35px' listStyle={listStyle} setReload={setReload} reload={reload}></SearchBar>
            </div>
          </div>
        )
    }
   

    const CardWrapper = ()=> {
        return (
          value.tweets.length!=0 && value.err==false?<div className='cardWrapper'>
              {value.tweets.map(t=> {
                  return <Card key={t.id} name={value.name} profilepic={value.profilepic} tweet={t} screenName={value.screenName}></Card>
              })}
              
            </div>
           : <React.Fragment>
           <div className='notweets' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <img src={a} style={{width:'80hw', height: '80vh', backgroundSize: 'cover'}}></img>
         </div>
         <h2 style={{textAlign: 'center'}}>Sorry! No Tweets Found</h2>
           </React.Fragment>
        )
    }
    return (
        <React.Fragment>
          {Header()}
           {CardWrapper()}
        </React.Fragment>
    )
}

export default SearchResult;