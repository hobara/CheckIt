// import React from 'react';
// import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';
//
// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore;
//   window.store = store;
//   ReactDOM.render(
//     <Root store={store} />,
//     document.getElementById('container')
//   );
// });

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('content')
);
