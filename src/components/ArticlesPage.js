import React, {Component} from 'react';
import Articles from './Articles';
import FilterForm from './FilterForm';
import AddArticleForm from './AddArticleForm';
import Counter from './Counter';

class ArticlesPage extends Component {
  state = {
    filteredArticles: [],
    filteredValue: ''
  }

  componentDidMount() {
    const { articles } = this.props;
    this.setState({
      filteredArticles: articles
    });
  }

  componentWillReceiveProps(nextProps){
    const filteredArticles = nextProps.articles.filter((article) => {
      return article.email.toLowerCase().indexOf(this.state.filteredValue.toLowerCase()) !== -1;
    });

    this.setState({
      filteredArticles
    });
  }

  filterArticles = (value) => {
    const { articles } = this.props

    const filteredArticles = articles.filter((article) => {
      return article.email.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    this.setState({
      filteredArticles,
      filteredValue: value
    });
  }

  render() {
    console.log('renderArticlePage');
    const { filteredArticles } = this.state;
    const { deleteArticle, addArticle } = this.props;

    return (
      <div>
        <Counter/>
        <hr />
        <p>FILTER</p>
        <FilterForm filterArticles={this.filterArticles}/>
        <hr />
        <p>ADD NEW</p>
        <AddArticleForm addArticle={addArticle}/>
        <hr />
        <Articles articles={filteredArticles} deleteArticle={deleteArticle}/>
      </div>
    );
  };

}

export default ArticlesPage;
