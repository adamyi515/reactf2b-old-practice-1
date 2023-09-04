import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {addContact} from '../store/actions/contactActions.js';

const AddContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const { name, email, phone } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Event Handlers //////////////////////////////////////////////////////////////////////////////////////////////////////
    function handleSubmit(ev) {
        ev.preventDefault();

        if(!name || !email || !phone){
            window.alert('User my input all fields.');
            return;
        }

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        };

        dispatch(addContact(newContact));
        navigate('/');
    }

    function handleTextChange(ev) {
        setFormData(prevState => {
            return {
                ...prevState,
                [ev.target.name]: ev.target.value
            }
        });
    }

    return (
        <div className='add-contact'>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type='text' className='form-control' value={name} name='name' 
                        onChange={handleTextChange} placeholder='Enter name' />
                </div>
                <div className='form-group'>
                    <input type='email' className='form-control' value={email} name='email'
                        onChange={handleTextChange} placeholder='Enter email' />
                </div>
                <div className='form-group'>
                    <input type='text' className='form-control' value={phone} name='phone'
                        onChange={handleTextChange} placeholder='Enter phone' />
                </div>
                <div className='form-group'>
                    <button className='btn btn-light form-control'>Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact