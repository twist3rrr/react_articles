import React from 'react';
import Articles from './Articles';
import FilterForm from './FilterForm';
import AddArticleForm from './AddArticleForm';
import Counter from './Counter';

export default function ArticlesPage(props) {
  const { articles, deleteArticle, addArticle, changeFilterValue } = props;

  return (
    <div>
      <Counter/>
      <hr/>
      <p>FILTER</p>
      <FilterForm changeFilterValue={changeFilterValue}/>
      <hr/>
      <p>ADD NEW</p>
      <AddArticleForm addArticle={addArticle}/>
      <hr/>
      <Articles articles={articles} deleteArticle={deleteArticle}/>
    </div>
  );
};
