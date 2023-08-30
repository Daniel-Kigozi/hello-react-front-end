import { configureStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const SET_GREETING = 'SET_GREETING';

export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  greeting,
});

const initialState = {
  greeting: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return { ...state, greeting: action.greeting };
    default:
      return state;
  }
};

const store = configureStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
