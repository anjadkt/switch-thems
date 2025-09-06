import { useState } from 'react'
import './App.css'

function App() {

  const [mode,setMode] = useState(false);

  function changeMode(){
    if(mode){
      document.body.style.backgroundColor = "#242424";
      setMode(false);
    }else{
      document.body.style.backgroundColor = " rgb(237, 234, 224)";
      setMode(true);
    }
  }
 
  return (
    <>
     <button className={mode?"light-btn":"dark-btn"} onClick={changeMode}>Switch Theme</button>
    </>
  )
}

export default App
