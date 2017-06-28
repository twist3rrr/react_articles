import React, { Component } from 'react';

class FilterForm extends Component {
  handleEmailChange = (e) => {
    const { changeFilterValue } = this.props;
    changeFilterValue(e.target.value);
  }

  render() {
    return (
      <div className="filter-bar">
        <input type="text" placeholder="email" onChange={this.handleEmailChange}/>
      </div>
    );
  };
}

export default FilterForm;
