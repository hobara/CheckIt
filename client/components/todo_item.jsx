import React from 'react';
import merge from 'lodash/merge';
import TodoDetailContainer from './todo_detail_container';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail:false
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault;
    const toggleTodo = merge({}, this.props.todo, {done: !this.props.todo.done});
    this.props.receiveTodo(toggleTodo);
  }

  toggleDetail(e) {
    e.preventDefault;
    this.setState({detail: !this.state.detail});
  }

  render() {
    const { todo, updateTodo } = this.props;
    const { title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailContainer todo={todo}/>;
    }
    return(
      <li className='todo-item'>
        <div className='item-title'>
          <a onClick={this.toggleDetail}>{title}</a>
          <button
            className={ done ? 'done' : 'undone' }
            onClick={this.toggleTodo}
            >
            { done ? 'done' : 'undone' }
          </button>
        </div>
        {detail}
      </li>
    );
  }
}

export default TodoItem;
