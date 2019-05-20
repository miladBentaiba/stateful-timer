import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

export default class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            h: Math.floor(props.time/3600000),
            m: Math.floor((props.time/1000%3600)/60),
            s: Math.floor((props.time/1000)%60),
            start: false
        };
        this.resetTimer = this.resetTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        this.timer = setInterval(
            () => {
              let time = parseInt(this.state.s)+parseInt(this.state.m*60)+parseInt(this.state.h*3600)-1
              this.setState({
                h: Math.floor(time/3600),
                m: Math.floor((time%3600)/60),
                s: Math.floor(time%60),
              })
            },
            1000
        )
        this.setState({
            start: true
        })
    }

    stopTimer() {
        this.setState({ start: false})
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({
            h: Math.floor(this.props.time/3600000),
            m: Math.floor((this.props.time/1000%3600)/60),
            s: Math.floor((this.props.time/1000)%60),
            start: false
        })
        clearInterval(this.timer)
    }
    render() {
        console.log("state", this.state)
        return (
          <div className="parent">
            <div className="timer">
              <p className="time h">{this.state.h.toString().length>=2?this.state.h:("00" + this.state.h).slice(-2)}</p>
              <p className="time">:</p>
              <p className="time m">{("00" + this.state.m).slice(-2)}</p>
              <p className="time">:</p>
              <p className="time s">{("00" + this.state.s).slice(-2)}</p>
            </div>
            <div className="labels">
              <p className="label">Hour</p>
              <p className="label"></p>
              <p className="label">Minute</p>
              <p className="label"></p>
              <p className="label">Second</p>
            </div>
            <div className="buttons">
                <Button id="start" color="primary" className="frst" onClick={this.state.start?this.stopTimer:this.startTimer}>{this.state.start?'Resume':'Start'}</Button>{' '}
                <Button id="stop" color="primary" className="scnd" onClick={this.resetTimer}>Reset</Button>{' '}
            </div>
          </div>
        );
      }
}

