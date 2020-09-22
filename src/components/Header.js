import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Signin from './Signin';
import { Link } from "react-router-dom";

const {doSignOut} = Signin;

function Header(props) {
  return (
    <React.Fragment>
      <Navbar style={{backgroundColor: 'rgba(255, 255, 255, .5)', boxShadow: '0 5px 15px rgba(0, 0, 0, .5)'}} sticky="top" expand="lg">
      <Navbar.Brand as ={Link} to="/">Memory Lane</Navbar.Brand>
      {/* <Link to="/">Memory Lane</Link> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/signin">Sign-in</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
        <Form inline>
          <Button onClick={doSignOut} variant="success" className='ml-2'>Sign Out</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;