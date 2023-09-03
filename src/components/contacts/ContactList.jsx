import React from 'react'

const dummyData = [
    { "id": 1, "name": "Adam", "email": "Adam@test.com", "phone": "123-1234"},
    { "id": 2, "name": "Steve", "email": "Steve@test.com", "phone": "123-1234"},
    { "id": 3, "name": "David", "email": "David@test.com", "phone": "123-1234"}
]

const ContactList = () => {
  return (
    <div className='contact-list'>
        {dummyData.map(contact => {
          return(
            <div className='contact'>
              <div className='contact-header'>
                <h4>{ contact.name }</h4>
                <div className='contact-buttons'>
                  <button className='btn btn-light'>Edit</button>
                  <button className='btn btn-light'>Delete</button>
                </div>  
              </div>
              <div className='contact-body'>
                <p>Email: { contact.email } </p>
                <p>Phone: { contact.phone } </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ContactList