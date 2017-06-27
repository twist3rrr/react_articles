import { INCREMENT_COUNTER, INCREMENT_BY_VALUE } from '../constants';

export default(state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case INCREMENT_BY_VALUE:
      return state + +payload.value;
    default:
      return state;
  }
}
