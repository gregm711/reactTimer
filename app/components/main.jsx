var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

var Main  = (props) => {
	return (
			<div>
				<Nav/>
				<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
			</div>
		);
};
module.exports  = Main;