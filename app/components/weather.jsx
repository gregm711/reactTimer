var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({

	getInitialState: function() {
		return  {
			isLoading: false
		}
	},

	handleSearch: function(location){
		var that = this;
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});

	},

	render: function(){
		var {isLoading, temp, location , errorMessage} = this.state;

		function renderMessage () {

			if (isLoading) {
				return <h3 className="text-center"> fetching data</h3>;

			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		function renderError(){
			if (typeof errorMessage === "string") {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get weather </h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
			);
	}

})
module.exports = Weather;