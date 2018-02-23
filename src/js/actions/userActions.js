export const setName = name => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'SET_NAME',
        payload: name,
      });
    }, 2000);
  };
};

export const setAge = age => ({
  type: 'SET_AGE',
  payload: age,
});
