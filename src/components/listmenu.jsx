import React from 'react';
import SearchBar from './searchbar.jsx';
const tabs = ["All","Online","Offline"]

const ListMenu = props => {
	const { active ,onClick} = props;

	return (
		<ul className = 'nav-tabs'>
			{
			tabs.map(label => (
				<li onClick = {()=> onClick(label)} 
					className= {active == label? 'tab-active' : 'tab'}
					   role = 'presentation' 
					     key={label}>
					<h4>{label}</h4>
				</li>
			))
			}
			<SearchBar onChange={props.onChange}/>
		</ul>
		)
}

export default ListMenu;