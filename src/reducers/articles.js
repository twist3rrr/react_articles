import  { INIT_ARTICLES } from '../constants';

export default(state = [], action) => {
  const { type, payload } = action;

  switch(type) {
    case INIT_ARTICLES:
      const { articles } = payload;
      return Array.prototype.concat(state, articles);
    default:
      return state;
  }
}
