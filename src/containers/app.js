import React from 'react';
import { connect } from 'react-redux';
import { Select, Option } from 'react-select';

import BikeshedRoofColour from '../../src/containers/bikshed_roof_colour';

import {
	setAppBackgroundColour,
	addBikeshed
} from '../../src/actions';

class App extends React.Component {
	handleAddBikeShed() {
		this.props.dispatch(addBikeshed());
	}
	handleSetAppBackgroundColour(value) {
		this.props.dispatch(setAppBackgroundColour(value));
	}
	
	render() {
		return (
			<div style={{margin: '10px',padding: '10px',backgroundColor: this.props.backgroundColour}}>
				Set App Background Colour: <Select onChange={(option) => {
					this.handleSetAppBackgroundColour(option.value);
				}}>
					{(() => {
						return ["white", "red", "green", "blue"].map((colour) => {
							let is_selected = (this.props.backgroundColour === colour),
							style = {
								color: colour,
								backgroundColor: 'white'
							};
							if (is_selected) {
								style.backgroundColor = 'red';
							}
							if ((style.color === 'white') && !is_selected) {
								style.backgroundColor = 'black';
							}
							if ((style.color === 'red') && is_selected) {
								style.color = 'black';
							}

							return (
								<Option style={style} value={colour} selected={is_selected} key={"app_background_colour_"+colour}>{colour}</Option>
							);
						});
					})()}
				</Select>
				<a href="javascript:void(0)" onClick={this.handleAddBikeShed.bind(this)}>Create new Bikeshed</a>
				
				{(() => {
					return this.props.bikesheds.map((bikeshed, index) => {
						return (
							<BikeshedRoofColour
								index={index}
								bikeshed={bikeshed}
								key={"roof_colour_"+index} />
						)
					}).toList()
				})()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		backgroundColour: state.app.get("backgroundColour"),
		bikesheds: state.bikesheds.get("list")
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);