import React from 'react';

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    console.warn(this.state.currentTime);
    let hours = this.state.currentTime.getHours();
    let minutes = this.state.currentTime.getMinutes();
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    return (
      <div>
        <h1>{hours}:{minutes}</h1>
        <h1>{this.state.currentTime.toDateString()}</h1>
      </div>
    );
  }
}

export default CurrentTime;
