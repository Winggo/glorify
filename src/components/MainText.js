import React, { useState, useEffect, useCallback } from 'react';
import './MainText.css';
import Spinkit from './Spinkit';

function MainText() {
	const [verseData, setVerseData] = useState({
		verse: "",
		ref: "",
		isLoading: true,
	});

	const fetchVerse = useCallback(async () => {
		try {
			setVerseData(prev => ({ ...prev, isLoading: true }));
			
			// Using a more reliable CORS proxy or direct API call
			const response = await fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=random');
			
			if (!response.ok) {
				// Fallback to a different API or static content
				throw new Error('API not available, using fallback');
			}
			
			const data = await response.json();
			
			setVerseData({
				verse: data.verse.details.text,
				ref: data.verse.details.reference,
				isLoading: false,
			});
		} catch (err) {
			console.error('Error when fetching verse:', err);

			// Fallback to static content
			const fallbackVerses = [
				{ verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16" },
				{ verse: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
				{ verse: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
				{ verse: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
				{ verse: "And we know that in all things God works for the good of those who love him.", ref: "Romans 8:28" }
			];
			
			const randomVerse = fallbackVerses[Math.floor(Math.random() * fallbackVerses.length)];
			
			setVerseData({
				verse: randomVerse.verse,
				ref: randomVerse.ref,
				isLoading: false,
			});
		}
	}, []);

	useEffect(() => {
		fetchVerse();
	}, [fetchVerse]);

	if (verseData.isLoading) {
		return (
			<div>
				<Spinkit />
			</div>
		);
	}

	return (
		<div className="verse">
			<div className="quote">
				{verseData.verse}
			</div>
			<div className="ref">
				{verseData.ref}
			</div>
		</div>
	);
}

export default React.memo(MainText);