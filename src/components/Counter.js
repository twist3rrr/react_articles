import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, incrementByValue } from '../AC/counter';

class Counter extends Component {
  state = {
    inputValue: 0
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const { plusOne, counter, plusBy } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={plusOne}>Increment</button>
        <hr/>
        <input type="number" value={inputValue} onChange={this.handleInputChange}/>
        <button onClick={() => plusBy(inputValue)}>Increment By Value</button>
      </div>
    );
  }
};

export default connect((state) => {
    const { counter } = state;
    return { counter };
}, {
    plusOne: increment,
    plusBy: incrementByValue
})(Counter);
