import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actions/contactActions.js';

const ContactItem = ({ contact }) => {
    const { id, name, email, phone } = contact;
    const dispatch = useDispatch();

    // Event Handlers ///////////////////////////////////////////////////////////////////////////////
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }


    return (
        <div className='contact'>
            <div className='contact-header'>
            <h4>{ name }</h4>
            <div className='contact-buttons'>
                <button className='btn btn-light'>Edit</button>
                <button className='btn btn-light' onClick={handleDelete}>Delete</button>
            </div>  
            </div>
            <div className='contact-body'>
            <p>Email: { email } </p>
            <p>Phone: { phone } </p>
            </div>
        </div>
    )
}

export default ContactItem