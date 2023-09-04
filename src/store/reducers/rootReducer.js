import { combineReducers } from 'redux';
import contactReducer from './contactReducer.js';

const rootReducer = combineReducers({
    contacts: contactReducer
})

export default rootReducer;