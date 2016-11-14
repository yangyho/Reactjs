import React from "react";
import ReactDOM from "react-dom";


// 可以引入js文件，css样式表
require('./src/ES6Test/es6main.js');


//引入组件
var HelloWorld = require('./src/helloworld/HelloWorld.jsx');
// var LightningCounterDisplay = require('./src/counter/counter.jsx')

//页面渲染
ReactDOM.render(
	<div>
		<HelloWorld name="world" />
		// <LightningCounterDisplay />
	</div>,
	document.getElementById('container')
);
