import React from "react";
import ReactDOM from "react-dom";


//定义counter组件
var LightningCounter = React.createClass({

	//该方法在组件挂载之前运行,允许修改组件的state对象，如添加一个初始值为0的counter属性
	getInitialState: function(){
		return {
			counter: 0
		};
	},
	
	//定义timerTick函数修改state对象的counter属性
	timerTick: function(){
		//setState该方法允许修改组件的state对象的counter值
		this.setState({
			counter: this.state.counter + 1
		});
	},

	//该方法在组件渲染后运行，在该方法内每1s调用一次timerTick函数
	componentDidMount: function(){
		setInterval(this.timerTick, 1000);
	},
	
	//渲染页面
	render: function(){
		var counterStyle={
			color: "#66ffff",
			fontSize: 50
		};

		var count = this.state.counter.toLocaleString();//把数组转换为本地字符串。
		return(
			<h1 style={counterStyle}>{count}</h1>
		);
	}
});

//定义样式组件
var LightningCounterDisplay = React.createClass({
	render: function(){
		var commonStyle = {
			margin: 0,
			padding: 0
		};
		
		var divStyle = {
			width: 250,
			textAlign: "center",
			backgroundColor: "black",
			padding: 40,
			fontFamily: "sans-serif",
			color: "#999",
			borderRadius: 10,
			margin: "30px auto"
		};

		// var textStyles = {
		// 	emphasis: {
		// 		fontSize: 38,
		// 		...commonStyle
		// 	},

		// 	smallEmphasis: {
		// 		...commonStyle
		// 	},

		// 	small: {
		// 		fontSize: 17,
		// 		opacity: 0.5,
		// 		...commonStyle
		// 	}
		// }

		return (
			<div style={divStyle}>
				<LightningCounter />
			</div>
		);
	}
});

module.exports = LightningCounterDisplay;