const userInitialState = {
  name: 'Adan',
  age: 25,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.payload,
      });
    case 'SET_AGE':
      return Object.assign({}, state, {
        age: action.payload,
      });
    default:
      return state;
  }
};

export default userReducer;
