import { INCREMENT_COUNTER, INCREMENT_BY_VALUE } from '../constants';

export const increment = () => {
    return {
        type: INCREMENT_COUNTER
    }
};

export const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: {
            value
        }
    }
};
