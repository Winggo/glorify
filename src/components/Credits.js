import React from 'react';
import './Credits.css';

function Credits({ first_name, last_name, username, location }) {
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
					{first_name} {last_name}
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