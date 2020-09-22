import React from 'react';
import PropTypes from 'prop-types';

function Memory(props) {
  const pointer = {
		listStyle: 'none',
		cursor: 'pointer',
	};
  return(
    <React.Fragment>
      <div style={pointer} onClick = {()=> props.whenMemoryClicked(props.id)}>
        <h3>{props.title} - {props.date}</h3>
        <h5>{props.place}</h5>
      </div>
    </React.Fragment>
  )
}

Memory.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  id: PropTypes.string,
  timeOpen: PropTypes.object,
  whenMemoryClicked: PropTypes.func

}

export default Memory;