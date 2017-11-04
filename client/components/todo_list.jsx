import React from 'react';
import TodoItem from './todo_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoItem
        key={`todo-item${todo.id}`}
        todo={todo}
        receiveTodo={receiveTodo}
        />
    ));
    return(
      <div>
        <ul className='todo-lists'>{todoItems}</ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
