import React from 'react';
import { Link } from 'react-router';
import {getForms} from 'api/api';
import store from 'store'

const FormContainer = React.createClass({
	getInitialState: function() {
		return {
				
			forms: []
						
		}
	},
	componentWillMount: function() {
		getForms()
		this.unsubscribe = store.subscribe(() =>{
			const appState = store.getState()
			this.setState ({
				forms: appState.forms
			})
		})
		
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},
	render: function() {
		return (
			<FormView forms={this.state.forms} />
			)
	},
})
 const FormView = React.createClass ({ 
 	render: function() {
    return (
    <div>
      <form>
      	{this.props.forms.map(item => {
      		if(item.type === "text" || item.type === "email" || item.type === "tel") {
      			return <input key={item.id} className="textfields" id={item.id} placeholder={item.label}></input>
      		} else if (item.type === "select" ) {
      			return <select key={item.id} className="language" id ={item.id} placeholder={item.label}>
      				<option key={item.id}>{item.label}</option>
      				{item.options.map(option => {
      					return (
      						<option key={option.id} value={option.value}>{option.label}</option>
      						)
      				})}
      			</select>
      		} else { 
      			return <textarea key={item.id} className="comment" id={item.id} placeholder={item.label}></textarea> 
      		}

      	})}
      </form>
      <button className="submit_button" type="submit">Submit</button>
      </div>
    )
  }
})

export default FormContainer