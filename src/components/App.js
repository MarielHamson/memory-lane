import React from "react";
import MemoryControl from "./MemoryControl";
import Container from 'react-bootstrap/Container';
import Header from './Header';

function App(){
  return ( 
    <React.Fragment>
      <Header/>
      <Container>
        <MemoryControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
