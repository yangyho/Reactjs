import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// 引入文件
require('./src/normalize.css')

// 引入组件
var mainApp = require('./src/mainApp/mainApp.jsx');
var Home = require('./src/homeComponent/home.jsx')
var About = require('./src/homeComponent/page2.jsx');
var Contact = require('./src/homeComponent/page3.jsx');

// 页面渲染
ReactDOM.render(
	<Router history={hashHistory}>
  		<Route path="/" component={mainApp}>
  			<IndexRoute component={Home}/>
    		<Route path="/About" component={About}/>
    		<Route path="/Contact" component={Contact}/>
 		</Route>
	</Router>,
	document.getElementById('container')
);
