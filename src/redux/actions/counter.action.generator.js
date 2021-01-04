import { counterActionType } from "../constants/counterActionType";

const actionObjectGenerator = (actiontype) => {
	switch (actiontype) {
		case counterActionType.INCREMENT:
			return {
				type: counterActionType.INCREMENT,
			};
		case counterActionType.DECREMENT:
			return {
				type: counterActionType.DECREMENT,
			};
		default:
			return {
				type: "Invalid Action",
			};
	}
};

export default actionObjectGenerator;