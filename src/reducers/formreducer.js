const defaultState = {
	forms: []
}

export default function(state = defaultState, action){
	switch(action.type) {
		case 'GET_FORMS': 
			return {...state, forms: action.forms}
		default: 
			return state 
	} 
}