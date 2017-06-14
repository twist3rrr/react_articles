import React, {Component} from 'react';
import Articles from './Articles';
import FilterForm from './FilterForm';
import axios from 'axios';

class App extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
      this.setState({articles: response.data});
    }).catch((error) => {
      console.log(error);
    });

  }

  deleteArticle(id) {
    let articles = [];

    this.state.articles.forEach((article) => {
      if (id !== article.id) {
        articles.push(article);
      }
    });

    this.setState({articles});
  }

  render() {

    return (
      <div>
        <FilterForm/>
        <Articles articles={this.state.articles} deleteArticle={this.deleteArticle.bind(this)}/>
      </div>
    );
  };

}

export default App;
