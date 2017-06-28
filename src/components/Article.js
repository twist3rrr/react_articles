import React, {Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Article extends Component {
  state = {
    isOpen: false
  };

  expandArticleBody = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { article, deleteArticle } = this.props;
    const { id, name, email, body } = article;
    const { isOpen } = this.state;

    const articleBody = isOpen
      ? <p>{body}</p>
      : null;

    return (
      <li key={id}>
        <p onClick={this.expandArticleBody}>{name}</p>
        <p>{id}</p>
        <p>{email}</p>

        <CSSTransitionGroup transitionName="example--animation" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {articleBody}
        </CSSTransitionGroup>

        <button type="button" onClick={() => {deleteArticle(article.id)}}>X</button>
        <hr/>
      </li>
    );
  };
};

export default Article;
