import React, { Component } from 'react';

export default class AddArticleForm extends Component {

  handleSubmit = () => {
    const email = this.emailInput.value;
    const id = this.idInput.value;
    const name = this.nameInput.value;
    this.props.addArticle(email, id, name);
  };

  render(){
    const { handleSubmit } = this;

    return(
      <div className="add-article__form">
        <input type="text" ref={(input) => { this.emailInput = input; }} placeholder="email"/>
        <input type="text" ref={(input) => { this.idInput = input; }} placeholder="id"/>
        <input type="text" ref={(input) => { this.nameInput = input; }} placeholder="name"/>
        <button onClick={handleSubmit} type="button">Add article</button>
      </div>
    );
  };
}
