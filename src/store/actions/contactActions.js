import {
    ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS
} from './constants.js';


export const getContacts = () => {
    return {
        type: GET_CONTACTS
    }
}

export const addContact = (newContact) => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}