import React, { useState, useEffect, useCallback } from 'react';
import BackgroundImage from './BackgroundImage';
import Credits from './Credits';
import Spinkit from './Spinkit';

function Background() {
	const [imageData, setImageData] = useState({
		imgs: '',
		firstName: '',
		lastName: '',
		location: '',
		username: '',
		isLoading: true,
		error: null
	});

	const fetchImage = useCallback(async () => {
		try {
			setImageData(prev => ({ ...prev, isLoading: true, error: null }));
			
			const response = await fetch('https://api.unsplash.com/photos/random?client_id=fc3e2051c728d05af045cd332bcfebf7d0e7e8509b7bb0e55dc9e1443262599c&orientation=landscape&collections=1147235,3415208,4057576,291422,367159,327760,1266548,935393,2489501,2290942');
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			
			const data = await response.json();
			
			setImageData({
				imgs: data.urls.full,
				firstName: data.user.first_name,
				lastName: data.user.last_name,
				location: data.location,
				username: data.user.username,
				isLoading: false,
				error: null
			});
		} catch (err) {
			console.error('Error when fetching Unsplash:', err);
			setImageData(prev => ({
				...prev,
				isLoading: false,
				error: 'Failed to load image. Please try again.'
			}));
		}
	}, []);

	useEffect(() => {
		fetchImage();
	}, [fetchImage]);

	if (imageData.isLoading) {
		return (
			<div>
				<Spinkit />
			</div>
		);
	}

	if (imageData.error) {
		return (
			<div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
				<p>{imageData.error}</p>
				<button onClick={fetchImage} style={{ 
					padding: '10px 20px', 
					backgroundColor: '#007bff', 
					color: 'white', 
					border: 'none', 
					borderRadius: '5px',
					cursor: 'pointer'
				}}>
					Retry
				</button>
			</div>
		);
	}

	return (
		<div>
			<BackgroundImage image={imageData.imgs} />
			<Credits
				firstName={imageData.firstName}
				lastName={imageData.lastName}
				username={imageData.username}
				location={imageData.location}
			/>
		</div>
	);
}

export default React.memo(Background);