const mathInitialState = {
  result: 1,
  lastValues: [],
};

const mathReducer = (state = mathInitialState, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        result: state.result + action.payload,
        lastValues: state.lastValues.concat(action.payload),
      });
    case 'SUBSTRACT':
      return Object.assign({}, state, {
        result: state.result - action.payload,
        lastValues: state.lastValues.concat(action.payload),
      });
    default:
      return state;
  }
};

export default mathReducer;
