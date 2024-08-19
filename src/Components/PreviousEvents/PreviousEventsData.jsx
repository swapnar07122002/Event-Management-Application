import React, { Component } from 'react';
import './PreviousEvents.css';

class PreviousEventsData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className='events-text'>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className='events-image'>
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    )
  }
}

export default PreviousEventsData;