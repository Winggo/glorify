import React from 'react';
import './BackgroundImage.css';

function BackgroundImage({ image }) {
	if (!image) {
		return null;
	}

	return (
		<div>
			<img 
				src={image} 
				id="unsplash" 
				className="background-image"
				alt="Beautiful landscape"
				loading="lazy"
			/>
		</div>
	);
}

export default React.memo(BackgroundImage);