import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

class MemoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMemory: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMemory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMemory: null,
        editing: false
      });
    } else {
      this.setState(
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }))
      );
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

}

export default withFirestore(MemoryControl);