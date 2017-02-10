// this is our master reducers file. It doesn't amanger any particular piece of state. 
// It manages/ contains all the other reducers(which contain a piece of state)


// get the combineReducers method from redux
import { combineReducers } from 'redux';
// import each reducer here
// first: StudentReducer
import StudentReducer from './StudentReducer';
import StudentReducer2 from './StudentReducer2';

const rootReducer = combineReducers({
	// inside here, we pass each reducer as a key/property
	// each property / key wil be available as state.key
	students: StudentReducer,
	students2: StudentReducer2
});

export default rootReducer;