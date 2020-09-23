import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Signin from "./Signin";
import { Link } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase';
import { withFirestore } from "react-redux-firebase";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

// const { doSignOut } = Signin;

function Header(props) {
  const history = useHistory();
  const firestore = useFirestore();
  async function handleSearchQuery(event) {
    event.preventDefault();
    
    const propertiesToQuery = event.target.title.value;
    
    const snapshot = await firestore.collection('memories').where("title", "==", propertiesToQuery).get();
    if (snapshot.empty) {
      console.log("no matches");
      return;
    }
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });

    props.onSearchQuery(snapshot);
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
        history.push("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      <Navbar
        style={{
          backgroundColor: "rgba(255, 255, 255, .5)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, .5)",
        }}
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand as={Link} to="/">
          Memory Lane
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/signin">
              Sign-in
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSearchQuery}>
            <Form.Control
              type="text"
              name="title"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="success" type='submit'>Search</Button>
          </Form>
          <Form inline>
            <Button onClick={doSignOut} variant="success" className="ml-2">
              Sign Out
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onSearchQuery: PropTypes.func,
  doSignOut: PropTypes.func
}

export default withFirestore(Header);

// const searchTerms = ["cats", "dogs", "people", "birds"];
// const counter = 0;
// const emptyArray = [];


// const search = (search, counter, emptyArray) => {
//   const search2 = search;
//   const returnArray = emptyArray;
//   if (counter < search.length) {
//     const query = emptyArray.concat(
//       this.props.firestore
//         .collection("memories")
//         .where("keywords", "==", search[counter])
//     );
//     const counter2 = counter + 1;
//     return search(search2, counter2, query);
//   }
//   return returnArray;
// };
// const answer = search();

// const searchTerm = "rick";
// const test = "frederick";
// const regex = new RegExp(searchTerm, 'gi');

// const partialMatch = test.match(regex);

// console.log(partialMatch);