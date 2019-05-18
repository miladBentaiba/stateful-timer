import React from 'react';
import './App.css';
import Timer from './Timer'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

function App() {
  let time= 2999999
  return (
    <div className="parent">
      <Timer time={time}/>
      <div className="buttons">
        <Button color="primary frst">Start</Button>{' '}
        <Button color="primary scnd">Reset</Button>{' '}
      </div>
    </div>
  );
}

export default App;