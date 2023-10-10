import React, {useState} from 'react';

function ListingCard({ description, image, location, id}) {
  const [like, setLike] = useState(false)

  const handleLikeBtn = () => {
    setLike((like) => !like)
  }

  const handleDelete = () => {
    fetch (`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      
    }) 
    .then ((response)=>response.json())
    .then (()=>console.log("delete it"))
  }

	return (
		<li className='card'>
			<div className='image'>
				<span className='price'>$0</span>
				<img src={image} alt={description} />
			</div>
			<div className='details'>
				{like ? (
					<button onClick={handleLikeBtn} className='emoji-button favorite active' >★</button>
				) : (
					<button onClick={handleLikeBtn} className='emoji-button favorite' >☆</button>
				)}
				<strong>{description}</strong>
				<span> · {location}</span>
				<button onClick = {handleDelete} className='emoji-button delete'>🗑</button>
			</div>
		</li>
	);
}

export default ListingCard;
