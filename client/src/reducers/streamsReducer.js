import _ from 'lodash';

import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return { ...state, [action.payload]: undefined };
		default:
			return state;
	}
};
