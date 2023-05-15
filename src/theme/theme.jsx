import Model from '../components/model'
import { primaryColors, backgroundColors } from './data'
import './theme.css'
import PrimaryColor from './PrimaryColor'
import BackgroundColor from './backgroundColor'
import React from 'react'

const Theme = () => {
  return (
    <Model className="theme__model">
       <h3>Customize Your Theme</h3>
        <small>Change the primary and background color to your preference.</small>
        <div className="theme__primary-wrapper">
            <h5>Primary Color</h5>
            <div className="theme__primary-colors">
                {
                    primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                }
            </div>
        </div>
        <div className="theme__background-wrapper">
            <h5>Background Color</h5>
            <div className="theme__background-colors">
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                }
            </div>
        </div>
    </Model>
  )
}

export default Theme