import React from 'react';
import PropTypes from 'prop-types';

function MemoryDetail(props){
  const { memory, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Memory Detail</h1>
      <h2>{memory.title} - {memory.date}</h2>
      <p>description={memory.description}</p>
      <p>place={memory.place}</p>
      <p>vibe={memory.vibe} </p>
      <p>scents={memory.scents}</p>
      <p>keywords={memory.keywords}</p>
      <button onClick={ props.onClickingEdit }>Update Dream</button>
      <button onClick={()=> onClickingDelete(memory.id) }>Delete Memory</button>
      <hr/>
    </React.Fragment>
  )
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MemoryDetail;