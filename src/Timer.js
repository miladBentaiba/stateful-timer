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
            inOn: false,
            start: false
        };

        setInterval(
            () => {
              let time = parseInt(this.state.s)+parseInt(this.state.m*60)+parseInt(this.state.h*3600)-1
              this.setState({
                h: Math.floor(time/3600),
                m: Math.floor((time%3600)/60),
                s: Math.floor(time%60)
              })
            },
            1000
        )
        console.log(this.state)
    }
    
    // startTimer() {
    //     this.setState({
    //         isOn: true,
    //         time: this.state.time,
    //         start: true
    //     })
    //     this.timer = setInterval(() => this.setState({
    //         time: this.state.time -1000,
    //     }), 1);
    // }

    // stopTimer() {
    //     this.setState({isOn: false})
    //     clearInterval(this.timer)
    // }

    // resetTimer() {
    //     this.setState({time: 0, isOn: false})
    // }
    setInterval

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
                {/* start/stop */}
                <Button id="start" color="primary frst">Start</Button>{' '}
                {/* reset */}
                <Button id="stop" color="primary scnd">Reset</Button>{' '}
               {/* { let start = (this.state.time == 0) ? <button onClick={this.startTimer}>start</button> : null
                let stop = (this.state.time == 0 || !this.state.isOn) ? null : <button onClick={this.stopTimer}>stop</button>
                let resume = (this.state.time == 0 || this.state.isOn) ? null : <button onClick={this.startTimer}>resume</button>
                let reset = (this.state.time == 0 || this.state.isOn) ? null : <button onClick={this.resetTimer}>reset</button>} */}
            </div>
          </div>
        );
      }
}

