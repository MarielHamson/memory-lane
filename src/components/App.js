import React from "react";
import MemoryControl from "./MemoryControl";
// import Container from "react-bootstrap/Container";
// import Header from "./Header";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <MemoryControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
