import React from 'react';
import './Card.css';
const Card = (props)=> {

  console.log(props);
  const HandleDate = ()=> {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date(props.tweet.date);
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = day  + ' '+ month  + ' ' + year;
    return output;
  }
  
  const kFormatter = (num)=> {
    console.log(num);
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : num
   }
    return (
        <div className="cardA">
         <div className='cardHead'>
             <div className='avatar'>
               <img src={props.profilepic? props.profilepic : props.tweet.profilepic } style={{width:'100%', height: '100%', objectFit: 'cover'}}></img>
             </div>
             <div className='userD'>
               <h6>{props.name? props.name: props.tweet.name}</h6>
               <p>@{props.screenName? props.screenName: props.tweet.screenName}</p>
             </div>
             <div className='date'>
             {HandleDate()}</div>
         </div>
         <div className='cardBody'>
           <p>{props.tweet.text}</p>
         </div>
         <div className='cardFooter'>
           <div className='comment'>
             <p><i className="far fa-heart"></i>&nbsp;{kFormatter(props.tweet.love)}</p>  
           </div>
           <div className='retweet'>
           <p><i class="fas fa-retweet"></i>&nbsp;{kFormatter(props.tweet.retweet)}</p>
           </div>
         </div>
      </div>
    )
}
export default Card