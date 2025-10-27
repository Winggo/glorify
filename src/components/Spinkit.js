import React from 'react';
import './Spinkit.css';

function Spinkit() {
	return (
		<div className="spinner">
			<div className="double-bounce1"></div>
			<div className="double-bounce2"></div>
		</div>
	);
}

export default React.memo(Spinkit);