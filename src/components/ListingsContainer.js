import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ listings }) {
	console.log(listings);
	return (
		<main>
			<ul className='cards'>
				{listings.map(listing => {
					return (
						<ListingCard
							key={listing.id}
							description={listing.description}
							image={listing.image}
							location={listing.location}
						/>
					);
				})}

				{/* use the ListingCard component to display listings */}
			</ul>
		</main>
	);
}

export default ListingsContainer;
