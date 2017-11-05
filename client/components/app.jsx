import React from 'react';
import TodoListContainer from './todo_list_container';

const App = () => (
  <div className="app">
    <h1>CheckIt App</h1>
    <h3>Keep track of your Todo list!</h3>
    <TodoListContainer />
  </div>
);

export default App;
