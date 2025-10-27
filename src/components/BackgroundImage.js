import React, { useState, useEffect, useCallback, useRef } from 'react';
import './BackgroundImage.css';

function BackgroundImage({ image }) {
	const [orientation, setOrientation] = useState("landscape");
	const imgRef = useRef(null);

	const updateDimensions = useCallback(() => {
		if (imgRef.current) {
			const windowHeight = window.innerHeight;
			const imageHeight = imgRef.current.height;
			
			if (windowHeight > imageHeight) {
				setOrientation("portrait");
			} else {
				setOrientation("landscape");
			}
		}
	}, []);

	useEffect(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		
		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, [updateDimensions]);

	useEffect(() => {
		// Update dimensions when image loads
		if (imgRef.current) {
			imgRef.current.onload = updateDimensions;
		}
	}, [image, updateDimensions]);

	if (!image) {
		return null;
	}

	return (
		<div>
			<img 
				ref={imgRef}
				src={image} 
				id="unsplash" 
				className={orientation} 
				alt="Beautiful landscape"
				loading="lazy"
			/>
		</div>
	);
}

export default React.memo(BackgroundImage);