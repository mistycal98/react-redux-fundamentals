import React, { Component } from "react";

// Importing connect from reac-redux package
import { connect } from "react-redux";

// Importing Central Store from redux store
import store from "../redux/store/store";

// Import Actions from constants
import { counterActionType } from "../redux/constants/counterAction.type";

class Counter extends Component {
	increment = () => {
		// console.log(store.getState());
		store.dispatch({ type: counterActionType.INCREMENT });
	};

	decrement = () => {
		store.dispatch({type:counterActionType.DECREMENT});
	};
	render() {
		return (
			<div>
				<h1>Counter</h1>
				<p>value : {this.props.count}</p>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}

const mapStatetoProps = (state) => {
	console.log("value from the state in function", state);
	return {
		count: state.counterReducer.count,
	};
};
export default connect(mapStatetoProps)(Counter);
