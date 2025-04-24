import { useState } from 'react';
import './App.css';
import EmptySpace from './components/EmptySpace';
import InputArea from './components/InputArea';

function App() {

  const [color,setColor] = useState('');
  const [hexValue,setHexValue] = useState('');
  const [isDarkText,setIsDarkText] = useState('true');


  return (
    <div>
      <EmptySpace 
        color = {color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputArea
        color = {color}
        setColor = {setColor}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
