import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// 引入文件
import './lib/normalize.css';
import './lib/jquery-1.10.2.min.js';
import './navComponent/style.scss';

// 引入组件
import mainApp from './mainApp/mainApp.jsx';
import Home from './navComponent/home.jsx';
import About from './navComponent/page2.jsx';
import Contact from './navComponent/page3.jsx';

/** 
 *  页面渲染
 *  <IndexRoute component={Home}/>处理默认显示的组件
 */ 
const appEle = document.getElementById('container');
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
