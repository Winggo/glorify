import React, { Component } from 'react';
// import unsplashEx from './jesusSaves.jpg';
import './Frame.css';


class Frame extends Component {

	constructor(props) {
		super(props);

		this.state = {
			orientation: "background",
			firstRender: true
		};
	}

	updateDimensions() {
		if(this.state.firstRender){
			this.setState({ orientation: "background", firstRender: false });
			console.log("firstrender");
		}
		else if(window.innerHeight > document.getElementById("unsplash").height){
			this.setState({ orientation: "portrait" });
			console.log("portrait");
		}
		else{
			this.setState({ orientation: "background" });
			console.log("background");
		}
		// console.log("Dimensions updated");
		// console.log(window.innerHeight);
		// console.log(document.getElementById("unsplash").height);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
		// document.addEventListener("DOMContentLoaded", this.updateDimensions.bind(this))
	}

	render() {

		if(this.state.orientation === "portrait"){
			return (
				<div>
					<img src={this.props.imgs} id="unsplash" className="portrait" alt=" "/>
				</div>
			);
		}
		else{
			return (
				<div>
					<img src={this.props.imgs} id="unsplash" className="background" alt=" "/>
				</div>
			);
		}

	}
}

export default Frame;