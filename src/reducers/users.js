export default function(state ={displayed:[]},action) {
  const {payload, type} = action;

  switch(type) {
  	case 'FETCH':
      return {...payload,displayed:payload["All"]}
  	case 'FILTER':
      return {...state, displayed:state[payload],error:false}
  	case 'FILTER_NAME':
  	  return {...state, displayed:payload, error:false}   
  	case 'ERROR':
  	  return {...state, error:true, displayed:[]}              
  }
  return state;
}