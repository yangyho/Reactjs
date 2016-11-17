import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// 引入文件
import './lib/normalize.css';
import './lib/jquery-1.10.2.min.js';


// 引入组件
var mainApp = require('./mainApp/mainApp.jsx');
var Home = require('./homeComponent/home.jsx')
var About = require('./homeComponent/page2.jsx');
var Contact = require('./homeComponent/page3.jsx');
const appEle = document.getElementById('container');

// 页面渲染
// <IndexRoute component={Home}/>处理默认显示的组件
ReactDOM.render(
	<Router history={hashHistory}>
  		<Route path="/" component={mainApp}>
  			<IndexRoute component={Home}/>
    		<Route path="/About" component={About}/>
    		<Route path="/Contact" component={Contact}/>
 		</Route>
	</Router>,
	appEle
);
