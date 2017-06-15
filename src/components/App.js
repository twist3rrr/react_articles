import React, {Component} from 'react';
import axios from 'axios';
import ArticlesPage from './ArticlesPage';

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      this.setState({ articles: response.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  deleteArticle = (id) => {
    const { articles } = this.state;

    const newArticles = articles.filter((article) => {
      return id !== article.id;
    });

    this.setState({ articles: newArticles });
  }

  render() {
    console.log('render App');
    const { articles } = this.state;

    console.log(articles);

    const content = articles.length
    ? <ArticlesPage deleteArticle={this.deleteArticle} articles={articles}/>
    : null;

    return content;
  };

}

export default App;
