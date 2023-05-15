import './floating-nav.css'
import data from '../floating-nav/data'
import Scrollspy from 'react-scrollspy'
import Nav from './nav'
import React from 'react'

const FloatingNav = () => {
  return (
  <ul id="floating__nav">
    <Scrollspy  className='scrollspy' items={['header', 'about','services','contact']} currentClassName="active">
    {
      data.map(item => <Nav key={item.id} item={item}/> )
}
</Scrollspy>
  </ul>
  )
}

export default FloatingNav