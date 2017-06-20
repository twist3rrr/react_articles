import React, {Component} from 'react';

class Article extends Component {
  state = {
    isOpen: false
  }

  expandArticleBody = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    const articleBody = isOpen
      ? <p>{article.body}</p>
      : null;

    return (
      <li key={article.id}>
        <p onClick={this.expandArticleBody}>{article.name}</p>
        <p>{article.id}</p>
        <p>{article.email}</p>
        {articleBody}
        <button type="button" onClick={() => this.props.deleteArticle(article.id)}>X</button>
        <hr/>
      </li>
    );

  }
}

export default Article;
