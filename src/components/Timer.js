import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.handlerOfTimer = setInterval(() => this.timerAction(), 1000);
  }

  timerAction() {
    this.setState({ counter: this.counter - 1 });
  }
  componentWillUnmount() {
    clearInterval(this.handlerOfTimer);
    this.setState({ counter: 0});
  }

  handlerSubmit = (e) => {
    e.preventDefault();
  }

  handlerChange = (e) => {
    this.setState({counter: e.target.value});
  }

  render() {
    return (
      <div className="Timer">
        <form onSubmit={this.handlerSubmit}>
          <input
            type="number"
            value={this.counter}
            onChange={this.handlerChange}
          />
          <br />
          <button type="submit" onClick={this.componentDidMount}>Start</button>
          <button onClick={() => clearInterval(this.handlerOfTimer)}>Pause</button>
          <button type="reset" onClick={this.componentWillUnmount}>Stop</button>
        </form>
      </div>
    );
  }
}
