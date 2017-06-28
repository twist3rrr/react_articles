import { CHANGE_FILTER_VALUE } from '../constants';

export default(state = '', action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CHANGE_FILTER_VALUE:
      const { value } = payload;
      return value;
    default:
      return state;
  }
}
