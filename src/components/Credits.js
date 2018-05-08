import React, { Component } from 'react';
import './Credits.css';

class Credits extends Component {
	

	render() {

		var UnsplashReferral = "https://unsplash.com/?utm_source=Glorify&utm_medium=referral";
		var PhotographerReferral = "https://unsplash.com/"+this.props.username+"?utm_source=Glorify&utm_medium=referral";

		if(typeof this.props.location === 'undefined'){
			return(
				<div>
					<div className='author'>
						Photo by <a target='_blank' className='links' href={PhotographerReferral}>{this.props.first_name} {this.props.last_name}</a> on <a target='_blank' className='links' href={UnsplashReferral}>Unsplash</a>
					</div>
					<div className='location'>
						
					</div>
				</div>
			)
		}
		else{
			return(
				<div>
					<div className='author'>
						Photo by <a target='_blank' className='links' href={PhotographerReferral}>{this.props.first_name} {this.props.last_name}</a> on <a target='_blank' className='links' href={UnsplashReferral}>Unsplash</a>
					</div>
					<div className='location'>
						{this.props.location.title}
					</div>
				</div>
			)
		}
	}
}

export default Credits;