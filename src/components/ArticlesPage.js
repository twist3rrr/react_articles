import React, {Component} from 'react';
import Articles from './Articles';
import FilterForm from './FilterForm';

class ArticlesPage extends Component {
  state = {
    filteredArticles: []
  }

  componentDidMount() {
    const { articles } = this.props;
    this.setState({
      filteredArticles: articles
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      filteredArticles: nextProps.articles
    });
  }

  filterArticles = (value) => {
    const { articles } = this.props

    const filteredArticles = articles.filter((article) => {
      return article.email.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })

    this.setState({
      filteredArticles
    });
  }

  render() {
    console.log('renderArticlePage');
    const { filteredArticles } = this.state;
    const { deleteArticle } = this.props;

    return (
      <div>
        <FilterForm filterArticles={this.filterArticles}/>
        <Articles articles={filteredArticles} deleteArticle={deleteArticle}/>
      </div>
    );
  };

}

export default ArticlesPage;
