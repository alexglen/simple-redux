export const createStore = (reducer, initialState) => {
  let state = reducer(initialState, { type: 'INIT' });
  const subscribers = [];

  return {
    getState() {
      return state;
    },
    subscribe(cb) {
      subscribers.push(cb);
    },
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((fn) => fn());
    },
  };
};
