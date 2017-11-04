import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState);
  window.store = store;
  return store;
};
export default configureStore;

// import { createStore } from 'redux';
// import RootReducer from '../reducers/root_reducer';
//
// const configureStore = (preloadedState = {}) => {
//   const store = createStore(RootReducer);
//   window.store = store;
//   store.subscribe(() => {
//     localStorage.state = JSON.stringify(store.getState());
//   });
//   return store;
// };
//
// export default configureStore;
