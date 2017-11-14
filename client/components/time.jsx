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
    let hours = this.state.currentTime.getHours();
    let minutes = this.state.currentTime.getMinutes();
    let seconds = this.state.currentTime.getSeconds();
    let greeting;
    let user = 'Stranger';
    if (hours >= 4 && hours < 12) {
      greeting = 'Good Morning, ' + `${user}`;
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Good Afternoon, ' + `${user}`;
    } else if (hours >= 17 && hours < 24) {
      greeting = 'Good Evening, ' + `${user}`;
    } else {
      greeting = 'How are you, ' + `${user}?`;
    }
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return (
      <div>
        <h1>{greeting}</h1>
        <h1>{hours}:{minutes}:{seconds}</h1>
        <h1>{this.state.currentTime.toDateString()}</h1>
      </div>
    );
  }
}

export default CurrentTime;
