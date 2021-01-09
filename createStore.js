export const createStore = (fn, initialState) => {
  let currentReducer = fn;
  let currentState = initialState;

  let listener = () => {};

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      listener();
      return action;
    },
    subscribe(cb) {
      listener = cb;
    },
  };
};
