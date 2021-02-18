import React from 'react';
import './App.css';


let myInterval;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 300,
      session: 25,
      timer: 1500,
      play: false,
      clicked: 0,
      mode: 'Session',
    }
    this.clockify = this.clockify.bind(this);
    this.start = this.start.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
  }
  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  }

  start() {
    if (this.state.timer > 0) {
      if (this.state.play === false) {
        this.setState({
          timer: this.state.timer,
        })
      } else {
        this.setState({
          timer: this.state.timer - 1,
        })
      }
    } else {
      const audio = document.getElementById('beep');
      audio.play();
      if (this.state.mode === 'Session') {
        this.setState({
          timer: this.state.break,
          mode: 'Break',
        })
      } else {
        if (this.state.timer <= 0)
        this.setState({
          timer: this.state.session * 60,
          mode: 'Session',
        })
      }
    }
  }

  play() {
    clearInterval(myInterval);
    if (this.state.clicked % 2 === 0) {
      this.setState({
        play: true,
      })
      myInterval = setInterval(this.start, 1000);
    } else {
      this.setState({
        play: false
      })
    }
    this.setState({
      clicked: this.state.clicked + 1,
    })
  }

  reset() {
    this.setState({
      break: 300,
      session: 25,
      timer: 1500,
      play: false,
      clicked: 0,
      mode: 'Session',
    })
  }

  incrementSession() {
    if (this.state.session < 60) {
      this.setState({
        timer: this.state.timer + 60,
        session: this.state.session + 1,
      })
    }
  }

  decrementSession() {
    if (this.state.session > 1) {
      this.setState({
        timer: this.state.timer - 60,
        session: this.state.session - 1,
      })
    }
  }

  incrementBreak() {
    if (this.state.break < 60 * 60) {
      this.setState({
        break: this.state.break + 60,
      })
    }
  }

  decrementBreak() {
    if (this.state.break > 60) {
      this.setState({
        break: this.state.break - 60,
      })
    }
  }

  render() {
    return(
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="settings">
          <div className="arrows">
            <h3 id="break-label">Break Length</h3>
            <span id="break-decrement" onClick={this.decrementBreak}><i class="fas fa-arrow-down"></i></span>
            <span id="break-length">{this.state.break / 60}</span>
            <span id="break-increment" onClick={this.incrementBreak}><i class="fas fa-arrow-up"></i></span>
          </div>
          <div className="arrows">
            <h3 id="session-label">Session Length</h3>
            <span id="session-decrement" onClick={this.decrementSession}><i class="fas fa-arrow-down"></i></span>
            <span id="session-length">{this.state.session}</span>
            <span id="session-increment" onClick={this.incrementSession}><i class="fas fa-arrow-up"></i></span>
          </div>
        </div>
        <div className="session-time">
          <h2 id="timer-label">{this.state.mode}</h2>
          <span id="time-left">{this.clockify()}</span>
          <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
        <div className="player">
          <span id="start_stop" onClick={this.play}><i class="fas fa-play"></i><i class="fas fa-pause"></i></span>
          <span id="reset" onClick={this.reset}><i class="fas fa-sync-alt"></i></span>
        </div>
      </div>
    )
  }
}

export default App;
