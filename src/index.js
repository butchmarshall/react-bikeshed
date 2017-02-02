import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from '../src/containers/app';
import rootReducers from '../src/reducers/index';

let store = createStore(
	rootReducers,
	{},
	applyMiddleware(thunk)
);

class Wrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

module.exports = {
	App: Wrapper
};