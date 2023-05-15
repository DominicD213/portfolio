import './header.css'
import data from './data'
import HeaderImage from "../../assets/header.jfif"
import React from 'react'


const Header = () => {

  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile" >
          <img src={HeaderImage} alt="Portfolio Pic" />
        </div>
        <h3>Dominic Digiacomo</h3>
        <p>You are only a click away from your dream website or web app. Contact me with the details of your project for a modern jaw droping website.</p>
        <div className="header_cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#services" className='btn light'>My Services</a>
        </div>
        <div className="header_socials">
          {
            data.map(item => <a key = {item.id} href = {item.link} traget ="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header