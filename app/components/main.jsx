var React = require('react');

var Main  = (props) => {
	return (
			<div>
				<div>
				<p>Main rendered</p>
					{props.children}
			</div>
			</div>
		);
};
module.exports  = Main;