import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ListItem from './userListItem.jsx';
import ListMenu from './listmenu.jsx';
import ErrorScreen from './error.jsx';

import {FETCH, filterByStatus,filterByName} from '../actions/index';
class App extends Component{

	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.menuClick = this.menuClick.bind(this);
		this.state = {active: 'All', input:""}
	}
	renderUsers(){
		const users = this.props.users.displayed;

		return users.map((user,i) => (
			<li className ='list-group-item' key = {i}>
				<ListItem user={user}/>
			</li>
			)
		)
	}
	onChange(e){
		const input = e.target.value;
		const list = this.props.users.displayed;
		this.setState({input});
		this.props.filterByName(list , input, this.state.active);
	}
	menuClick(status){
		this.setState({active:status})
		this.props.filterByStatus(status)
	}

	componentDidMount(){
		if(!this.props.users.displayed.length){
			this.props.FETCH();

		}
	}
	render(){
		const {active, input} = this.state;
		const error = this.props.users.error;
		return (
			<div className="user-list">
				<ListMenu active={active} onClick={this.menuClick} onChange={this.onChange}/>
        	 	<ul className="list-group">
        	 		{this.renderUsers()}
        	 		<ErrorScreen error={error} query={input}/>
        	 	</ul>
  	  		</div>	
			)
		}
	}


function mapStateToProps(state){
	
	return {users:state.users}
}
function mapDispatch(dispatch){
	return bindActionCreators({FETCH, filterByStatus,filterByName},dispatch);	
}

export default connect(mapStateToProps,mapDispatch)(App);