import React, {Component} from 'react';
import ArticlesPage from './ArticlesPage';
import defaultArticles from '../api/articles';
import { initArticles } from '../AC/articles';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/comments')
    // .then((response) => {
    //   this.setState({ articles: response.data });
    // }).catch((error) => {
    //   console.log(error);
    // });

    const { initArticles } = this.props;
    initArticles(defaultArticles);

  }

  addArticle = (email, id, name) => {
    const newArticle = {
      email,
      id,
      name
    };

    let newArticleArray = this.state.articles;
    newArticleArray.push(newArticle);

    this.setState({
      articles: newArticleArray
    });

  };

  render() {
    console.log('render App');
    const { articles } = this.props;
    console.log(articles);

    const content = articles.length
    ? <ArticlesPage deleteArticle={this.deleteArticle} addArticle={this.addArticle} articles={articles}/>
    : null;

    return content;
  };

}

export default connect(
  (state) => {
    const { articles } = state;
    return { articles };
  }, {
    initArticles
  }
)(App);
