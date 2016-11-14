import React from 'react';
import ReactDOM from 'react-dom';


require('./header.scss');


var Header = React.createClass({
	render: function(){
		return (
			<div className="header">
				<div className="logo">
					<div className="logoImg fl">
	                    <img src="../../src/header/logo.png" width="80" height="80"/>
					</div>
					<div className="author fl">
	                    <strong>Reactjs</strong>
	                </div>
                </div>
                <ul>
	                <li>
	                	<a href="#">首页</a>
	                </li>
	                <li>
	                	<a href="#">跳转第二页</a>
	                </li>
	                <li>
	                	<a href="#">跳转第三页</a>
	                </li>
	                <li>
	                	<a href="#">跳转第四页</a>
	                </li>
	                <li>
	                	<a href="#">跳转第五页</a>
	                </li>
	            </ul>
			</div>
		);
	}
});

module.exports = Header;