import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

require('./mainApp.scss');
var mainApp = React.createClass({
	render: function(){
		return (
			<div>
				<div className="header">
					<div className="logo">
						<div className="logoImg fl">
		                    <img src="../../src/mainApp/logo.png" width="80" height="80"/>
						</div>
						<div className="author fl">
		                    <strong>Reactjs</strong>
		                </div>
	                </div>
	                <ul>
		                <li><Link to="/" activeClassName="active">Home</Link></li>
						<li><Link to="/About" activeClassName="active">About</Link></li>
						<li><Link to="/contact" activeClassName="active">Contact</Link></li>
		            </ul>
				</div>
				<div id="content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = mainApp;