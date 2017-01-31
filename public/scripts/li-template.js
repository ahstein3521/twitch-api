const defaultImage = "https://placeholdit.imgix.net/~text?txtsize=33&txt=ImageNotAvailable&w=300&h=300"; 

const ListItem = function({message, display_name, logo, status, statusCode, url}){
 
  return `
  	<li class = 'list-group-item' data-stream-status = ${statusCode} data-user = ${display_name}>
  		<span class = 'pull-right ${statusCode}'></span>
  		<div>	
	  		<a href = '${url}' target = '_blank'>
		  		<img src='${logo? logo : defaultImage}' class = 'img-responsive center-block img-circle'>
				<h4>${display_name || ""}</h4>
		  	</a>
		  	<small>${status!= 404 ? status : message}</small>	
	  	</div>	
  	</li>
  `
}

