import React from 'react';

export default function Timer() {
  return (
    <div className="parent">
      <div className="timer">
        <p className="time h">00</p>
        <p className="time">:</p>
        <p className="time m">30</p>
        <p className="time">:</p>
        <p className="time s">00</p>
      </div>
      <div className="labels">
        <p className="label">Hour</p>
        <p className="label"></p>
        <p className="label">Minute</p>
        <p className="label"></p>
        <p className="label">Second</p>
      </div>
    </div>
  );
}