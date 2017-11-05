import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todo_actions';

class TodoDetail extends React.Component {
  render() {
    const { todo, removeTodo } = this.props;
    return(
      <div>
        <p>{todo.body}</p>
        <button
          className='todo-body'
          onClick={removeTodo}
          >Delete Todo</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, {todo}) => ({
  removeTodo: () => dispatch(removeTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetail);
