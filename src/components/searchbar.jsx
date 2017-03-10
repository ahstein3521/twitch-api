import React from 'react';

const SearchBar = props => {
	return (
		<div className="form-inline">
			<input type = "text" 
			   onChange = {props.onChange}
				placeholder="Find User" id="search-bar"/>
		</div>
	)
}

export default SearchBar;