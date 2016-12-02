import React from 'react'
import Loding from './lodding.js'

var Home = React.createClass({
	/**
	 *  getInitialState: function(){
	 *		 return {data: []};
	 *  }
	 */   
	getInitialState () {
		return {
			username: "yangyh",
			items: []
		}
	},

	/**
	 *  请求数据改变状态,更新ui
	 *  this.state 是组件私有的，可以通过调用 this.setState() 来改变它
	 */  
	componentDidMount () {
		var _this = this;
		$.ajax({
			url:"https://api.douban.com/v2/movie/top250?count=10",
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				if(_this.isMounted()){
					_this.setState({
						username:"yangyuhao",
						items: data.subjects
					})
				}
				_this.state.items.map(function(items){
					console.log(items)
				})
			}
		})
	},

	handleClick (){
		console.log("in")
	},

	/**
	 *  渲染数据
	 *  this.state.items.map()遍历数据 
	 */
	render () {
		if(this.state.items.length == 0){
			
			return (
				<div>
					<h1>首页</h1>
					<Loding />
				</div>
			) 
		} else {
			return (
				<div>
					<h1 onClick={this.handleClick}>首页</h1>
	    			written by <strong>{this.state.username}</strong>
	    			<ul className="booksList">
	    				{
	    					this.state.items.map(function(items){
	    						return (
	    							<li>
	    								<div><img src={items.images.medium} /></div>
	    								<a href={items.alt}>{items.title}</a>
	    								<button>删除</button>
	    							</li>
	    						)
	    					})
	    				}
	    			</ul>
				</div>
			);
		}
	}
});
module.exports = Home;