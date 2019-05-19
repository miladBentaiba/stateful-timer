import React from 'react';
import './App.css';
import Timer from './Timer'

function App() {
  let time= 2999000
  return (
    <Timer time={time}/>
  );
}

export default App;