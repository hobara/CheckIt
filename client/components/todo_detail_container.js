import { connect } from 'react-redux';
import { removeTodo, receiveTodo, receiveTodos, editTodo } from '../actions/todo_actions';
import { allTodos } from '../reducers/selectors';
import TodoDetail from './todo_detail';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = (dispatch, {todo}) => ({
  removeTodo: () => dispatch(removeTodo(todo)),
  editTodo: todo1 => dispatch(receiveTodo(todo1))
  // receiveTodo: todo1 => dispatch(receiveTodo(todo1)),
  // receiveTodos: () => dispatch(receiveTodos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail);
