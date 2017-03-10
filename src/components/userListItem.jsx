import React from 'react';

const defaultImage = "https://placeholdit.imgix.net/~text?txtsize=33&txt=ImageNotAvailable&w=300&h=300"; 

const ListItem = props => {
	const {message, display_name, logo, status, statusCode, url} = props.user;
	return (
	  		<div className = {"user user-"+statusCode}>	
		  		<a href = {url} target = '_blank'>
			  		<img src={logo? logo : defaultImage} className = 'img-circle'/>
			  	</a>
			  	<div className='text-content'>
			  		<h4>{display_name || ""}</h4>
			  		<small>{status!= 404 ? status : message}</small>
			  	</div>	
		  	</div>	
	)
}

export default ListItem;
