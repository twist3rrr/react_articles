import { CHANGE_FILTER_VALUE } from '../constants';

export const changeFilterValue = (value) => {
  return {
    type: CHANGE_FILTER_VALUE,
    payload: {
      value
    }
  }
}
