import React from 'react';
import './App.css';

let time = 1500;
let minutes = Math.floor(time/60);
let seconds = 0

if (seconds < 10) {
  seconds = '0' + seconds;
}

if (minutes < 10) {
  minutes = '0' + minutes;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: '5',
      session: '25',
      time: time,
      minutes: minutes,
      seconds: seconds,
    }
  }
  render() {
    return(
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="settings">
          <div className="arrows">
            <h3 id="break-label">Break Length</h3>
            <span id="break-decrement"><i class="fas fa-arrow-down"></i></span>
            <span id="break-length">{this.state.break}</span>
            <span id="break-increment"><i class="fas fa-arrow-up"></i></span>
          </div>
          <div className="arrows">
            <h3 id="session-label">Session Length</h3>
            <span id="session-decrement"><i class="fas fa-arrow-down"></i></span>
            <span id="session-length">{this.state.session}</span>
            <span id="session-increment"><i class="fas fa-arrow-up"></i></span>
          </div>
        </div>
        <div className="session-time">
          <h2 id="timer-label">Session</h2>
          <span id="time-left">{this.state.minutes}:{this.state.seconds}</span>
        </div>
        <div className="player">
          <span id="start_stop"><i class="fas fa-play"></i><i class="fas fa-pause"></i></span>
          <span id="reset"><i class="fas fa-sync-alt"></i></span>
        </div>
      </div>
    )
  }
}

export default App;
