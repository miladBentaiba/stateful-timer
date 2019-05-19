import React from 'react';
import './App.css';
import Timer from './Timer'

function App() {
  let time= 2000000
  return (
    <Timer time={time}/>
  );
}

export default App;