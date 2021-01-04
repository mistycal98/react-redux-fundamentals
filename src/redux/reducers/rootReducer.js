// Combiner Reducer from redux Package
import { combineReducers } from "redux";

// Each Reducer Import
import counterReducer from './counterReducer';

// Combining the Reducer
const rootReducer = combineReducers({
    counterReducer,
});

export default rootReducer;