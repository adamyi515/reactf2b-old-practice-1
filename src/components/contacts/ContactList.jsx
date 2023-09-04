import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';

import { getContacts } from '../../store/actions/contactActions';



const ContactList = () => {
  const contactUsers = useSelector(state => state.contacts.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, []);

  return (
    <div className='contact-list'>
        {contactUsers.map(contact => {
          return(
            <ContactItem key={contact.id} contact={contact} />
          )
        })}
    </div>
  )
}

export default ContactList