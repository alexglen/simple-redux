import { reducer } from './reducer';
import { createStore } from './createStore';

const count = document.querySelector('p');

const incButton = document.querySelector('.inc');
const decButton = document.querySelector('.dec');
const rndButton = document.querySelector('.rnd');

const initialState = 0;

const store = createStore(reducer, initialState);

const { dispatch, subscribe, getState } = store;

incButton.addEventListener('click', function () {
  dispatch({ type: 'INC' });
});

decButton.addEventListener('click', function () {
  dispatch({ type: 'DEC' });
});

rndButton.addEventListener('click', function () {
  dispatch({ type: 'RND', payload: Math.floor(Math.random() * 10) });
});

subscribe(() => (count.textContent = getState()));
