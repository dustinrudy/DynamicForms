import axios from 'axios'
import {hashHistory} from 'react-router'
import store from 'store'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getForms() {
	return axios.get("forms").then(resp => {
		console.log('resp', resp.data)
		store.dispatch({
			type: 'GET_FORMS',
			forms: resp.data
		})
	})
}