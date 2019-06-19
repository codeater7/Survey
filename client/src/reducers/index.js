import {combineReducers} from  'redux'; // all the reducers that we do
import authReducer from  './authReducer';
import {reducer  as reduxForm} from 'redux-form';
export default combineReducers({
    auth:authReducer,
    form:reduxForm
});