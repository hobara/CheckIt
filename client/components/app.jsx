import React from 'react';
import TodoListContainer from './todo_list_container';
import CurrentTime from './time';

const App = () => (
  <div className='app'>
    <h1>MomentList App</h1>
    <CurrentTime />
    <h3>Type your Todos</h3>
    <TodoListContainer />
  </div>
);

export default App;
