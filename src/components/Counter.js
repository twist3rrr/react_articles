import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment} from '../AC/counter';

class Counter extends Component {
    state = {
        incrementByValue: 0
    };

    handleInputChange = (e) => {
        this.setState({
            incrementByValue: e.target.value
        });
    };

    render() {
        const {plusOne, counter} = this.props;
        return (
            <div>
                <h2>{counter}</h2>
                <button onClick={plusOne}>Increment</button>
                <hr/>
                <input type="number" value={this.state.incrementByValue} onChange={this.handleInputChange}/>
                <button>Increment By Value</button>
            </div>
        )
    }
}

export default connect((state) => {
    const {counter} = state;
    return {counter};
}, {
    plusOne: increment
})(Counter);
