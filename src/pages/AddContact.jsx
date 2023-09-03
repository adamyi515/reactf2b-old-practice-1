import React, { useState } from 'react'

const AddContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const { name, email, phone } = formData;

    // Event Handlers //////////////////////////////////////////////////////////////////////////////////////////////////////
    function handleSubmit(ev) {
        ev.preventDefault();
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