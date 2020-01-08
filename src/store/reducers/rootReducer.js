import authReducer from './authReducer';
import projectReducer from './projectReducer';
// To combine our reducers into one:
import { combineReducers } from 'redux';

// This is what we want to ultimately pass into the store:
const rootReducer = combineReducers({
  auth: authReducer, // The auth reducer will update information on the auth property
  project: projectReducer // The project reducer will update information on the project property inside the state object.
});

export default rootReducer;
