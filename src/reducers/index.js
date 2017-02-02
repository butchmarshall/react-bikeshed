import { combineReducers } from 'redux';

import app from './app';
import bikesheds from './bikesheds';

const rootReducer = combineReducers({
	app,
	bikesheds,
});

export default rootReducer;