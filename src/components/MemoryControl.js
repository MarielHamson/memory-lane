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

  
}

export default withFirestore(MemoryControl);