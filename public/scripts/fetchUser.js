const extractUsername = ({message}) => message.match(/'.*'/)[0].replace(/'/g, "") ;

const fetchUser = (user) => new Promise( (resolve, reject) => {
	const EndPoint = 'https://wind-bow.gomix.me/twitch-api';
	let dataObject = {}

	$.get(`${EndPoint}/streams/${user}`, data => {
		if(data.stream){
			dataObject = Object.assign({}, data.stream.channel, {statusCode:"online"})
			resolve(dataObject);
		}
		else{
			$.get(`${EndPoint}/channels/${user}`, (data) => {
				if(data.error) data.display_name = extractUsername(data);
				 
				dataObject = Object.assign({},data, {statusCode: data.error? "error" : "offline"})
				resolve(dataObject);
			})
		}
	})
})