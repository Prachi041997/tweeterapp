import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SearchPage from './Components/Search';
import SearchResult from './Components/SearchResult';
import HashResult from './Components/HashtagResult';


function App() {
  return (
    <Switch>
      <Route path="/" exact component={SearchPage}></Route>
      <Route path="/user/:userId" exact component={SearchResult}></Route>
      <Route path="/hashtags/:name" exact component={HashResult}></Route>


    </Switch>
  );
}

export default App;
