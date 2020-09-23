import React from 'react';
import PropTypes from 'prop-types';
import Memory from './Memory';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function SearchList(props) {
	const { onSearchQuery } = props;

	// if (onSearchQuery == null){
	// 	onSearchQuery.forEach(doc => {
	// 		console.log(doc.data());
	// });
	// }
  useFirestoreConnect([{ collection: 'memories' }]);
  console.log(onSearchQuery)
  // const searchReturn = (onSearchQuery) => {
	// 	if (onSearchQuery != null){
  //     const memories = onSearchQuery.doc.data();
  //     console.log(memories)
	// 		return memories;
	// 	}
	// }
	
	// const memories = searchReturn(onSearchQuery);


	// console.log(memories)
	if (isLoaded(onSearchQuery)) {
		return (
			<React.Fragment>
				<h1 style={{textAlign: 'center'}}>Search List</h1>
				<hr />
					{onSearchQuery.map((memory) => {
						return (
							<Memory
								whenMemoryClicked={props.onMemorySelection}
								title={memory.title}
								date={memory.date}
								description={memory.description}
								timeOpen={memory.timeOpen}
								place={memory.place}    
								vibe={memory.vibe}
								scents={memory.scents}
								keywords={memory.keywords}
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

SearchList.propTypes = {
	onMemorySelection: PropTypes.func,
	onSearchQuery: PropTypes.object
};

export default SearchList;
