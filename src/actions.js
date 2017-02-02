export const SET_APP_BACKGROUND_COLOUR = 'SET_APP_BACKGROUND_COLOUR';
export const setAppBackgroundColour = (value) => {
	return {
		type: SET_APP_BACKGROUND_COLOUR,
		value: value,
	};
};

export const ADD_BIKESHED = 'ADD_BIKESHED';
export const addBikeshed = () => {
	return {
		type: ADD_BIKESHED
	};
};

export const REMOVE_BIKESHED = 'REMOVE_BIKESHED';
export const removeBikeshed = {
	type: REMOVE_BIKESHED
};

export const SET_BIKESHED_COLOUR = 'SET_BIKESHED_COLOUR';
export const setBikeshedColour = (bikeshed_index, value) => {
	return {
		type: SET_BIKESHED_COLOUR,
		bikeshed_index: bikeshed_index,
		value: value,
	};
};