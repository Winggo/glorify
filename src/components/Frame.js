import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Frame.css';

function Frame({ imgs }) {
	const [orientation, setOrientation] = useState("background");
	const [isFirstRender, setIsFirstRender] = useState(true);
	const imgRef = useRef(null);

	const updateDimensions = useCallback(() => {
		if (isFirstRender) {
			setOrientation("background");
			setIsFirstRender(false);
			return;
		}

		if (imgRef.current) {
			const windowHeight = window.innerHeight;
			const imageHeight = imgRef.current.height;
			
			if (windowHeight > imageHeight) {
				setOrientation("portrait");
			} else {
				setOrientation("background");
			}
		}
	}, [isFirstRender]);

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
	}, [imgs, updateDimensions]);

	if (!imgs) {
		return null;
	}

	return (
		<div>
			<img 
				ref={imgRef}
				src={imgs} 
				id="unsplash" 
				className={orientation} 
				alt="Beautiful landscape"
				loading="lazy"
			/>
		</div>
	);
}

export default React.memo(Frame);