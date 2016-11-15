import React from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}

var Home = React.createClass({
	getInitialState: function () {
		return{
			username: "yangyh",
			lastGistUrl: ''
		}
	},

	componentDidMount() {
	  	fetch('https://api.douban.com/v2/movie/top250?count=10',{
       		method: 'GET',
        	mode: 'cors'
      	})
      	.then(function(data){
            console.log(data);
	  	})
	  	.catch(function(err) {
		  	console.log("Fetch错误:"+err);
		})
	},
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