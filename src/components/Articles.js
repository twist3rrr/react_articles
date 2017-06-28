import React from 'react';
import Article from './Article';

function Articles(props) {
  const {articles, deleteArticle} = props;

  const articlesBlocks = articles.map((article) => {
    return (<Article key={article.id} article={article} deleteArticle={deleteArticle}/>);
  });

  return (
    <ul>
      {articlesBlocks}
    </ul>
  );
}

export default Articles;
