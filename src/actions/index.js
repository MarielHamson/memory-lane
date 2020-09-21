import * as c from './ActionTypes';

export const updateTime = (id, formattedWaitTime) => ({
	type: c.UPDATE_TIME,
	id: id,
	formattedWaitTime: formattedWaitTime,
});
