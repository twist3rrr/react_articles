import  { INIT_ARTICLES, DELETE_ARTICLE, ADD_ARTICLE } from '../constants';

export default(state = [], action) => {
  const { type, payload } = action;

  switch(type) {
    case INIT_ARTICLES:
      const { articles } = payload;
      return Array.prototype.concat(state, articles);
    case DELETE_ARTICLE:
      const { id } = payload;
      return state.filter((article) => article.id !== id);
    case ADD_ARTICLE:
      return Array.prototype.concat(payload, state);
    default:
      return state;
  }
};
