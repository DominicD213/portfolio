import './footer.css'
import {links,socials} from "./data"
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(flink => <li key={flink.id}><a href={flink.link}>{flink.title}</a></li>)
          }
        </ul>
        <div className="footer__socials">
          {
          socials.map(socials => <a key={socials.id} href={socials.link} target="_blank" rel="noopener noreferrer">{socials.icon}</a> )
          }
        </div>
      </div>
      <div className="footer__copyright">
        <small>2022 Dominic Digiacomo &copy;All Rights Reserved</small>
      </div>

      </footer>
  )
}

export default Footer