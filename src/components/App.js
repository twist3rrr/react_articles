import React, { Component } from 'react';
import ArticlesPage from './ArticlesPage';
import defaultArticles from '../api/articles';
import { initArticles, deleteArticle, addArticle } from '../AC/articles';
import { changeFilterValue } from '../AC/filter';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    const { initArticles } = this.props;
    initArticles(defaultArticles);
  };

  render() {
    const { resultedArticles, deleteArticle, addArticle, changeFilterValue } = this.props;
    return <ArticlesPage deleteArticle={deleteArticle} addArticle={addArticle} articles={resultedArticles} changeFilterValue={changeFilterValue}/>;
  };

};

export default connect(
  (state) => {
    const { articles, filtering } = state;

    const resultedArticles =  articles.filter((article) => {
        return article.email.toLowerCase().indexOf(filtering.toLowerCase()) !== -1;
    });

    return { resultedArticles };
  }, {
    initArticles,
    deleteArticle,
    addArticle,
    changeFilterValue
  }
)(App);
