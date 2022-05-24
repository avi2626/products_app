import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './Components/Header';
import ProductList from './Components/ProductsList';

function App() {
	return (
		<Provider store={store}>
			<Header />

			<ProductList />
		</Provider>
	);
}

export default App;
