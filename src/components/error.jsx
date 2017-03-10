import React from 'react';

const ErrorScreen = props => {
	if(!props.error) return <noScript/>

	return <li className='list-group-item'>
				<h3>No results for {props.query}</h3>	
			</li>	
}

export default ErrorScreen;