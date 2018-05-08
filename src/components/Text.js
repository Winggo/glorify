import React, { Component } from 'react';
import './Text.css';
import Spinkit from './Spinkit';

class Text extends Component {
	constructor(props) {
		super(props);

		this.state = { verse: "",
					   ref: "",
					   isLoading: false };
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		fetch(proxyurl+'https://beta.ourmanna.com/api/v1/get/?format=json&order=random')
			.then(res => res.json())
			.then(data => {
				this.setState({ verse: data.verse.details.text });
				this.setState({ ref: data.verse.details.reference });
				this.setState({ isLoading: false });
				console.log(data);
			})
			.catch(err => {
				console.log('Error when fetching Verse', err);
			})
	}

	render() {

		if(this.state.isLoading){
			return (
				<div>
					<Spinkit />
				</div>
			)
		}

		return (
			<div className="verse">
				<div className="quote">
					{this.state.verse}
				</div>
				<div className="ref">
					{this.state.ref}
				</div>
			</div>
		)
	}

}

export default Text;