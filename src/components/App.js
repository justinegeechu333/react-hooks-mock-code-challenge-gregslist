import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
	const [listings, setListings] = useState([]);
	useEffect(() => {
		const loadPage = () => {
			const url = 'http://localhost:6001/listings';
			fetch(url)
				.then(response => response.json())
				.then(data => {
					setListings(data);
				})
				.catch(error => console.error(error));
		};
		loadPage();
	}, []);
	console.log(listings);
	return (
		<div className='app'>
			<Header />
			<ListingsContainer listings={listings} />
		</div>
	);
}

export default App;
