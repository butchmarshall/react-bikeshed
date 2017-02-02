import React from 'react';
import { connect } from 'react-redux';
import { Select, Option } from 'react-select';

import {
	setBikeshedColour
} from '../../src/actions';

class BikeshedRoofColour extends React.Component {
	handleColourOnChange(bikeshed_index, option) {
		this.props.dispatch(setBikeshedColour(bikeshed_index, option.value))
	}
	render() {
		let colourOptions = this.props.bikeshed.colours.map((colour, index) => {
			return (
				<Option key={"colour_"+colour} value={colour} selected={this.props.bikeshed.colour===colour}>{colour}</Option>
			)
		}).toList().toJS();

		return (
			<div style={{margin: '10px',padding: '10px',border: "5px solid "+this.props.bikeshed.colour}}>
				<p>What colour should our bike sheds roof be? {this.props.bikeshed.colour}</p>
				<Select onChange={this.handleColourOnChange.bind(this, this.props.index)}>
					<Option value="white" selected>(Choose one)</Option>
					{colourOptions}
				</Select>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
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
)(BikeshedRoofColour);