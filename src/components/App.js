import React, { Component } from 'react';

import ForecastsList from './ForecastsList';
import Loader from './Loader';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetchingData: true,
			forecasts: null
		};
	}

	async componentDidMount() {
		const locationResponse = await fetch(
			'https://location.services.mozilla.com/v1/geolocate?key=test'
		);
		const position = await locationResponse.json();
		const { lat, lng } = position.location;
		const forecastsResponse = await fetch(
			`//localhost:4000/api/v1/json?lat=${lat}&lng=${lng}&units=si`
		);
		const data = await forecastsResponse.json();
		this.setState({
			forecasts: data.daily.data,
			isFetchingData: false
		});
	}

	render() {
		return (
			<div className="container">
				{this.state.isFetchingData ? (
					<Loader />
				) : (
					<ForecastsList forecasts={this.state.forecasts} />
				)}
			</div>
		);
	}
}

export default App;
