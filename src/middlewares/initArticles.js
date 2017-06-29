import { INIT_ARTICLES, INIT_ARTICLES_SUCCESS, INIT_ARTICLES_FAILURE } from '../constants';
import axios from 'axios';

export default store => next => action => {
  const { type } = action;

  if (type !== INIT_ARTICLES) return next(action);

  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then((response) => {
    console.log(response.data);
    next({
      ...action,
      type: INIT_ARTICLES_SUCCESS,
      payload: {
        articles: response.data
      }
    });
  })
  .catch(() => {
      next({
        ...action,
        type: INIT_ARTICLES_FAILURE
      });
  });
}
