import {
    ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS
} from './constants.js';

import axios from 'axios';


export const getContacts = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/contacts');
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        });

    } catch (error) {
        console.log(error);
    }
   
}

export const addContact = (newContact) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8000/contacts', newContact)
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }

}

export const deleteContact = (id) => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:8000/contacts/${id}`);
        dispatch({ type: DELETE_CONTACT, payload: id })
    } catch (error) {
        
    }
}