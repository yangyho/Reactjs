import React from 'react';
import InputControlES6 from '../components/ES6Test/React_Component.js'

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1>关于</h1> 	
				<InputControlES6 />
			</div>
		);
	}
});
module.exports = About;