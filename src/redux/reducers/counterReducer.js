import { counterActionType } from "../constants/counterAction.type";

const initialState = {
	count: 0,
};

const counterReducer = (state = initialState, action) => {
    // Functions to implemented to update Store
	switch (action.type) {
		// Increment funtion
		case counterActionType.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};

		// Decrement Function
		case counterActionType.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		// Default Function
		default:
			return { ...state };
	}
};

export default counterReducer;
