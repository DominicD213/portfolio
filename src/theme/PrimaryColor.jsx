import { useThemeContext } from "../context/theme-context"
import React from 'react'

const PrimaryColor = ({className}) => {
    const {themeHandler} = useThemeContext();
    
  return (
    <button className={className} onClick={() =>themeHandler(className)}></button>
  )
}

export default PrimaryColor