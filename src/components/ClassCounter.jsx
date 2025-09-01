import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h2 className="component-heading">Class Component</h2>
        <div className="counter-display">
          <span className="counter-value">{this.state.count}</span>
        </div>
        <div className="counter-buttons">
          <button
            className="counter-btn decrement-btn"
            onClick={this.decrement}
            disabled={this.state.count === 0}
          >
            -
          </button>
          <button
            className="counter-btn increment-btn"
            onClick={this.increment}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
