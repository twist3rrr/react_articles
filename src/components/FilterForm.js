import React, {Component} from 'react';

class FilterForm extends Component {

  state = {
    id: '',
    email: ''
  };

  handleIdChange(e){
    console.log(e.target.value);
    this.setState({
      id: e.target.value
    });
    console.log(this.state);
  }

  handleEmailChange(e){
    console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
    console.log(this.state);
  }

  render() {

    return (
      <div className="filter-bar">
        <input type="text" placeholder="id" onChange={this.handleIdChange.bind(this)}/>
        <input type="text" placeholder="email" onChange={this.handleEmailChange.bind(this)}/>
      </div>
    );
  };

}

export default FilterForm;
