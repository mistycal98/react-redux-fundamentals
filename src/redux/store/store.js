// Importing createStore from redux package
import { createStore } from "redux";

// Importing Combined Reducers
import rootReducer from "../reducers/rootReducer";

// Actually creating the Central Store
const store = createStore(rootReducer);

export default store;