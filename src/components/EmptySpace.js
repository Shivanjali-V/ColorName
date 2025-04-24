import React from 'react'
import 'C:/Users/shiva/OneDrive/Desktop/first_react_app/project/my-app/src/componentsCSS/EmptySpace.css'

const EmptySpace = ({color, hexValue, isDarkText}) => {
  return (
    <section>
      <div 
        className='emptyspace'
        style={{
          backgroundColor : color,
          color : isDarkText ? "#000" : "#FFF"
        }}
      >
        <p className='text'>{color ? color : "Empty Value"}</p>
        <p className='text'>{hexValue ? hexValue : null}</p>
      </div>
    </section>
  )
}

export default EmptySpace