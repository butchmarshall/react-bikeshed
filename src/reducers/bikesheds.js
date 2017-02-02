import Immutable from 'immutable';
import Bikeshed from '../../src/records/bikeshed';

import {
	ADD_BIKESHED, REMOVE_BIKESHED,
	SET_BIKESHED_COLOUR,
} from '../actions.js';

let initialState = Immutable.Map({
	"list": Immutable.List()
});

const reducer = (state = initialState, action) => {
	let bikeshed;

	switch(action.type) {
		case ADD_BIKESHED:
			bikeshed = new Bikeshed({name:""});

			state = state.set("list", state.get("list").push(
				bikeshed
			));
			break;
		case SET_BIKESHED_COLOUR:
			bikeshed = state.get("list").get(action.bikeshed_index);
			bikeshed = bikeshed.set("colour", action.value);

			state = state.set("list", state.get("list").set(action.bikeshed_index, bikeshed));

			break;
	}

	return state;
}

export default reducer;