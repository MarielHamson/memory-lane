import React from 'react';
import PropTypes from 'prop-types';
import Memory from './Memory';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function MemoryList(props) {
	useFirestoreConnect([{ collection: 'memories' }]);

	const memories = useSelector((state) => state.firestore.ordered.memories);

	if (isLoaded(memories)) {
		return (
			<React.Fragment>
				<hr />
				{memories.map((memory) => {
					return (
						<Memory
							whenMemoryClicked={props.onMemorySelection}
							title={memory.title}
							date={memory.date}
							description={memory.description}
              place={memory.place}    
              vibe={memory.vibe}
              scents={memory.scents}
              keywords={memory.keywords}
              timeOpen={memory.timeOpen}
							id={memory.id}
							key={memory.id}
						/>
					);
				})}
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<h3>Loading...</h3>
			</React.Fragment>
		);
	}
}

MemoryList.propTypes = {
	onMemorySelection: PropTypes.func,
};

export default MemoryList;
