import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages';
import LogIn from './Pages/LogIn'
import { GlobalStyle } from './globalStyle';

function App() {
  return (
   
      <>
       <Router>
       <GlobalStyle/>
      <Switch>
         <Route path="/Home" exact component={Home} />
         <Route path="/login" exact component={LogIn} />
      </Switch>
      </Router>
      </>
    
  );
}

export default App;
