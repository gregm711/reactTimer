var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');
var Controls = require('Controls');

var Main  = (props) => {
	return (
			<div>
				<Nav/>
				<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					<h1 className="text-center">Timer</h1>
					{props.children}
					<Clock/>
					<Controls/>
				</div>
			</div>
			</div>
		);
};
module.exports  = Main;