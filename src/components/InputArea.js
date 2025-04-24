import React from 'react';
import colornames from 'colornames';
import 'C:/Users/shiva/OneDrive/Desktop/first_react_app/project/my-app/src/componentsCSS/InputArea.css';

const InputArea = ({color, setColor,setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <div onSubmit={(e) => e.preventDefault()}>
      <input className='input'
        type='text'
        autoFocus
        placeholder='Add Color Name'
        required
        value={color}
        onChange={(e) => { 
          setColor(e.target.value);
          setHexValue(colornames(e.target.value));
        }}
      />
      <span><button 
        type='button'
        className='input button'
        onClick={() => setIsDarkText(!isDarkText)}
      >
      Toggle Text Color</button></span>
    </div>
  )
}

export default InputArea