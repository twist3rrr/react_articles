export const increment = () => {
    return {
        type: 'INCREMENT_COUNTER'
    }
};

export default incrementByValue = (value) => {
    return {
        type: 'INCREMENT_BY_VALUE',
        payload: {
            value
        }
    }
};
