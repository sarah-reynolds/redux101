import React, { Component } from 'react';
// We need some glue. This component (container) needs to know about our redux state
// So we include the connect method from react-redux (the glue)

import { connect } from 'react-redux'

class ReduxStyle extends Component{
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
			return studentArray;
		})
		this.props.students2.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
			return studentArray;
		})
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		// from our master reducer we have a state Object
		// inside our sate obkedct we have a property: students
		// We need to set up the state of that object, to the props of this componen
	students: state.students,
	students2: state.students2
	}
}

export default connect(mapStateToProps)(ReduxStyle);