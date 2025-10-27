import React from 'react';
import './Credits.css';

function Credits({ firstName, lastName, username, location }) {
	const unsplashReferral = "https://unsplash.com/?utm_source=Glorify&utm_medium=referral";
	const photographerReferral = `https://unsplash.com/${username}?utm_source=Glorify&utm_medium=referral`;

	return (
		<div>
			<div className='author'>
				Photo by{' '}
				<a 
					target='_blank' 
					rel='noopener noreferrer'
					className='links' 
					href={photographerReferral}
				>
					{firstName} {lastName}
				</a>{' '}
				on{' '}
				<a 
					target='_blank' 
					rel='noopener noreferrer'
					className='links' 
					href={unsplashReferral}
				>
					Unsplash
				</a>
			</div>
			{location && (
				<div className='location'>
					{location.title}
				</div>
			)}
		</div>
	);
}

export default React.memo(Credits);