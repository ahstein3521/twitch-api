import axios from 'axios';
import fetchUser from './fetchUser'
import DefaultUserList from './defaultUsers';


const EndPoint = 'https://wind-bow.gomix.me/twitch-api';

export function FETCH(){
	const storedUserList = localStorage.getItem("twitchUsers")
	let userList = !storedUserList? DefaultUserList : JSON.parse(storedUserList)

	if(!storedUserList) localStorage.setItem("twitchUsers", JSON.stringify(DefaultUserList))

	return function(dispatch){
		Promise.all(userList.map(user => fetchUser(user)))
			.then((data) => {
				
				let payload = {"All":[],Offline:[],Online:[]}

				for(let user in data){
					payload.All.push(data[user]);
					if(data[user].statusCode == 'Online') payload.Online.push(data[user]);
					else payload.Offline.push(data[user]);
				}

				return dispatch({type:"FETCH",payload})
			})
	}
}

export function filterByStatus(status){
	return {type:"FILTER", payload:status}
}

export function filterByName(list, name, status){
	const regExp = new RegExp(name,"gi");

	if(!name.trim().length) return filterByStatus(status);

	const payload = list.filter(({display_name}) => regExp.test(display_name));

	if(!payload.length) return {type:"ERROR"}; 

	return {type:"FILTER_NAME", payload}	
}
