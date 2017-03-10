import axios from 'axios';

const extractUsername = ({message}) => message.match(/'.*'/)[0].replace(/'/g, "") ;

export default function(user){ 
	return new Promise( (resolve, reject) => {
	const EndPoint = 'https://wind-bow.gomix.me/twitch-api';
	let Data = {}

	axios.get(`${EndPoint}/streams/${user}`)
		.then( ({data}) => {
			
			if(data.stream){
				Data = {statusCode:'Online', ...data.stream.channel}
				resolve(Data);
			}else{
				axios.get(`${EndPoint}/channels/${user}`)
					.then(({data}) => {
						if(data.error) data.display_name = extractUsername(data);
				 		Data = {...data,statusCode: data.error? "Error" : "Offline"}
						resolve(Data);
					})
				}
			})
	})
}
	