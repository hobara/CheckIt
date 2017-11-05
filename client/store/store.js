import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState);
  window.store = store;
  return store;
};
export default configureStore;
