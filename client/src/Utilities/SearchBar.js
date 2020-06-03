import React, {useState} from 'react';
import './SearchBar.css'
import { SearchUser, GetHashTags } from '../api/API';
import { withRouter } from 'react-router-dom';


const SearchBar= ({width, height, history, listStyle, setReload = f=> f, reload=undefined})=> {
    const style = {
        width: width,
        height: height
    }  
   
    const [value, setValue]= useState({
      user: [],
      hastags: [],
      flag: false,
      
  });
  const [search, setSearch] = useState(false);
  const [hastagName, setHashtagName] = useState('');
  
  const handleSubmit = (event)=>{
      event.preventDefault();
    //    console.log(value.name);
       if(value.flag) {
       setReload(!reload);

        history.push({
            pathname: `/hashtags/%23${hastagName.substring(1)}`,
            state: value.hastags
        });
       } 
  }
  const getUserFromApi = (name)=> {
    let usercpy = [];
    setValue({...value, flag: false});
    // setUserName(name);
    SearchUser(name)
    .then(async (result)=> {
     console.log(result);
     result.map(u=> {
         usercpy.push({
             id: u.id,
             name: u.name
         })
        setValue({...value, user: usercpy})
     })
    })
    .catch(err=> {
        console.log(err);
        
    })
  }
  const getHashtagsfromApi = (name)=> {
    let hastagCpy = [];
    setHashtagName(name);
    GetHashTags(name)
    .then(response => {
        console.log(response)
        hastagCpy.push(response.statuses);
        setValue({...value, hastags: hastagCpy, flag: true})
    }).catch(err=> console.log(err))
  }
  
  const handleChange = (event)=> {
     setSearch(event.target.value);
     
    if(event.target.value === '') {
        console.log('hii');
        setValue({...value, user: [], flag: false})
    }
     else if(event.target.value.charAt(0) == '#') {
      getHashtagsfromApi(event.target.value);
    }
    else {
       getUserFromApi(event.target.value);
    }  
}
const GotoResult = (e, history, userId)=> {
  e.preventDefault();
  setValue({...value, flag: true})
  setSearch('');
  setReload(!reload);
  history.push(`/user/${userId}`);
}


  const UserList = ()=> {
  return(  search!=''? <div className='listContainer'>
  {value.user.map(u => {
      return <li 
      key={u.id} 
      className='searchList' 
      style={listStyle} 
      onClick={(e) => GotoResult(e, history, u.id)}
      
      >{u.name}</li>
  })}
</div>: null)
   }
    return(
       <React.Fragment>
       <div className='outerdiv' style={style}>
       <div className="icondiv">
       <i className='fa fa-search'></i></div>
       <form style={{width: '100%'}} onSubmit={handleSubmit}>
        <input type='text' name="search" onChange={handleChange}></input>
       </form>
       { UserList()}
       </div>
       </React.Fragment> 
    )
}
export default withRouter(SearchBar);