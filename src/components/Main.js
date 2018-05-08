import React, { Component } from 'react';
import Frame from './Frame';
import Credits from './Credits';
import Spinkit from './Spinkit';


class Main extends Component {
	constructor(props) {
		super(props);

		this.state = { imgs: '',
					   first_name: '',
					   last_name: '',
					   location: '',
					   username: '',
					   isLoading: false };
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch('https://api.unsplash.com/photos/random?client_id=fc3e2051c728d05af045cd332bcfebf7d0e7e8509b7bb0e55dc9e1443262599c&orientation=landscape&collections=920773,1127846,369,869152,1525582,910773')
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data.urls.full});
				this.setState({ first_name: data.user.first_name});
				this.setState({ last_name: data.user.last_name});
				this.setState({ location: data.location});
				this.setState({ username: data.user.username});
				this.setState({ isLoading: false });
				console.log(data.urls.full);
				console.log(data);
			})
			.catch(err => {
				console.log('Error when fetching Unsplash', err);
			})
	}

	render() {

		if(this.state.isLoading){
			return(
				<div>
					<Spinkit />
				</div>
			)
		}

		return(
			<div>
				<Frame {...this.state} />
				<Credits {...this.state} />
			</div>
		)
	}
}

export default Main;