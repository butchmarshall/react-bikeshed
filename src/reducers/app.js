import Immutable from 'immutable';
import App from '../../src/records/app';
import Bikeshed from '../../src/records/bikeshed';

import {
	SET_APP_BACKGROUND_COLOUR
} from '../actions.js';

let initialState = new App();

const app = (state = initialState, action) => {
	switch(action.type) {
		case SET_APP_BACKGROUND_COLOUR:
			state = state.set("backgroundColour", action.value);
			break;
	}

	return state;
}

export default app;