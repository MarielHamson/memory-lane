import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class MemoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMemory: null,
      editing: false
    };
  }

  componentDidMount() {
    const auth = this.props.firebase.auth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  handleClick = () => {
    if (this.state.selectedMemory != null) {
      this.setState({
        selectedMemory: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddMemoryToList = () => {
    this.setState({
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedMemory = (id) => {
    this.props.firestore.get({collection: 'memories', doc: id}).then((memory) => {
      const firestoreMemory = {
        title:  memory.get("title"),
        date:  memory.get("date"),
        description:  memory.get("desciption"),
        timeOpen: memory.get('timeOpen'),
        place:  memory.get("place"),
        vibe:  memory.get("vibe"),
        scents:  memory.get("scents"),
        keywords:  memory.get("keywords"),
        id: id
      }
      this.setState({selectedMemory: firestoreMemory});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  };

  handleEditingMemoryInList = () => {
    this.setState({
      editing: false,
      selectedMemory: null,
    });
  };

  handleDeleteMemory = (id) => {
    this.props.firestore.delete({collection: 'memories', doc: id});
    this.setState({selectedMemory: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();

    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading ... </h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1> You must be signed in to access the memories.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.state.editing) {
        currentlyVisibleState = (<EditMemoryForm
          memory = {this.state.selectedMemory}
          onEditMemory={this.handleEditingMemoryInList} />
        );
        buttonText = "Return to Memory List";
      } else if (this.state.selectedMemory != null) {
        currentlyVisibleState = <MemoryDetail 
          memory = {this.state.selectedMemory}
          onClickingDelete = {this.handleDeleteMemory}
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Memory List";
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = (<NewMemoryForm onNewMemoryCreation = {this.handleAddMemoryToList} />)
        buttonText = "Return to Memory List";
      } else {
        currentlyVisibleState = (<MemoryList
          onMemorySelection={this.handleChangingSelectedMemory} />);
        buttonText = "Add Memory";
      }
      return(
        <React.Fragment>
          {currentlyVisibleState}
          <Button variant="outline-primary" onClick={this.handleClick}>{buttonText}</Button>
        </React.Fragment>
      )
    }
  }
}

MemoryControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedMemory: PropTypes.object
}

export default withFirestore(MemoryControl);