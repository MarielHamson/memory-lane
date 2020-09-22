import React from "react";
import MemoryControl from "./MemoryControl";
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//https://serverless-stack.com/chapters/redirect-on-login-and-logout.html
//https://medium.com/better-programming/https-medium-com-clairechabas-auth-with-firebase-for-react-redux-apps-from-0-to-1-104e7343521b

function App(){
  
  return ( 
    <Router>
      <Header className="header"/>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
        <Container className="container">
          <MemoryControl />
        </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
