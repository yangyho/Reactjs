import React from "react";
import ReactDOM from "react-dom";


// 引入组件样式
require('./HelloWorld.css');
// require('./HelloWorld.less');
require('./HelloWorld.scss')


// 定义组件
var HelloWorld = React.createClass({
	render: function() {
		return (
			<div className="helloBox">
				<h1>Hello, {this.props.name}!</h1>
			</div>
		);
	}
});

module.exports = HelloWorld;
