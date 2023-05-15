import './contact.css'
import contacts from './data'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Contact me via messaging me threw and of my links below!
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopenernoreferrer">{contact.icon}</a>)
        }
      </div>
      </section>
  )
}

export default Contact