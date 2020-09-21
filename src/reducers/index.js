import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
	const { id, formattedWaitTime } = action;
	switch (action.type) {
		case c.UPDATE_TIME:
			const updatedMemory = Object.assign({}, state[id], { formattedWaitTime });
			const updatedState = Object.assign({}, state, {
				[id]: updatedMemory,
			});
			return updatedState;
		default:
			return state;
	}
};