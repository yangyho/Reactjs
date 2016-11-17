import React from 'react';
import ReactDOM from 'react-dom';


class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}

var Home = React.createClass({
	// 初始状态
	getInitialState: function () {
		return {
			username: "yangyh",
			lastGistUrl: '',
			list: { }
		}
	},
	// 请求数据改变状态
	componentDidMount() {
		// $.ajax({
		// 	url:"https://api.douban.com/v2/movie/top250?count=10",
		// 	type: "GET",
		// 	dataType: "jsonp",
		// 	success: function(data){
		// 		console.log(data.subjects);
		// 	}
		// })

		$.get("https://api.github.com/users/octocat/gists", function(result) {
	      	var lastGist = result[0];
	      	if (this.isMounted()) {
	        	this.setState({
	          		username: lastGist.owner.login,
	          		lastGistUrl: lastGist.html_url
	        	});
	      	}
	    }.bind(this));
	},
	// 渲染数据
	render: function() {
		return (
			<div>
				<h1>首页</h1>
    			 written by <a href={this.state.lastGistUrl}>{this.state.username} </a>
			</div>
		);
	}
});
module.exports = Home;