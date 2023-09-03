import React from 'react'
import ContactList from '../components/contacts/ContactList'

const Home = () => {
  return (
    <>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
          <ContactList />
        </h1>
        
      </>
  )
}

export default Home