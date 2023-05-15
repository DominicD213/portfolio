import Logo from '../../assets/logo.png'
import data from './data'
import {IoIosColorWand} from 'react-icons/io'
import {useModelContext} from '../../context/model-context'
import './navbar.css'
import React from 'react'
import PopUp from '../../components/popUp'


const Navbar = () => {
  const {showModelHandler} = useModelContext()
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' onClick={showModelHandler}><IoIosColorWand/></button>
      </div>
    </nav>
  )
}

export default Navbar