import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  startTimer() {
    this.handlerOfTimer = setInterval(() => this.timerAction(), 1000);
  }

  timerAction() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.stopTimer.bind(this);
    }
  }

  stopTimer() {
    clearInterval(this.handlerOfTimer);
    this.setState({ counter: 0 });
  }

  handlerSubmit = e => {
    e.preventDefault();
  };

  handlerChange = e => {
    this.setState({ counter: e.target.value });
  };

  render() {
    return (
      <div className="Timer">
        <form onSubmit={this.handlerSubmit}>
          <input
            type="number"
            value={this.state.counter}
            onChange={this.handlerChange}
          />
          <br />
          <button type="submit" onClick={this.startTimer.bind(this)}>
            Start
          </button>
          <button onClick={() => clearInterval(this.handlerOfTimer)}>
            Pause
          </button>
          <button type="reset" onClick={this.stopTimer.bind(this)}>
            Stop
          </button>
        </form>
      </div>
    );
  }
}
