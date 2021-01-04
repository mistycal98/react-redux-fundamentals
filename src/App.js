// Provider from react-redux package
import { Provider } from "react-redux";

// Import the store
import store from "./redux/store/store";

// Styles import
import "./App.css";

// import Components
import Counter from "./components/counter";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Counter />
			</div>
		</Provider>
	);
}

export default App;
