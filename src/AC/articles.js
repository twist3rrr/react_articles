import { INIT_ARTICLES, DELETE_ARTICLE, ADD_ARTICLE } from '../constants';

export const initArticles = (articles) => {
  return {
    type: INIT_ARTICLES,
    payload: {
      articles
    }
  };
};

export const deleteArticle = (id) => {
  return {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };
};

export const addArticle = (email, id, name) => {
  return {
    type: ADD_ARTICLE,
    payload: {
      email,
      id,
      name
    }
  };
};
