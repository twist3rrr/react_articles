export default (state = 0, action) => {
  const { type } = action;
  if(type === 'INCREMENT_COUNTER') {
    return state + 1;
  } else {
    return state;
  }
}
