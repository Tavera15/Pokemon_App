import React from 'react';
import './Loading.css';

const Loading = () => {
	return(
		<div className='loadingContainer'>
			<img className='loadingPikachu' src="https://media2.giphy.com/media/kuWN0iF9BLQKk/source.gif" alt='Pikachu'/>
			<h1 className="loadingText">Loading...</h1>
		</div>
	);
}

export default Loading;